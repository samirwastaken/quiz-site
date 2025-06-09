
/* The DOM Elements */ 

// Screens
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("results-screen");

// Buttons
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart");

// Questions & Changing Text
const textForQuestion = document.getElementById("textForQuestion");
const currentQuestionNumber = document.getElementById("currentQuestionNumber");
const totalQuestions = document.getElementById("totalQuestions");


// Progress Bar
const progressBar = document.getElementById("progress-bar"); 
const progress = document.getElementById("progress"); 

// Info
const resultsInfo = document.getElementById("results-info");
const closingMessage = document.getElementById("closing-message");
const quizScore = document.getElementById("score");
const correctAnswers = document.getElementById("correct-answers");


/* Store the quiz questions as an array */ 

// Array of Quiz Questions for the Quiz

const questions = [

    // Question #1
    {
        question: "What is the creator's name?",
        answers: [
            {answertext: "Samir", isCorrect: true },
            {answertext: "Samira", isCorrect: false },
            {answertext: "Samor", isCorrect: false},
            {answertext: "Sameer", isCorrect: false},
        ]
    },
    // Question 2
    {
        question: "What is Samir's favorite food?",
        answers: [
            {answertext: "Pizza", isCorrect: true},
            {answertext: "Sushi", isCorrect: true },
            {answertext: "Asparagus", isCorrect: false},
            {answertext: "Green Beans", isCorrect: true },
        ]
    },
    // question 3
    {
        question: "What is my favorite language?",
        answers: [
            {answertext: "Python", isCorrect: false},
            {answertext: "C", isCorrect: true},
            {answertext: "Java", isCorrect: false},
            {answertext: "C#", isCorrect: false}
        ]
    }
]

// Quiz State Variables
let currentQuestionIndex = 0;
let score = 0;
let answersAreDisabled = false;

currentQuestionNumber.textContent = questions.length;
totalQuestions.textContent = questions.length;


/* Event Listeners for Actions */
startButton.addEventListener("click", startQuiz); // This runs the "startQuiz" method
restartButton.addEventListener("click", restartQuiz);



/* Functions */
function startQuiz()
{
    console.log("Quiz Started!");
    score = 0;
    quizScore.textContent = score;
};


function restartQuiz()
{
    console.log("The Quiz has been restarted!");

};



















