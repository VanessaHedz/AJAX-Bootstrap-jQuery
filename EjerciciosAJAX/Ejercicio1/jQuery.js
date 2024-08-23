$(document).ready(function(){
    $(document).on('submit','#mi_formulario',function(e){
        e.preventDefault();
        //Obtención de los datos    
        $.ajax({
            type: 'POST',
            url: 're1.php',
            dataType: 'json',
            data: {
                nombre: $("#nombre").val(),
                paterno: $("#paterno").val(),
                materno: $("#materno").val()
            },
            success: function(data){
                alert(data.nombre);
            },
            error: function(data){
                console.log("Error");
            }
        });
    });
});

