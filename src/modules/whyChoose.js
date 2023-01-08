import { content } from '../index'
import { WhyImg } from './images'

export function createWhyChoose () {
  const mainSect = document.createElement('main')
  mainSect.className = 'mainSect'

  const mediaSect = document.createElement('div')
  const why1Img = document.createElement('img')
  why1Img.src = WhyImg[0]
  const why2Img = document.createElement('img')
  why2Img.src = WhyImg[1]
  const why3Img = document.createElement('img')
  why3Img.src = WhyImg[2]
  const why4Img = document.createElement('img')
  why4Img.src = WhyImg[3]
  const why5Img = document.createElement('img')
  why5Img.src = WhyImg[4]
  const why6Img = document.createElement('img')
  why6Img.src = WhyImg[5]

  mediaSect.appendChild(why1Img)
  mediaSect.appendChild(why2Img)
  mediaSect.appendChild(why3Img)
  mediaSect.appendChild(why4Img)
  mediaSect.appendChild(why5Img)
  mediaSect.appendChild(why6Img)

  mainSect.appendChild(mediaSect)

  const textContent = document.createElement('div')
  textContent.className = 'texContent'
  const Title1 = document.createElement('h2')
  Title1.textContent = 'Why Choose us'
  const Title2 = document.createElement('h1')
  Title2.innerHTML = '<span>Ex</span>tra ordinary taste <br> And Experiance'

  const desc = document.createElement('p')
  desc.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'

  textContent.appendChild(Title1)
  textContent.appendChild(Title2)
  textContent.appendChild(desc)

  const mealCatSect = document.createElement('div')
  mealCatSect.className = 'mealCatSect'
  const fastFood = document.createElement('div')
  const Lunch = document.createElement('div')
  const Dinner = document.createElement('div')

  const FastFoodP = document.createElement('p')
  FastFoodP.className = 'FastFoodP'
  FastFoodP.textContent = 'Fast Food'
  const LunchP = document.createElement('p')
  LunchP.className = 'LunchP'
  LunchP.textContent = 'Lunch'
  const DinnerP = document.createElement('p')
  DinnerP.className = 'DinnerP'
  DinnerP.textContent = 'Dinner'
  const ExperianceSect = document.createElement('div')
  ExperianceSect.className = 'ExperianceSect'

  const ExperianceP = document.createElement('p')
  ExperianceP.textContent = '30+'
  const ExperianceP2 = document.createElement('p')
  ExperianceP2.innerHTML = '<span>years of</span> <br> Experianced'
  mealCatSect.appendChild(fastFood)
  mealCatSect.appendChild(Lunch)
  mealCatSect.appendChild(Dinner)

  textContent.appendChild(mealCatSect)
  textContent.appendChild(FastFoodP)
  textContent.appendChild(LunchP)
  textContent.appendChild(DinnerP)
  ExperianceSect.appendChild(ExperianceP)
  ExperianceSect.appendChild(ExperianceP2)
  textContent.appendChild(ExperianceSect)
  mainSect.appendChild(textContent)

  content.appendChild(mainSect)
}
