console.log("hellow work        ")


let c_counter = 0;
let u_counter = 0;
let draw_counter =0;
let c_loss = u_counter;
let u_loss = c_counter;
var USER_CHOICE = "none";

    alert("PICK ROCK OR PAPER OR SCISSORS TO PLAY... GOOD LUCK")


function playground(){
    const CHOICE = ["rock", "paper", "scissors"];
    const RANDOM_NUMBER = Math.floor(Math.random() * CHOICE.length);
    const  COMPUTER_CHOICE =   CHOICE[RANDOM_NUMBER];


    const choice = Array.from(document.querySelectorAll('.card'));
    console.log(choice);

    function getChoice(e){
    USER_CHOICE =  this.textContent;
    console.log(USER_CHOICE);
    }
    choice.forEach((card) =>{
    // console.log(card);
        card.addEventListener('click', getChoice);
    });
    console.log(USER_CHOICE);


//    let USER_CHOICE_CHECKER; 
//user choice verify its appropriate 
// code INFINITE LOOPING
    console.log(`COMPUTER CHOSE: ${COMPUTER_CHOICE} \
    USER CHOSE: ${USER_CHOICE} `)

//check and print who won, update counter
if(USER_CHOICE == COMPUTER_CHOICE)
    {
        console.log("draw");
        draw_counter++;
    }
else if(USER_CHOICE == "rock" && COMPUTER_CHOICE == "scissors" ||
        USER_CHOICE == "scissors" && COMPUTER_CHOICE == "paper" ||
        USER_CHOICE == "paper" && COMPUTER_CHOICE == "rock") {
            console.log("user wins");
            u_counter++;
        }
else {
    console.log("computer wins");
    c_counter++;
}

}

//continue rounds
function game(){
for(let i = 1;i<=5;i++){
    playground();
    console.log(`Computer wins: ${c_counter}  \
    loss: ${u_counter} draw: ${draw_counter}` );
    console.log(`User wins: ${u_counter}  
    loss: ${c_counter} draw: ${draw_counter}` );
}
// declare end winner
if(c_counter == u_counter) console.log("It's a goddamn tie!!");
else if(c_counter > u_counter) console.log("HUMANITY LOST UNDER THE MECHANICAL MASTER COMPUTER RACE!!! ");
else console.log("THE RACE MEANT TO RULE BOTH EARTH AND HEAVEN WON AGAIN!!! TEAM HUMANITY!!");

}
game()
