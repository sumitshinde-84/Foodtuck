import { createHeader } from "./modules/header";
import { createHome } from "./modules/home";
import './css/main.css'
export  const content = document.querySelector('#content')
    
createHeader()
createHome()
