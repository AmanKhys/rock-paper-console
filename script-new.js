let c_counter = 0;
let u_counter = 0;
let draw_counter =0;


function getComputerChoice(){
    const CHOICE = ["rock", "paper", "scissors"];
    const RANDOM_NUMBER = Math.floor(Math.random() * CHOICE.length);
    const  COMPUTER_CHOICE =   CHOICE[RANDOM_NUMBER];
    return COMPUTER_CHOICE;
}
function playGround(userChoice){
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

//play logic and counter update
let messege = "";
if(userChoice == computerChoice)
    {
      draw_counter++;
      messege = "draw";
      
    }
else if(userChoice == "rock" && computerChoice == "scissors" ||
        userChoice == "scissors" && computerChoice == "paper" ||
        userChoice == "paper" && computerChoice == "rock") {
            messege = "you won!!";
            u_counter++;
        }
else {
    messege = "you lost!!";
    c_counter++;
}

//result div
let result = document.getElementById('result');
let resultMessege = document.createElement('div');
if(c_counter>=5) messege = 'computer wins the game of 5';
else if(u_counter>=5) messege = 'user wins the game of 5';
resultMessege.innerHTML= `${messege}`;
result.innerHTML = `<br><br> YOUR WINS:${u_counter} LOSS:${c_counter} draw:${draw_counter} <br><br>` ;
result.append(resultMessege);
}


function gameEnd(){
  let endButton = document.createElement('button');
  endButton.innerText = 'restart game';
  result.append(endButton);
  endButton.addEventListener('click', ()=> window.location.reload());

}

//play a round for each click
const cards = Array.from(document.querySelectorAll('button'));
console.log(cards);
  let i = 0;
  cards.forEach(element => {
    console.log(element);
    
    
    element.addEventListener('click', (e)=>{
      i++;
      console.log(i);
      const choice = e.target.innerText;
      console.log(`${choice} clicked`);
      if(u_counter<5 && c_counter<5) playGround(choice);
      else gameEnd();
    
    });
    console.log(` event ending check`);
  });
  
