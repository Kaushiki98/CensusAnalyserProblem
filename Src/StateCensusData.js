const fs = require('fs');
const csv = require('csv-parser');
var stateArray = [];

class CensusAnalyser {

  csvToJsonConversion(path, callback) {
    var promise = new Promise(function (resolve, reject) {
      csvtoJson()
        .fromFile(path)
      resolve("Converted successfully");
      reject("Conversion rejected");
    });
    promise.
      then(function () {
        return callback(data);
      }).
      catch(function () {
        console.log("Error encountered");
      });
  }

  loadCsvData(path, callback) {
    let count = 0;
    fs.createReadStream(path)
      .pipe(csv())
      .on(("data"), (row) => {
        count += 1;
      })
      .on(("data"), (row) => {
        stateArray.push(row);
        //      console.log("data : "+JSON.stringify(row))
      })
      .on("end", () => {
        console.log("Number of records: " + count);
        return callback(count);
      });
  }
}
module.exports = CensusAnalyser;