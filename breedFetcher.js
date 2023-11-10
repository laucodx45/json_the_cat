const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function(error, response, body) {
  
    if (!error) {
      const data = JSON.parse(body);
      
      // data is not empty then callback
      if (data.length !== 0) {
        callback(null, data[0].description);
      } else {
        callback('Invalid Cat Breed Name');
      }
    } else {
      callback(error);
    }
  });

};

module.exports = {fetchBreedDescription};