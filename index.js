let display = document.getElementById("display");

let current = "";
let hadgalsan = 0;
let temdeg = "";

function clickNumber(param) {
  current += param;
  display.textContent = current;
}

function taslal() {
  if (current === "") {
    current = "0.";
    display.textContent = current;
  } else if (!current.includes(".")) {
    current += ".";
    display.textContent = current;
  }
}

function hasahNemeh() {
  current = Number(current) * -1;
  display.textContent = current;
}

function vildel(param) {
  hadgalsan = Number(current);
  current = "";
  temdeg = param;
}

function tentsvv() {
  if (temdeg == "+") {
    sum = hadgalsan + Number(current);
    display.textContent = sum;
  } else if (temdeg == "*") {
    sum = hadgalsan * Number(current);
    display.textContent = sum;
  } else if (temdeg == "/") {
    sum = hadgalsan / Number(current);
    display.textContent = sum;
  } else if (temdeg == "%") {
    sum = hadgalsan / 100;
    display.textContent = sum;
  } else if ((temdeg = "-")) {
    sum = hadgalsan - Number(current);
    display.textContent = sum;
  }
}

function huwi() {
  current = Number(current) / 100;
  display.textContent = current;
}

function remove() {
  display.textContent = 0;
  current = "";
  hadgalsan = 0;
}
