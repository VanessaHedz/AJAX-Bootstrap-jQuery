$(document).ready(function(){
    $("#form").on('submit', function(e){
        e.preventDefault();
            //petición con AJAX
        $.ajax({
            type: 'POST',
            url: 'procesador.php',
            dataType: 'json',  //Se escribe cuando se usan los datos
            data:{
                name: $("#name").val(),
                email: $("#email").val()
            },
            success: function(data){
                let html = '<ul>';

           
                html += '<li>'+ data.name +'</li>';
                html += '<li>'+ data.email +'</li>';
                html += '</ul>';

                $("#status").html(html);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Se enviaron los datos",
                    showConfirmButton: false,
                    timer: 1500
                  });

            },
            error: function(){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        });
    });

});