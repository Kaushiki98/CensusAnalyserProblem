/*************************************************************
 *
 * Execution       : default node cmd> node StateCensusAnalyser.js
 * Purpose         : Analayze India & US Census Data
 *
 * @description    : Analayze India & US Census Data from csvfile,
 *                   check number of records in csvFiles 
 *                   and sort data by state, population,
 *                   population density, totalArea, etc. 
 *                   to compute new data as per sort accordingly.
 *
 * @file           : StateCensusAnalyser.js
 * @overview       : Analayze India & US Census Data
 * @module         : Node.js and npm installed mocha, chai, nyc 
 *                   and local packages are added.
 * @version        : 1.0
 * @since          : 08/04/2021
 *
 * **********************************************************/

/**
 * @description constant variable is declared to store fs module
 * @const fs
 */
const fs = require('fs');

/**
 * @description constant variable is declared to store csv-parse module
 * @const csv
 */
const csv = require('csv-parser');
const { resolve } = require('path');
const { error } = require('console');

/**
 * @description variable is declared to store array in stateArray 
 * @const stateArray
 */
var stateArray = [];

/**
 * @description Class CensusAnalyser
 * @class CensusAnalyser
 */
class CensusAnalyser {
  constructor() {
  }
  loadCsvData(Path, callback) {
    fs.createReadStream(Path)
      .pipe(csv({}))
      .on('data', (data) => stateArray.push(data))
      .on('end', () => {
        return callback(null, stateArray)
      });
  };

  swap(array, j) {
    let temp;
    temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }

  sortingData(array, type) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (type == 'State')
          if (parseInt(array[j].State) > parseInt(array[j + 1].State))
            this.swap(array, j);
        if (type == 'Population')
          if (parseInt(array[j].Population) > parseInt(array[j + 1].Population))
            this.swap(array, j);
        if (type == 'AreaInSqKm')
          if (parseInt(array[j].AreaInSqKm) > parseInt(array[j + 1].AreaInSqKm))
            this.swap(array, j);
        if (type == 'DensityPerSqKm')
          if (parseInt(array[j].DensityPerSqKm) > parseInt(array[j + 1].DensityPerSqKm))
            this.swap(array, j);
      }
    }
    return array;
  }

  maxResult(array, type, base) {
    const result = this.sortingData(array, type);
    if (base == 'State')
      return result[result.length - 1].State
  }

  minResult(array, type, base) {
    const result = this.sortingData(array, type, base);
    if (base == 'State')
      return result[0].State
  }
}

module.exports = CensusAnalyser;