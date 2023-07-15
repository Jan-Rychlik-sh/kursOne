document.getElementById("generuj_ciag").addEventListener("click", function () {
  generuj();
});

let generuj = () => {
  let ile = document.getElementById("ile").value;
  let a = document.querySelector("#a").value;
  let b = document.querySelector("#b").value;
  let bufor;
  ile = parseInt(ile);
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) || isNaN(b) || isNaN(ile) || ile < 2) {
    document.querySelector("#ciag").innerHTML = "<p>Podaj poprawne liczby</p>";
  } else {
    let ciag = /* html */ `<p><sub>x</sub></p>`;
    let ratios = /* html */ `
    <p>&Phi; = n
        &divide; n 
            <sub>x-1</sub>
        
    </p>`;
    if (a % 2 == 1) {
      ciag +=
        /* html */ `<div>01 -> <span class='odd'>` +
        a +
        /* html */ `</span></div>`;
    } else {
      ciag +=
        /* html */ `<div>01 -> <span class="even">` +
        a +
        /* html */ `</span></div>`;
    }
    if (b % 2 == 1) {
      ciag +=
        /* html */ `<div>02 -> <span class='odd'>` +
        b +
        /* html */ `</span></div>`;
    } else {
      ciag +=
        /* html */ `<div>02 -> <span class="even">` +
        b +
        /* html */ `</span></div>`;
    }

    ratios += /* html */ `
    <div>01 -> 
        <span class="ratio">brak</span>
    </div>`;
    ratios +=
      /* html */ `<div>02 -> 
        <span class="ratio">` +
      (b / a).toFixed(30) +
      /* html */ `</span>
    </div>`;

    for (i = 3; i <= ile; i++) {
      bufor = a;
      a = b;
      b = bufor + b;
      if (i < 10) bufor = "0";
      else bufor = "";
      if (b % 2 == 1)
        ciag +=
          "<div>" + bufor + i + ' -> <span class="odd"' + b + "</span></div>";
      else
        ciag +=
          "<div>" + bufor + i + ' -> <span class="even"' + b + "</span></div>";
    }

    document.querySelector("#ciag").innerHTML = ciag;
    document.querySelector("#fi").innerHTML = ratios;
  }
};
