from django.urls import path
from .views import index, DaysList, DaysDetail, results, set_water


urlpatterns = [
    path('', index, name='index'),
    path('days/', DaysList.as_view(), name='days'),
    path('days/<int:pk>/', DaysDetail.as_view(), name='days_detail'),
    path('results/', results, name='results'),
    path('set_water/', set_water, name='set_water')
]