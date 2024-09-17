let temp; //Ficha temporal aleatoria que se saca al tocar el botón
let fichas = []; //Lista de fichas que ya se sacaron
let cnt = 0; //Contador para poner diferentes renglones en las Fichas Pasadas
let tempPlayer = 0, tempCPU = 0;
let Player = [], CPU = [];
let arrayWin = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let MarcadorJugador = 0, MarcadorCPU =0;

$("#document").ready(function () {

  $("#btnAgain").hide();
  $("#btnFichas").show();

  //Llenado de los tableros
  for (let n = 0; n < 15; n++) { //Celdas
    let flgPlayer = true, flgCPU = true;

    // ---------------------- CREACIÓN DE LA LISTA DE FICHAS EN EL TABLERO
    while (flgPlayer) {
      tempPlayer = Math.floor(Math.random() * 90 + 1);
      flgPlayer = Player.includes(tempPlayer);
    }
    while (flgCPU) {
      tempCPU = Math.floor(Math.random() * 90 + 1);
      flgCPU = CPU.includes(tempCPU);
    }

    Player.push(tempPlayer);
    CPU.push(tempCPU);
    // ----------------------

    tempPlayer = Math.floor(Math.random() * 90 + 1);
    tempCPU = Math.floor(Math.random() * 90 + 1);
    if (n % 5 == 0) {
      $("#tbJugador").append("<tr></tr>");
      $("#tbCPU").append("<tr></tr>");
    }
    $("#tbJugador").append("<td id='cPlayer" + n + "' class='text-center'>" + Player[n] + "</td>");
    $("#tbCPU").append("<td id='cCPU" + n + "' class='text-center'>" + CPU[n] + "</td>");
  }
})

$("#btnFichas").click(function () {
  let flgRepetido = true;
  if (fichas.length == 90) {
    Swal.fire({
      title: "Ya no quedan más fichas 😢",
      showConfirmButton: false,
      timer: 1000,
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
      timer: 500,
    });

    //Cada 10 fichas, cambiar de renglón
    //Insertar las fichas en el tablero
    if ((fichas.length) % 10 == 1) {
      $("#tbFichas").append("<tr></tr>");
    }
    $("#tbFichas").append("<td class='text-center td--fichas'>" + temp + "</td>");
  }

  // Ver si la ficha estuvo en el tablero del jugador o del CPU
  if (Player.includes(temp)) {
    let num = $.inArray(temp, Player);
    $("#cPlayer" + num).css("background-color", "red");
    $("#cPlayer" + num).css("border", "2px solid red");
    Player[num] = "*";
    console.log(Player);
  }
  if (CPU.includes(temp)) {
    let num = $.inArray(temp, CPU);
    $("#cCPU" + num).css("background-color", "red");
    $("#cCPU" + num).css("border", "2px solid red");
    CPU[num] = "*";
    console.log(CPU);
  }

  if (Player[0] == "*" && Player[1] == "*" && Player[2] == "*" && Player[3] == "*" && Player[4] == "*" ||
    Player[5] == "*" && Player[6] == "*" && Player[7] == "*" && Player[8] == "*" && Player[9] == "*" ||
    Player[10] == "*" && Player[11] == "*" && Player[12] == "*" && Player[13] == "*" && Player[14] == "*") {
    alert("El jugador ganó");
    MarcadorJugador++;
    $("#btnFichas").hide();
    $("#btnAgain").show();
  }
  else if (CPU[0] == "*" && CPU[1] == "*" && CPU[2] == "*" && CPU[3] == "*" && CPU[4] == "*" ||
    CPU[5] == "*" && CPU[6] == "*" && CPU[7] == "*" && CPU[8] == "*" && CPU[9] == "*" ||
    CPU[10] == "*" && CPU[11] == "*" && CPU[12] == "*" && CPU[13] == "*" && CPU[14] == "*") {
    alert("El CPU ganó");
    MarcadorCPU++;
    $("#btnFichas").hide();
    $("#btnAgain").show();
  }

  $("#h3MarcadorJugador").text(MarcadorJugador);
  $("#h3MarcadorCPU").text(MarcadorCPU);

});
