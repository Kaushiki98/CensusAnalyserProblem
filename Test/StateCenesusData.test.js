const assert = require("chai").assert;
const censusAnalyser = require("../Src/StateCensusData");
const STATE_CENSUS_FILE_PATH = './resources/StateCensusData.csv';
const STATE_CODE_FILE_PATH = './resources/StateCode.csv';
const US_CENSUS_FILE_PATH = "./resources/USCensusData.csv";

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
    CensusAnalyser.sortByPopulation(STATE_CENSUS_FILE_PATH, (population) => {
      assert.equal(population, "Uttar Pradesh");
    });
  });

  it("GivenIndiaCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByPopulationDensity(STATE_CENSUS_FILE_PATH, (populationDensity) => {
      assert.equal(populationDensity, "Uttar Pradesh");
    });
  });

  it("GivenIndiaCensusData_WhenSortedOnArea_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByArea(STATE_CENSUS_FILE_PATH, (data) => {
      assert.equal(data, "Rajasthan");
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

  it("GivenIndiaStateCodeFile_WhenSortedByStateCode_ShouldReturnEqual", () => {
    CensusAnalyser.sortByStateCode(STATE_CODE_FILE_PATH, () => {
      assert.equal(data, "AN");
    });
  });
});

describe("USCensusAnalyser", () => {
  it("GivenUSCensusData_whenLoadsTheNumberOfRecords_ShouldReturnTrue", () => {
    CensusAnalyser.loadCsvData(US_CENSUS_FILE_PATH, (row) => {
      assert.equal(row, 51);
    });
  });

  it("givenUSCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByPopulation(US_CENSUS_FILE_PATH, (population) => {
      assert.equal(population, "California");
    });
  });

  it("givenUSCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", () => {
    CensusAnalyser.sortByPopulationDensity(US_CENSUS_FILE_PATH, (population) => {
      assert.equal(population, "District of Columbia");
    });
  });

  it("givenUSCensusData_WhenSortedOnArea_ShouldReturnEqual", () => {
    CensusAnalyser.sortByArea(US_CENSUS_FILE_PATH, (area) => {
      assert.equal(area, "Alaska");
    });
  });
});