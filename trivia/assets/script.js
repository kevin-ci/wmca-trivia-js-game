const triviaQuestions = [
    {
      question: "Which element has the chemical symbol 'Ir'?",
      options: ["Iron", "Iridium", "Iodine", "Indium"],
      correctAnswer: "Iridium"
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2"
    },
    {
      question: "In what year did the Russian Revolution take place?",
      options: ["1917", "1923", "1905", "1932"],
      correctAnswer: "1917"
    },
    {
      question: "Who wrote the play 'Waiting for Godot'?",
      options: ["Samuel Beckett", "William Shakespeare", "Anton Chekhov", "Harold Pinter"],
      correctAnswer: "Samuel Beckett"
    },
    {
      question: "What is the largest prime number less than 100?",
      options: ["89", "97", "93", "99"],
      correctAnswer: "97"
    },
    {
      question: "Which gas is the most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen"
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
      correctAnswer: "Alexander Fleming"
    },
    {
      question: "In which year was the first successful human heart transplant performed?",
      options: ["1954", "1967", "1973", "1982"],
      correctAnswer: "1967"
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which element is the most abundant in the Earth's crust?",
      options: ["Aluminum", "Silicon", "Oxygen", "Iron"],
      correctAnswer: "Oxygen"
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["299,792 km/s", "300,000 km/s", "250,000 km/s", "350,000 km/s"],
      correctAnswer: "299,792 km/s"
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Jane Goodall"],
      correctAnswer: "Marie Curie"
    },
    {
      question: "Which planet is known as the 'Evening Star'?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Venus"
    },
    {
      question: "In what year did the Berlin Wall fall?",
      options: ["1989", "1991", "1985", "1993"],
      correctAnswer: "1989"
    },
    {
      question: "Who wrote 'The Prince'?",
      options: ["Niccolò Machiavelli", "Thomas Hobbes", "John Locke", "Jean-Jacques Rousseau"],
      correctAnswer: "Niccolò Machiavelli"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Which mathematician is known for the Fibonacci sequence?",
      options: ["Euclid", "Leonhard Euler", "Fibonacci", "Pascal"],
      correctAnswer: "Fibonacci"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswer: "Mitochondria"
    },
    {
      question: "Who is the author of 'Crime and Punishment'?",
      options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
      correctAnswer: "Fyodor Dostoevsky"
    },
    {
      question: "Which chemical element has the symbol 'Sn'?",
      options: ["Sulfur", "Tin", "Sodium", "Titanium"],
      correctAnswer: "Tin"
    },
    {
      question: "In which year did World War I begin?",
      options: ["1914", "1916", "1918", "1920"],
      correctAnswer: "1914"
    },
    {
      question: "What is the only planet in our solar system that rotates clockwise?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Venus"
    },
    {
      question: "Who developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Erwin Schrödinger"],
      correctAnswer: "Albert Einstein"
    },
    {
      question: "Which mountain is the tallest in Africa?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Elbrus"],
      correctAnswer: "Mount Kilimanjaro"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      correctAnswer: "Au"
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      options: ["Niels Bohr", "Isaac Newton", "Max Planck", "Albert Einstein"],
      correctAnswer: "Max Planck"
    },
    {
      question: "Which composer wrote 'The Four Seasons'?",
      options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Antonio Vivaldi", "Johann Sebastian Bach"],
      correctAnswer: "Antonio Vivaldi"
    },
    {
      question: "In what year did the Industrial Revolution begin?",
      options: ["1750", "1800", "1850", "1900"],
      correctAnswer: "1750"
    }
  ];

let questionIndex = 0;
let correctAnswer = 0;
const totalQuestions = triviaQuestions.length;
const questionDiv = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const statusDiv = document.getElementById("status");
const answerArea = document.getElementById("answer-area");

function updateStatus() {
    statusDiv.innerText = `Correct answers: ${correctAnswer}/${totalQuestions}`;
}

function displayQuestion(idx) {
    if (idx == totalQuestions) {
        questionDiv.innerText = "Quiz over!";
        answerArea.innerHTML = "";
        return;
    }
    let currQuestion = triviaQuestions[idx];
    questionDiv.innerText = currQuestion.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currQuestion.options[i];
    }
}

function checkAnswer(event) {
    let chosenAnswer = event.target.innerText;
    if (chosenAnswer === triviaQuestions[questionIndex].correctAnswer) {
        correctAnswer++;
    }
    questionIndex++;
    updateStatus();
    displayQuestion(questionIndex);
}

for (let button of answerButtons) {
    button.addEventListener('click', checkAnswer);
}

displayQuestion(questionIndex);