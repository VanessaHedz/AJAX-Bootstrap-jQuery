$(document).ready(function(){
    //manda una alerta de sweetalert cuando se presiona el botón 1
    $("#f1").click(function(){
        Swal.fire("Acabas de presionar el botón 1");
    });
    
    //Abre la modal cuando se presona el botón 2
    $("#f2").click(function(){
        $("#exampleModal").modal('show');
    });

    //Para cerrar la modal con sus respectivos botones
    $("#btnClose").click(function(){
        $("#exampleModal").modal('hide');
    })
    $("#btnSave").click(function(){
        $("#exampleModal").modal('hide');
    })

})