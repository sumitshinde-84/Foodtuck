import { content } from "../index"
import { footerImg } from "./images"


export function createFooter(){
    const footer =  document.createElement('footer')
    footer.className='footer'
    const grassCorner = document.createElement('img')
    grassCorner.className='grassCorner'
    grassCorner.src=footerImg[0];

    const footerBelt= document.createElement('div')
    footerBelt.className='footerBelt'
    const footerContent = document.createElement('div')
    footerContent.className='footerContent'
    const footerTxtContent = document.createElement('div')
    footerTxtContent.className='footerTxtContent'

    // recent post section

    const recentPost = document.createElement('div')
    recentPost.className='RctPost'
    const recentPostTitle = document.createElement('h2')
    recentPostTitle.textContent='Recent Post'

    const firstPost = document.createElement('div')
    const firstPostImg = document.createElement('img')
    firstPostImg.src=footerImg[1]
    const postpara = document.createElement('p')
    postpara.textContent='20 Feb 2022'
    const postdesc = document.createElement('p')
    postdesc.textContent='Keep Your Business'

    firstPost.appendChild(firstPostImg)

    const firstPost1 = document.createElement('div')
    const firstPostImg1 = document.createElement('img')
    firstPostImg1.src=footerImg[2]
    const postpara1 = document.createElement('p')
    postpara1.textContent='20 Feb 2022'
    const postdesc1 = document.createElement('p')
    postdesc1.textContent='Keep Your Business'

    firstPost1.appendChild(firstPostImg1)

    const firstPost2 = document.createElement('div')
    const firstPostImg2 = document.createElement('img')
    firstPostImg2.src=footerImg[3]
    const postpara2 = document.createElement('p')
    postpara2.textContent='20 Feb 2022'
    const postdesc2 = document.createElement('p')
    postdesc2.textContent='Keep Your Business'

    firstPost2.appendChild(firstPostImg2)

    // help sect
    
    const helpSect = document.createElement('div')
    helpSect.className='helpSect'
    const helpSectTittle = document.createElement('h2');
    helpSectTittle.textContent='Help?';

    helpSect.appendChild(helpSectTittle);

    const FaqPara = document.createElement('p')
    FaqPara.textContent='FAQ'
    const termPara = document.createElement('p')
    termPara.textContent='Term & condition'
    const reportPara = document.createElement('p')
    reportPara.textContent='Reporting'
    const documentPara = document.createElement('p')
    documentPara.textContent='Documentation'
    const supportPara = document.createElement('p')
    supportPara.textContent='Support Policy'
    const Privacy = document.createElement('p')
    Privacy.textContent='Privacy'

    helpSect.appendChild(FaqPara)
    helpSect.appendChild(termPara)
    helpSect.appendChild(reportPara)
    helpSect.appendChild(documentPara)
    helpSect.appendChild(supportPara)
    helpSect.appendChild(Privacy)


    const useFullSect = document.createElement('div')
    useFullSect.className='useFullSect'
    const useFullSectTitle = document.createElement('h2')
    useFullSectTitle.textContent='Useful Link'

    const aboutLink = document.createElement('p')
    aboutLink.textContent='About'
    const newsLink = document.createElement('p')
    newsLink.textContent='News'
    const partnerLink = document.createElement('p')
    partnerLink.textContent='Partners'
    const teamLink = document.createElement('p')
    teamLink.textContent='Team'
    const menuLink = document.createElement('p')
    menuLink.textContent='Menu'
    const contactLink = document.createElement('p')
    contactLink.textContent='Contact'

    useFullSect.appendChild(useFullSectTitle)
    useFullSect.appendChild(aboutLink)
    useFullSect.appendChild(newsLink)
    useFullSect.appendChild(partnerLink)
    useFullSect.appendChild(teamLink)
    useFullSect.appendChild(menuLink)
    useFullSect.appendChild(contactLink)

    const aboutUsSect = document.createElement('div')
    aboutUsSect.className='aboutUsSect'

    const supportSect = document.createElement('div')
    supportSect.className='supportSect'
    const inputSect = document.createElement('div')
    const supportP1 = document.createElement('p')
    supportP1.innerHTML='<span>S</span>till You Need Our Support ?'
    const supportP2 = document.createElement('p')
    supportP2.textContent='Don’t wait make a smart & logical quote here. Its pretty easy.'
    const supportIpt = document.createElement('input')
    supportIpt.placeholder='Enter Your Email'
    const supportBtn = document.createElement('button')
    supportBtn.textContent='Subcribe Now'

    supportSect.appendChild(supportP1)
    supportSect.appendChild(supportP2)
    supportSect.appendChild(inputSect)
    inputSect.appendChild(supportIpt)
    inputSect.appendChild(supportBtn)

    const openHrSectMain = document.createElement('div');
    openHrSectMain.className='openHrSectMain';
    const openHrSect = document.createElement('div');

    openHrSect.className='openHrSect'
    const openHrSectP1 = document.createElement('p')
    openHrSectP1.textContent='Opening Hours'
    const openHrSectP2 = document.createElement('p')
    openHrSectP2.textContent='MON - SAT(8.00 6.00)';
    const openHrSectP3 = document.createElement('p')
    openHrSectP3.textContent='Sunday - Closed'

    const openHrSectIcon = document.createElement('div')
    openHrSectIcon.className='openHrSectIcon'

    const aboutDesc = document.createElement('p')
    
    aboutDesc.textContent=`orporate clients and leisure travelers has
    been relying on Groundlink for dependab
    safe, and professional chauffeured car
    service in major cities across World.`

    const aboutDescTitle = document.createElement('h2')
    aboutDescTitle.textContent='About Us'

    aboutUsSect.appendChild(aboutDescTitle)

    aboutUsSect.appendChild(aboutDesc)

    openHrSect.appendChild(openHrSectP1)
    openHrSect.appendChild(openHrSectP2)
    openHrSect.appendChild(openHrSectP3)
    
    openHrSectMain.appendChild(openHrSectIcon);
    openHrSectMain.appendChild(openHrSect);
    
    aboutUsSect.appendChild(openHrSectMain);

    const socialMedSec = document.createElement('div')
    socialMedSec.className='socialMedSec'
    const copyRight = document.createElement('p')
    const year = new Date().getFullYear()
    copyRight.textContent=`Copyright @ ${year} by Roni. All Rights reserved`

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
    
   firstPost.appendChild(postpara)
   firstPost.appendChild(postdesc)

   firstPost1.appendChild(postpara1)
   firstPost1.appendChild(postdesc1)

   firstPost2.appendChild(postpara2)
   firstPost2.appendChild(postdesc2)
   
   recentPost.appendChild(recentPostTitle)
   recentPost.appendChild(firstPost)
   recentPost.appendChild(firstPost1)
   recentPost.appendChild(firstPost2)
   
   footerTxtContent.appendChild(aboutUsSect)
   footerTxtContent.appendChild(useFullSect)
   footerTxtContent.appendChild(helpSect)
   footerTxtContent.appendChild(recentPost)
    footer.appendChild(supportSect)
    footerContent.appendChild(footerTxtContent)
    footer.appendChild(footerContent)
    footer.appendChild(footerBelt)
    footer.appendChild(grassCorner)
    content.appendChild(footer)



}