function removeSpecific(arr, target)
{
    for(let i = 0;i < arr.length;i++)
    {
        if(arr[i] == target)
        {
            arr.splice(i,1);
        }
    }
    return arr;
}

let arr = [4,6,2,1,7,2];
let target = 2;
console.log(`Array before removing element/s: ${arr}\nTarget: ${target}\nArray after removing target element: ${removeSpecific(arr, target)}`);