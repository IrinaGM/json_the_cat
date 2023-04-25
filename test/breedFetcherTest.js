const { fetchBreedInfo } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedInfo", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedInfo("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("returns an error string when invalid / non-existent breed is passed in, via callback", (done) => {
    fetchBreedInfo("", (err, desc) => {
      // expect that no data is returned
      assert.equal(desc, null);

      const expectedDesc = "Data is empty. Get your cats strait !!!";

      // compare returned error
      assert.equal(expectedDesc, err);

      done();
    });
  });
});
