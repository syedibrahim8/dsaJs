// Find average of array

function avg(arr){
    let sum = 0;
    for (let x of arr){
        sum += x ;
    }
    return sum/arr.length;
}

let arr = [1,2,3,5,9,3]
let output = avg(arr);
console.log((output).toFixed(2));