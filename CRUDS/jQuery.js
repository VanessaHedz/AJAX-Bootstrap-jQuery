$(document).ready(function () {});

//Variables globales
let flgVer = true;

//Cerrar formulario
$("#btnClose").click(function () {
  $("#formulario-modal").modal("hide");
});

//Agregar nuevo elemento
$("#btnAdd").click(function () {
  $("#formulario-modal").modal("show");
});

$("#btnSend").click(function () {
  $("#formulario-modal").modal("hide");
});

/*************************************************************
 *  FUNCIONES PARA AGREGAR, ELIMINAR, VER Y EDITAR PELÍCULAS
 *************************************************************/

//---------------------------------------------------------- AGREGAR PELÍCULA
function addPeliculas(data) {
  //alert("Entra a la función");
  $.ajax({
    type: "post",
    url: "add.php",
    dataType: "json",
    data: {
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
      alert("error en el JS");
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
    url: "ver.php",
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

        $("#idTitle").attr("disabled",flgVer);
        $("#idTipo").attr("disabled",flgVer);
        $("#idGenero").attr("disabled",flgVer);
        $("#idYear").attr("disabled",flgVer);
        $("#idPlataforma").attr("disabled",flgVer);
    },
    error: function () {
      alert("No se encontró el id");
    },
  });
}

//---------------------------------------------------------- EDITAR PELÍCULA
function editarPeliculas(id) {
  $("#formulario-modal").modal("show");
  flgVer=false;
  verPeliculas(id,false);
  //Rellenar los campos correspondientes en el formulario de la modal
  $.ajax({
    type: "post",
    url: "edit.php",
    data: {
      id: id,
    },
    success: function (data) {},
  });
}
