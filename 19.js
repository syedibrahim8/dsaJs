function zerosToEnd(arr)
{
    let i = 0, j = 1;
    while(j < arr.length)
    {
        if(arr[i] == 0)
        {
            if(arr[j] == 0)
            {
                j++;
            }
            else
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            }
        }
        else
        {
            i++;
        }
    }
    return arr;
}

let arr = [0,1,0,3,12];
console.log(`The array after moving all zeroes to the end: `,zerosToEnd(arr));