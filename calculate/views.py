from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Days, Train, Meals, Dishes, DailyWater
from datetime import datetime
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponse
from django.views.decorators.csrf import csrf_exempt



# Create your views here.
def index(request):
    return render(request, 'calculate/index.html')

class DaysList(ListView):
    model = Days


    def get_context_data(self, **kwargs):
        context = super(DaysList, self).get_context_data(**kwargs) # get the default context data
        user = get_user_model().objects.get(id=self.request.user.id)
        if user.is_subscribed:
            days = user.date_subscribe
            days = datetime.now().date() - days
            days = days.days + 7
        else:
            days = 0
        context['allow_days'] = days
        return context

class DaysDetail(DetailView):
    model = Train

@login_required
def results(request):
    if request.POST:
        data = request.POST
        field = data.get('field')
        name = data.get('name')
        calories = data.get('calories')
        if field == 'breakfast':
            meal = Meals.objects.get_or_create(meal='breakfast', day=datetime.now(), user=request.user)[0]
            Dishes.objects.create(meals=meal, name=name, calories=calories)
        if field == 'lunch':
            meal = Meals.objects.get_or_create(meal='lunch', day=datetime.now(), user=request.user)[0]
            Dishes.objects.create(meals=meal, name=name, calories=calories)
        if field == 'dinner':
            meal = Meals.objects.get_or_create(meal='dinner', day=datetime.now(), user=request.user)[0]
            Dishes.objects.create(meals=meal, name=name, calories=calories)
        if field == 'snack':
            meal = Meals.objects.get_or_create(meal='snack', day=datetime.now(), user=request.user)[0]
            Dishes.objects.create(meals=meal, name=name, calories=calories)


    query = Meals.objects.filter(day=datetime.now(), user=request.user).prefetch_related('dishes')
    context = {}
    breakfast = query.filter(meal='breakfast').first()
    if breakfast:
        context['breakfast'] = breakfast
    dinner = query.filter(meal='dinner').first()
    if dinner:
        context['dinner'] = dinner
    lunch = query.filter(meal='lunch').first()
    if lunch:
        context['lunch'] = lunch
    snack = query.filter(meal='snack').first()
    if snack:
        context['snack'] = snack
    total = sum([sum([meal.calories for meal in meal.dishes.all()]) for meal in context.values()])
    water = DailyWater.objects.get_or_create(user=request.user, date=datetime.now())[0]
    context['water'] = water.volume * 0.25
    cups = water.volume
    context['water_list_fill'] = range(1, cups+1)
    context['water_list_emply'] = range(1, 11-cups)
    context['total'] = total
    context['today'] = datetime.now().date().strftime("%d/%m/%Y")
    return render(request, 'calculate/results.html', context=context)

@csrf_exempt
def set_water(request):
    water = DailyWater.objects.get_or_create(date=datetime.now(), user=request.user)[0]
    if water.volume < 10:
        water.volume += 1
        water.save()
        return HttpResponse(204)
    else:
        return HttpResponse(200)
