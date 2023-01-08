import { content } from '../index'

export function createRestrauActive () {
  const restrauActiveSect = document.createElement('div')
  restrauActiveSect.className = 'restrauActiveSect'

  const title1 = document.createElement('h2')
  title1.textContent = 'Restaurant Active Process'

  const para = document.createElement('p')
  para.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque<br> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,'

  const title2 = document.createElement('h1')
  title2.innerHTML =
    '<span>We</span> Document Every Food<br> Bean Process untile it is saved'

  const btnSect = document.createElement('div')
  btnSect.className = 'btnSect'
  const btn1 = document.createElement('button')
  btn1.className = 'btn1'
  btn1.textContent = 'Read More'
  const playVidSect = document.createElement('div')
  playVidSect.className = 'playVidSect'

  const btn2 = document.createElement('button')
  btn2.className = 'btn2'

  playVidSect.appendChild(btn2)

  const vidPara = document.createElement('p')
  vidPara.className = 'Vidplay'
  vidPara.textContent = 'Play Video'
  playVidSect.appendChild(vidPara)

  restrauActiveSect.appendChild(title1)
  restrauActiveSect.appendChild(title2)
  restrauActiveSect.appendChild(para)

  btnSect.appendChild(btn1)
  btnSect.appendChild(btn2)
  btnSect.appendChild(playVidSect)

  restrauActiveSect.appendChild(btnSect)
  content.appendChild(restrauActiveSect)
}
