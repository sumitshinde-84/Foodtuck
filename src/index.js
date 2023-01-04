import { createHeader } from "./modules/header";
import { createHome } from "./modules/home";
import { createFooter } from "./modules/footer";
import { createAboutUs } from "./modules/aboutUs";
import { createFoodCat } from "./modules/foodCat";
import { createWhyChoose } from "./modules/whyChoose";
import { createRestrauInfo } from "./modules/restrauInfoSect";
import {createFromMenu } from './modules/fromMenu'
import { createTestimonial } from "./modules/testimonial";
import { createRestrauActive } from "./modules/restrauActive";
import { createShop } from './modules/shop'
import './css/main.css'
import { createOurChef } from "./modules/ourChef";
import {createBlog}   from './modules/blog'
export  const content = document.querySelector('#content')


export function loadAllhomeComponents(){
content.removeAttribute('class')
content.className='content'

const body = document.querySelector('body');
body.className='body'
content.style.background='black'
content.style.opacity='0.8'

    function removeAllChildNodesFromDisplay() {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }}


removeAllChildNodesFromDisplay()
createHeader();
createHome()
createAboutUs()
createFoodCat()
createWhyChoose()
createRestrauInfo()
createFromMenu()
createOurChef()
createTestimonial()
createRestrauActive()
createBlog()
createFooter();


const footer = document.querySelector('footer')
footer.removeAttribute('class')
footer.className='footer'

}

loadAllhomeComponents()