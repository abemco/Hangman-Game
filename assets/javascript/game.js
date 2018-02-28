// Array of words
const word = ['Paris', 'Amsterdam', 'Miami', 'New York', 'Sydney', 'London', 'Singapore', 'Orlando', 'Rio de Janeiro']
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
console.log(choosenWord);
let underScore = [];
console.log(choosenWord);
// Create underscores based on lenght of word
let generateunderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateunderscore());
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = string.fromCharCode(event.keyCode);
    console.log(keyword);
});
// Check if guess is right
// If right push to right array
// If wrong push to wrong array