$(document).ready(function(){
    //Borrar elemento
    /*$("#btnDel").click(function(){
        $.ajax(function({

        }));
        /*Swal.fire({
            title: "¿Seguro que quieres eliminar el elemento?",
            showDenyButton: true,
            confirmButtonText: "Cancelar",
            denyButtonText: `Eliminar`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });*/
    //});

 
});

    //Agregar nuevo elemento
    $("#btnAdd").click(function(){
        $("#formulario-modal").modal('show');
    });

    //Editar elemento
    $("#btnEdit").click(function(){
        $("#formulario-modal").modal('show');
    });

    //Cerrar Modal
    $("#btnClose").click(function(){
        $("#formulario-modal").modal('hide');
    });

    $("#btnSend").click(function(){
        $("#formulario-modal").modal('hide');
    });

    function deletePeliculas(id){
        $.ajax({
            type: 'post',
            url: 'delete.php',
            dataType : 'json',
            data:{
                id: id
            },
            success: function(data){              
                alert(data.id);
            },
            error: function(){
                alert("error");
            }
    });}