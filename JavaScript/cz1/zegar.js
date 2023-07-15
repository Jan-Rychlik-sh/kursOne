function odliczanie() {
  let data = new Date();

  let dzien = data.getDate();
  let miesiac = data.getMonth() + 1;
  let rok = data.getFullYear();

  let godzina = data.getHours();
  let minuta = data.getMinutes();
  let sekunda = data.getSeconds();

  //TA FUNKCJA DOŁOŻY "0" Z PRZODU W RAZIE PARAMETRU MNIEJSZEGO OD 10
  function Plus0Before(param) {
    if (param < 10) {
      param = "0" + param;
    }
    return param;
  }
  //TU WYWOŁUJEMY TĘ FUNKCJĘ (DLA ROKU NIE TRZEBA BO ŻYJEMY W 21 WIEKU ;)
  dzien = Plus0Before(dzien);
  miesiac = Plus0Before(miesiac);
  godzina = Plus0Before(godzina);
  minuta = Plus0Before(minuta);
  sekunda = Plus0Before(sekunda);

  //WKŁADAM WARTOŚCI DO DIVA O ID == "zegar"
  let zegarek = document.getElementById("zegar");
  zegarek.innerHTML =
    dzien +
    "/" +
    miesiac +
    "/" +
    rok +
    " | " +
    godzina +
    ":" +
    minuta +
    ":" +
    sekunda;

  setTimeout("odliczanie()", 1000);
}
