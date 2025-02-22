/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const adressparis = require('./sources/adress_paris');
const mudjeans = require('./sources/mud_jeans')
const eshops ={dedicated:"https://www.dedicatedbrand.com/en/men/jackets",adresse : "https://adresse.paris/630-toute-la-collection",mudjeans:"http://mudjeans.eu/collections/men"}
var fs = require('fs')
async function sandbox (eshops) {
  try {
    console.log(`🕵️‍♀️  browsing ${eshops} source`);

    const dedicated_products = await dedicatedbrand.scrape(eshops.dedicated);
    console.log(dedicated_products);
    console.log('dedicated done');

    const adresse_products = await adressparis.scrape(eshops.adresse)
    console.log(adresse_products)
    console.log('adresse done');

    const mudjeans_products = await mudjeans.scrape(eshops.mudjeans)
    console.log(mudjeans_products)
    console.log('mud jeans done');

    var products_str = JSON.stringify(dedicated_products)
    products_str+= JSON.stringify(adresse_products)
    products_str+= JSON.stringify(mudjeans_products)
    
    fs.writeFileSync("../client/scraped_products.json",products_str);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  


  
}

sandbox(eshops);
