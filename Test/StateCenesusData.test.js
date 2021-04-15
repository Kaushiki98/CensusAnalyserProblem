const assert = require("chai").assert;
const censusAnalyser = require("../Src/StateCensusData");
const INDIA_STATE_CENSUS_FILE_PATH = "./resources/IndiaStateCensusData.csv";

var CensusAnalyser = new censusAnalyser();
describe("IndiaStateCensusAnalyser", function () {
  it("Loads the number of records 29 from csv file", function () {
    CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (count) {
      assert.equal(count, 29);
    });
  });
});