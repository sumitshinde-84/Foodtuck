import { content } from "../index";
import { createPageHeader } from "./pageHeader";


export function createShop(){

    createPageHeader('Shop','Shop List')
    

    const shopBody = document.querySelector('.MenuBody')
    

    const shopSect = document.createElement('div')
    shopSect.className='shopSect'
    const shopList = document.createElement('div')
    shopList.className='shopList'

    function createItem(img,Name,Price){

        const item =document.createElement('div')
        item.className='item'

        const itemImg = document.createElement('img')
        item.src = img

        const itemName = document.createElement('p')
        itemName.textContent=Name
        const itemPrice  = document.createElement('p')
        itemPrice.textContent=Price

    }



    const profileDetail = document.createElement('div')
    profileDetail.className='profileDetail'


   shopBody.appendChild(shopSect)


}