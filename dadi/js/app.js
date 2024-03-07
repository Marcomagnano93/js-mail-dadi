//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//crea due variabili con il numero estratto per i due giocatori
let numberA = [ ]; 

let numberB = [ ]; 

const randomNumberA = Math.floor(Math.random() * 6) + 1;

    numberA.push(randomNumberA);

    console.log("Giocatore A ottiene: " + numberA)


const randomNumberB = Math.floor(Math.random() * 6) + 1;

    numberB.push(randomNumberB);

    console.log("Giocatore B ottiene: " + numberB)

    if(numberA > numberB){
        console.log("Giocatore A vince!")
    }
    else if(numberA === numberB){
        console.log("Pareggio!")
    }
    else{
        console.log("Giocatore B vince!")
    }

