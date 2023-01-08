import { content } from "../index";
import { CategoryImg } from "./images";
export function createFoodCat() {
  const FoodCatSect = document.createElement("div");
  FoodCatSect.className = "FoodCatSect";
  const sideGrassImg = document.createElement("img");
  sideGrassImg.className = "sideGrassImg";
  sideGrassImg.src = CategoryImg[4];
  const Category = document.createElement("div");
  const Title1 = document.createElement("h2");
  Title1.textContent = "Food Category";
  const Title2 = document.createElement("h1");
  Title2.innerHTML = "<span>Ch</span>oose Food Item";

  const discountTag = document.createElement("div");
  const discountTagP = document.createElement("p");
  discountTagP.textContent = "Save 30%";
  discountTag.appendChild(discountTagP);
  const discountTag2 = document.createElement("div");
  const discountTagP2 = document.createElement("p");
  discountTagP2.textContent = "Fast Food Dish";
  discountTag2.appendChild(discountTagP2);
  FoodCatSect.appendChild(sideGrassImg);
  FoodCatSect.appendChild(discountTag);
  FoodCatSect.appendChild(discountTag2);
  FoodCatSect.appendChild(Title1);
  FoodCatSect.appendChild(Title2);

  const CategoryImg1 = document.createElement("img");
  CategoryImg1.src = CategoryImg[1];
  const CategoryImg2 = document.createElement("img");
  CategoryImg2.src = CategoryImg[0];
  const CategoryImg3 = document.createElement("img");
  CategoryImg3.src = CategoryImg[2];
  const CategoryImg4 = document.createElement("img");
  CategoryImg4.src = CategoryImg[3];

  Category.appendChild(CategoryImg1);
  Category.appendChild(CategoryImg2);
  Category.appendChild(CategoryImg3);
  Category.appendChild(CategoryImg4);

  FoodCatSect.appendChild(Category);

  content.appendChild(FoodCatSect);
}
