// console.log("js ok");

const name = document.getElementById("name");
const kmRequest = document.getElementById("km");
const button = document.getElementById("genera");
const age = document.getElementById("age");
const kmPrice = 0.21;

const paragraph = document.getElementById("cose");

button.addEventListener("click", function () {
  // alert("Bottone cliccato");
  console.log("click");
  // toglie e mette d-none
  document.getElementById("mycard").classList.toggle("d-none");
  document.getElementById("carrozza").innerHTML = Math.floor(
    Math.random() * 10
  );

  document.getElementById("cp").innerHTML = Math.floor(Math.random() * 100000);

  document.getElementById("nameUser").innerHTML = name.value;

  const kmRequest = parseFloat(document.getElementById("km").value);

  const age = parseInt(document.getElementById("age").value);
  const kmPrice = 0.21;

  const price = kmRequest * kmPrice;
  const discountJunior = 20;
  const quantitaDaSottrarreJ = (price * discountJunior) / 100;
  const discountSenior = 40;
  const quantitaDaSottrarreS = (price * discountSenior) / 100;
  const finalPriceJ = (price - quantitaDaSottrarreJ).toFixed(2);
  const finalPriceS = (price - quantitaDaSottrarreS).toFixed(2);

  if (age < 18) {
    document.getElementById("costoBiglietto").innerHTML = finalPriceJ;
  } else if (age >= 18 && age < 65) {
    document.getElementById("costoBiglietto").innerHTML = price.toFixed(2);
  } else {
    document.getElementById("costoBiglietto").innerHTML = finalPriceS;
  }
});
