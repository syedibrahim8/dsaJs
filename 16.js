// Intersection of two arrays

function intersect(arr1,arr2){
    let newArr = []
    for (let x of arr1){
        if(arr2.includes(x) && arr1.includes(x)){
            newArr.push(x)
        }
    }
    return newArr;
}

let arr1 = [1,2,3,4]
let arr2 = [2,3,4];

let output = intersect(arr1,arr2)
console.log(output);