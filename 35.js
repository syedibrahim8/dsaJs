function reverseDigits(n)
{
    let x = n;
    let newNum = 0;
    while(x > 0)
    {
        let rem = x % 10;
        newNum = newNum * 10 + rem;
        x = Math.floor(x / 10); 
    }
    return newNum;
}

let n = 12345;
console.log(`The reversed digits of ${n} is: ${reverseDigits(n)}`);