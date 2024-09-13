let jugador;
let flgJugador = false;
let flgSeleccion = false;
let win = false;

//Marcadores
let player = 0;
let CPU = 0;

$("#btnOk").hide();

$("#btnPiedra").on("click", function () {
  if(flgSeleccion){
    alert("Ya seleccionaste una opción");
  }
  else{
    jugador = 1;
    $("#divMensaje").append("<h1>Has seleccionado Piedra</h1>");
    flgJugador = true;
    flgSeleccion = true;
  }
});

$("#btnPapel").on("click", function () {
  if(flgSeleccion){
    alert("Ya seleccionaste una opción");
  }
  else{
    jugador = 2;
    $("#divMensaje").append("<h1>Has seleccionado Papel</h1>");
    flgJugador = true;
    flgSeleccion = true;
  }
});

$("#btnTijeras").on("click", function () {
  if(flgSeleccion){
    alert("Ya seleccionaste una opción");
  }
  else{
    jugador = 3;
    $("#divMensaje").append("<h1>Has seleccionado Tijeras</h1>");
    flgJugador = true;
    flgSeleccion = true;
  }
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
        CPU++;
      } else {
        msj = msj + " ¡Ganaste!";
        player++;
        win = true;
      }
    } else if (jugador == 2) {
      if (rndm == 1) {
        msj = msj + " ¡Ganaste!";
        player++;
        win = true;
      } else {
        msj = msj + " ¡Yo gané!";
        CPU++;
      }
    } else {
      if (rndm == 1) {
        msj = msj + " ¡Yo gané!";
        CPU++;
      } else {
        msj = msj + " ¡Ganaste!";
        win = true;
        player++;
      }
    }
    // alert(msj);
    $("#divMensaje").append("<h1>" + msj + "</h1>");
    console.log("Jugador: "+player);
    console.log("CPU: "+CPU);

    $("#MarcadorJugador").text(player);
    $("#MarcadorCPU").text(CPU);

    if (win) {
      confetti();
    }

    $("#btnOk").click(function () {
      $("#btnJugar").show();
      $("#btnOk").hide();
      $("#divMensaje").empty();
      flgJugador = false;
      flgSeleccion = false;
      win = false;
    });

    setTimeout(function () {
      $("#btnJugar").show();
      $("#btnOk").hide();
      $("#divMensaje").empty();
      flgJugador = false;
      flgSeleccion = false;
      win = false;
    }, 5000);
  }
});
