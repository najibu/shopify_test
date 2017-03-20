/**
* Shopify node.js API
*/
var shopifyAPI = require('shopify-node-api');

// Set variables for our request
var Shopify = new shopifyAPI({
  shop: 'najibu-shopify', // najibu-shopify.myshopify.com 
  shopify_api_key: '800e670759d58706278c1e84c8a504cd', //  API key 
  access_token: 'b6d7a1a1eeb740c0c4252ea3fd1d897b', // temporary token 
  password: 'z8zgBtKG42Iw'
});

var snapshot = {
  lastSync: '2016-12-1 00:00:00'
}

Shopify.get('admin/products.json', function(err, data, headers){
  console.log(data); // Data contains product json information
  console.log(headers); // Headers returned from request
});
