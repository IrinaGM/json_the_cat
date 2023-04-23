const request = require("request");

const args = process.argv.slice(2); // Retrieves the breed the user provided from the command line

const catsBreedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";
const URL = catsBreedSearch + args[0];

const getBreedInfo = new Promise((resolve, reject) => {
  request(URL, (error, response, body) => {
    if (error) {
      reject(error);
    }
    resolve(body);
  });
});

const getDescription = (str) => {
  const catInfo = JSON.parse(str);
  if (!catInfo[0]) {
    throw new Error("Data ia empty. Get your cats strait !!!");
  }
  console.log(catInfo[0].description);
};

module.exports = { getBreedInfo, getDescription };
