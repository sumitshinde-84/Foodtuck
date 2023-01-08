import { content } from '../index'
import { profileImg } from './images'

export function createTestimonial () {
  const testimonialSect = document.createElement('div')
  testimonialSect.className = 'Testimonial'
  const title1 = document.createElement('h2')
  title1.textContent = 'Testimonials'
  const title2 = document.createElement('h1')
  title2.textContent = 'What our client are saying'
  const testimonialCardSect = document.createElement('div')
  testimonialCardSect.className = 'testimonialCardSect'
  const testimonialCards = document.createElement('div')
  testimonialCards.className = 'testimonialCards'
  const profile = document.createElement('img')
  profile.className = 'profile'
  profile.src = profileImg[0]

  const grassCorner = document.createElement('img')
  grassCorner.className = 'grassCornerImg'
  grassCorner.src = profileImg[7]

  const reviwePara = document.createElement('p')
  reviwePara.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'

  const testimonialGreen = document.createElement('img')
  testimonialGreen.className = 'testimonialGreen'
  testimonialGreen.src = profileImg[1]
  const starSect = document.createElement('div')
  starSect.className = 'starSect'

  const star1 = document.createElement('img')
  star1.src = profileImg[2]

  const star2 = document.createElement('img')
  star2.src = profileImg[2]

  const star3 = document.createElement('img')
  star3.src = profileImg[2]

  const star4 = document.createElement('img')
  star4.src = profileImg[2]

  const star5 = document.createElement('img')
  star5.src = profileImg[2]
  const name = document.createElement('p')
  name.textContent = 'Alamin Hasan'

  const designation = document.createElement('p')
  designation.className = 'design'
  designation.textContent = 'Food Specialist'

  const sliderDotSect = document.createElement('div')
  sliderDotSect.className = 'SliderDot'

  const dot1 = document.createElement('div')
  const dot2 = document.createElement('div')
  const dot3 = document.createElement('div')
  const dot4 = document.createElement('div')

  sliderDotSect.appendChild(dot1)
  sliderDotSect.appendChild(dot2)
  sliderDotSect.appendChild(dot3)
  sliderDotSect.appendChild(dot4)

  starSect.appendChild(star1)
  starSect.appendChild(star2)
  starSect.appendChild(star3)
  starSect.appendChild(star4)

  testimonialSect.appendChild(title1)
  testimonialSect.appendChild(title2)
  testimonialCards.appendChild(profile)
  testimonialCardSect.appendChild(testimonialCards)
  testimonialCardSect.appendChild(sliderDotSect)
  testimonialCards.appendChild(reviwePara)
  testimonialCards.appendChild(starSect)
  testimonialCards.appendChild(name)
  testimonialCards.appendChild(designation)
  testimonialCardSect.appendChild(testimonialGreen)
  testimonialSect.appendChild(grassCorner)
  testimonialSect.appendChild(testimonialCardSect)
  content.appendChild(testimonialSect)

  setTimeout(animation, 3000)
  function animation () {
    profile.src = profileImg[0]
    name.textContent = 'Alamin Hasan'
    designation.textContent = 'Food Specialist'
    reviwePara.textContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
    dot1.style.opacity = '1'
    dot4.style.opacity = '0.4'
    setTimeout(slider1, 3000)

    function slider1 () {
      profile.src = profileImg[4]
      dot4.style.opacity = '0.4'
      name.textContent = 'Tom warner'
      designation.textContent = 'Customer'
      reviwePara.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non et ac dapibus sit eu velit in consequat.'
      dot1.style.opacity = '0.4'
      dot2.style.opacity = '1'
      starSect.removeChild(star4)

      setTimeout(slider2, 3000)
    }

    function slider2 () {
      profile.src = profileImg[5]
      name.textContent = 'Chris gell'
      designation.textContent = 'Customer'
      reviwePara.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam  elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
      dot2.style.opacity = '0.4'
      dot3.style.opacity = '1'
      starSect.appendChild(star4)
      starSect.appendChild(star5)
      setTimeout(slider3, 3000)
    }

    function slider3 () {
      profile.src = profileImg[6]
      name.textContent = 'Tokoya walker'
      designation.textContent = 'Customer'
      reviwePara.textContent =
        'volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
      dot3.style.opacity = '.4'
      dot4.style.opacity = '1'
      starSect.removeChild(star5)
      setTimeout(animation, 3000)
    }
  }
}
