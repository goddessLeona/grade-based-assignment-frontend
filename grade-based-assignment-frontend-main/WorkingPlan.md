# grade-based-assignment-frontend
exam work frontend/javascript


work plan

Day 1.
1. Make a sceatch from the exam exercice visualy on a paper
2. Make the "Start" page html and css file
3. Start on the "Start" page, add header, NAV bar, button and the link
-----------------------------------------------------------------------------------
Day 2. work on random drink
Random coctail ? :https://www.thecocktaildb.com/api/json/v1/1/random.php
API url and key : https://www.thecocktaildb.com/api/json/v1/1/
Name of coictail : "strDrink": "name"
name: rawCocktial.strDrink,
Image of coctail : Add /preview to the end of the cocktail image URL
/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)

New coctail every time reload page: reset window
add Nicklas code how to get to the other pages
--------------------------------------------------------------------------------------
Day 3. 
1. make a backup-copy of the functional code.
2. clean up all codes and remove all not working and all console.log
3. add coments if needed.

4. figure out how to link from start page to detalj page.
5. Research and work on a idea how to get detalj page to work. (tomorrow is going to be a long day)
------------------------------------------------------------------------------------------
Day 4. Work on detalj page

After I worked the hole day and thought I was finished, I realized that the image, name and ingridients came from diferent drinks. So i had to start all over again

1. Rewrite the code from yesterday so that name and image come from the same random drink.
2. Rewrite the code again from today so that "Catogory","Glass" and "Instructions" also come from same drink.

That was all I manged in one day!
------------------------------------------------------------------------------------------
Day 5. Work on detalj page

1. get the ingridiens and mesures from the same random drink
2. (remember later) got the ingridients and mesures working, but do not look amazing if more time when all done try to make it into a bullet list.
3. add tag and a message if the tag is emty

Page finished but could need some nicer css styling

------------------------------------------------------------------------------------------
Day 6. Start on the search page

what I need : www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName} 

1. Did the html and a bit css on the page
2. clean up the code from yesterday, remove all console.log 
and make it look a bit nicer.

------------------------------------------------------------------------------------------
Day 7. Work on the search page 

1. Did a new back up
2. Talked to Hendrik a bit, he had used "try" all the time. Will add that today to my new search function. (should proberbly add it to my old aswell)

Nicklas förklaring
async function fetchSomething() {
  try {
    const response = await fetch(url, options?);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

3. After a long day I got the search by name to work (need some kind of error message if you write somthing wrong)
4. Found out that I have made the detalje page wronge and have to do it over again.
Need to use: URL för detaljerad information: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}

How did I miss this !!!!
manage to fix it by taking the id from my random drink, so I could re use all the other code I already had so all good again.
-----------------------------------------------------------------------------------
Day 8 Work on the search page

1. backup the code and remove all console.log

På plats (school)
2. Check with Nicklas so that the way I solved getting the id nr was right. It was so now I can move on to the search page. 
3. To get to detalj-page from search and start, it have to get modified a bit so that it use id-of drink and inner html. So I had to rewrite a lot of code again. Take away all my divar and insertAdjacentHTML and rewrite it to one long html code. Got some help from Nicklas to solve the mess. If I have more time when finished, I like to remove some div element I have in the html code.
------------
4. got it to work to get from my search results to detalj page now. woow ! 
   but my code is long and not very prittie, some things that need fixing. tomorrow I will look through all and look for all the things that need fixing, like adding "try" ,error message if you not write in a correct name in search and more things... take away all code that I do not use
-------------------------------------------------------------------------------------------
day 9 - 10 working on favorits

1. added favorite in navbar
2. added html for favorite page
3. added a hart on detaljpage that you could push and the info ends up in local storage and on new favorite page

problems need to solv (1. when i push the favorits from navbar, each time i get the list of drinks added to favorits, so many dublets.  2. getting the hart filled when you click it)

4. now the hart get filled when you click it but now I have to figure out to unfill it when you click on it again.
   now it only get duble favorits fom some of the pages strange

--------------------------------------------------------------
day 11 working on favorites

1. got it to work to remove the hart using "some" and filter. Both new for me, so took some time to figure it out.
but I think I can reuse this now on all the othere pages. Favorite page, searchpage and the detaljpage from search page. still problem that from some pages it get the favorite results dubble or more.

2. do a backup, before I mess to much with the old code 

3. New problems arriving when I added harts to the search page. Now it does not work so god any more to get to detalj page some times yes other no... grrr thought I had it... now a new problem to solve
---------------------------------------------------------------------
day 12 or other day, lost track of days

last day to upload to my github, still have not got favorites to work
so now I am just trying to get it back to working again. Some pages changed after I started to work with favorites
startpage. 

* The link to the ditalj-page now only worked if I reloaded page. Before it worked even if i went into search detaljs and then back to start page and into detalj-page. Strange, made a simple sulution but not so nice as it was before. 

* added harts to the search page but if you pushed the hart you got to detalj-page, did not get it to work so good and the links to detail pages also got bad. So I removed it again.

Result, Not as good as the original before I started working on favorits, but still working.

Will now upload this to github and continue to work on trying to solve this on free time, would be nice to have it working.