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
import './css/main.css'
import { createOurChef } from "./modules/ourChef";
import {createBlog}   from './modules/blog'
export  const content = document.querySelector('#content')
    
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


