import { createHeader } from "./modules/header";
import { createHome } from "./modules/home";
import { createFooter } from "./modules/footer";
import { createAboutUs } from "./modules/aboutUs";

import './css/main.css'
export  const content = document.querySelector('#content')
    
createHeader();

createFooter();

