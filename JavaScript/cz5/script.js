let cards = [
  "ciri.png",
  "geralt.png",
  "jaskier.png",
  "jaskier.png",
  "iorweth.png",
  "triss.png",
  "geralt.png",
  "yen.png",
  "ciri.png",
  "triss.png",
  "yen.png",
  "iorweth.png",
];

let LottoBoss = Math.floor(Math.random() * 12);
let los = new Array(12);
los[0] = LottoBoss;
for (let i = 1; i < 12; i++) {
  los[i] = los[i - 1] + 1;
  if (los[i] >= 12) los[i] = 0;
}

let randomCards = [
  cards[los[0]],
  cards[los[1]],
  cards[los[2]],
  cards[los[3]],
  cards[los[4]],
  cards[los[5]],
  cards[los[6]],
  cards[los[7]],
  cards[los[8]],
  cards[los[9]],
  cards[los[10]],
  cards[los[11]],
];

console.log(los);
console.log(randomCards);

// console.log(cards);

for (let i = 0; i < randomCards.length; i++) {
  $("#c" + i).on("click", function () {
    revealCard(i);
  });
}

let oneVisible = false;
let turnCounter = 0;
let firstCard; //nr wcześniejszy
let lock = false;
let pairsLeft = 6;

function revealCard(nr) {
  let opacityValue = $("#c" + nr).css("opacity");
  if (opacityValue != 0 && lock == false) {
    // alert(nr);
    lock = true;

    let obraz = "url(img/" + randomCards[nr] + ")";
    $("#c" + nr).css("background-image", obraz);
    $("#c" + nr).removeClass("card");
    $("#c" + nr).addClass("cardA");

    if (oneVisible == false) {
      //1 card
      firstCard = nr;
      oneVisible = true;
      lock = false;
    } else {
      //2 card
      if (randomCards[nr] == randomCards[firstCard]) {
        // alert("parka");
        setTimeout(function () {
          hide2Cards(nr, firstCard);
        }, 750);
      } else {
        // alert("pudło");
        setTimeout(function () {
          restore2Cards(firstCard, nr);
        }, 1000);
      }
      turnCounter++;
      $(".score").html("Turn Couter: " + turnCounter);
      oneVisible = false;
    }
  }
}

function hide2Cards(nr1, nr2) {
  $("#c" + nr1).css("opacity", "0");
  $("#c" + nr2).css("opacity", "0");
  pairsLeft--;

  if (pairsLeft == 0) {
    $(".board").html(
      "<h1>You win<br> Done in " +
        turnCounter +
        " turns!</h1> <a style='cursor: pointer;' onclick='location.reload();'>Will you play again?</a>"
    );
  }

  lock = false;
}

function restore2Cards(nr1, nr2) {
  let obraz = "url(img/karta.png)";
  $("#c" + nr1).css("background-image", obraz);
  $("#c" + nr1).removeClass("cardA");
  $("#c" + nr1).addClass("card");

  $("#c" + nr2).css("background-image", obraz);
  $("#c" + nr2).removeClass("cardA");
  $("#c" + nr2).addClass("card");
  lock = false;
}
