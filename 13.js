// sum of even and odd numbers in an array

function evenOdd(arr){
    let even = 0;
    let odd = 0;
    for(let x of arr){
        if(x%2==0){
            even += x;
        }else{
            odd += x
        }
    }
    return {even,odd}
}

let arr = [1,2,3,4,5,6,7,8,9]
let output = evenOdd(arr)
console.log(output);