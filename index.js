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
  if (current !== "") {
    current = String(Number(current) * -1);
    display.textContent = current;
  }
}

function vildel(param) {
  if (current !== "") {
    hadgalsan = Number(current);
    current = "";
    temdeg = param;
  }
}

function tentsvv() {
  let sum = 0;
  let bidentoiToo = Number(current);

  if (temdeg === "+") {
    sum = hadgalsan + bidentoiToo;
  } else if (temdeg === "*") {
    sum = hadgalsan * bidentoiToo;
  } else if (temdeg === "/") {
    sum = hadgalsan / bidentoiToo;
  } else if (temdeg === "%") {
    sum = hadgalsan % bidentoiToo;
  } else if (temdeg === "-") {
    sum = hadgalsan - bidentoiToo;
  }

  display.textContent = sum;
  current = String(sum);
  temdeg = "";
}

function huwi() {
  if (current !== "") {
    current = String(Number(current) / 100);
    display.textContent = current;
  }
}

function remove() {
  display.textContent = "0";
  current = "";
  hadgalsan = 0;
  temdeg = "";
}
