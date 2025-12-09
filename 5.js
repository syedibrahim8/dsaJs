// check if two strings are anagrams

function isAnagram(a, b){
    let str1= a.toLowerCase();
    let str2= b.toLowerCase();
    if (str1.length != str2.length){
        return console.log(`${a} & ${b} are not anagrams`);
    }
    if( str1.split('').sort().join('') == str2.split('').sort().join('')){
        console.log(`${a} & ${b} are anagrams`);
    }else{
        console.log(`${a} & ${b} are not anagrams`);
    }
}
isAnagram("Earth", "heart")