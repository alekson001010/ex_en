const startWeight = parseInt(document.getElementById('before').innerHTML)
const progress = currentWeight - startWeight
const userGoal = document.getElementById('Usergoal').innerHTML
const img2 = document.getElementById('img2')
const img5 = document.getElementById('img5')
const img7 = document.getElementById('img7')
const img10 = document.getElementById('img10')
const success = document.getElementById('success')
const failure = document.getElementById('failure')

if (userGoal === 'increase') {
  if (progress >= 2) {
    img2.classList.add('active')
  }
  if (progress >= 5) {
    img5.classList.add('active')
  }
  if (progress >= 7) {
    img7.classList.add('active')
  }
  if (progress >= 10) {
    img10.classList.add('active')
  }
} else {
  if (progress <= -2) {
    console.log('active 2')
    img2.classList.add('active')
  }
  if (progress <= -5) {
    img5.classList.add('active')
  }
  if (progress <= -7) {
    img7.classList.add('active')
  }
  if (progress <= -10) {
    img10.classList.add('active')
  }
}

function successDisplay(msg) {
  let positiveProgress = progress
  if (positiveProgress < 0) {
    positiveProgress *= -1
  }
  msg.style.display = ''
  let currentResult = document.getElementById('currentResult')
  currentResult.innerHTML = positiveProgress + ' кг'
  success.style.display = ''
}

function failureDisplay(msg) {
  let positiveProgress = progress
  if (positiveProgress < 0) {
    positiveProgress *= -1
  }
  msg.style.display = ''
  let currentResult = document.getElementById('currentResult')
  currentResult.innerHTML = positiveProgress + ' кг'
  failure.style.display = ''
}
