const problem4 = require("../problem4");
const inventory = require('../data');

let partialAns = problem4(inventory)

for(let i = 0; i < partialAns.length; i++){
    if(partialAns[i] < 2000){
        console.log(partialAns[i]);
    }
}