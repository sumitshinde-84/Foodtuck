import {content} from '../index'
import { chefImg } from './images'
 

export function createOurChef(){

const ourChefSect = document.createElement('div')
ourChefSect.className='ourChefSect'
const Title1 = document.createElement('h2')
Title1.textContent='Chefs'
const Title2 = document.createElement('h1')
Title2.innerHTML='<span>Me</span>et Our Chef'
ourChefSect.appendChild(Title1)
ourChefSect.appendChild(Title2)
let chefList = document.createElement('div')
chefList.className='chefList'
makeChefSect(chefImg[0],'D.Estwood','Chief Chef')
makeChefSect(chefImg[1],'D.Estwood','Chief Chef')
makeChefSect(chefImg[2],'D.Estwood','Chief Chef')
makeChefSect(chefImg[3],'D.Estwood','Chief Chef')


function makeChefSect(img,Name,designation){

    let chefSect = document.createElement('div')
    chefSect.className='chefSect'
    let chefSectImg  = document.createElement('img')
    chefSectImg.src=img
    let info = document.createElement('div')
    info.className='info'
    chefSect.addEventListener('mouseover',infoAnimation)
    chefSect.addEventListener('mouseout',infoAnimationLeave)

    function infoAnimation(){
        info.style.width='100px'
        infoName.style.display='block'
        infoDesignation.style.display='block'
    }

    function infoAnimationLeave(){
        info.style.width='0px'
        infoName.style.display='none'
        infoDesignation.style.display='none'
    }
    let infoName = document.createElement('p')
    
    infoName.textContent=Name
    let infoDesignation = document.createElement('p')
    infoDesignation.textContent=designation
  
    info.appendChild(infoName)
    info.appendChild(infoDesignation)
    chefSect.appendChild(chefSectImg)
    chefSect.appendChild(info)

    chefList.appendChild(chefSect)

}


ourChefSect.appendChild(chefList)
content.appendChild(ourChefSect)




}