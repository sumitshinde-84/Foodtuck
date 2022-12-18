import { content } from "../index"
import { footerImg } from "./images"
export function createFooter(){
    const footer =  document.createElement('footer')
    const grassCorner = document.createElement('img')
    grassCorner.className='grassCorner'
    grassCorner.src=footerImg[0];

    const footerBelt= document.createElement('div')
    footerBelt.className='footerBelt'
    const socialMedSec = document.createElement('div')
    socialMedSec.className='socialMedSec'
    const copyRight = document.createElement('p')
    copyRight.textContent='Copyright @ 2022 by Roni. All Rights reserved'

    const socialMediaIcon1 = document.createElement('div')
    socialMediaIcon1.className='mediaIcon'
    const socialMediaIcon2 = document.createElement('div')
    socialMediaIcon2.className='mediaIcon'
    const socialMediaIcon3 = document.createElement('div')
    socialMediaIcon3.className='mediaIcon'
    const socialMediaIcon4 = document.createElement('div')
    socialMediaIcon4.className='mediaIcon'
    const socialMediaIcon5 = document.createElement('div')
    socialMediaIcon5.className='mediaIcon'


   socialMedSec.appendChild(socialMediaIcon1)
   socialMedSec.appendChild(socialMediaIcon2)
   socialMedSec.appendChild(socialMediaIcon3)
   socialMedSec.appendChild(socialMediaIcon4)
   socialMedSec.appendChild(socialMediaIcon5)
    footerBelt.appendChild(copyRight)
   footerBelt.appendChild(socialMedSec)
    

    footer.appendChild(footerBelt)
    footer.appendChild(grassCorner)
    content.appendChild(footer)

}