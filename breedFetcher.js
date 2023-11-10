const request = require('request');

const breed = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, function(error, response, body) {
  
  if (error) {
    console.error('error: invalid breedName', error);
    process.exit(1);
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.error('Invalid breedName');
    process.exit(1);
  }

  console.log(data[0].description);
  
});