const assert = require("chai").assert;
const CensusAnalyser = require("../Src/StateCensusData.js");
const STATE_CENSUS_FILE_PATH = './resources/StateCensusData.csv';

describe('Indian Census Analyser', () => {
  const obj = new CensusAnalyser();
  var array = [];
  before(function (callback) {
    obj.loadCsvData(STATE_CENSUS_FILE_PATH, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        callback()
        array = result;
        // console.log(array.length)
      }
    });
  });

  it('GivenIndianCensusData_whenLoadsTheNumberOfRecords_ShouldReturnTrue', () => {
    assert.equal(array.length, 29);
  });

  it('GivenIndianCensusData_WhenWrongDataGiven_ShouldReturnFalse', () => {
    assert.notEqual(array.length, 39);
  })

  it('GivenIndiaCensusData_WhenSortedMaxOnState_ShouldReturnSortedState', () => {
    var type = 'State'
    var base = 'State'
    const state = obj.maxResult(array, type, base);
    assert.equal(state, "Sikkim");
  });

  it('GivenIndiaCensusData_WhenSortedLeastOnState_ShouldReturnSortedState', () => {
    var type = 'State'
    var base = 'State'
    const state = obj.minResult(array, type, base);
    assert.equal(state, "Uttar Pradesh");
  });

  it('GivenIndiaCensusData_WhenSortedOnMorePopulationDensity_ShouldReturnSortedData', () => {
    var type = 'Population'
    var base = 'State'
    const state = obj.maxResult(array, type, base);
    assert.equal(state, 'Uttar Pradesh');
  });

  it('GivenIndiaCensusData_WhenSortedOnLeastPopulationDensity_ShouldReturnSortedData', () => {
    var type = 'Population'
    var base = 'State'
    const state = obj.minResult(array, type, base);
    assert.equal(state, 'Sikkim');
  });

  it('GivenIndiaCensusData_WhenSortedOnMoreAreaInSqKm_ShouldReturnSortedData', () => {
    var type = 'AreaInSqKm'
    var base = 'State'
    const state = obj.maxResult(array, type, base);
    assert.equal(state, 'Rajasthan');
  });

  it('GivenIndiaCensusData_WhenSortedOnLeastAreaSqKm_ShouldReturnSortedData', () => {
    var type = 'AreaInSqKm'
    var base = 'State'
    const state = obj.minResult(array, type, base);
    assert.equal(state, 'Sikkim');
  });
  
  it('GivenIndiaCensusData_WhenSortedOnMaxDensityPerSqKm_ShouldReturnSortedData', () => {
    var type = 'DensityPerSqKm'
    var base = 'State'
    const state = obj.maxResult(array, type, base);
    assert.equal(state, 'Bihar');
  });

  it('GivenIndiaCensusData_WhenSortedOnLeastDenityPerSqKm_ShouldReturnSortedData', () => {
    var type = 'DensityPerSqKm'
    var base = 'State'
    const state = obj.minResult(array, type, base);
    assert.equal(state, 'Mizoram');
  });
});