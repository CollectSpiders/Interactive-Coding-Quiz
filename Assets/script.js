// Get references to html elements
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var choicesContainer = document.getElementById("choices");


// initialize variables
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;

// an array of quiz questions (numbered comments for convience)
var questions = [
    // question # 1
    {
        question: "",
        choices: ["", "", "", ""],
        answer: 0,
    },
    {
        question: "",
        choices: ["", "", "", ""],
        answer: 0,
    },
    {
        question: "",
        choices: ["", "", "", ""],
        answer: 0,
    }
/*  {
        question: "",
        choices: ["", "", "", ""],
        answer: 0,
    } */
];

// this function starts the quiz
function startQuiz() {
    quizContainer.style.display = "block";
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
}

// this displays a single question
function showQuestion() {

}

// Checks the selected answer
function checkAnswer(event) {

}

// this updates the timer
function updateTimer() {

}

// Fuction to end the quiz
function endQuiz() {

}

// event listener for the initial submission 


// event listener for the start button
startButton.addEventListener("click", startQuiz);
