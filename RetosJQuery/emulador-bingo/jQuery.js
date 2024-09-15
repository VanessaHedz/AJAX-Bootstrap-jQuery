let temp; //Ficha temporal aleatoria que se saca al tocar el botón
let fichas = []; //Lista de fichas que ya se sacaron
let cnt = 0; //Contador para poner diferentes renglones en las Fichas Pasadas
let tempPlayer = 0, tempCPU = 0; 
let Player = [], CPU=[];

$("#document").ready(function () {
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
    $("#tbJugador").append("<td id='cPlayer"+n+"' class='text-center'>" + Player[n] + "</td>");
    $("#tbCPU").append("<td id='cCPU"+n+"' class='text-center'>" + CPU[n] + "</td>");
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
      timer: 2000,
    });

    //Cada 10 fichas, cambiar de renglón
    //Insertar las fichas en el tablero
    if ((fichas.length) % 10 == 1) {
      $("#tbFichas").append("<tr></tr>");
    }
    $("#tbFichas").append("<td class='text-center td--fichas'>" + temp + "</td>");
  }

  // Ver si la ficha estuvo en el tablero del jugador o del CPU
  if(Player.includes(temp)){
    let num=$.inArray(temp,Player);
    $("#cPlayer"+num).css("background-color","red");
  }
  if(CPU.includes(temp)){
    let num=$.inArray(temp,CPU);
    $("#cCPU"+num).css("background-color","red");
  }

});
