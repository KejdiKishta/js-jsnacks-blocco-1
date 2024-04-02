//* creo un ciclo con i = 2 come partenza delle nostre potenze
for (let i = 2; i <= 1000; i) {
    //? varibile che moltiplica il numero per 2 a ogni ripetizione del ciclo
    i *= 2

    //? se il numero è minore di 1000 lo stampo e ripeto il ciclo altrimenti finisce il ciclo per la condizione del for
    if (i <= 1000) {
        console.log(i);
    }
}