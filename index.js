const { fetchBreedInfo } = require("./breedFetcher");

const args = process.argv.slice(2); // Retrieves the breed the user provided from the command line

const breedName = args[0];

fetchBreedInfo(breedName, (error, data) => {
  if (error) {
    console.log(`Error has occured: ${error}`);
  } else {
    console.log(data);
  }
});
