const axios = require('axios');
const cheerio = require('cheerio');
const {'v5': uuidv5} = require('uuid');
//lien api: http:/dedicatedbrand.com/en/loadfilter

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  return $('.productList-container .productList')
    .map((i, element) => {
      const brand = "Dedicated"
      const name = $(element)
        .find('.productList-title')
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = parseInt(
        $(element)
          .find('.productList-price')
          .text()
      );

      const _id = uuidv5($(element)
      .find('.productList-image')
      .text()
      .trim()
      .replace(/\s/g, ' '), uuidv5.URL);

      return {brand, name, price,_id};
    })
    .get();
};


/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};
