const assert = require("chai").assert;
const censusAnalyser = require("../Src/StateCensusData");
const STATE_CENSUS_FILE_PATH = './resources/StateCensusData.csv';
const STATE_CODE_FILE_PATH = './resources/StateCode.csv';

var CensusAnalyser = new censusAnalyser();

describe("IndiaStateCensusAnalyser", () => {
  it("GivenIndianCensusData_whenLoadsTheNumberOfRecords_ShouldReturnTrue", () => {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, (row) => {
      assert.equal(row, 29);
    });
  });

  it("GivenIndianCensusData_WhenWrongDataGiven_ShouldReturnFalse", () => {
    CensusAnalyser.loadCsvData(STATE_CENSUS_FILE_PATH, (row) => {
      assert.notEqual(row, 39);
    });
  });

  it("GivenIndiaCensusData_WhenSortedOnState_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByState(STATE_CENSUS_FILE_PATH, (sorted) => {
      assert.equal(sorted, "Andhra Pradesh");
    });
  });

  it("GivenIndiaCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByPopulation(STATE_CENSUS_FILE_PATH, (data) => {
      assert.equal(data, "Uttar Pradesh");
    });
  });
});

describe("IndiaStateCodeAnalyser", () => {
  it("GivenIndianStateCode_whenLoadsTheNumberOfRecords_ShouldReturnTrue", () => {
    CensusAnalyser.loadCsvData(STATE_CODE_FILE_PATH, (row) => {
      assert.equal(row, 37);
    });
  });

  it("GivenIndianStateCode_WhenWrongDataGiven_ShouldReturnFalse", () => {
    CensusAnalyser.loadCsvData(STATE_CODE_FILE_PATH, (row) => {
      assert.notEqual(row, 30);
    });
  });

  it("GivenIndiaStateCodeFile_WhenSortedByStateCode_ShouldReturnEqual", function () {
    CensusAnalyser.sortByStateCode(STATE_CODE_FILE_PATH, function (data) {
      assert.equal(data, "AN");
    });
  });
});
