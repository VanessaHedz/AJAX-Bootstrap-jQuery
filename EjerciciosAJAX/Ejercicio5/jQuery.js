$(document).ready(function(){
    $("#cargar-datos").click(function(){
        $.ajax({
            url: 'datos.php',
            dataType: 'json',
            type: 'post',

            success: function(data){
                let html = '<ul>';
                html += '<li>'+ data.name +'</li>';
                html += '<li>'+ data.apaterno +'</li>';
                html += '<li>'+ data.amaterno +'</li>';
                html += '<li>'+ data.email +'</li>';
                html += '<li>'+ data.edad +'</li>';
                html += '<ul>';

                $("#resultados").html(html);
                Swal.fire({
                    title: "Se cargaron los datos",
                    icon: "success"
                  });
            },
            error: function(){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            }
        })
    })
})