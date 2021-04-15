const csvtoJson = require('csvtojson');

class CensusAnalyser {
    loadCsvData(path, callback) {
        let count;
        csvtoJson()
        .fromFile(path)
        .then((JSON) => {
            console.log(JSON);
            count = Object.keys(JSON).length;
            return callback(count);
        });
    }
}

module.exports = CensusAnalyser;