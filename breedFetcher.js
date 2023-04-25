const request = require("request");

const catsBreedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedInfo = (breedName, callback) => {
  request(`${catsBreedSearch}${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, body);
  });
};

const getDescription = (str) => {
  const catInfo = JSON.parse(str);
  if (!catInfo[0]) {
    throw new Error("Data ia empty. Get your cats strait !!!");
  }
  console.log(catInfo[0].description);
};

module.exports = { fetchBreedInfo, getDescription };
