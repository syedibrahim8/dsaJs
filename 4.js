// Count vowels & consonants in a string

function alph(str){
    let input = str.toLowerCase().split('')
    let vowel = 0;
    let consonants = 0;
    let vowels = ["a","e","i","o","u"]
    for(let x of input){
        if(vowels.includes(x)){
            vowel++;
        }else{
        consonants++;
        }
    }
    console.log({vowel,consonants});
}
alph("Education")