// Get references to html elements
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var choicesContainer = document.getElementById("choices");
var timeElement = document.getElementById("time");
var startButton = document.getElementById("start-btn");
var gameOverContainer = document.getElementById("game-over-container");
var scoreElement = document.getElementById("score");
var initialsForm = document.getElementById("initials-form");
var initialsInput = document.getElementById("initials");


// initialize variables
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;

// an array of quiz questions (numbered comments for convience)
var questions = [
    // question # 1
    {
        question: "What does HTML stand for?",
        choices: ["a) HyperText Markup Language", "b) High-level Text Manipulation Language", "c) Home Tool Management Language", "d) Hyperlink Text Manipulation Logic"],
        answer: 0,
    },
    // question # 2
    {
        question: "Which programming language is known for its use in creating web applications?",
        choices: ["a) Python", "b) Java", "c) Ruby", "d) JavaScript"],
        answer: 3,
    },
    // question # 3
    {
        question: "What is the result of 9 + 3 * 2?",
        choices: ["a) 24", "b) 15", "c) 18", "d) 11"],
        answer: 2,
    },
    // question # 4
    {
        question: "What is the purpose of the document.getElementById() method in JavaScript?",
        choices: ["a) It retrieves the value of an HTML input field.", "b) It adds a new HTML element to the document.", "c) It changes the CSS style of an HTML element.", "d) It retrieves an HTML element by its unique identifier."],
        answer: 3,
    },
    // question # 5
    {
        question: "What is the syntax to declare a variable in JavaScript?",
        choices: ["a) var myVariable;", "b) variable myVariable;", "c) let myVariable;", "d) const myVariable;"],
        answer: 0,
    },
    // question # 6
    {
        question: "Which data type is used to store a sequence of characters in JavaScript?",
        choices: ["a) Integer", "b) String", "c) Boolean", "d) Float"],
        answer: 3,
    },
    // question # 7
    {
        question: "What does CSS stand for?",
        choices: ["a) Creative Style Sheets", "b) Cascading Style Sheets", "c) Computer Style Sheets", "d) Complex Style Syntax"],
        answer: 1,
    },
    // question # 8
    {
        question: "Which programming language is often used for data analysis and scientific",
        choices: ["a) C++", "b) Java", "c) R", "d) PHP"],
        answer: 2,
    },
    // question # 9
    {
        question: "What does the acronym API stand for?",
        choices: ["a) Automated Programming Interface", "b) Application Programming Interface", "c) Advanced Programming Integration", "d) Artificial Programming Intelligence"],
        answer: 1,
    },
    // question # 10
    {
        question: "Which operator is used to concatenate two strings in many programming languages?",
        choices: ["a) +", "b) -", "c) *", "d) /"],
        answer: 0,
    }
/*  {
        question: "",
        choices: ["", "", "", ""],
        answer: 0,
    } */
    // can add more questions here via copy pasta the above comment. . . 
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
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesContainer.innerHTML = "";

    // this loops through the choices and creates buttons for each choice
    for (var i = 0; i < question.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.textContent = question.choices[i];
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
    }
}

// Checks the selected answer
function checkAnswer(event) {
    var selectedChoice = event.target;
    var question = questions[currentQuestionIndex];

    if (selectedChoice.textContent === question.choices[question.answer]) {
        // increases the score if the selected choice is correct
        score++;
    } else {
        // decreases score if incorrect
        timeLeft -= 10;
    }

    // moves to the next question
    currentQuestionIndex++;

    // checks if all questions have been answered else displays next question
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

// this updates the timer
function updateTimer() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    // this check will end the quiz if out of time
    if (timeLeft <= 0) {
        endQuiz();
    }
}

// Fuction to end the quiz
function endQuiz() {

}

// event listener for the initial submission 
initialsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Save initials and score here
    var initials = initialsInput.value;
    // TODO complete the alert
    alert();
});

// event listener for the start button
startButton.addEventListener("click", startQuiz);
