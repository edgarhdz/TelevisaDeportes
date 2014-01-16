$(document).ready(function() {
    $('.wdg_matches_concacaf_01 .scroll').bind('swipeup',function(){
        $(this).animate({
            'scrollTop': $(this).scrollTop() + 487
        }, 500);
    });
    $('.wdg_matches_concacaf_01 .scroll').bind('swipedown',function(){
        $(this).animate({
            'scrollTop': $(this).scrollTop() - 487
        }, 500);
    });
});
