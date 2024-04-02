//* array vuoto
let array = [];

//* ciclo for per controllare i numeri inseriti dall'utente
for (i = 1; i <= 6; i++) {
    //? input per l'utente
    let num = parseInt(prompt("inserisci un numero"));

    //? se il numero digitato non è divisibile per 2 lo aggiungiamo all'array
    if (num %2 !== 0) {
        array.push(num);
    }
}

//* stampa finale dell'array con i numeri aggiunti
console.log(array);