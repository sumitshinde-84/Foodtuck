

export function createHeader(){

    const content = document.querySelector('#content')
    content.className='content';
    const header = document.createElement('header')
    const logoSection = document.createElement('div')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    // list 

   const list1 = document.createElement('li')
   list1.textContent='Home'

   const list2 = document.createElement('li')
   list2.textContent='Menu'

   const list3 = document.createElement('li')
   list3.textContent='Blog'

   const list4 = document.createElement('li')
   list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'

   const list6 = document.createElement('li')
   list6.textContent='Shop'

   const list7 = document.createElement('li')
   list7.textContent='Contact'

    ul.appendChild(list1)
    ul.appendChild(list2)
    ul.appendChild(list3)
    ul.appendChild(list4)
    ul.appendChild(list5)
    ul.appendChild(list6)
    ul.appendChild(list7)

 nav.appendChild(ul)
 header.appendChild(nav)
 
   content.appendChild(header)
}
