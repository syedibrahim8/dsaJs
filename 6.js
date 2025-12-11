// Find largest element in an array

function findLargest(arr){
    let largest = -Infinity;
    for(let x of arr){
        if(x >= largest){
            largest = x
        }
    }
    return largest;
}

let arr = [-8,-5,-3];
let output = findLargest(arr)
console.log(output);