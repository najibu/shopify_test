/**
* Shopify node.js API
*/
var shopifyAPI = require('shopify-node-api');

// ---- start Shopify
var shopify = new shopifyAPI({
  verbose: false,
  shop: 'najibu-shopify', // najibu-shopify.myshopify.com 
  shopify_api_key: '8b92fad0f055130172cc145be1ab8cd8', //  API key 
  access_token: 'c14e99a01e61a86241fc790b2d978c00', // API password
});
// ---- end Shopify

var snapshot = {
  lastSync: '2017-03-21 00:00:00'
}

// Get all products
shopify.get('/admin/products.json', function(err, data, headers){
  if (err) {
    return console.log(err);
  }
  console.log(data); // Data contains product json information
  console.log(headers); // Headers returned from request
});
