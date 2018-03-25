exports.getAccuracy = function(net, testData) {
    let hits = 0;
    testData.forEach((datapoint) => {

      // Run each of the test data through the NN
      let output = net.run(datapoint.input);

      // Round the result and compare with actual result
      let outputArray = [Math.round(output[0]), Math.round(output[1]), Math.round(output[2])];
      if (outputArray[0] === datapoint.output[0] && outputArray[1] === datapoint.output[1] && outputArray[2] === datapoint.output[2]) {
        hits += 1;
      }
    });

    // return the average hit rate
    return parseFloat(hits/testData.length);  
  }