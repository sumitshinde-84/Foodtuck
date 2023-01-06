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

    const h1 = document.querySelector('.FromMenuMain h1')
    h1.style.color='black'
    const li = document.querySelectorAll('.menuSect li')
    for(let i=0;i<li.length;i++){
        li[i].style.color='black'
        
    }

    createTestimonial()
    const testimonialSect = document.querySelector('.Testimonial')
    testimonialSect.removeAttribute('class')
    testimonialSect.className='TestimonialSECT'
    const firstTitle = document.createElement('h1')
    firstTitle.textContent='Why Choose us'
    const secondTitle = document.createElement('p')
    secondTitle.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.'

    const whyChoose = document.createElement('div')
    whyChoose.className='whyChooseUs'


    const whyImg = document.createElement('img')
    whyImg.className='whyImg'

    const features = document.createElement('div')
    features.className='features'

    const feture1 = document.createElement('div')
    const titleFirst = document.createElement('h2')
    titleFirst.textContent='Best Cheif'
    const titleSecond=document.createElement('p')
    titleSecond.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture1.appendChild(titleFirst)
    feture1.appendChild(titleSecond)
    
    const feture2 = document.createElement('div')
    const titleFirst2 = document.createElement('h2')
    titleFirst2.textContent='Best Cheif'
    const titleSecond2=document.createElement('p')
    titleSecond2.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture2.appendChild(titleFirst2)
    feture2.appendChild(titleSecond2)

    const feture3 = document.createElement('div')
    const titleFirst3 = document.createElement('h2')
    titleFirst3.textContent='Best Cheif'
    const titleSecond3=document.createElement('p')
    titleSecond3.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture3.appendChild(titleFirst3)
    feture3.appendChild(titleSecond3)

    features.appendChild(feture1)
    features.appendChild(feture2)
    features.appendChild(feture3)


        whyChoose.appendChild(firstTitle)
        whyChoose.appendChild(secondTitle)
        whyChoose.appendChild(whyImg)
        whyChoose.appendChild(features)
    aboutBody.appendChild(whyChoose)
}

