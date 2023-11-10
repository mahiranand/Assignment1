const inventory = require('../data');
const problem2 = require('../problem2');

const car = problem2(inventory);

console.log(`Last car is a ${car.car_make} ${car.car_model}`);