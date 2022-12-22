// Generare numero random player
// Generare numero random pc
// Comparare numeri
// Mostrare risultato

const rollBtn = document.getElementById("rollBtn");

const playerDice = document.getElementById("playerDice");
const pcDice = document.getElementById("pcDice");
const resultContainer = document.getElementById("resultContainer");

rollBtn.addEventListener("click", function() {
    let playerNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    // Verifica risultato
    if (playerNumber > pcNumber) {
        resultContainer.innerHTML = "Vince il giocatore";
    }
    else if (playerNumber < pcNumber) {
        resultContainer.innerHTML = "Vince il pc";
    }
    else {
        resultContainer.innerHTML = "Pareggio";
    }

    // Cambia le facce dei dadi
    playerDice.innerHTML =  `<img src="img/side_${playerNumber}.png" alt="lato 1">`
    pcDice.innerHTML =  `<img src="img/side_${pcNumber}.png" alt="lato 1">`

});