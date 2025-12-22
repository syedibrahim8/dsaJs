function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

let min = 1, max = 10;
console.log(`A random number between [${min}, ${max}] is: ${randomNumber(min, max)}`);