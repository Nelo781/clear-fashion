// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable
const cheap = MY_FAVORITE_BRANDS[1]['url'];
console.log(cheap)




/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */
console.log('%cMarketPlace dataset',"color: yellow")
 console.log(marketplace);

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable
var nbr = 0;
marketplace.forEach(element => nbr+=1);
console.log('%cNumber of Products',"color: yellow")
console.log(nbr);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have


var brandList = marketplace.map(function (product){
    return product.brand;
});
console.log('%cBrand List',"color: yellow")
console.log(new Set(brandList));




// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
function SortProductsPrice(dataset){
  var sorted = [];
  dataset.forEach(element => sorted.push(element))
  return sorted.sort(function(a,b){
    if (a.price < b.price){
      return -1;
    }
      
    if (a.price > b.price ){
      return 1;
    }
      
    return 0;

  });
  
};

var market_sorted_price = SortProductsPrice(marketplace);
console.log('%cSorted by price',"color: yellow");
console.log(market_sorted_price);


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
function SortProductsDate(dataset){
  var sorted = [];
  dataset.forEach(element => sorted.push(element))
  return sorted.sort(function(a,b){
    
    return new Date(a.date) - new Date(b.date);
  });
}
console.log('%cSorted by date',"color: yellow")
console.log(SortProductsDate(marketplace))



// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
var rangeList = [];
marketplace.forEach(function(element){
  if(element.price > 50 && element.price <100){
    rangeList.push(element);
  }
});
console.log('%c50 < Price < 100',"color: yellow");
console.log(rangeList);

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average

var average = 0;

marketplace.forEach(element => average += element.price);
average = average/marketplace.length;
console.log(average);





/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
var brands = new Set(brandList);
brands.forEach(element => brands[element] = []);
marketplace.forEach(element => brands[element.brand].push({date : element.date, name : element.name, price : element.price}));
console.log('%cSorted by brands',"color: yellow");
console.log(brands);


// 2. Log the variable
// 3. Log the number of products by brands
var brands_qtity =new Set();
brandList.forEach(element => brands_qtity[element] = 0);
marketplace.forEach(element => brands_qtity[element.brand] += 1);
console.log('%cNumber of product per Brand',"color: yellow");
console.log(brands_qtity);

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

console.log('%cSorted by brand and price',"color: yellow");

var brands_sorted = new Set();
brands.forEach(element => brands_sorted[element] = brands[element])
brandList.forEach(element => brands_sorted[element] = SortProductsPrice(brands_sorted[element]));
console.log(brands_sorted)

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort
console.log('%cSorted by brand and date from oldest',"color: yellow")

var brands_dated = new Set()
brands_dated.forEach(element => brands_dated[element] = brands[element])
brands_dated = brands_dated.forEach(element => console.log("%c"+element,"color: yellow",SortProductsDate(brands_dated[element])));




/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products
function get90thprice(products){
  var index = parseInt(products.length*0.9);
  return products[index];
};

var p90 = new Set();
brandList.forEach(element => p90[element]= 0)
brandList.forEach(element => p90[element] = get90thprice(brands_sorted[element]));
console.log("%c9Oth percentil by brand","color:yellow")
console.log(p90)


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.


console.log("%cNew products !","color:yellow");

COTELE_PARIS.forEach(function(element){
  var today = new Date().getTime();
  var realease_date = Date.parse(element.released);
  var diff = today - realease_date;
  var diff_days = diff*(1.15741e-8);
  console.log(element.name);
  if(diff_days<14){
    console.log(true);
  }
  else{
    console.log(false);
  }
})


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

console.log("%creasonable products ? (price below 100$)","color:yellow");
var reasonabe_products = true;
COTELE_PARIS.forEach(function(element){
  if(element.price >= 100){
    reasonabe_products = false;
  }
})
console.log(reasonabe_products);


// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
console.log("%cProduct found !","color:yellow");
COTELE_PARIS.forEach(function(element){
  if (element.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    console.log(element);
  }
})


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
console.log("%cProduct deleted !","color:yellow");
COTELE_PARIS.forEach(function(element){
  if (element.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    console.log(element.name + '\n This element has been removed.');
    COTELE_PARIS.splice(COTELE_PARIS.indexOf(element),1);
  }
});
console.log(COTELE_PARIS);



// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true

//let jacket = blueJacket;
//jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables

/*
console.log(jacket)
console.log(blueJacket)
*/

// 2. What do you notice?
//the two variables share the same reference (here blueJacket)
blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

let jacket = {};
jacket = Object.assign(jacket,blueJacket)
jacket.favorite = true;
console.log("%cJacket","color:yellow");
console.log(jacket);
console.log("%cBlue Jacket","color:yellow");
console.log(blueJacket)

/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
console.log("%cLocal Storage","color:yellow");
localStorage.setItem('favorite brands',MY_FAVORITE_BRANDS);
console.log(localStorage);