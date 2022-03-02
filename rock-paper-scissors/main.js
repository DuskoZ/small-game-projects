const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

const icons = ["las la-hand-rock", "las la-hand-paper", "las la-hand-scissors"];
let userChoice = "";
let computerChoice = "";
let result = "";

possibleChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = e.target.id;
        generateComputerChoice();
        getResult();
    });
});

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);

    if (randomNumber === 0) {
        computerChoice = "rock";
    }

    if (randomNumber === 1) {
        computerChoice = "paper";
    }

    if (randomNumber === 2) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You won!";
    }

    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!";
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lost!";
    }

    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You won!";
    }

    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You won!";
    }

    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!";
    }

    resultDisplay.innerHTML = result;
};
