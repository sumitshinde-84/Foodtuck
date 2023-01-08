import { content } from '../index'
import { createPageHeader } from './pageHeader'
export function createContactPage () {
  createPageHeader('Contact', 'Get In Touch')

  const body = document.querySelector('body')
  body.removeAttribute('class')
  body.className = 'bodyPageForContact'
  const footer = document.querySelector('footer')
  footer.removeAttribute('class')
  footer.className = 'footerContact'
  const contactBody = document.querySelector('.MenuBody')
  contactBody.removeAttribute('class')
  contactBody.className = 'ContactBody'

  const contactSect = document.createElement('div')
  contactSect.className = 'contactSect'

  // attribute havent added like value ,  post get
  console.log(contactBody)
  const form = document.createElement('form')
  const p1 = document.createElement('p')
  p1.className = 'p1'
  const label1 = document.createElement('label')
  label1.textContent = 'What we can help with ?'
  const select = document.createElement('select')
  const defaultOpt = document.createElement('option')
  const option = document.createElement('option')
  const option2 = document.createElement('option')

  defaultOpt.textContent = ''
  option.textContent = 'Delivery'
  option2.textContent = 'For Refund Request'
  select.appendChild(defaultOpt)
  select.appendChild(option)
  select.appendChild(option2)

  p1.appendChild(label1)
  p1.appendChild(select)

  const p2 = document.createElement('p')
  p2.className = 'p2'

  const label2 = document.createElement('label')
  label2.textContent = 'Enter your name'
  const Name = document.createElement('input')
  Name.placeholder = 'Example : Jhony Depp'

  p2.appendChild(label2)
  p2.appendChild(Name)

  const p3 = document.createElement('p')
  p3.className = 'p3'

  const label3 = document.createElement('label')
  label3.textContent = 'Enter your email'
  const Email = document.createElement('input')
  Email.placeholder = 'Example : jhonyexapmple@gamil.com'

  p3.appendChild(label3)
  p3.appendChild(Email)

  const p4 = document.createElement('p')
  p4.className = 'p4'

  const label4 = document.createElement('label')
  label4.textContent = 'Enter your message below '
  const textArea = document.createElement('textarea')
  textArea.textContent = 'Type Your Message Hear...'

  const button = document.createElement('button')
  button.textContent = 'Submit'

  p4.appendChild(label4)
  p4.appendChild(textArea)

  form.appendChild(p1)
  form.appendChild(p2)
  form.appendChild(p3)
  form.appendChild(p4)
  form.appendChild(button)
  contactSect.appendChild(form)
  contactBody.appendChild(contactSect)
}
