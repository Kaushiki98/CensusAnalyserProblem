const csvtojson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');
var stateArray = [];

class CensusAnalyser {

  // csvToJsonConversion(path) {
  //   return new Promise(function () {
  //     csvtoJson().fromFile(path)
  //   });
  // }

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

  sortByState(path, callback) {
    csvtojson()
    .fromFile(path)
    .then((stateArray) => {
        let sorted = stateArray.sort((a , b) => {
          a.State.localeCompare(b.State)
        console.log("sorted: "+ sorted)
        return callback(sorted);
        });
    });
    }

}
module.exports = CensusAnalyser;