import { createHeader } from "./modules/header";
import { createHome } from "./modules/home";
import { createFooter } from "./modules/footer";
import { createAboutUs } from "./modules/aboutUs";
import { createFoodCat } from "./modules/foodCat";
import './css/main.css'
export  const content = document.querySelector('#content')
    
createHeader();
createHome()
createAboutUs()
createFoodCat()
createFooter();

