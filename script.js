const questions = [
    {
        question: "Which language is used to create web pages?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "Which language is mainly used to add styling to a webpage?",
        options: ["CSS", "Python", "C", "Java"],
        answer: "CSS"
    },
    {
        question: "Which language is used to make a webpage interactive?",
        options: ["HTML", "CSS", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("questionNumber");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const restartButton = document.getElementById("restartBtn");
const resultElement = document.getElementById("result");

function showQuestion() {
    const current = questions[currentQuestion];
    
    questionNumberElement.textContent =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";

    current.options.forEach(function(option) {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function() {
            if (option === current.answer) {
                score++;
                resultElement.textContent = "Correct!";
            } else {
                resultElement.textContent = "Wrong answer!";
            }

            const allButtons = optionsElement.querySelectorAll("button");

            allButtons.forEach(function(btn) {
                btn.disabled = true;
            });
        });

        optionsElement.appendChild(button);
    });
}

nextButton.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "block";
        resultElement.textContent =
            "Your score is " + score + " out of " + questions.length;
    }
});

showQuestion();

restartButton.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
});