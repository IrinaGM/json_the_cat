const request = require("request");

const args = process.argv.slice(2); // Retrieves the breed the user provided from the command line

const catsBreedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";
const URL = catsBreedSearch + args[0];

const getBreedInfo = new Promise((resolve, reject) => {
  request(URL, (error, response, body) => {
    if (error) {
      reject();
    }
    resolve(body);
  });
});

getBreedInfo
  .then((data) => console.log(data))
  .catch((err) => {
    console.error("Error accured in fatching the data", err);
  });
