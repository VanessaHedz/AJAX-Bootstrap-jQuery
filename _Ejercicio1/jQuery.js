$(document).ready(function(){
    $(".button2").hide();
    $(".button1").click(function(){
        $(".myClass").css("background-color","blue");
        $("#myElement").hide();
        $("p").addClass("highlight");
        $(".button2").show();
        $(".button1").hide();
    })
    $(".button2").click(function(){
        $(".highlight").css("background-color","white");
    });
})