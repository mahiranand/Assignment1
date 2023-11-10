const problem4 = (obj) => {

    let ans = [];

    for(let i = 0; i < obj.length; i++){
        ans.push(obj[i].car_year);
    }
    return ans;
}

module.exports = problem4;