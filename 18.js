// dsa

function rotate(k, arr)
{
    if(k%arr.length == 0)
    {
        return arr;
    }
    k %= arr.length;
    while(k > 0)
    {
        let el = arr.pop();
        arr.unshift(el);
        k--;
    }
    return arr;
}

let arr = [1,2,3,4,5];
let k = 3;
console.log(`The given array after rotated ${k} times will be: `,rotate(k, arr));
