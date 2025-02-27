// Generare numero random per computer
const computerNum = Math.floor(Math.random() * 6) + 1;

// Chiedere al User di scegliere un numero tra 1 e 6
const userNum = Number(prompt('Scegliere un numero compreso tra 1 e 6'));

// Controllo Input
const isValidNum = userNum >= 1 && userNum <= 6 && !(isNaN(userNum));

if (isValidNum) {
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
} else {
    console.log('Inserire Valore valido');
}