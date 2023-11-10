const problem3 = (obj) =>{
    let ans = [];

    for(let i = 0; i < obj.length; i++){
        ans.push(obj[i].car_model.toUpperCase());
    }
    ans.sort();
    return ans;
}

module.exports = problem3;