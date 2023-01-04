import { content } from "../index";
import {createPageHeader} from './pageHeader'
import {aboutPage} from './images'
 import { createTestimonial } from "./testimonial";
 import { createFromMenu } from "./fromMenu";
 export function createAboutPage(){

    createPageHeader('About','About Us')
    
    const aboutBody = document.querySelector('.MenuBody')
    
    const AboutSect = document.createElement('div')
    AboutSect.className='AboutSectPage'

    const mediaSect = document.createElement('div')
    mediaSect.className='mediaSect'

    const img1 = document.createElement('img')
    img1.src = aboutPage[0]
    const img2 = document.createElement('img')
    img2.src = aboutPage[1]
    const img3 = document.createElement('img')
    img3.src = aboutPage[2]

    mediaSect.appendChild(img1)
    mediaSect.appendChild(img2)
    mediaSect.appendChild(img3)

    
    const textContent = document.createElement('div')
    textContent.className='textContent'

    const title1 = document.createElement('h2')
    title1.textContent='About us ___'

    const title2 = document.createElement('h1')
    title2.textContent='Food is an important part Of a balanced Diet'

    const para = document.createElement('p')
    para.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.`

    const btn1 = document.createElement('button')
    btn1.className='button1'
    btn1.textContent='Show more'
    

    const bnt2 = document.createElement('button')
    bnt2.className='button2'

    const btnpara = document.createElement('p')
    btnpara.textContent='Watch video'
    btnpara.className='btnPara'
    
    AboutSect.appendChild(mediaSect)
    AboutSect.appendChild(textContent)
    

    textContent.appendChild(title1)
    textContent.appendChild(title2)
    textContent.appendChild(para)

    textContent.appendChild(btn1)
    textContent.appendChild(bnt2)
    textContent.appendChild(btnpara)
    
    aboutBody.appendChild(AboutSect)
    
    createFromMenu()
    

    
}

