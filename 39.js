function fizzBuzz(n)
{
    let arr = [];
    for(let i = 1;i <= n;i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            arr.push("FizzBuzz");
        }
        else if(i % 3 == 0)
        {
            arr.push("Fizz");
        }
        else if(i % 5 == 0)
        {
            arr.push("Buzz");
        }
        else
        {
            arr.push(i);
        }
    }
    return arr;
}

let n = 100;
console.log(`The sequence with FizzBuzz upto 100 is: ${fizzBuzz(n)}`);