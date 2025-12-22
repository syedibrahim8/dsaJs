function numPalindrome(n)
{
    let x = n;
    let newNum = 0;
    while(x > 0)
    {
        let rem = x % 10;
        newNum = newNum * 10 + rem;
        x = Math.floor(x / 10); 
    }
    if(newNum == n)
    {
        return `a number palindrome`;
    }
    else
    {
        return `not a number palindrome`;
    }
}

let n = 12321;
console.log(`The number ${n} is ${numPalindrome(n)}`);