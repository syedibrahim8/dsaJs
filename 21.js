function longestWord(str)
{
    let longest = "";
    let arr = str.split(' ');
    for(x of arr)
    {
        if(x.length > longest.length)
        {
            longest = x;
        }
    }
    return longest;
}

let str = "I love Programming";
console.log(`The longest word in the string is:`,longestWord(str));