$(document).ready(function(){
    //Abrir el modal:
    $("#btnAbrir").click(function(){
        $("#formulario-modal").modal('show');
    });

    $("#btnClose").click(function(){
        $("#formulario-modal").modal('hide');
    });

    //Formulario
    $("#enviar").click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'procesador.php',
            dataType : 'json',
            data:{
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(data){
                Swal.fire({
                    icon: "success",
                    title: "¡Éxito!",
                    text: "Los datos se enviaron correctamente"
                  });

                $("#formulario-modal").modal('hide');

                $("#btnResultados").click(function(){
                    alert("correo: "+data.email+"\npass: "+data.password);
                });                

            },
            error: function(){
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Los datos no se enviaron correctamente"
                  });
            }
        });
    });
});