let difficulty = document.getElementById("difficulty").innerHTML;
let cards;
let cardClassName;
// alert(difficulty);
switch (difficulty) {
  case "Easy":
    cards = [
      "Newt.jpg",
      "Chuck.jpg",
      "Ava.jpg",
      "Janson.jpg",
      "Thomas.jpg",
      "Teresa.jpg",
      "Chuck.jpg",
      "Janson.jpg",
      "Newt.jpg",
      "Thomas.jpg",
      "Ava.jpg",
      "Teresa.jpg",
    ];
    cardClassName = "EasyCard";
    break;
  case "Medium":
    cards = [
      "Janson.jpg",
      "Teresa.jpg",
      "Gally.jpg",
      "Alexander.jpg",
      "Aml.jpg",
      "Newt.jpg",
      "Chuck.jpg",
      "Mincho.jpg",
      "Thomas.jpg",
      "Alexander.jpg",
      "Aml.jpg",
      "Thomas.jpg",
      "Teresa.jpg",
      "Ava.jpg",
      "Gally.jpg",
      "Newt.jpg",
      "Ava.jpg",
      "Janson.jpg",
      "Chuck.jpg",
      "Mincho.jpg",
    ];
    cardClassName = "MediumCard";
    break;
  case "Hard":
    cards = [
      "Newt.jpg",
      "Chuck.jpg",
      "Ava.jpg",
      "Janson.jpg",
      "Thomas.jpg",
      "Teresa.jpg",
      "Dexter.jpg",
      "Jacob.jpg",
      "Aml.jpg",
      "Alby.jpg",
      "Mincho.jpg",
      "Gally.jpg",
      "Newt.jpg",
      "Chuck.jpg",
      "Ava.jpg",
      "Janson.jpg",
      "Thomas.jpg",
      "Teresa.jpg",
      "Dexter.jpg",
      "Jacob.jpg",
      "Aml.jpg",
      "Alby.jpg",
      "Mincho.jpg",
      "Gally.jpg",
    ];
    cardClassName = "HardCard";
    break;
}
let LottoBoss = Math.floor(Math.random() * cards.length);
let los = new Array(cards.length);
los[0] = LottoBoss;
for (let i = 1; i < cards.length; i++) {
  los[i] = los[i - 1] + 1;
  if (los[i] >= cards.length) los[i] = 0;
}

let NewCards = new Array(cards.length);
for (let i = 0; i < cards.length; i++) {
  NewCards[i] = cards[los[i]];
}

let cardWrapper = document.getElementById("cardBoss");
for (let i = 0; i < cards.length; i++) {
  cardWrapper.innerHTML +=
    "<div id=c" +
    i +
    " class='" +
    cardClassName +
    "' onclick='checkCard(" +
    i +
    ")'></div>";
}
cardWrapper.innerHTML += "<div id='tCount'>Turn counter: 0</div>";

let lock = false;
let oneVisible = false;
let turnCounter = 0;
let visibleNR;
let pairsLeft = NewCards.length / 2;
function checkCard(nr) {
  let opacityValue = $("#c" + nr).css("opacity");
  if (opacityValue != 0 && lock == false) {
    $("#c" + nr).css("background-image", "url(img/" + NewCards[nr] + ")");
    $("#c" + nr).addClass(cardClassName + "A");
    $("#c" + nr).removeClass(cardClassName);

    if (oneVisible == false) {
      visibleNR = nr;
      oneVisible = true;

      lock = false;
    } else {
      lock = true;
      if (NewCards[visibleNR] == NewCards[nr] && visibleNR != nr) {
        //   alert("para");
        setTimeout(function () {
          hide2Cards(visibleNR, nr);
        }, 1000);
      } else if (visibleNR == nr) {
        setTimeout(function () {
          restore2Cards(visibleNR, nr);
        }, 1000);
        turnCounter--;
      } else {
        //   alert("Pudło");
        setTimeout(function () {
          restore2Cards(visibleNR, nr);
        }, 1000);
      }
      oneVisible = false;
      turnCounter++;
      $("#tCount").html("Turn counter: " + turnCounter);
    }
  }
}

function hide2Cards(visibleNR, nr) {
  pairsLeft--;
  if (pairsLeft <= 0) {
    clearTimeout(timer);
    $("#time").html(" ");
    $("article").html(
      "<header><h1>You win in " +
        turnCounter +
        " turn!</h1><p><span onclick='location.reload()'>Play again?</span><br><a class='playAgain' href='index.html'>Back to main page</a></p></header>"
    );
  }
  $("#c" + visibleNR).css("opacity", "0");
  $("#c" + nr).css("opacity", "0");
  lock = false;
}

function restore2Cards(visibleNR, nr) {
  $("#c" + visibleNR).addClass(cardClassName);
  $("#c" + visibleNR).removeClass(cardClassName + "A");
  $("#c" + visibleNR).css("background-image", "url(img/karta.jpg)");

  $("#c" + nr).addClass(cardClassName);
  $("#c" + nr).removeClass(cardClassName + "A");
  $("#c" + nr).css("background-image", "url(img/karta.jpg)");
  lock = false;
}

let seconds = 50;
let timer;
function time() {
  if (seconds <= 0) {
    clearTimeout(timer);
    $("#time").html(" ");
    $("article").html(
      "<header><h1>The time is over, you lose! undiscovered pairs: " +
        pairsLeft +
        " </h1><p><span onclick='location.reload()'>Play again?</span><br><a class='playAgain' href='index.html'>Back to main page</a></p></header>"
    );
  } else {
    seconds--;
    $("#time").html("Time left: " + seconds + " s");
    timer = setTimeout("time()", 1000);
  }
}
onload = time;
