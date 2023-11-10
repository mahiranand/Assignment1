const inventory = require('../data');
const problem3 = require('../problem3');

const sortedCars = problem3(inventory);

for(let i = 0; i < sortedCars.length; i++){
    console.log(sortedCars[i]);
}