import { content } from "../index"
import { WhyImg } from "./images"

export function createWhyChoose(){

    const mainSect = document.createElement('main')
    mainSect.className ='mainSect'

    const mediaSect = document.createElement('div')
    const why1Img = document.createElement('img')
    why1Img.src=WhyImg[0]
    const why2Img = document.createElement('img')
    why2Img.src=WhyImg[1]
    const why3Img = document.createElement('img')
    why3Img.src=WhyImg[2]
    const why4Img = document.createElement('img')
    why4Img.src=WhyImg[3]
    const why5Img = document.createElement('img')
    why5Img.src=WhyImg[4]
    const why6Img = document.createElement('img')
    why6Img.src=WhyImg[5]

    mediaSect.appendChild(why1Img)
    mediaSect.appendChild(why2Img)
    mediaSect.appendChild(why3Img)
    mediaSect.appendChild(why4Img)
    mediaSect.appendChild(why5Img)
    mediaSect.appendChild(why6Img)
    const textContent = document.createElement('div')

    mainSect.appendChild(mediaSect)
    mainSect.appendChild(textContent)

    content.appendChild(mainSect)





}