//* array con gli invitati alla festa
let invitati = ["pippo", "pluto", "paperino", "qui", "quo", "qua"];

//* con prompt chiedo il nome all'utente
let nomeUser = prompt("Ciao! Come ti chiami?")
console.log(nomeUser);

//* creo un ciclo for per controllare se il nome è nella lista
//? variabile falsa che diventa vera nel caso in cui un nome coincida
let inLista = false

//? ciclo
for (let i = 0; i < invitati.length; i++) {
    if (nomeUser === invitati[i]) {
        inLista = true;
        break;
    };
}

//* se inLista è true entra altrimenti no
if (inLista === true) {
    console.log("Sei in lista, puoi entrare");
} else {
    console.log("Mi dispiace ma non sei in lista, sfigato");
}

