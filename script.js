/*function somma(num1, num2) {
  return num1 + num2;
}

const sumOneThree = somma(1, 3);                                                                               

//console.log(sumonethree) me lo stampa in console   


Esercizio 1:
Creare una calcolatrice utilizzando le funzioni. Se possibile provare a
 rispettare le condizione che determinano una funzione pura.
La calcolatrice dovrà prendere come input 2 numeri e 1 operazione.

Esercizio 2:
Cominciare a giocare con gli oggetti, testandone metodi e proprietà trovati 
sulla rete (MDN per es.)
Consegnare l'essercizio mostrando una manciata di modifiche agli oggetti 
(siate creativi su questo, ma con tranquillità!).*/

function addition() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

//console.log(addition()) riporta il risultato dei valori che ho fissato
function multiply(num1, num2) {
  return num1 + num2;
}

//console.log(multiply(5,7)) riporta il risultato (35) con valori a mia scelta

function control(num1, num2) {
  maggiore = 0;

  if (num1 > num2) {
    maggiore = num1;
  } else {
    maggiore = num2;
  }
  return maggiore;
}

//console.log(control(3,5)) indica quale numero è maggiore, in questo caso 5.

function operation() {
  const num1 = prompt("Inserisci il primo numero");
  const sign = prompt("Inserisci l'operazione");
  const num2 = prompt("Inserisci il secondo numero");

  if (sign == "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (sign == "-") {
    return parseInt(num1) - parseInt(num2);
  } else if (sign == "*") {
    return parseInt(num1) * parseInt(num2);
  } else if (sign == "/") {
    return parseInt(num1) / parseInt(num2);
  }
}

//OPPURE
function operation2() {
  const num1 = parseInt(prompt("Inserisci il primo numero"));
  const sign = prompt("Inserisci l'operazione");
  const num2 = parseInt(prompt("Inserisci il secondo numero"));

  switch (sign) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      alert("non hai inserito alcun operazione");
  }
}

//buttonEl.addEventListener("click", () => {
// h1El.textContent = multiply(inputEl.value, inputE2.value);
//});

//esercitazione
function controlM(num1, num2) {
  x = 0;
  if (num1 < num2) {
    x = num1;
  } else {
    x = num2;
  }
  return x;
}

// Oggetti, metodi , proprietà con valori

const job = {
  jobName: "cook",
  offDays: "2",
  wage: "1200",
};
//alert(`Ciao Federica, lavori come $(job.jobName)`);

//console.log(job) stampa gli oggetti

const Info = {
  name: "",
  age: "",
};

Info.name = prompt("Inserisci il nome");
Info.age = prompt("Inserisci gli anni"); //Rispondendo ai prompt, si immagazzinano le risposte

const inputEl = document.querySelector("input");
const inputE2 = document.querySelector("input");
const buttonEl = document.querySelector("button");
const h1El = document.querySelector("h1");
