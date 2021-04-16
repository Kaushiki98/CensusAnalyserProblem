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
  * @description constant variable is declared to convert csv to json
  * @const csvtojson
*/
const csvtojson = require('csvtojson');

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
  /**
   * Load the data from the provided file 
   * @param {*} csvFile
   * @returns callback with the data in an array in JSON format
   */
  loadCsvData(path, callback) {
    let count = 0;
    fs.createReadStream(path)
      .pipe(csv())
      .on(("data"), () => {
        count += 1;
      })
      .on(("data"), (row) => {
        stateArray.push(row);
      })
      .on("end", () => {
        return callback(count);
      });
  }

  /**
      * Take data array and a field and sort state data 
      * @returns callback with the data in an array in JSON format
      */
  sortByState(path, callback) {
    this.loadCsvData(path, () => {
      csvtojson().fromFile(path).then(stateArray => {
        stateArray.sort((a, b) => {
          let x = a.State.toLowerCase();
          let y = b.State.toLowerCase();
          if (x < y) { return -1; }
        })
        callback(stateArray[1].State)
      });
    });
  }

  /**
      * Take data array and a field to sort by statecode  
      * @returns callback with the data in an array in JSON format
      */
  sortByStateCode(path, callback) {
    this.loadCsvData(path, () => {
      csvtojson().fromFile(path).then(stateArray => {
        var stateCode = stateArray.sort((a, b) => a.StateCode - b.StateCode)
        return callback(stateCode);
      });
    });
  }

  /**
      * Take data array and a field to sort by Population
      * @returns callback with the data in an array in JSON format
      */
  sortByPopulation(path, callback) {
    this.loadCsvData(path, () => {
      csvtojson().fromFile(path).then(stateArray => {
        var population = stateArray.sort((a, b) => a.Population - b.Population);
        return callback(population);
      });
    });
  }

  /**
        * Take data array and a field to sort by Population Density
        * @returns callback with the data in an array in JSON format
        */
  sortByPopulationDensity(path, callback) {
    this.loadCsvData(path, () => {
      csvtojson().fromFile(path).then(stateArray => {
        var populationDensity = stateArray.sort((a, b) => a.Population - b.Population);
        return callback(populationDensity);
      });
    });
  }

  /**
        * Take data array and a field to sort by area
        * @returns callback with the data in an array in JSON format
        */
  sortByArea(path, callback) {
    this.loadCsvData(path, () => {
      csvtojson().fromFile(path).then(stateArray => {
        var area = stateArray.sort((a, b) => a.AreaInSqKm - b.AreaInSqKm);
        return callback(area);
      });
    });
  }
}

module.exports = CensusAnalyser;