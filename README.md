# Mail e Dadi

## Mail

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).

---

### Soluzione

### INPUT

Lista di email degli invitati

### ALGORITMO, PROCEDIMENTO

Chiedere a l'utente la sua email
Controllare la lista di email degli invitati

### OUTPUT

Stampare risultato del controllo

### Pseudocodice

-   Creare array con dentro la lista di email degli invitati
-   Chiedere all'utente la sua email e salvare in una varibiale
-   Usare Ciclo per controllare la lista e trovare corrispondenza con email fornita dall'utente
-   SE l'email c'è nella lista
    -   Stampare _Sei tra gli invitati alla festa_
-   ALTRIMENTI
    -   Stampare _Non sei tra gli invitati alla festa_

---

## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

---

### Soluzione

##INPUT

2 numeri random tra 1 e 6 <br>
Uno per il computer <br>
Uno per User

### ALGORITMO, PROCEDIMENTO

Confrontare i 2 numeri e quello più alto vince

### OUTPUT

Annunciare il vincitore

### Pseudocodice

-   Generare 2 numero tra 1 e 6 e salvarlo in due varibili uno per USER e altro per il COMPUTER
-   Confrontare i 2 valori
-   SE numero USER è più alto del numero COMPUTER
    -   Stampare USER vincitore
-   SE numero COMPUtER è più alto del numero USER
    -   Stampare COMPUTER vincitore
-   ALTRIMENTI
    -   Stampare PAREGGIO

### BONUS

-   Chiedere al USER un numero compreso tra 1 e 6
-   Controllo INPUT sia valido
-   Salvare il numero in una varibiale
-   Confrontare i 2 valori
