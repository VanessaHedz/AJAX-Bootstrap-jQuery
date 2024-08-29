$(document).ready(function () {});

//Variables globales
let flgVer = true;
let flgEdit = false;

//Cerrar formulario
$("#btnClose").click(function () {
  $("#formulario-modal").modal("hide");
});

//Agregar nuevo elemento
$("#btnAdd").click(function () {
  $("#formulario-modal").modal("show");
  flgEdit = false; //Cuando se presiona el botón de +, es para CREAR una película.
  console.log(flgEdit);
  $("#btnSend").show();
  $("#btnSend").text("Enviar");
});

$("#btnSend").click(function () {
  $("#formulario-modal").modal("hide");
});

/*************************************************************
 *  FUNCIONES PARA AGREGAR, ELIMINAR, VER Y EDITAR PELÍCULAS
 *************************************************************/

//---------------------------------------------------------- AGREGAR Y EDITAR PELÍCULAS

  function AddEditPeliculas(data) {
    //alert("Entra a la función");
    $.ajax({
      type: "post",
      url: flgEdit?'edit.php':'add.php',
      dataType: "json",
      data: {
        id:$("#idId").val(),
        titulo: $("#idTitle").val(),
        tipo: $("#idTipo").val(),
        genero: $("#idGenero").val(),
        anio: $("#idYear").val(),
        plataforma: $("#idPlataforma").val(),
      },
      success: function (data) {
        if (data.success) {
          alert(data.message);
          window.location.reload();
        } else {
          alert(data.message);
        }
      },
      error: function () {
        alert("error en el JS AddEditPeliculas");
      },
    });
  }

//---------------------------------------------------------- ELIMINAR PELÍCULA
function deletePeliculas(id) {
  Swal.fire({
    title: "¿Seguro que quieres eliminar la película?",
    showDenyButton: true,
    confirmButtonText: "Eliminar",
    denyButtonText: "No eliminar",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      $.ajax({
        type: "post",
        url: "delete.php",
        dataType: "json",
        data: {
          id: id,
        },
        success: function (data) {
          Swal.fire({
            title: "El elemento se eliminó permanentemente",
            icon: "success",
          }).then((result) => {
            window.location.reload();
          });
        },
        error: function () {
          alert("error");
        },
      });
    } else if (result.isDenied) {
      Swal.fire("El elemento no se eliminó", "", "info");
    }
  });
}

//---------------------------------------------------------- VER PELÍCULA
function verPeliculas(id) {
  $.ajax({
    type: "post",
    url: 'ver.php',
    dataType: "json",
    data: {
      id: id,
    },
    success: function (data) {
      //alert("Se seleccionó la película "+data.titulo);
      $("#formulario-modal").modal("show");
      $("#idTitle").val(data.titulo);
      $("#idTipo").val(data.tipo);
      $("#idGenero").val(data.genero);
      $("#idYear").val(data.anio);
      $("#idPlataforma").val(data.plataforma);

      $("#idTitle").attr("disabled", flgVer);
      $("#idTipo").attr("disabled", flgVer);
      $("#idGenero").attr("disabled", flgVer);
      $("#idYear").attr("disabled", flgVer);
      $("#idPlataforma").attr("disabled", flgVer);
    },
    error: function () {
      alert("No se encontró el id");
    },
  });
}

function watchMovie(id){
  $("#formulario-modal").modal("show");
  flgVer = true;
  verPeliculas(id);
  $("#btnSend").hide();
}

//---------------------------------------------------------- EDITAR PELÍCULA
function editarPeliculas(id) {
  //Esta función recibe el id de la película seleccionada, búsca en la base de datos los elementos 
  //de dicha película y los muestra en un formulario editable.
  //Necesita de una función que reciba los elementos del formulario y los actualice en la base de 
  //datos. 
  $("#formulario-modal").modal("show");
  flgVer = false;
  flgEdit = true; //Cuando se presiona el botón de editar, es para EDITAR una película.
  console.log(flgEdit);
  verPeliculas(id);
  $("#btnSend").show();
  $("#btnSend").text("Editar");
  $("#idId").val(id);
}
