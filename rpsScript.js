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

function game(output) {
    if (output.includes("Win")) {
        if (++scoreBoard["Win"] == 5) alert("You Win!");
    }
    else if (output.includes("Lose")) {
        if (++scoreBoard["Lose"] == 5) alert("You Lose!");
    }
}

const btn = document.querySelectorAll('#choice');
var scoreBoard = { "Tie": 0, "Win": 0, "Lose": 0 }

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        output = playRound(btn.innerHTML, getComputerChoice());
        game(output)
        const result = document.createElement('div');
        result.innerHTML = output;
        document.body.appendChild(result);
    });
});

/*if (scoreBoard["Win"] > scoreBoard["Lose"] && scoreBoard["Win"] > scoreBoard["Tie"]) {
    return "You Win!";
}
else if (scoreBoard["Lose"] > scoreBoard["Win"] && scoreBoard["Lose"] > scoreBoard["Tie"]) {
    return "You Lose!";
}
else {
    return "Nobody Wins!";
}*/

/*const btn = document.querySelectorAll('#choice');
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const result = document.createElement('div');
        result.innerHTML = output;
        document.body.appendChild(result);
    });
});*/