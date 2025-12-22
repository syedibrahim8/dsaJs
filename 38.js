function skipThree()
{
    let arr = []
    for(let i = 1;i <= 100;i++)
    {
        if(i % 3 == 0)
        {
            continue;
        }
        arr.push(i);
    }
    return arr;
}

console.log(`The sequence of numbers from 1-100 skipping 3: ${skipThree()}`);