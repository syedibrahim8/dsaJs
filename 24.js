function firstNonRepeatingChar(str)
{
    let cnt = 0;
    for(let i = 0, j = 0;j < str.length;)
    {
        if(str[i] == str[j])
        {
            j++;
            cnt++;
        }
        else
        {
            if(cnt == 1)
            {
                return str[i];
            }
            i = j;
            cnt = 0;
        }
    }
    return;
}

let str = 'aabcd';
console.log(`The first non repeating character in the given string is: ${firstNonRepeatingChar(str)}`);