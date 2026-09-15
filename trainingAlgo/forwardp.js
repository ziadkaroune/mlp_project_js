//  ///////////////////////////////////////////////////////////
// const { weightArray, hiddenBiases, outputweights } = newFunction();

// function newFunction() {
//     const weightArray = [
//         [4, 7, 9, 4],
//         [2, 6, 2, 1],
//         [5, 1, 1, 8]
//     ];

//     const outputweights = [1.2, 4.3, 3.5];
//     const hiddenBiases = [2, 1, 1.77];
//     return { weightArray, hiddenBiases, outputweights };
// }

// //////////////////////////////////////////////////////////////


function sigmoid(z){
    return 1 / (1 + Math.exp(-z));
}
function direvee_sigmoid(s){
    return s * (1 - s);
}

function  neuron(inputs , weightsL , bias){
    let result = bias;
    result += inputs.reduce((sum , input , i) => sum + input * weightsL[i] , 0);
  
    return sigmoid(result);
}

function layer(input , weightArray , biasArray){
    return weightArray.map((weight , i) => neuron(input , weight , biasArray[i]));
}

function outputlayer(hlayers , outputweights , bias){
    let output = bias;
    output += hlayers.reduce((sum , hlay , i) => sum + hlay *outputweights[i] , 0);
    return sigmoid(output);
}

function predict(dataX){
        const hlayerOutput = layer(dataX , weightArray , hiddenBiases);
        const output = outputlayer(hlayerOutput , outputweights ,  2.5);
        return output > 0.5 ? 1 : 0;
}
 
 
