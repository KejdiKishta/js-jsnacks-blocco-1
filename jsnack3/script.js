// //* il software chiede per 10 volte un numero all'utente
// let num1 = parseInt(prompt("inserisci un numero"));
// let num2 = parseInt(prompt("inserisci un numero"));
// let num3 = parseInt(prompt("inserisci un numero"));
// let num4 = parseInt(prompt("inserisci un numero"));
// let num5 = parseInt(prompt("inserisci un numero"));
// let num6 = parseInt(prompt("inserisci un numero"));
// let num7 = parseInt(prompt("inserisci un numero"));
// let num8 = parseInt(prompt("inserisci un numero"));
// let num9 = parseInt(prompt("inserisci un numero"));
// let num10 = parseInt(prompt("inserisci un numero"));

// //* creo una variabile con la somma dei numeri inseriti
// let somma = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

// //* il programma stampa la somma di tutti i numeri
// console.log("La somma dei numeri inseriti è " + somma);

//! METODO CORRETTO
let sum = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("inserisci un numero"));
    sum += num
}

console.log("La somma dei numeri inseriti è " + sum);
