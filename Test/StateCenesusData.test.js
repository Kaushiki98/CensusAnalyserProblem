const assert = require("chai").assert;
const censusAnalyser = require("../Src/StateCensusData");
const STATE_CENSUS_FILE_PATH = './resources/StateCensusData.csv';

var CensusAnalyser = new censusAnalyser();

describe("IndiaStateCensusAnalyser", function () {
  it("Loads the number of records 29 from csv file", function () {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, function (row) {
      assert.equal(row, 29);
    });
  });
  it("Given wrong INDIA_STATE_CENSUS_FILE_PATH", function () {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, function (row) {
        assert.notEqual(row, 29);
    });
});
});
