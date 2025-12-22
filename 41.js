function sortArray(arr)
{
    for(let i = 0;i < arr.length;i++)
    {
        for(let j = i + 1;j < arr.length;j++)
        {
            if(arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [4,6,2,1,7,2];
console.log(`Array before sorting: ${arr}\nArray after sorting: ${sortArray(arr)}`);