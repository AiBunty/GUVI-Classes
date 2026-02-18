
// Elements
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables
let timeLeft;
let score;
let currentQuestionIndex;
let timer;

// Questions
const questions = [
    {
        question: "What is MERN stack?",
        answers: [
            { text: "To develop only FE", correct: false },
            { text: "To develop only BE", correct: false },
            { text: "To develop only FE and BE", correct: true },
            { text: "To develop only DB", correct: false }
        ]
    },
    {
        question: "What is HTML?",
        answers: [
            { text: "not the web document", correct: false },
            { text: "web document", correct: true },
            { text: "For styling purpose", correct: false },
            { text: "none of the above", correct: false }
        ]
    },
    {
        question: "What is Java?",
        answers: [
            { text: "Java is the frontend lang", correct: false },
            { text: "java is used for styling purpose", correct: false },
            { text: "Document based", correct: false },
            { text: "Java is the backend lang", correct: true }
        ]
    },

     {
        question: "What is python?",
        answers: [
            { text: "python is the frontend lang", correct: false },
            { text: "python is used for styling purpose", correct: false },
            { text: "Document based", correct: false },
            { text: "python is the backend lang", correct: true }
        ]
    }
];

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;

    timerElement.style.display = "block"; 

    nextButton.textContent = "Next";
    showQuestion();
}

// Show question
function showQuestion() {
    resetState();

    // Reset timer here (important)
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    startTimer();

    updateProgress();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");

        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Timer
function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}

// Show correct when time ends
function showCorrectAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = currentQuestion.answers.find(a => a.correct);

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;

        if (button.textContent === correct.text) {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

// Show question
function showQuestion() {
    resetState();

    // Reset timer here (important)
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    startTimer();

    updateProgress();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");

        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Timer
function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}

// Show correct when time ends
function showCorrectAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = currentQuestion.answers.find(a => a.correct);

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;

        if (button.textContent === correct.text) {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}