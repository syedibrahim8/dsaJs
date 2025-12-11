// smallest element in array

function findSmallest(arr){
    let smallest = Infinity;
    for(let x of arr){
        if(x <= smallest){
            smallest = x
        }
    }
    return smallest;
}

let arr = [5,6,8,3,9,-5]
let output = findSmallest(arr);
console.log(output);