console.log("script here")
document.addEventListener('DOMContentLoaded',()=>{
    const square = document.querySelectorAll('.grid div');
    const displayPlayer=document.querySelector("#player")
   
    let currentPlayer="PlayerX"
    square.forEach((singleSquare)=>{
       singleSquare.addEventListener('click',clickOutName)
    })
   
   
  
    function clickOutName(e){

        if((square[0].classList.contains('PlayerX') 
        && square[1].classList.contains('PlayerX')
        && square[2].classList.contains('PlayerX'))||
        (square[0].classList.contains('PlayerX') 
        && square[3].classList.contains('PlayerX')
        && square[6].classList.contains('PlayerX'))||
        ((square[0].classList.contains('PlayerX') 
        && square[4].classList.contains('PlayerX')
        && square[8].classList.contains('PlayerX')))||
        ((square[2].classList.contains('PlayerX') 
        && square[4].classList.contains('PlayerX')
        && square[6].classList.contains('PlayerX')))||
        ((square[6].classList.contains('PlayerX') 
        && square[7].classList.contains('PlayerX')
        && square[8].classList.contains('PlayerX')))||
        ((square[8].classList.contains('PlayerX') 
        && square[2].classList.contains('PlayerX')
        && square[5].classList.contains('PlayerX')))||
        ((square[3].classList.contains('PlayerX') 
        && square[4].classList.contains('PlayerX')
        && square[5].classList.contains('PlayerX')))||((square[1].classList.contains('PlayerX') 
        && square[4].classList.contains('PlayerO')
        && square[7].classList.contains('PlayerO')))){
            alert("PlayerX is the Winner")
            square.forEach((e)=>{
              console.log(e.style.background="none")
    
            })
            alert("Reload the Page to restart the game");
            location.reload();
           return 0;
        }
        else if((square[0].classList.contains('PlayerX') 
        && square[1].classList.contains('PlayerO')
        && square[2].classList.contains('PlayerO'))||
        (square[0].classList.contains('PlayerO') 
        && square[3].classList.contains('PlayerO')
        && square[6].classList.contains('PlayerO'))||
        ((square[0].classList.contains('PlayerO') 
        && square[4].classList.contains('PlayerO')
        && square[8].classList.contains('PlayerO')))||
        ((square[2].classList.contains('PlayerO') 
        && square[4].classList.contains('PlayerO')
        && square[6].classList.contains('PlayerO')))||
        ((square[6].classList.contains('PlayerO') 
        && square[7].classList.contains('PlayerO')
        && square[8].classList.contains('PlayerO')))||
        ((square[8].classList.contains('PlayerO') 
        && square[2].classList.contains('PlayerO')
        && square[5].classList.contains('PlayerO')))||
        ((square[3].classList.contains('PlayerO') 
        && square[4].classList.contains('PlayerO')
        && square[5].classList.contains('PlayerO')))||
        ((square[1].classList.contains('PlayerO') 
        && square[4].classList.contains('PlayerO')
        && square[7].classList.contains('PlayerO')))){
            alert("Player O is tht Winner")
            square.forEach((e)=>{
              console.log(e.style.background="none")
    
            })
            alert("Reload the Page to restart the game");
            location.reload();
            return 0;
        }

      const squareArray=Array.from(square);
      const indexSquare=squareArray.indexOf(e.target)
     
      displayPlayer.innerHTML=currentPlayer;
      if(currentPlayer==="PlayerX"){
           square[indexSquare].classList.add("PlayerX");
          currentPlayer="PlayerO";
          console.log(currentPlayer)
      }else{
        square[indexSquare].classList.add("PlayerO");
        currentPlayer="PlayerX"
        console.log(currentPlayer)
      }

    }
})