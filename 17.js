// Union of two arrays

function union(arr1,arr2){
    let newArr = []
    for(let x of arr1){
        if(!newArr.includes(x)){
            newArr.push(x)
        }
    }
    for(let x of arr2){
        if(!newArr.includes(x)){
            newArr.push
        }
    }
    return newArr.sort((x,y)=>x-y)
}

let arr1 = [1,2,4]
let arr2 = [3,4,5]

let output = union(arr1,arr2)
console.log(output);