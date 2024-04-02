//* input utente
const userNum = parseInt(prompt("dimmi un numero"));

//*ciclo for che usa tutti i numeri da 0 fino al numero dell'utente
for (let i = 0; i <= userNum; i++) {
    //? variabile in cui facciamo il cubo di un numero
    let cubo = i * i * i;
    //? messaggio finale che viene ripetuto per ogni numero elevato al cubo
    let result = "il cubo di " + i + " è: " + cubo
    console.log(result);
}