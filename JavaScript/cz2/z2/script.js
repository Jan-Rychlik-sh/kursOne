// function wypisz() {
//   let input1 = document.getElementById("pole1").value;
//   let input2 = document.getElementById("pole2").value;
//   let wynik = document.getElementById("wynik");
//   if (input1 > input2) {
//     let suma = "";
//     for (let i = input1; i >= input2; i--) {
//       suma = suma + " " + i;
//     }
//     wynik.innerHTML = suma;
//   } else if (input1 < input2) {
//     let suma = "";
//     for (let i = input1; i <= input2; i++) {
//       suma = suma + " " + i;
//     }
//     wynik.innerHTML = suma;
//   } else if (typeof input1 != "number") {
//     wynik.innerHTML = "Wartość w polu 1 nie jest liczbą!";
//   } else if (typeof input2 != "number") {
//     wynik.innerHTML = "Wartość w polu 2 nie jest liczbą!";
//   } else if (typeof (input1 != "number") && typeof (input2 != "number")) {
//     wynik.innerHTML = "Wartości w obu polach nie są liczbami!";
//   }
// }

function wypisz() {
  let input1 = parseInt(document.getElementById("pole1").value);
  let input2 = parseInt(document.getElementById("pole2").value);
  let wynik = document.getElementById("wynik");
  if (isNaN(input1)) {
    wynik.innerHTML = "Wartość w polu 1 nie jest liczbą!";
  } else if (isNaN(input2)) {
    wynik.innerHTML = "Wartość w polu 2 nie jest liczbą!";
  } else if (input1 > input2) {
    let suma = "";
    for (let i = input1; i >= input2; i--) {
      suma = suma + " " + i;
    }
    wynik.innerHTML = suma;
  } else if (input1 < input2) {
    let suma = "";
    for (let i = input1; i <= input2; i++) {
      suma = suma + " " + i;
    }
    wynik.innerHTML = suma;
  }
}
