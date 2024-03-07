// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
const registeredMails = ["pincopallo@gmail.com", "gigi@gmail.com", "silvestro@gmail.com"];


let checkBtn = document.querySelector(".check_btn");

    checkBtn.addEventListener("click", function(){

        const userMail = document.getElementById("useremail");
        const inputMail = userMail.value; //string
        
        let checkMail = false;
        
        for (let i = 0; i < registeredMails.length; i++) {
        
        
            // console.log(registeredMails[i])
        
            const checkedMail = registeredMails[i];
        
            if(checkedMail === inputMail){
                checkMail = true;
            }
        
            
           }
        
        
           if(checkMail === true){
            alert("Benvenuto!")
           }
        
           else {
            alert("Non sei ancora registrato! Iscriviti per accedere")
           }
        


    })






//METODO INCLUDES
//crea un array con l'elenco di mail registrate
// let registeredMails = ["pincopallo@gmail.com", "gigi@gmail.com", "silvestro@gmail.com"];


// const userMail = document.getElementById("useremail");

// const inputMail = userMail.value; //string

// let check = registeredMails.includes(inputMail);

// if(check === true){
//     alert("Benvenuto!")
// }
// else{
//     alert("Non sei ancora registrato! Iscriviti per accedere")
// }




