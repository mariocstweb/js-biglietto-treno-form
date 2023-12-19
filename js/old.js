// 1) Chiedo all utente quanti km deve percorrere
const kmRequest = prompt("Quanti km devi percorrere");

// 2) Chiedo all utente l'età
const age = prompt("Quanti anni hai?");
// console.log(kmRequest, age);

// 3) Stabilisco il prezzo al km del biglietto
const kmPrice = 0.21;

// 4) Calcolo il prezzo finale considerando quanti km deve percorrere l'utente

const price = kmRequest * kmPrice;
// console.log(price);
// ----------------------------------------

const discountJunior = 20;
const quantitaDaSottrarreJ = (price * discountJunior) / 100;
// console.log(quantitaDaSottrarreJ);

const discountSenior = 40;
const quantitaDaSottrarreS = (price * discountSenior) / 100;
// console.log(quantitaDaSottrarreS);

const finalPriceJ = (price - quantitaDaSottrarreJ).toFixed(2);
// console.log(finalPriceJ);

const finalPriceS = (price - quantitaDaSottrarreS).toFixed(2);
// console.log(finalPriceS);

if (age < 18) {
  finalPriceJ;
  console.log(finalPriceJ);
} else if (age > 18 && age < 65) {
  price;
  console.log(price);
} else {
  finalPriceS;
  console.log(finalPriceS);
}
