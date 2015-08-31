var userChoice = prompt("Let's play Rock, Paper, Scissors, lizard, Spock. Choose one:");
var computerChoice = Math.random();

if (computerChoice <= 0.20) {
    computerChoice = "rock";
} else if (computerChoice <= 0.40) {
    computerChoice = "paper";
} else if (computerChoice <= 0.60) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.80) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

document.write("Computer has chosen" + " " + "<strong>" + computerChoice + "</strong>" + "<br>");

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie";
    }

    if (choice1 === "rock") {
        if (choice2 === "paper") {
            return "Paper covers rock. Computer wins.";
        } else if (choice2 === "scissors") {
            return "Rock crushes scissors. You win.";
        } else if (choice2 === "lizard") {
            return "Rock crushes lizard. You win.";
        } else {
            return "Spock vaporizes rock. Computer wins.";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper covers rock. You win.";
        } else if (choice2 === "scissors") {
            return "Scissors cuts paper. Computer wins.";
        } else if (choice2 === "lizard") {
            return "lizard eats paper. Computer wins.";
        } else {
            return "Paper disproves Spock. You win.";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "Scissors cuts paper. You win.";
        } else if (choice2 === "rock") {
            return "Rock crushes scissors. Computer wins.";
        } else if (choice2 === "lizard") {
            return "Scissors cuts lizard. You win.";
        } else {
            return "Spock smashes scissors. Computer wins.";
        }
    }

    if (choice1 === "lizard") {
        if (choice2 === "paper") {
            return "Lizard eats paper. You win.";
        } else if (choice2 === "scissors") {
            return "Scissors cuts lizard. Computer wins.";
        } else if (choice2 === "rock") {
            return "Rock crushes lizard. Computer wins.";
        } else {
            return "Lizard poisons Spock. You win.";
        }
    }

    if (choice1 === "spock") {
        if (choice2 === "paper") {
            return "Paper disproves Spock. Computer wins.";
        } else if (choice2 === "scissors") {
            return "Spock smashes scissors. You win.";
        } else if (choice2 === "lizard") {
            return "Lizard poisons Spock. Computer wins.";
        } else {
            return "Spock vaporizes rock. You win.";
        }
    }
};

document.write(compare(userChoice,computerChoice));