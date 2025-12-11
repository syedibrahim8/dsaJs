// Remove duplicates (no set)

function noDup(arr){
    let newArr = []
    for(let x of arr){
        if(!newArr.includes(x)){
            newArr.push(x)
        }
    }
    return newArr;
}

let arr = [1,1,2,2,2,3,3,3,4,4]
let output = noDup(arr);
console.log(output);