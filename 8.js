// find second largest number in an array

function secondLargest(arr){
    let largest = -Infinity;
    let secLargest;
    if(arr.length == 1){
        return "Array has only one element"
    }
    for(let x of arr){
        if(x >= largest){
            secLargest = largest
            largest = x;
        }
    }
    return secLargest
}
let arr = [2];
let output = secondLargest(arr);
console.log(output);