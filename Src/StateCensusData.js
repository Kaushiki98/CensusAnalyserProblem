const csvtoJson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');
var array = [];

class CensusAnalyser {
  loadCsvData(path, callback) {
    fs.createReadStream(path)
      .pipe(csv())
      .on(("data"), (row) => {
        array.push(row);
        console.log("data : "+JSON.stringify(row))
      })
      .on("end", () => {
        callback(array.length)
        console.log('CSV file successfully processed');
      });
  } 
  csvToJsonConversion(path, callback) {
    fs.createReadStream(path)
    .pipe(csv())
    .on('end',() => {
      callback(path)
    })
  }
}

module.exports = CensusAnalyser;