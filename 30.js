function isArmstrong(n, power)
{
    let x = n;
    let sum = 0;
    while(x > 0)
    {
        let rem = x % 10;
        sum += rem**power;
        // console.log(sum);
        x = Math.floor(x / 10);
    }
    // console.log(sum);
    if(sum == n)
    {
        return `an Armstrong number`;
    }
    return `not an Armstrong number`;
}

let n = 153;
let power = String(n).length;
// console.log(power);
console.log(`The number ${n} is ${isArmstrong(n, power)}`);