//* array con i numeri da 1 a 10
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array);

//* variabile d'appoggio
let somma = 0;

//* somma di tutti i numeri nell'array
for (let i = 0; i < array.length; i++) {
    somma += array[i];
}

//* stampa della somma
console.log(somma);

//* calcolo media
let media = somma / 10

//* stampa della media
console.log(media);


