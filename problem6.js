const problem6 = (obj) => {

    let ans = [];
    for(let i = 0; i < obj.length; i++){
        if(obj[i].car_make == 'Audi' || obj[i].car_make == 'BMW'){
            ans.push(obj[i]);
        }
    }
    return ans;
}

module.exports = problem6;