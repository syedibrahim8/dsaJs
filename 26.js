function factorial(num)
{
    if(num < 0)
    {
        return `'Negative numbers do not have factorial!!!'`;
    }
    let fact = 1;
    for(let i = 1;i <= num;i++)
    {
        fact *= i;
    }
    return fact;
}
let num = -1;
console.log(`The factorial of ${num} is: ${factorial(num)}`);