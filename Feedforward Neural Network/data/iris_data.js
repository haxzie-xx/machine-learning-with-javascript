const fs = require('fs');
var path = require('path');
const shuffle = require('../utilities/shuffle').shuffle;

// Read the json data of the dataset
let rawData = fs.readFileSync(path.resolve(path.join(__dirname,'iris.json')));
let iris = shuffle(JSON.parse(rawData));

function getDataSet(){
    let DATA = [];
    iris.forEach(data => {

        // Convert the labels to output format
        let outputs = [];
        if (data.species === "setosa")
            outputs = [1, 0, 0];
        else if(data.species === "versicolor")
            outputs = [0, 1, 0];
        else if(data.species === "virginica")
            outputs = [0, 0, 1];
        else
            outputs = [0, 0, 0];

        // Prepare the inputs without the labels
        let inputs = [data.sepal_length, data.sepal_width, data.petal_length, data.petal_width];

        // add the input and corresponding output to the Dataset
        let data_obj = {
            input: inputs,
            output : outputs
        };
        DATA.push(data_obj);
    });

    return DATA;
}

exports.DATA = getDataSet();