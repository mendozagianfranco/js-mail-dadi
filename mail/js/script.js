// Array con le email degli invitati
const guestMails = ['mail 1', 'mail 2', 'mail 3', 'mail 4',];

//  Chiedere all'utente la sua email e salvare in una varibiale
const mailUser = prompt('Inserire la tua email');

// Usare Ciclo per controllare la lista e trovare corrispondenza con email fornita dall'utente

for (let i = 0; i < guestMails.length; i++) {
    let currentMail = guestMails[i];

    // Stampare in base alla corrispondeza
    if (currentMail === mailUser) {
        console.log('Sei tra gli invitati alla festa');
        break;
    } else {
        console.log('Non sei tra gli invitati alla festa');
        break;
    }

}