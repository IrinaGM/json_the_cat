const request = require("request");

const catsBreedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedInfo = (breedName, callback) => {
  request(`${catsBreedSearch}${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const catInfo = JSON.parse(body);
    if (!catInfo[0]) {
      return callback("Data is empty. Get your cats strait !!!", null);
    }

    return callback(null, catInfo[0].description);
  });
};

module.exports = { fetchBreedInfo };
