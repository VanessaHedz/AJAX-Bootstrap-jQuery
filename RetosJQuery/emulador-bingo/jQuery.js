let temp; //Ficha temporal aleatoria que se saca al tocar el botón
let fichas = []; //Lista de fichas que ya se sacaron
let cnt = 0; //Contador para poner diferentes renglones en las Fichas Pasadas

$("#btnFichas").click(function () {
  let flgRepetido = true;
  if (fichas.length == 90) {
    Swal.fire({
      title: "Ya no quedan más fichas 😢",
      showConfirmButton: false,
      timer: 2000,
    });
    console.log(fichas);
  } else {
    while (flgRepetido) {
      temp = Math.floor(Math.random() * 90 + 1);
      flgRepetido = fichas.includes(temp);
    }
    fichas.push(temp);
    console.log(fichas);
    console.log(fichas.length);

    Swal.fire({
      title: "La ficha que sacaste es:",
      text: temp,
      showConfirmButton: false,
      timer: 2000,
    });

    //Cada 10 fichas, cambiar de renglón
    //Insertar las fichas en el tablero
    if ((fichas.length)%10==1) {
      $("#tbFichas").append("<tr></tr>");
    }
    $("#tbFichas").append("<td class='text-center td--fichas'>" + temp + "</td>");
  }
});
