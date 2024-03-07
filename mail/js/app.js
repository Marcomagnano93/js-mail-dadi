//crea un array con l'elenco di mail registrate
let registeredMails = ["pincopallo@gmail.com", "gigi@gmail.com", "silvestro@gmail.com"];
//crea una variabile di controllo della mail inserita
let registeredMailControl = false; //string
//collega l'input della mail dell'utente
const userMail = document.getElementById("useremail");

const inputMail = userMail.value; //string



    //- aggiungi un evento per avviare il check




    // const checkClick = document.getElementById("check_btn")

    // checkClick.addEventListener("click", function( ) {





//controlla se la mail inserita dall'utente è tra quelle nell'elenco
        // - crea un for loop per cercare la mail inserita dall'utente tra quelle registrate
        for(let i = 0; i < registeredMails.length; i++){
            // console.log(registeredMails[i])

        // - compara la inputmail con le mail registrate

            let check = registeredMails.includes(inputMail);


            if(check === true){
                registeredMailControl = true;
            }
        }

        //dai un messaggio di conferma o di errore se la mail inserita è nell'elenco o meno

        if(registeredMailControl === true){
                alert("Benvenuto!")
        }
        else{
            alert("Non sei ancora registrato! Iscriviti per accedere")
        }


    // })
   