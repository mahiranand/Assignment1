const inventory = require("../data");
const problem6 = require("../problem6");

let ans = problem6(inventory);
ans = JSON.stringify(ans);

console.log(ans);