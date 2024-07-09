let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const Indx = Math.floor(Math.random()*3);
    return options[Indx];
};

const showWinner = (userWin,userchoice,compChoice) =>{
     if(userWin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win. Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
     }else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerHTML = `You Lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
     }
};

const drawGame = () =>{
      console.log("game is draw");
      msg.innerText = "Game is draw";
      msg.style.backgroundColor = "#081b31";
};

const playGame = (userchoice) =>{
    const compChoice = genCompChoice();
    if(userchoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};

choices.forEach( (choice) =>{
  choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
  });
});
