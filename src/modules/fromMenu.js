import { content } from "../index";
import { CategoryImg } from "./images";
import { menuItemImg } from "./images";
import { menuLunchImg } from "./images";
import { menuDinnerImg } from "./images";
import { menuDesertImg } from "./images";
import { menuDrinkImg } from "./images";
import {menuSoupImg } from './images'
import { menuSnackImg } from "./images";

export function createFromMenu(){

    const FromMenuMain = document.createElement('div')
    FromMenuMain.className='FromMenuMain'
    const menuNav = document.createElement('div')
    menuNav.className='nav'
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.addEventListener('click',Breakfast)
    li1.textContent='Breakfast'
    const li2 = document.createElement('li')
    li2.addEventListener('click',lunch)
    li2.textContent='Lunch'
    const li3 = document.createElement('li')
    li3.addEventListener('click',Dinner)
    li3.textContent='Dinner'
    const li4 = document.createElement('li')
    li4.addEventListener('click',Dessert)
    li4.textContent='Dessert'
    const li5 = document.createElement('li')
    li5.addEventListener('click',Drink)
    li5.textContent='Drink'
    const li6 = document.createElement('li')
    li6.addEventListener('click',Snack)
    li6.textContent='Snack'
    const li7 = document.createElement('li')
    li7.addEventListener('click',Suops)
    li7.textContent='Suops'

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)
    ul.appendChild(li7)

    menuNav.appendChild(ul)
    const menuListSect = document.createElement('div')
    menuListSect.className='menuListSect'
    const displayDish = document.createElement('div')
    displayDish.className='displayDish'
    const displayImg = document.createElement('img')
    displayImg.src=menuItemImg[1]

    displayDish.appendChild(displayImg)
    const menu = document.createElement('div')
    menu.className='menuSect'

    const menuUl =document.createElement('ul')
    
     Breakfast()


    menu.appendChild(menuUl)
    menuListSect.appendChild(displayDish)
    menuListSect.appendChild(menu)

    const Title1 = document.createElement('h2')
    Title1.textContent='Choose & pick'
    const Title2 = document.createElement('h1')
    Title2.innerHTML='<span>Fr</span>om Our Menu'

    
    FromMenuMain.appendChild(Title1)
    FromMenuMain.appendChild(Title2)
    FromMenuMain.appendChild(menuNav)
    FromMenuMain.appendChild(menuListSect)
    content.appendChild(FromMenuMain)

    function Breakfast(){

        removeAllChildNodes()
        foodItem(menuItemImg[0],'Soya Deep.','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuItemImg[1],'Fresh Breakfast','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuItemImg[2],'Mild Butter','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuItemImg[3],'Fresh Bread','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuItemImg[4],'Glow Cheese','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuItemImg[5],'Italian Pizza','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuItemImg[6],'Sllice Beef','Lacus nisi, et ac dapibus velit in consequat.','14$')
    foodItem(menuItemImg[7],'Mushaom Pizza','Lacus nisi, et ac dapibus velit in consequat.','11.5$')
    }

    function lunch(){


        removeAllChildNodes()
        foodItem(menuLunchImg[0],'Kokan Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuLunchImg[1],'paneer Masala','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuLunchImg[2],'Jeera Rice','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuLunchImg[3],'Pulav','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuLunchImg[4],'Tukda Paneer','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuLunchImg[5],'Italian Pizza','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
 
   
    }

    function Dinner(){

        removeAllChildNodes()
        foodItem(menuDinnerImg[0],'Bahubali Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuDinnerImg[1],'Shahi Pakvan','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuDinnerImg[2],'Darbari Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuDinnerImg[3],'Puri Bhaji','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(menuDinnerImg[4],'Chicken Kofta','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuDinnerImg[5],'Hulk Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
   
    }

    function Dessert(){

        removeAllChildNodes()
        foodItem(menuDesertImg[0],'French Pudding','12.5$')
    foodItem(menuDesertImg[1],'Yoghurt','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    
    }

    function Drink(){

        removeAllChildNodes()
        foodItem(menuDrinkImg[0],'Fruit Mix','12.5$')
    foodItem(menuDrinkImg[1],'Gulab Sharbat','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuDrinkImg[2],'Ruapja','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    
    }

    function Snack(){

        removeAllChildNodes()
        foodItem(menuSnackImg[0],'Mix Nut','12.5$')
    foodItem(menuSnackImg[1],'Salted Peanut','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
   
    }

    function Suops(){

        removeAllChildNodes()
        foodItem(menuSoupImg[0],'Machau Soup','12.5$')
    foodItem(menuSoupImg[1],'Chineese Soup','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(menuSoupImg[2],'Vegi Soup','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
   
    }
    function foodItem(img,Name,desc,price){
        let foodItemList = document.createElement(`li`)
        let foodItemSect = document.createElement('div')
        let foodItemImgSect =document.createElement('div')
        foodItemImgSect.className='foodItemImgSect'
        let listPara = document.createElement('div')

        let foodItemImg =document.createElement('img')
        foodItemImg.addEventListener('click',displayItemImg)
        foodItemImg.src = img
        foodItemImgSect.appendChild(foodItemImg)
        let foodItemName = document.createElement('p')
        foodItemName.textContent=Name
        let foodItemDesc = document.createElement('p')
        foodItemDesc.textContent=desc
        let foodItemPrice = document.createElement('p')
        foodItemPrice.textContent=price

        
        listPara.appendChild(foodItemName)
        listPara.appendChild(foodItemDesc)
        listPara.appendChild(foodItemPrice)
        foodItemList.appendChild(foodItemImgSect)
        foodItemList.appendChild(listPara)

        menuUl.appendChild(foodItemList)
    
        }

function displayItemImg(event){
    removeAllChildNodesFromDisplay()
    let imgForDisplay = document.createElement('img')
    imgForDisplay.src=event.target.src
    displayDish.appendChild(imgForDisplay)
    
}
        function removeAllChildNodes() {
            while (menuUl.firstChild) {
                menuUl.removeChild(menuUl.firstChild);
            }      
        }

        function removeAllChildNodesFromDisplay() {
            while (displayDish.firstChild) {
                displayDish.removeChild(displayDish.firstChild);
            }}
}

