function ifSumExists(arr, sum)
{
    for(let i = 0;i < arr.length;i++)
    {
        for(let j = i + 1;j < arr.length;j++)
        {
            if(arr[i] + arr[j] == sum)
            {
                return `exists`;
            }
        }
    }
    return `does not exist`;
}

let arr = [1,2,3,4,5,6];
let sum = 12;
console.log(`The pair with sum = ${sum}, ${ifSumExists(arr, sum)}`);