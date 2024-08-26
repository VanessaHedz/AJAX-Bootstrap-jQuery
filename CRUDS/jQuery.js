$(document).ready(function(){
    $("#btnDel").click(function(){
        Swal.fire({
            title: "¿Seguro que quieres eliminar el elemento?",
            text: "Los elementos serán borrados permanentemente",
            icon: "question"
          });
    });

    $("#btnAdd").click(function(){
        $("#formulario-modal").modal('show');
    });
    $("#btnEdit").click(function(){
        $("#formulario-modal").modal('show');
    });

    $("#btnClose").click(function(){
        $("#formulario-modal").modal('hide');
    });

    $("#btnSend").click(function(){
        $("#formulario-modal").modal('show');
    });
})