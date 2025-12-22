function digFreq(n)
{
    let obj = {};
    let x = n;
    while(x > 0)
    {
        let rem = x % 10;
        obj[rem] = obj[rem] || 0;
        obj[rem]++;
        x = Math.floor(x / 10);
    }
    return obj;
}

let n = 112444;
console.log(`The digit frequency of ${n} is:`, digFreq(n));