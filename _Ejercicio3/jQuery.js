$(document).ready(function(){
    $("button").click(function(){
        alert("Acabas de presionar el botón.");

        var nombre = $("#name").val();
        var email = $("#email").val();
        var tel = $("#tel").val();

        //Validación básica
        if(nombre==""){
            alert("Nombre no válido");
        }
        if(email==""){
            alert("Correo electrónico no válido");
        }
        
    });
    $("#gato").mouseenter(function(){
        alert("La imagen se achica");
        $(this).css("height", "30%");
        $(this).css("width", "30%");
    });
});