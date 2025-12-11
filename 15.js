// Find missing number (1 to N)
// works for 1 missing number
function missing(arr){
    let sum = 0;
    for (let x of arr){
        sum += x ;
    }
    let sumN = (arr[arr.length-1]*(arr[arr.length-1]+1)/2)
    return sumN-sum;
}
let arr = [1,2,4,5];
let output = missing(arr);
console.log(output);