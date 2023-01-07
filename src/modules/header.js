import {headerImg}  from "./images";
import { content } from "../index";
import { createHome } from "./home";
import { createMenuPage } from "./menuPage";
import { createBlogPage } from "./blogPage";
import { createShop } from "./shop";
import { createAboutPage } from "./aboutPage";
import { createContactPage } from "./Contact";
export function createHeader(){

    
   content.className='content'
    const header = document.createElement('header')

    const logoSection = document.createElement('div')
    logoSection.className='logo';

    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    const logo = document.createElement('img')
    logo.src=headerImg[0];

   const searchSect = document.createElement('div')
   searchSect.className='searchSect'

   const search = document.createElement('div')
   search.className='searchBar'
   
   const searchIcon = document.createElement('img')
   searchIcon.className='searchIcon'
   searchIcon.src=headerImg[2]

   const searchInput =document.createElement('input')
   searchInput.placeholder='  Search...'

   const handBag = document.createElement('img')
   handBag.id='handBag'
   handBag.src=headerImg[1]

    // list 

   const list1 = document.createElement('li')
   list1.textContent='Home'
   list1.addEventListener('click',createHome)

   const list2 = document.createElement('li')
   list2.addEventListener('click',createMenuPage)
   list2.textContent='Menu'

   const list3 = document.createElement('li')
   list3.addEventListener('click',createBlogPage)
   list3.textContent='Blog'

   // const list4 = document.createElement('li')
   // list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'
   list5.addEventListener('click',createAboutPage)

   const list6 = document.createElement('li')
   list6.textContent='Shop'
   list6.addEventListener('click',createShop)

   const list7 = document.createElement('li')
   list7.addEventListener('click',createContactPage)
   list7.textContent='Contact'

    ul.appendChild(list1)
    ul.appendChild(list2)
    ul.appendChild(list3)
   //  ul.appendChild(list4)
    ul.appendChild(list5)
    ul.appendChild(list6)
    ul.appendChild(list7)


 nav.appendChild(ul)
 search.appendChild(searchInput)
search.appendChild(searchIcon)

 searchSect.appendChild(search)
 searchSect.appendChild(handBag)
 logoSection.appendChild(logo)
 
 header.appendChild(nav)
 header.appendChild(logoSection)
 header.appendChild(searchSect)
   content.appendChild(header)
}
