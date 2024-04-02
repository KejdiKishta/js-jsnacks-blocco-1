let par1 = prompt("inserisci parola 1")
let par2 = prompt("inserisci parola 2")

if (par1.length > par2.length) {
    console.log(par2, par1);
} else if (par2.length > par1.length) {
    console.log(par1, par2);
} else {
    console.log("stessa lunghezza, riprova");
}