los = new Array(35);
los[0] = "apetyt rośnie w miarę jedzenia";
los[1] = "baba z wozu koniom lżej";
los[2] = "biednemu zawsze wiatr w oczy";
los[3] = "broda mędrcem nie czyni";
los[4] = "cel uświęca środki";
los[5] = "ciekawość to pierwszy stopień do piekła";
los[6] = "gdzie kucharek sześć tam nie ma co jesć";
los[7] = "co dwie głowy to nie jedna";
los[8] = "co kraj to obyczaj";
los[9] = "czas to pieniądz";
los[10] = "człowiek strzela Pan Bóg kule nosi";
los[11] = "darowanemu koniowi w zęby się nie zagląda";
los[12] = "dla chcącego nic trudnego";
los[13] = "dobrymi chęciami jest piekło wybrukowane";
los[14] = "hulaj dusza piekła nie ma";
los[15] = "indyk myślał o niedzieli a w sobotę łeb mu ścięli";
los[16] = "jak cię widzą tak cię piszą";
los[17] = "kłamstwo ma krótkie nogi";
los[18] = "kuć żelazo póki gorące";
los[19] = "łaska pańska na pstrym koniu jeździ";
los[20] = "mądry Polak po szkodzie";
los[21] = "na złodzieju czapka gore";
los[22] = "nie taki diabeł straszny jak go malują";
los[23] = "od piwa głowa się kiwa";
los[24] = "robota nie zając nie ucieknie";
los[25] = "skleroza nie boli ale nachodzić się trzeba";
los[26] = "ten się śmieje kto się śmieje ostatni";
los[27] = "uderz w stół a nożyce się odezwą";
los[28] = "wilk syty i owca cała";
los[29] = "wysoki jak brzoza a głupi jak koza";
los[30] = "PiS Po jedno Zło";
los[31] = "Będziesz Pan wisiał ";
los[32] = "siedemset plus to posunięcie proinflacyjne";
los[33] = "Chcemy dialogu z rosją";
los[34] = "tylko palikot tylko platworma obywatelska";

let SzefLosowania = Math.floor(Math.random() * 35);
// alert(SzefLosowania);
let haslo = los[SzefLosowania];
// let haslo = "Bez pracy nie ma kołaczy";
let ilePomylek = 0;
haslo = haslo.toUpperCase();
let szyfr = "";

let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

for (let i = 0; i < haslo.length; i++) {
  if (haslo.charAt(i) == " ") szyfr += " ";
  else if (haslo.charAt(i) == ",") szyfr += "";
  else szyfr += "-";
}

function wypisz_haslo() {
  document.getElementById("plansza").innerHTML = szyfr;
}

let litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function literki() {
  wypisz_haslo();
  let alfabet = document.getElementById("alfabet");
  for (let i = 0; i < litery.length; i++) {
    alfabet.innerHTML +=
      "<div class='litery' id='lit" +
      i +
      "' onclick='sprawdz(" +
      i +
      ");'>" +
      litery[i] +
      "</div>";
  }
}

window.onload = literki;

String.prototype.ustawZnak = function (pozycjaZnaku, znak) {
  if (pozycjaZnaku > this.length - 1) return this.toString();
  else
    return (
      this.substring(0, pozycjaZnaku) + znak + this.substring(pozycjaZnaku + 1)
    );
  //zwróci napis np. od ------A----, gdzie A to znak który ustawiliśmy
  //sklei napis od tego co było do znaku, który jest podmieniany, a następnie
  //napis do końca tego łańcucha
};

function sprawdz(nrLitery) {
  let trafiona = false;
  for (let i = 0; i < haslo.length; i++) {
    if (litery[nrLitery] == haslo.charAt(i)) {
      //   alert(i);
      szyfr = szyfr.ustawZnak(i, litery[nrLitery]);
      trafiona = true;
    }
  }
  if (trafiona == true) {
    yes.play();
    let element = "lit" + nrLitery;
    document.getElementById(element).setAttribute("onclick", ";");
    document.getElementById(element).style.backgroundColor = "#003300";
    document.getElementById(element).style.borderColor = "#00cc00";
    document.getElementById(element).style.color = "#00cc00";
    document.getElementById(element).style.cursor = "default";
    wypisz_haslo();
  } else {
    no.play();
    ilePomylek++;
    let element = "lit" + nrLitery;
    document.getElementById(element).setAttribute("onclick", ";");
    document.getElementById(element).style.backgroundColor = "#330000";
    document.getElementById(element).style.borderColor = "#cc0000";
    document.getElementById(element).style.color = "#cc0000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById("szubienica").innerHTML =
      "<img src='img/s" +
      ilePomylek +
      ".jpg' alt='Będziesz pan wisiał' title='Będziesz pan wisiał'/>";
  }
  if (ilePomylek >= 6) {
    document.getElementById("alfabet").innerHTML =
      "Przegrana! Prawidłowe hasło to: " +
      haslo +
      "<span onclick='location.reload()' class='lose'>Jeszcze raz?</span>";
  }
  if (szyfr == haslo) {
    document.getElementById("alfabet").innerHTML =
      "Wygrana! Prawidłowe hasło to: " +
      haslo +
      "<span onclick='location.reload()' class='win'>Jeszcze raz?</span>";
  }
}
