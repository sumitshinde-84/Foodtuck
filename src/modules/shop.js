import { content } from "../index";
import { createPageHeader } from "./pageHeader";
import { menuItemImg } from "./images";

export function createShop(){

    createPageHeader('Shop','Shop List')
    
    const body  = document.querySelector('body')
    body.removeAttribute('class')
    body.className='bodyPageForShop'
    const shopBody = document.querySelector('.MenuBody')
    shopBody.removeAttribute('class')
    shopBody.className='shopBody'
    

    const shopSect = document.createElement('div')
    shopSect.className='shopSect'
    const shopList = document.createElement('div')
    shopList.className='shopList'
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    createItem(menuItemImg[7],'Fresh Lime','15$')
    
 
    function createItem(img,Name,Price){

        const item =document.createElement('div')
        item.className='item'

        const itemImg = document.createElement('img')
        itemImg.src = img

        const itemName = document.createElement('p')
        itemName.textContent=Name
        itemName.className='itemName'
        const itemPrice  = document.createElement('p')
        itemPrice.textContent=Price
        
        item.appendChild(itemImg)
        item.appendChild(itemName)
        item.appendChild(itemPrice)

        shopList.appendChild(item)
    }


   shopSect.appendChild(shopList)
   shopBody.appendChild(shopSect)

const footer = document.querySelector('footer')
footer.className='footerShop'

const profileDetail = document.createElement('div')
    profileDetail.className='profileDetail'

const inputSect = document.createElement('div')
inputSect.className='inputSect'

const input = document.createElement('input')
input.placeholder='Search Product'

const inputIcon = document.createElement('div')
inputIcon.className='InputICON'

inputSect.appendChild(input)
inputSect.appendChild(inputIcon)

profileDetail.appendChild(inputSect)

shopBody.appendChild(profileDetail)


const checkList = document.createElement('div')
const CategoryPara = document.createElement('h2')
CategoryPara.textContent='Category'
checkList.appendChild(CategoryPara)
checkList.className='checkList'
createCheck('Sandwiches')
createCheck('Burger')
createCheck('Chicken Chup')
createCheck('Drink')
createCheck('Pizza')
createCheck('Thi')
createCheck('Non veg')
createCheck('Uncategorize')


function createCheck(Name){
    const para = document.createElement('p')
    para.className='checkPara'

    const input = document.createElement('input')
    input.type='checkbox'

    const label = document.createElement('label')
    label.textContent=`${Name}`

    para.appendChild(input)
    para.appendChild(label)

    checkList.appendChild(para)
}

const add = document.createElement('div')
add.className='advertise'

const latestProduct = document.createElement('div')
latestProduct.className='latestPr'
const prTitle = document.createElement('h2')
prTitle.textContent='Latest Project'
latestProduct.appendChild(prTitle)
createPr('pizaa','12$',menuItemImg[4])
createPr('pizaa','12$',menuItemImg[4])
createPr('pizaa','12$',menuItemImg[4])
createPr('pizaa','12$',menuItemImg[4])

function createPr(name,price,img){
    const pr1 = document.createElement('div')
    pr1.className='listPr'
    const Primg = document.createElement('img')
    Primg.src= img
    const prName = document.createElement('p')
    prName.textContent=name

    const prPrice =document.createElement('p')
    prPrice.textContent=price

    pr1.appendChild(Primg)
    pr1.appendChild(prName)
    pr1.appendChild(prPrice)

    latestProduct.appendChild(pr1)

}



profileDetail.appendChild(checkList)
profileDetail.appendChild(add)
profileDetail.appendChild(latestProduct)

}