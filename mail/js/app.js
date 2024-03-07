








   //METODO INCLUDES

   //crea un array con l'elenco di mail registrate
let registeredMails = ["pincopallo@gmail.com", "gigi@gmail.com", "silvestro@gmail.com"];


const userMail = document.getElementById("useremail");

const inputMail = userMail.value; //string

let check = registeredMails.includes(inputMail);

if(check === true){
    alert("Benvenuto!")
}
else{
    alert("Non sei ancora registrato! Iscriviti per accedere")
}




