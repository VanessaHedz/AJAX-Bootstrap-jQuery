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
   let msj = '';

   switch (rndm) {
    case 1:
        msj = 'Piedra';
      break;
    case 2:
        msj = 'Papel';
      break;
    case 3:
        msj = 'Tijeras';
      break;
  }

  alert('Yo escogí '+msj);


  switch (jugador) {
    case 1:
      switch (rndm) {
        case 1:
          alert("Empate");
          break;
        case 2:
          alert("Gana CPU");
          break;
        case 3:
          alert("Gana jugador");
          break;
      }
      break;
    case 2:
        switch (rndm) {
            case 1:
              alert("Gana jugador");
              break;
            case 2:
              alert("Empate");
              break;
            case 3:
              alert("Gana CPU");
              break;
          }
      break;
    case 3:
        switch (rndm) {
            case 1:
              alert("Gana CPU");
              break;
            case 2:
              alert("Gana jugador");
              break;
            case 3:
              alert("Empate");
              break;
          }
      break;
  }
});
