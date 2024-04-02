let num1 = parseInt(prompt("inserisci un numero"))
console.log(num1);
let num2 = parseInt(prompt("inserisci un altro numero"));
console.log(num2);

if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log("Riprova, i numeri devono essere diversi");
} else {
    console.log(num2);
}