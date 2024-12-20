const originalUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

const sectionBox = document.querySelector(".randombox");
const sectionBoxMore = document.querySelector(".randomboxMore");
const moreBox = document.querySelector(".moreBox");
const moremainbox = document.querySelector(".moremainbox");
const input = document.querySelector(".input");
const resultList = document.querySelector(".resultList");
const container = document.querySelector(".container");
const favContainer = document.querySelector(".favContainer");
const favResults = document.querySelector(".favResults")

// Nicklas funktion that took away unnesesery facts from the imported Api data
export function mapRawCocktailData(rawCocktial) {
  return {
    id: rawCocktial.idDrink,
    name: rawCocktial.strDrink,
    tags: rawCocktial.strTags ? rawCocktial.strTags.split(",") : [],
    category: rawCocktial.strCategory,
    alcoholic: rawCocktial.strAlcoholic === "Alcoholic",
    glass: rawCocktial.strGlass,
    instructions: rawCocktial.strInstructions,
    thumbnail: rawCocktial.strDrinkThumb,
    ingredients: Array.from({ length: 15 })
      .map((_, i) => ({
        ingredient: rawCocktial[`strIngredient${i + 1}`],
        measure: rawCocktial[`strMeasure${i + 1}`],
      }))
      .filter((item) => item.ingredient),
  };
}

// random drink

export async function randomDrink() {
  const getRandome = await fetch(originalUrl + "/random.php");
  const drinks = await getRandome.json();

  const newDrink = drinks.drinks[0];
  const getRawcoctailfunction = mapRawCocktailData(newDrink);

  return getRawcoctailfunction;
}
// random drink Name + Image + id

export async function randomInfo() {
  const drink = await randomDrink();

  const drinkName = drink.name;
  const drinkImag = drink.thumbnail;
  const drinkId = drink.id;

  return { drinkName, drinkImag, drinkId };
}

//insert name + image + ( get id)
export async function insertNewDiv() {
  const drinks = await randomInfo();

  const name = drinks.drinkName;
  const img = drinks.drinkImag;
  const id = drinks.drinkId;

  // new div with name and img
  const insertDiv = `<div class="name"><p class="name">${name}</p></div>`;
  const insertImgDiv = `<div class="img"><img src=${img}/preview></</div>`;

  // insert the new div on the html document
  sectionBox.insertAdjacentHTML("afterbegin", insertDiv);
  sectionBox.insertAdjacentHTML("beforeend", insertImgDiv);

  await lookUpApi(id);
}



// detalj - page from start page

export async function lookUpApi(cocktailId) {
  const lookUp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );

  const infoDrink = await lookUp.json();

  const info = infoDrink.drinks[0];
  const drinkdata = mapRawCocktailData(info);

  const name = drinkdata.name;
  const img = drinkdata.thumbnail;
  const glass = drinkdata.glass;
  const category = drinkdata.category;
  const instructions = drinkdata.instructions;
  const id= drinkdata.id;

  // the tricky part get out the ingridients and mesures
  // array with objects inside
  const ingredients = drinkdata.ingredients;
  const allList = [];

  ingredients.forEach(function (item) {
    const ing = item;
    const all = ` ${ing.ingredient} - ${ing.measure}`;

    allList.push(all);
    return ing;
  });

  // tag was a bit tricky, needed to make sure that when no tag, it looked nice aswell
  const tags = drinkdata.tags || [];
  const allTags = [];
  const noTag = "There are no tags for this drink";

  if (tags.length === 0) {
    allTags.push(noTag);
  } else {
    tags.forEach(function (item) {
      const tag = item;
      allTags.push(tag);
    });
  }

  container.innerHTML = "";

  const detailsPage = ` 
<div class="moremainbox">

    <div class="moreBox">

      <div class="randomboxMore">
        <div class="name">
          <p class="name">${name}</p>
        </div>
        <div class="img">
          <img src=${img}/preview>
        </div>
      </div>

      <div class="moreInfo">
        <div><span class=" favD material-symbols-outlined" id="${id}">favorite</span></div>
        <div><p id="category"><b>Catogori:</b> ${category}</p></div>
        <div><p id="glass"><b>Glass:</b> ${glass}</p></div>
        <div><p id="instructions"><b>Instructions:</b> ${instructions}</p></div>
      </div>

    </div>

  <div class="moreIngridents">
      <p id="ingrid"><b>Ingridients: </b>${allList}<br></p>
  </div>

  <div class="tag">
      <p id="tag"><b>Tag:</b> ${allTags}<p/>
  </div>

 </div>`;

  container.innerHTML = detailsPage;

  return drinkdata;
}

// search - page
export async function searchDrinkApi() {
  try {
    const cocktailName = input.value;

    const searchDrink = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await searchDrink.json();
    const searcedDrink = data.drinks;

    return searcedDrink;
  } catch (error) {
    console.log(error);
  }
}

// get a list of drinks to searchpage
export async function search() {
  const drinks = await searchDrinkApi();

  const drinklist = [];

  drinks.forEach(function (item) {
    const drink = mapRawCocktailData(item);
    drinklist.push(drink);
  });

  resultList.innerHTML = "";

  drinklist.forEach((drink) => {
    const lidrink = document.createElement("li");
    lidrink.setAttribute("id", `${drink.id}`);
    lidrink.setAttribute("class", "listName");
    const names = drink.name;
    lidrink.textContent = names;
/*
    lidrink.innerHtml=""
    lidrink.innerHTML = `<div class="searchbox">
        <div class="hart"><span class=" searchart material-symbols-outlined" id="${drink.id}">favorite</span></div>
        <p class="searchLi" id="${drink.id}">${names}</p>
      </div>`;*/

    resultList.appendChild(lidrink);

  }); 
}


// detal-sida from search sidan

export async function handelsearch(id) {
  console.log(id);


  const lookUp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const infoDrink = await lookUp.json();

  const info = infoDrink.drinks[0];
  const drinkdata = mapRawCocktailData(info);
  console.log(drinkdata)

  const name = drinkdata.name;
  const img = drinkdata.thumbnail;
  const glass = drinkdata.glass;
  const category = drinkdata.category;
  const instructions = drinkdata.instructions;
  const idid= drinkdata.id;

  const ingredients = drinkdata.ingredients;
  const allList = [];

  ingredients.forEach(function (item) {
    const ing = item;
    const all = ` ${ing.ingredient} - ${ing.measure}`;

    allList.push(all);
    return ing;
  });

  const tags = drinkdata.tags || [];
  const allTags = [];
  const noTag = "There are no tags for this drink";

  if (tags.length === 0) {
    allTags.push(noTag);
  } else {
    tags.forEach(function (item) {
      const tag = item;
      allTags.push(tag);
    });
  }

  container.innerHTML = "";

  const detailsPage = ` 
<div class="moremainbox">

    <div class="moreBox">

      <div class="randomboxMore">
        <div class="name">
          <p class="name">${name}</p>
        </div>
        <div class="img">
          <img src=${img}/preview>
        </div>
      </div>

      <div class="moreInfo">
        <div><span class=" favDD material-symbols-outlined" id="${id}">favorite</span></div>
        <div><p id="category"><b>Catogori:</b> ${category}</p></div>
        <div><p id="glass"><b>Glass:</b> ${glass}</p></div>
        <div><p id="instructions"><b>Instructions:</b> ${instructions}</p></div>
      </div>

    </div>

  <div class="moreIngridents">
      <p id="ingrid"><b>Ingridients: </b>${allList}<br></p>
  </div>

  <div class="tag">
      <p id="tag"><b>Tag:</b> ${allTags}<p/>
  </div>

 </div>`;

  container.innerHTML = detailsPage;

  return drinkdata;
}

// favorite page

//localStorage.clear();

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

export function savefav() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// add favorits from detajpage from start

export async function handelHart(id){
  console.log(id);

  const hart = document.getElementById(id);
  console.log(hart);

  const hasAHart = favorites.some((item) => item.id === id);

  if(hasAHart){
    favorites = favorites.filter((item) => item.id !== id);
    
    hart.classList.remove("fill")
    savefav();

  }else{
    const lookUp = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const NameDrink = await lookUp.json();

    const info = NameDrink.drinks[0];
    const drinkdata = mapRawCocktailData(info);

    const name = drinkdata.name;
    const idDrink = drinkdata.id;

    console.log(name);
    console.log(idDrink);

    const favoriteObject = {
      name: name,
      id: idDrink,
    };

    favorites.push(favoriteObject);
    hart.classList.add("fill");
    savefav();
    //favList();
  }
}

// favorite page
  export function favList (){

    favorites.forEach(function (item) {
    
      const object = item;
      
      const favLi = document.createElement("li");
      favLi.setAttribute("class", "liFav")

      favLi.innerHTML=""
      favLi.innerHTML = `
      <div class="favoritbox">
        <div class="hart"><span class=" favD material-symbols-outlined fill" id="${object.id}">favorite</span></div>
        <p class="favLi" id="${object.id}">${object.name}</p>
      </div>
      `;

      favResults.appendChild(favLi);
      
    });
  }
