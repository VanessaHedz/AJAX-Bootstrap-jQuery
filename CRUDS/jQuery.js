$(document).ready(function () {});
//Crear una nueva película
function addPeliculas(data) {
  //alert("Entra a la función");
  $.ajax({
      type: 'post',
      url: 'add.php',
      dataType: 'json',
      data:{
          titulo: $("#idTitle").val(),
          tipo: $("#idTipo").val(),
          genero: $("#idGenero").val(),
          anio: $("#idYear").val(),
          plataforma: $("#idPlataforma").val()
      },
      success: function(data){

        if (data.success){
            alert(data.message);
            window.location.reload();
        }else{
            alert(data.message);
        }
          
      },
      error: function(){
          alert("error en el JS");
      }
  });
}
//addPeliculas(1);

//Agregar nuevo elemento
$("#btnAdd").click(function () {
  $("#formulario-modal").modal("show");
});

//Editar elemento
$("#btnEdit").click(function () {
  $("#formulario-modal").modal("show");
});

//Cerrar Modal
$("#btnClose").click(function () {
    
    $("#formulario-modal").modal("hide");
});

$("#btnSend").click(function () {
  $("#formulario-modal").modal("hide");
});

function deletePeliculas(id) {
  $.ajax({
    type: "post",
    url: "delete.php",
    dataType: "json",
    data: {
      id: id,
    },
    success: function (data) {
      alert(data.id);
      window.location.reload();
    },
    error: function () {
      alert("error");
    },
  });
}
