import { createHeader } from "./modules/header";
import { createHome } from "./modules/home";
import { createFooter } from "./modules/footer";
import { createAboutUs } from "./modules/aboutUs";
import { createFoodCat } from "./modules/foodCat";
import { createWhyChoose } from "./modules/whyChoose";
import { createRestrauInfo } from "./modules/restrauInfoSect";
import {createFromMenu } from './modules/fromMenu'

import './css/main.css'
import { createOurChef } from "./modules/ourChef";
export  const content = document.querySelector('#content')
    
createHeader();
createHome()
createAboutUs()
createFoodCat()
createWhyChoose()
createRestrauInfo()
createFromMenu()
createOurChef()
createFooter();


