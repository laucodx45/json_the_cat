const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search'

request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});