function chunks(arr)
{
    let ans = []; // [0,1,2,3,4,5]    [0,1,2,3,4,5,6]
    for(let i = 0;i < arr.length - 1;i += 2)
    {
        ans.push([arr[i], arr[i+1]]);
    }
    // let i = 0;
    // while(i < arr.length - 1)
    // {
    //     ans.push([arr[i], arr[i+1]]);
    //     i += 2;
    // }
    if(arr.length % 2)
    {
        ans.push([arr[arr.length - 1]]);
    }
    return ans
}

let arr = [0,1,2,3,4,5,6];
console.log(`The chunks are:`, chunks(arr));