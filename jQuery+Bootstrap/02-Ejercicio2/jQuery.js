$(document).ready(function(){
    $("#enviar").click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: "procesador.php",
            dataType: 'json',
            data: {
                email: $('#email').val(),
                password: $("#password").val()
            },
            success: function(data){
                Swal.fire({
                    icon: "success",
                    title: "¡Éxito!",
                    html: data.msj
                  });

            },
            error: function(){
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Los datos no se enviaron correctamente"
                  });
            }
        })        
    })
})