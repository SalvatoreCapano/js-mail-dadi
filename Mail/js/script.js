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

// Inserimento email dell'utente e conversione in lower case
let mailInput = prompt("Inserisci la tua email: ").toLowerCase();

let emailCheck = false;

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

// Mostra messaggio
if (emailCheck == true) {
    alert("Email corretta. Puoi accedere.")
    console.log(emailCheck)
}
else {
    alert("Email non presente nel registro. Accesso negato.")
    console.log(emailCheck)
}