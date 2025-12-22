function mergeSortedArrays(arr1, arr2)
{
    let newArr = [];
    let i = 0, j = 0;
    while(i < arr1.length || j < arr2.length)
    {
        if(arr1[i] < arr2[j])
        {
            newArr.push(arr1[i]);
            i++;
        }
        else
        {
            newArr.push(arr2[j]);
            j++;
        }
    }
    return newArr;
}

let arr1 = [1,3,5], arr2 = [2,4,6];
console.log(`The array formed after two given arrays is: `,mergeSortedArrays(arr1, arr2));