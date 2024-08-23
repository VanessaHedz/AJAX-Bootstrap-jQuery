$(document).ready(function(){
    $("button").click(function(){
        $("#e").load("extractos.txt #h1");
        $("#div1").load("extractos.txt");
        //Para copiar y pegar texto
        var texto = $(".texto");
        texto.clone().insertAfter(texto);        
    });
});