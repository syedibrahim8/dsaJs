function flattenArray(arr)
{
    return arr.flat(Infinity);
}

let arr = [1, 2, [3, 4], [[5]]];
console.log(`The array after flattening:`, flattenArray(arr));