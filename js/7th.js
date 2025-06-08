let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");

//gen computer random choice.
const genCompChoice = () => {
    const option = [ "paper" ,"rock", "scissors"];
    // math.random() * 3 , to get random number between 0 to 2 with decemal 
    // math.floor(math.random() * 5) , to get random integer number between 0 to 4.
    const randIdx = Math.floor(Math.random() * 3); // 1 + 2 * math.random()
    return option[randIdx];
}

const drawGame = () => {
    document.querySelector("#msg").innerText = "Game is Draw";
    document.querySelector("#msg").style.color = "#ffee32";
}

//getting user choice .
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice) ;
    });
});


let showWinner = (userWin) => {
    if (userWin){
        document.querySelector("#msg").innerText = "You Wins !";
        document.querySelector("#msg").style.color = "#80ed99";
    } else {
        document.querySelector("#msg").innerText = "AI Wins !";
        document.querySelector("#msg").style.color = "#ff5733";

    }
}

const playGame = (userChoice) => {
    //getting computer choice 
    const compChoice = genCompChoice() ;
    document.querySelector("#choose").innerText = `AI chose ${compChoice}`;

    //calculate score. in my style.
    if(userChoice === "rock" && compChoice === "paper"){
        compScore++;
    } else if ( userChoice === "scissors" && compChoice === "paper"){
        userScore++;
    }  else if ( userChoice === "scissors" && compChoice === "rock"){
        compScore++;
    } else if (userChoice === "rock" && compChoice === "scissors"){
        userScore++;
    } else if (userChoice === "paper" && compChoice === "rock"){
        userScore++;
    }  else if (userChoice === "paper" && compChoice === "scissors"){
        compScore++;
    }

    //show score.
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;

    //compact version of above if else .

    if (userChoice === compChoice ) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};