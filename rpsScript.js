const choices = ["Rock", "Paper", "Scissors"];
var scoreBoard = { "Win": 0, "Lose": 0 }

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

function setButtons() {
    const btn = document.querySelectorAll("button");
    const div = document.querySelector(".game");
    var results = document.querySelector(".results");

    btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            results.remove();
            results = document.createElement("div")
            results.classList.add("results");
            results.setAttribute("style", "font-size: 50px; padding-top: 75px; color: blue; font-weight: 700;");
            output = playRound(btn.innerHTML.split("\n")[0], getComputerChoice());
            const content = document.createElement("p");
            content.innerHTML = output
            results.appendChild(content);
            div.appendChild(results);
            game(output);
        });
    });
}

function game(output) {
    if (output.includes("Win")) {
        if (++scoreBoard["Win"] == 5) {
            scoreBoard = { "Win": 0, "Lose": 0 }
            alert("You Win!");
            if (confirm("Restart?")) {
                results.remove();
                setButtons();
            }
        }
    }
    else if (output.includes("Lose")) {
        if (++scoreBoard["Lose"] == 5) {
            scoreBoard = { "Win": 0, "Lose": 0 }
            alert("You Lose!");
            if (confirm("Restart?")) {
                results.remove();
                setButtons();
            }
        }
    }
}

setButtons();
