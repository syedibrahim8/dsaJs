// check if array is sorted

function sort(arr){
    let original = arr.join('')
    let sorted = arr.sort((x,y)=>x-y).join('')
    if(original != sorted){
        return false
    }
    return true
}
let arr = [2,3,6,8,9]
let output = sort(arr);
console.log(output);