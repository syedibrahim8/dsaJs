function isPrime(n)
{
    if(n % 2 == 0)
    {
        return `NOT a prime number.`
    }
    for(let i = 2;i < Math.sqrt(n);i++)
    {
        if(n % i == 0)
        {
            return `NOT a prime number.`;
        }
    }
    return `a prime number`;
}

let n = 3;
console.log(`The number ${n} is ${isPrime(n)}`);