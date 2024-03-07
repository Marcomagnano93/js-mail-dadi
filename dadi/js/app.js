//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//crea due variabili con il numero estratto per i due giocatori

let checkBtn = document.querySelector(".trow_btn");

    checkBtn.addEventListener("click", function(){
 
        let numberA

        let numberB
        
        const randomNumberA = Math.floor(Math.random() * 6) + 1;
        
            numberA = randomNumberA;
        
            console.log("Giocatore A ottiene: " + numberA)
        
        
        const randomNumberB = Math.floor(Math.random() * 6) + 1;
        
            numberB = randomNumberB;
        
            console.log("Giocatore B ottiene: " + numberB)
        
            if(numberA > numberB){
                alert("Giocatore A vince!")
            }
            else if(numberA === numberB){
                alert("Pareggio!")
            }
            else{
                alert("Giocatore B vince!")
            }
        
        })

