function gcd(n1, n2)
{
    while(n1 > 0 && n2 > 0)
    {
        if(n1 >= n2)
        {
            n1 -= n2;
            // console.log(n1, n2);
        }
        else
        {
            n2 -= n1;
            // console.log(n1, n2);
        }
    }
    // console.log(n1, n2);
    return n1 ? n1 : n2;
}

function lcm(n1, n2, hcf)
{
    return Math.floor((n1 * n2)/hcf);
}

let n1 = 6, n2 = 8;
let hcf = gcd(n1, n2), lcmAns = lcm(n1, n2, hcf);
console.log(`Numbers: ${n1},${n2}\nGCD: ${hcf}\nLCM: ${lcmAns}`);