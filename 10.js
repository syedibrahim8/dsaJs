// count occurrences of element

function occ(arr){
    let repeat = {}
    arr.forEach((x)=>{
        repeat[x] = (repeat[x]||0)+1 
    })
    return repeat
}

let arr = [1,1,2,3,2,4,3,2]
let output = occ(arr);
console.log(output);