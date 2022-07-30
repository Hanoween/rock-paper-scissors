const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playSelection, computerSelection) {
    if (playSelection === computerSelection) {
        return `It's a Tie! ${playSelection} against ${computerSelection}`;
    }

    else if ((choices.indexOf(playSelection) + 1) % choices.length == choices.indexOf(computerSelection)) {
        return `You Lose! ${computerSelection} beats ${playSelection}`;
    }

    else {
        return `You Win! ${playSelection} beats ${computerSelection}`;
    }
}

function game() {
    var scoreBoard = { "Tie": 0, "Win": 0, "Lose": 0 }
    
    for (let i = 1; i <= 5; i++) {
        const playSelection = prompt("Enter your choice: Rock, Paper, Scissors");
        const computerSelection = getComputerChoice();
        
        let result = playRound(playSelection, computerSelection);
        console.log(result);
        if (result.includes("Tie")) {
            scoreBoard["Tie"]++;
        }
        else if (result.includes("Win")) {
            scoreBoard["Win"]++;
        }
        else if (result.includes("Lose")) {
            scoreBoard["Lose"]++;
        }
    }

    if (scoreBoard["Win"] > scoreBoard["Lose"] && scoreBoard["Win"] > scoreBoard["Tie"]){
        return "You Win!";
    }
    else if (scoreBoard["Lose"] > scoreBoard["Win"] && scoreBoard["Lose"] > scoreBoard["Tie"]){
        return "You Lose!";
    }
    else {
        return "Nobody Wins!";
    }
}

console.log(game());