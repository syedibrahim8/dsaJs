function replaceNegs(arr)
{
    for(let i = 0;i < arr.length;i++)
    {
        if(arr[i] < 0)
        {
            arr[i] = 0;
        }
    }
    return arr;
}

let arr = [1,2,-1,-2,-4,5,6,0,0];
// console.log(arr);
console.log(`Array before replacing:`,arr);
console.log(`Array after replacing:`,replaceNegs(arr));