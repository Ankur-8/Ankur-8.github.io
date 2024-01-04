
// fade out on scroll
$(function() {
    $(window).scroll(function(){
        $(".intro").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});