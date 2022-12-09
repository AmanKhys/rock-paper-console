function playground(e){
  console.log(e);
}

const choice = Array.from(document.querySelectorAll('.card'));


window.addEventListener('click', () =>{
  choice.forEach(card =>{
    console.log(card);
    card.addEventListener('click', console.log(card));
  })
});
