const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('./db')

const PORT = 8092;
const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/products/search', async (request, response) => {
  
  let price = request.query.price;
  let limit = request.query.limit;
  let brand = request.query.brand;
  

  if(brand != null && price != null && limit != null)
  {
    limit = parseInt(limit);
    price = parseInt(price);
    const result = await db.find({'brand': brand, 'price': {$lt : price}}, limit);
    return response.send(result);
  }
  else{
    if(brand != null && price != null){
    
      price = parseInt(price);
      const result = await db.find({'brand': brand, 'price': {$lt : price}}, 12);
      return response.send(result);

      }
    else{
      if(brand != null && limit != null){
        limit = parseInt(limit);
        const result = await db.find({'brand': brand}, limit);
        return response.send(result);
      }
      else{
        if(price != null && limit != null)
        {
          limit = parseInt(limit);
          price = parseInt(price);
          const result = await db.find({'price': {$lt : price}}, limit);
          return response.send(result);
        }
        else{
          if(brand != null)
          {
            const result = await db.find({'brand': brand}, 12);
            return response.send(result);
          }
          else{
            if(price != null)
            {
              price = parseInt(price);
              const result = await db.find({'price': {$lt : price}}, 12);
              return response.send(result);
            }
            else{
              if(limit != null)
              {
                limit = parseInt(limit);
                const result = await db.find({}, limit);
                return response.send(result);
              }
            } 
          }  
        } 
      } 
    } 
  }
  const result = await db.find();
  return response.send(result) 
});

app.get('/products/:id', async (request, response) => {
  
 
  response.send(await db.find({'_id': `${request.params.id}`}));

});

app.get('/', (request, response) => {
  response.send({'ack': true});
});


app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
