let pln = 1000;
document.write("Wpłata: " + pln + " PLN <br><br>");

//Kantor
let usd = pln / 4.07;
usd = Math.floor(usd * 100) / 100;
document.write("Saldo: " + usd + " USD <br><br>");

let zakupy = 23.99;
document.write("Saldo: " + zakupy + " USD <br>");

let prowizja = Math.ceil(0.02 * zakupy * 100) / 100;
document.write("Prowizja: " + prowizja + " USD <br><br>");

usd -= zakupy - prowizja;
document.write("Saldo: " + usd + " USD <br><br>");

usd = 225.99;
usd = Math.trunc(usd);
document.write("Saldo: " + usd + " USD <br><br>");
