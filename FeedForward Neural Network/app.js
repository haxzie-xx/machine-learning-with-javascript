const brain = require('brain.js');
const shuffle = require('./utilities/shuffle').shuffle;
const getAccuracy = require('./utilities/getAccuracy').getAccuracy;
const DATA = require('./data/iris_data').DATA;
const SPLIT = 99;

// Split the data to training and testing data
const trainData = DATA.slice(0, SPLIT);
const testData = DATA.slice(SPLIT + 1);

// Create a simple feed forward neural network with backpropagation
var net = new brain.NeuralNetwork({
    activation: 'sigmoid',  // activation function
    hiddenLayers: [6],      // number of hidden layers
    iterations: 500,        // number of iterations
    learningRate: 0.1       // global learning rate, useful when training using streams
});

// Train the NewuralNetwork using the training data
net.train(trainData);

console.log('accuracy : ' + getAccuracy(net, testData));
