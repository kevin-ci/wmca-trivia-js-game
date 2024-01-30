let words = [
    "cryptocurrency",
    "juxtaposition",
    "breathtaking",
    "exponential",
    "mnemonic",
    "pneumonia",
    "symphony",
    "quizzical",
    "vexatious",
    "zoologist",
    "razzmatazz",
    "jamboree",
    "labyrinthine",
    "onomatopoeia",
    "quixotic",
    "xylography",
    "hyperbolic",
    "phosphorescent",
    "quagmire",
    "knucklehead"
];
let randomIndex = Math.floor(Math.random() * words.length);
const secretWord = words[randomIndex];


let lives = 5;
let guessedLetters = [];

const livesElement = document.getElementById("lives-display");
const wordElement = document.getElementById("word-display");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("submit");
const statusElement = document.getElementById("status");

function drawLives() {
    livesElement.innerText = lives;
}
drawLives();

function drawWord() {
    let toDisplay = "";
    for (let letter of secretWord) {
        if (guessedLetters.includes(letter)) {
            toDisplay += `${letter} `;    
        }
        else {
            toDisplay += "_ ";
        }
    }
    wordElement.innerText = toDisplay;
}
drawWord();

function handleInput() {
    statusElement.innerText = "";
    let userText = input.value;
    if (/^[a-zA-Z]$/.test(userText)) {
        if (guessedLetters.includes(userText.toLowerCase())) {
            statusElement.innerText = "You already guessed that letter.";
        }
        else {
            guessedLetters.push(userText.toLowerCase());
            handleGuess(userText);
        }
    }
    else {
        statusElement.innerText = "Invalid input."
    }
    inputElement.value = "";
}

function handleGuess(letter) {
    if (secretWord.includes(letter)) {
        drawWord();
    }
    else {
        lives--;
        drawLives();
    }
    checkEndGame();
}

function checkEndGame() {
    if (lives <= 0) {
        statusElement.innerText = `You lose! The word was ${secretWord}.`;
        return;
    }

    for (let letter of secretWord) {
        if (!guessedLetters.includes(letter)) {
            return;
        }
    }
    statusElement.innerText = "You win!";
    buttonElement.removeEventListener('click', handleInput);
}

buttonElement.addEventListener('click', handleInput);