let numer = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;
let timer2 = 0;

function schowaj() {
  $("#slider").fadeOut(500);
}

function ustawslajd(nrslajdu) {
  clearTimeout(timer1);
  clearTimeout(timer2);
  numer = nrslajdu - 1;
  schowaj();
  setTimeout("zmienslajd()", 500);
}

function zmienslajd() {
  numer++;
  if (numer > 5) {
    numer = 1;
  }
  let slider = document.getElementById("slider");
  let zdjecie = (slider.innerHTML =
    "<img src='slajdy/slajd" + numer + ".png'>");
  $("#slider").fadeIn(500);
  timer1 = setTimeout("zmienslajd()", 5000);
  timer2 = setTimeout("schowaj()", 4500);
}
