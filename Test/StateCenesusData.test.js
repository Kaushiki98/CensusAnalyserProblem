const assert = require("chai").assert;
const censusAnalyser = require("../Src/StateCensusData");
const STATE_CENSUS_FILE_PATH = './resources/StateCensusData.csv';
const STATE_CODE_FILE_PATH = './resources/StateCode.csv';

var CensusAnalyser = new censusAnalyser();

describe("IndiaStateCensusAnalyser", () => {
  it("Loads the number of records 29 from csv file", () => {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, (row) => {
      assert.equal(row, 29);
    });
  });

  it("Given wrong INDIA_STATE_CENSUS_FILE_PATH", () => {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, (row) => {
      assert.notEqual(row, 39);
    });
  });

  it("givenIndiaCensusData_WhenSortedOnState_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByState(STATE_CENSUS_FILE_PATH, (sorted) => {
      assert.equal(sorted, "Andhra Pradesh");
    });
  });
  
});

describe("IndiaStateCodeAnalyser", () => {
  it("Loads the number of records 37 from csv file", () => {
    CensusAnalyser.loadCsvData(STATE_CODE_FILE_PATH, (row) => {
      assert.equal(row, 37);
    });
  });

  it("Given wrong INDIA_STATE_CODE_FILE", () => {
    CensusAnalyser.loadCsvData(STATE_CODE_FILE_PATH, (row) => {
      assert.notEqual(row, 30);
    });
  });
});
