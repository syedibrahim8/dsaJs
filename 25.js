function duplicate(str)
{
    let cnt = 0;
    let arr = [];
    for(let i = 0, j = 0;j < str.length;)
    {
        if(str[i] == str[j])
        {
            j++;
            cnt++;
        }
        else
        {
            if(cnt > 1)
            {
                arr.push(str[i]);
            }
            i = j;
            cnt = 0;
        }
    }
    if(cnt > 1)
    {
        arr.push(str[str.length - 1]);
    }
    return arr;
}

let str = "aabbcdd";
console.log(`The repeated characters in the string is/are:`, duplicate(str));