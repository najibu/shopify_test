/**
* Shopify node.js API
*/
var shopifyAPI = require('shopify-node-api');
var config = require('./config.json');


// ---- start Shopify
var shopify = new shopifyAPI({
  verbose: false,
  shop: config.shop, // najibu-shopify.myshopify.com 
  shopify_api_key: config.shopify_api_key, //  API key 
  access_token: config.access_token, // API password
});
// ---- end Shopify

var snapshot = {
  lastSync: '2017-03-21 00:00:00'
}

// Get all products
shopify.get('/admin/products.json', {limit: 250}, function(err, data, headers){
  if (err) {
    return console.log(err);
  }
  console.log(data); // Data contains product json information
  console.log(headers); // Headers returned from request
});

function callback(err, data, headers) {
  var api_limit = headers['http_x_shopify_shop_api_call_limit'];
  console.log( api_limit ); // "1/40"
}
