const inventory = require('../data');
const problem4 = require('../problem4');

const years = problem4(inventory);

for(let i = 0; i < years.length; i++){
    console.log(years[i]);
}