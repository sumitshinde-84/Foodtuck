import { content, loadAllhomeComponents } from '../index'
import { headerImg } from './images'
import { createFooter } from './footer'
import { createMenuPage } from './menuPage'
import { createBlogPage } from './blogPage'
import { createHome } from './home'
import { createShop } from './shop'
import { createAboutPage } from './aboutPage'
import { createContactPage } from './Contact'
export function createPageHeader (option, titleForHeader) {
  content.style.background = 'transparent'
  const body = document.querySelector('body')
  body.removeAttribute('class')
  body.classList = 'bodyPage'

  function removeAllChildNodesFromDisplay () {
    while (content.firstChild) {
      content.removeChild(content.firstChild)
    }
  }

  removeAllChildNodesFromDisplay()
  const MenuBody = document.createElement('div')
  MenuBody.className = 'MenuBody'
  const header = document.createElement('div')
  header.className = 'headerForNav'

  const logo = document.createElement('img')
  logo.src = headerImg[0]
  logo.classList = 'logoForHeader'

  const ul = document.createElement('ul')
  ul.className = 'navForHeader'
  const list1 = document.createElement('li')
  list1.addEventListener('click', loadAllhomeComponents)
  list1.textContent = 'Home'

  const list2 = document.createElement('li')
  list2.addEventListener('click', createMenuPage)
  list2.textContent = 'Menu'

  const list3 = document.createElement('li')
  list3.addEventListener('click', createBlogPage)
  list3.textContent = 'Blog'

  //    const list4 = document.createElement('li')
  //    list4.textContent='Pages'

  const list5 = document.createElement('li')
  list5.textContent = 'About'
  list5.addEventListener('click', createAboutPage)
  list5.textContent = 'About'

  const list6 = document.createElement('li')
  list6.textContent = 'Shop'
  list6.addEventListener('click', createShop)

  const list7 = document.createElement('li')
  list7.addEventListener('click', createContactPage)
  list7.textContent = 'Contact'

  const iconSect = document.createElement('div')
  const para = document.createElement('h1')
  para.textContent = `${titleForHeader}`

  const para2 = document.createElement('p')
  para2.innerHTML = `<span>Home</span> > ${option}`

  ul.appendChild(list1)
  ul.appendChild(list2)
  ul.appendChild(list3)
  //    ul.appendChild(list4)
  ul.appendChild(list5)
  ul.appendChild(list6)
  ul.appendChild(list7)

  header.appendChild(logo)
  header.appendChild(ul)
  header.appendChild(para)

  content.appendChild(header)
  header.appendChild(para2)
  content.appendChild(MenuBody)

  createFooter()
  const footer = document.querySelector('footer')
  footer.className = 'footerClass'
}
