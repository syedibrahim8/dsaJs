function minMax(arr)
{
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0;i < arr.length;i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return {min, max};
}

let arr = [4,6,2,1,7,2];
console.log(`Largest element: ${minMax(arr).max}\nSmallest element: ${minMax(arr).min}`);