//  Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(num1, num2) {
    return num1 + num2
}
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAnonima = function (num1, num2) {
    return num1 + num2
}
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const sommaNumeri = (num1, num2) => num1 + num2
console.log(somma(5, 5));


//  Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
const quadrato = num => num * num
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
console.log(quadrato(4))

//  Snack 3
// Crea una funzione eseguiOperazione
function moltiplica(num1, num2) {
    return num1 * num2
}
const sottrai = (num1, num2) => num1 - num2
function dividi(num1, num2) {
    return num1 / num2
}

function eseguiOperazione(num1, num2, operazione) {
    return operazione(num1, num2)
}
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
console.log(eseguiOperazione(2, 5, somma));
console.log(eseguiOperazione(5, 10, moltiplica));
console.log(eseguiOperazione(5, 10, sottrai));
console.log(eseguiOperazione(5, 10, dividi));


//  Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(tempo) {
    setTimeout(() => {
        console.log('Tempo scaduto!');
    }, tempo)
}

creaTimer(1000)

//  Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
    const intervallo = setInterval(() => {
        console.log('Il secondo è passato:', messaggio);
        clearInterval(intervallo)
    }, 1000)
}
stampaOgniSecondo('Dario!')

//  Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
function creaContatoreAutomatico() {
    let contatore = 0
    const intervallo = setInterval(() => {
        contatore++;
        console.log(contatore);
        if (contatore === 10) {
            clearInterval(intervallo)
        }
    }, 1000)
}
creaContatoreAutomatico()

//  Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, avvio, stop) {
    console.log(messaggio);
    setTimeout(() => {
        console.log('Avvio');

    }, avvio)

    setTimeout(() => {
        console.log('Ferma');
    }, stop)
}

eseguiEferma('Sto avviando...', 1000, 2000)

//  Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
function contoAllaRovescia(n) {
    let contatore = n
    const intervallo = setInterval(() => {
        if (contatore > 0) {
            console.log(contatore);
            contatore--
        } else {
            console.log('Tempo scaduto!');
            clearInterval(intervallo)
        }
    }, 1000)
}

contoAllaRovescia(5)