$(".link-left").click(function() {
    $(".slidecontainer").css("margin-left", "0%");
});

$(".link-middle").click(function() {
    $(".slidecontainer").css("margin-left", "-100%");
});

$(".link-right").click(function() {
    $(".slidecontainer").css("margin-left", "-200%");
});