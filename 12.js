// Add all numbers in array
// You can use reduce() method of array to find the sum of all numbers in array

// but using logic way

function addArr(arr){
    let sum = 0;
    for (let x of arr){
        sum += x ;
    }
    return sum;
}

let arr = [1,2,3,5,9,3]
let output = addArr(arr);
console.log(output);