let jugador;
let flgJugador = false;
$("#btnOk").hide();

$("#btnPiedra").click(function () {
  jugador = 1;
  $("#divMensaje").append("<h1>Has seleccionado Piedra</h1>");
  flgJugador = true;
});

$("#btnPapel").click(function () {
  jugador = 2;
  $("#divMensaje").append("<h1>Has seleccionado Papel</h1>");
  flgJugador = true;
});

$("#btnTijeras").click(function () {
  jugador = 3;
  $("#divMensaje").append("<h1>Has seleccionado Tijeras</h1>");
  flgJugador = true;
});

$("#btnJugar").click(function () {
  if (!flgJugador) {
    alert("Selecciona una opción para jugar");
  } else {
    $("#btnOk").show();
    let opciones = ["Piedra", "Papel", "Tijeras"];
    let rndm = Math.floor(Math.random() * 3 + 1); //Función para obtener un número aleatorio entre 1 - 3
    /*1: piedra
      2: papel
      3: tijeras*/
    let msj = opciones[rndm - 1];

    msj = "Yo escogí " + msj + ".";

    if (jugador == rndm) {
      msj = msj + " ¡Es un empate!";
    } else if (jugador == 1) {
      if (rndm == 2) {
        msj = msj + " ¡Yo gané!";
      } else {
        msj = msj + " ¡Ganaste!";
      }
    } else if (jugador == 2) {
      if (rndm == 1) {
        msj = msj + " ¡Ganaste!";
      } else {
        msj = msj + " ¡Yo gané!";
      }
    } else {
      if (rndm == 1) {
        msj = msj + " ¡Yo gané!";
      } else {
        msj = msj + " ¡Ganaste!";
      }
    }
    // alert(msj);
    $("#divMensaje").append("<h1>" + msj + "</h1>");

    $("#btnOk").click(function () {
      $("#btnJugar").show();
      $("#btnOk").hide();
      $("#divMensaje").empty();
      flgJugador = false;
    });

    setTimeout(function () {
      $("#btnJugar").show();
      $("#btnOk").hide();
      $("#divMensaje").empty();
      flgJugador = false;
    }, 5000);
  }
});
