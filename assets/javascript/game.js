// Array of words
const word = ['paris', 'amsterdam', 'miami', 'new york', 'sydney', 'london', 'singapore', 'orlando', 'rio de janeiro']
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(choosenWord);

// Create underscores based on lenght of word
let generateunderScore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateunderScore());
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
//  If users guess is right
    if (choosenWord.indexOf(keyWord) > -1) {
      // add to right words array
      rightWord.push(keyWord);
      docUnderScore[0].innerHTML = underScore.join('');
    //   replace underscore with right letter
      underScore[choosenWord.indexOf(keyWord)] = keyWord
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        if (underScore.join('') == choosenWord) {
            alert('You Win');
        }
    } else {
         wrongWord.push(keyWord);
         docWrongGuess[0].innerHTML = wrongWord;
    }
});

innerHTML = generateunderScore().join(' ');

// Check if guess is right
// If right push to right array
// If wrong push to wrong array