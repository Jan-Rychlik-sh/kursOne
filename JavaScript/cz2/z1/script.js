function sprawdz() {
  let wartosc = document.getElementById("pole").value;
  let wynik = document.getElementById("wynik");
  if (wartosc < 0) {
    wynik.innerHTML = "liczba ujemna!";
  } else if (wartosc > 0) {
    wynik.innerHTML = "liczba dodatnia!";
  } else if (wartosc == 0) {
    wynik.innerHTML = "zero!";
  } else {
    wynik.innerHTML = "to nie jest liczba!";
  }
}
