// Reverse the words in a sentence

function reverseWords(sentence){
    const output = sentence.split(' ').reverse().join(' ')
    console.log(output);
}
reverseWords("I love coding")