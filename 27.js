function fibonacci(n)
{
    let fib = [0, 1];
    if(n <= 0)
    {
        return `😇 Bade haramkhor ho`;
    }
    else if(n == 1)
    {
        return fib[0];
    }
    for(let i = 2;i < n;i++)
    {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

let n = 10;
console.log(`The fibonacci sequence of upto ${n} terms is: ${fibonacci(n)}`);