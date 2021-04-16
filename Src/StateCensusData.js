const csvtojson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');
var stateArray = [];

class CensusAnalyser {
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
    this.loadCsvData(path, function () {
      csvtojson().fromFile(path).then(stateArray => {
        stateArray.sort((a, b) => {
          let x = a.State.toLowerCase();
          let y = b.State.toLowerCase();
          if (x < y) { return -1; }
        })
        callback(stateArray[1].State)
      })
    });
  }
  sortByStateCode(path, callback) {
    this.loadCsvData(path, function (data) {
    csvtojson().fromFile(path).then(stateArray => {
    stateArray.sort((a, b) => a.StateCode - b.StateCode)
    return callback(stateArray);
    }); 
  })
}
}
module.exports = CensusAnalyser;