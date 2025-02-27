// Generare 2 numero tra 1 e 6 e salvarlo in due varibili uno per
const userNum = Math.floor(Math.random() * 6) + 1;
const computerNum = Math.floor(Math.random() * 6) + 1;

// Confrontare i 2 valori
if (userNum > computerNum) {
    console.log(`Giocatore: ${userNum} Computer: ${computerNum}`);
    console.log(`${userNum} è più grande di ${computerNum}. Vincitore: Giocatore`);
} else if (computerNum > userNum) {
    console.log(`Giocatore: ${userNum} Computer: ${computerNum}`);
    console.log(`${computerNum} è più grande di ${userNum}. Vincitore: Computer`);
} else {
    console.log(`Giocatore: ${userNum} Computer: ${computerNum}`);
    console.log('Pareggio');
}