function removeSpaces(str)
{
    return str.split(' ').join('');
}

let str = 'a b c d';
console.log(`${str} after removing white spaces: ${removeSpaces(str)}`);