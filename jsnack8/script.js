//* chiedo un numero con almeno 4 cifre
const userNum = prompt("dimmi un numero di 4 cifre");


//* controllo se il numero ha 4 cifre e non è NaN
if (userNum < 1000 || isNaN(userNum)) {
    console.warn("scemo");
} else {
    //? variabile d'appoggio
    let num = 0;
    //? ciclo for per prendere ogni numero corrispondente alla i
    for (let i = 0; i < userNum.length; i++) {
        //? ogni cifra del numero viene sommata a quelle precedenti
        num += parseInt(userNum[i]);
    }
    //*stampa somma finale
    console.log("la somma dei numeri da te inseriti è " + num)
}



