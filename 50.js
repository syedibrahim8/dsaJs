function swapVar(a, b)
{
    a = a + b;
    b = a - b;
    a = a - b;
    return `${a}, ${b}`;
}

let a = 5, b = 10;
console.log(`Numbers before swapping: ${a}, ${b}`);
console.log(`Numbers after swapping: ${swapVar(a, b)}`);
// 5 10 -> 15 10 -> 15 5 -> 10 5