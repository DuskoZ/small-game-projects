const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const scoreDisplay = document.getElementById("score");
const userIcon = document.getElementById("user-icon");
const computerIcon = document.getElementById("computer-icon");

const icons = ["la-hand-rock", "la-hand-paper", "la-hand-scissors"];
let userChoice = "";
let computerChoice = "";
let result = "";
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        setUserIcon();
        getResult();
    });
});

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    computerIcon.classList = "las";

    if (randomNumber === 0) {
        computerChoice = "rock";
        computerIcon.classList.add(icons[0]);
    }

    if (randomNumber === 1) {
        computerChoice = "paper";
        computerIcon.classList.add(icons[1]);
    }

    if (randomNumber === 2) {
        computerChoice = "scissors";
        computerIcon.classList.add(icons[2]);
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

const setUserIcon = () => {
    userIcon.classList = "las";

    if (userChoice === "rock") {
        userIcon.classList.add(icons[0]);
    }

    if (userChoice === "paper") {
        userIcon.classList.add(icons[1]);
    }

    if (userChoice === "scissors") {
        userIcon.classList.add(icons[2]);
    }
};

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You won!";
        userScore++;
    }

    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!";
        computerScore++;
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lost!";
        computerScore++;
    }

    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You won!";
        userScore++;
    }

    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You won!";
        userScore++;
    }

    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!";
        computerScore++;
    }

    resultDisplay.innerHTML = result;
    scoreDisplay.innerHTML = `${userScore}:${computerScore}`;
};
