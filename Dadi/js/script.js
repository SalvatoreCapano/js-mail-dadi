// Generare numero random player
// Generare numero random pc
// Comparare numeri
// Mostrare risultato

let playerNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.log(playerNumber);
console.log(pcNumber);

if (playerNumber > pcNumber) {
    console.log("Vince il giocatore");
}
else if (playerNumber < pcNumber) {
    console.log("Vince il pc");
}
else {
    console.log("Pareggio");
}