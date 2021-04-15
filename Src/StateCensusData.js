const csvtojson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');
var stateArray = [];

class CensusAnalyser {

  loadCsvData(path, callback) {
    let count = 0;
    fs.createReadStream(path)
      .pipe(csv())
      .on(("data"), (row) => {
        count += 1;
      })
      .on(("data"), (row) => {
        stateArray.push(row);
      })
      .on("end", () => {
        console.log("Number of records: " + count);
        return callback(count);
      });
  }

}
module.exports = CensusAnalyser;