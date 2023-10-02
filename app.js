let userScore = 0;
let computerScore = 0;
const usereScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const fireEmoji = "\u{1F525}";
const heartbreakEmoji = "💔";
const upsideDownFaceEmoji = "\u{1F643}";


function getComputerChoice() {
    const choices = [ 'r', 'p', 's' ];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice){
    userScore++;
    usereScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   // const smallUserWord = "user".fontsize(3).sub();
    //const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}  Beats  ${convertToWord(computerChoice)}. YOU WIN! ${fireEmoji}`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    usereScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord = "user".fontsize(3).sub();
    //const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}  Loses To ${convertToWord(computerChoice)}. COMPUTER WINS! ${heartbreakEmoji}`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    //const smallUserWord = "user".fontsize(3).sub();
    //const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} Equals ${convertToWord(computerChoice)}. DRAW! ${upsideDownFaceEmoji}`
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
             draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
};

main();