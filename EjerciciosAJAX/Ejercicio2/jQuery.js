$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();

        let data = $(this).serializeArray();
        data.push({name: 'tag', 'value': 'login'});

        $.ajax({
            url: "resultados.php",
            type: "post",
            dataType: "json",
            data: data,
            beforeSend:function(){
                $('.fa').css('display','inline');
            }
        })

        .done(function(){
            $('span').html("Correcto");
        })

        .fail(function(){
            $('span').html("Falso");
        })
        .always(function(){
            console.log("complete");
        })
    })
})