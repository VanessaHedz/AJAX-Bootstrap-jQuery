let jugador;

$("#btnPiedra").click(function () {
  jugador = 1;
  alert("Has seleccionado Piedra");
});

$("#btnPapel").click(function () {
  jugador = 2;
  alert("Has seleccionado Papel");
});

$("#btnTijeras").click(function () {
  jugador = 3;
  alert("Has seleccionado Tijeras");
});

$("#btnJugar").click(function () {
  let opciones = ["Piedra", "Papel", "Tijera"];
  let rndm = Math.floor(Math.random() * 3 + 1); //Función para obtener un número aleatorio entre 1 - 3
  /*  1: piedra
      2: papel
      3: tijeras
    */
  let msj = "";

  switch (rndm) {
    case 1:
      msj = "Piedra";
      break;
    case 2:
      msj = "Papel";
      break;
    case 3:
      msj = "Tijeras";
      break;
  }

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
  alert(msj);
});
