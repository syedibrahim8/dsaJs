// Check if a string is a palindrome

function palindrome(str){
    let input = str.toLowerCase()
    let palindrome = input.split('').reverse().join('')
    if(input != palindrome){
        return console.log(`${str} is not a palindrome`);
    }
    console.log(`${str} is a palindrome`);
}
palindrome("eye")