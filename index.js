const { getBreedInfo, getDescription } = require("./breedFetcher");

getBreedInfo
  .then((data) => getDescription(data))
  .catch((err) => {
    console.error("Error accured in fatching the data", err);
  });
