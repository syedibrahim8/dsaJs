function isPrime(n)
{
    if(n % 2 == 0 || n == 1)
    {
        return false;
    }
    for(let i = 2;i <= Math.sqrt(n);i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

let start = 1, end = 10;
let primes = [];
for(let i = start;i <= end;i++)
{
    if(isPrime(i))
    {
        primes.push(i);
    }
}
console.log(`The primes in the range between [${start}, ${end}] is/are: ${primes}`);