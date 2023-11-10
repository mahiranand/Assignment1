const inventory = require('../data')
const problem1 = require('../problem1')

const car = problem1(inventory);

console.log(`car33 is a  ${car.car_year} ${car.car_make} ${car.car_model}`);