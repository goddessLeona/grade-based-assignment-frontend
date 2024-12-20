import {
  mapRawCocktailData,
  //newDivRandomDrink,
  randomDrink,
  //randomDrinkName,
  //randomDrinkImg,
  insertNewDiv,
  //insertNewDivimg,
  //randomGlass,
  //randomMoreDiv,
  //insertDivInfo,
  //randomMoreIngridients,
  //newDivMoreIngridiens,
  //getingridients,
  //insertDivIngr,
  //getingarray,
  searchDrinkApi,
  search,
  handelsearch,
  handelHart,
  savefav,
  favList,
} from "./utilities.js";

const button = document.querySelector(".btn");
const navBar = document.querySelector(".navbar");
const more = document.querySelector("p.more");
const startPage = document.querySelector("#start-page");
const detailsPage = document.querySelector("#details-page");
const searchPage = document.querySelector("#search-page");
const favPage = document.querySelector("#fav-page")
const form = document.querySelector(".form")
const ul = document.querySelector(".resultList");
const containerD = document.querySelector(".container");
const resultList = document.querySelector(".resultList");
const moreInfo = document.querySelector(".moreInfo")
const hartD = document.querySelector("#id.favDD");

// move between pages, Nicklas sulution
navBar.addEventListener("click", handleOnNavbarClick);

function handleOnNavbarClick(event) {
  const classList = event.target.classList;
  if (classList.contains("link")) return handleOnLinkClick(event.target.id);
}

function handleOnLinkClick(id) {
  if (id === "start-link") {
    startPage.classList.add("open");
    detailsPage.classList.remove("open");
    searchPage.classList.remove("open");
    favPage.classList.remove("open");
    window.location.reload();
  }

  if (id === "search-link") {
    startPage.classList.remove("open");
    detailsPage.classList.remove("open");
    searchPage.classList.add("open");
    favPage.classList.remove("open");
  }

  if (id === "details-link") {
    startPage.classList.remove("open");
    detailsPage.classList.add("open");
    searchPage.classList.remove("open");
    favPage.classList.remove("open");
  }

  if (id === "fav-link") {
    startPage.classList.remove("open");
    detailsPage.classList.remove("open");
    searchPage.classList.remove("open");
    favPage.classList.add("open");
    favList();
  }
}

more.addEventListener("click", handelOnMoreClick);

function handelOnMoreClick(event) {
  const classList = event.target.classList;
  if (classList.contains("link")) return handleOnLinkClick(event.target.id);
}

// button for new random drink

insertNewDiv();

button.addEventListener("click", ()=> {
    window.location.reload();
});

// submit = enter after input name

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  search();
  form.reset();
})

// search

ul.addEventListener("click" , (event)=>{

  const classList = event.target.classList;
  startPage.classList.remove("open");
  detailsPage.classList.add("open");
  searchPage.classList.remove("open");
  if (classList.contains("listName"))return handelsearch(event.target.id)
})

// click on hart detaljsidan from start

containerD.addEventListener("click", (event)=>{
  const target = event.target.classList
  
  if (target.contains("favD")) return handelHart(event.target.id)
});







