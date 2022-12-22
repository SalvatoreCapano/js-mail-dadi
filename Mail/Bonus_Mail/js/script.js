/*  
-Creare lista mail
-Chiedere mail
-Controllare che sia nella lista delle mail
    --E' nella lista
        ---Stampa esito positivo
    --Non e' nella lista
        ---Stampa esito negativo
*/

// Lista email valide
const mailList = ["mariorossi@gmail.com", "luigirosa@gmail.com", "antonioverdi@gmail.com", "federicabianchi@gmail.com", 
                    "raffaellorossi@gmail.com", "donatelloviola@gmail.com", "michelangeloarancione@gmail.com", "leonardoblu@gmail.com"];

const container = document.querySelector(".container"); 
const submitBtn = document.getElementById("submitBtn");

let emailCheck = false;
let resultContainer;

submitBtn.addEventListener("click", function(e) {

    e.preventDefault();

    // Ottenimento valore email e trasformazione lower case
    const mailInput = document.getElementById("mail").value.toLowerCase();

    // Controllo mail
    for (let i=0; i<mailList.length; i++) {

        if (mailList[i] == mailInput) {
            emailCheck = true;
            i = mailList.length + 1;
        }
        else {
            emailCheck = false;
        }
    }

    // Crea l'elemento HTML che contiene l'esito solo se non esiste gia'
    if (resultContainer == null) {
        resultContainer = document.createElement("div");
        resultContainer.classList.add("resultContainer");
        container.append(resultContainer);
    }
    
    // Mostra messaggio
    if (emailCheck == true) {
        resultContainer.innerHTML = "Email corretta. Accesso in corso..."
    }
    else {
        resultContainer.innerHTML = "Email non presente nel registro. Accesso negato."
    }
});