function countPosNegZeros(arr) {
    let obj = {
        pos: 0,
        neg: 0,
        zero: 0
    }
    for(let i = 0;i < arr.length;i++)
    {
        if(arr[i] > 0)
        {
            obj.pos++;
        }
        else if(arr[i] < 0)
        {
            obj.neg++;
        }
        else
        {
            obj.zero++;
        }
    }
    return obj;
}

let arr = [1,2,3,4,5,0,-1,-2,-3,0,0,-4];
console.log(countPosNegZeros(arr));