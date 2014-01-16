$(document).ready(function() {
    (function(T, $) {
        var onDocumentReady = function() {
            var $parent = $('.wdg_mostrated_02');        
            var $clickListA = $parent.find('.wdg_mostrated_02_teama');
            var $clickListB = $parent.find('.wdg_mostrated_02_teamb');
            $clickListA.bind('click', function(evt) {
                evt.preventDefault();
                $(this).next('.wdg_mostrated_02_teamb').removeClass("selected");
                $(this).addClass("selected");
                $(this).parent().next().find('.wdg_mostrated_02_lista').addClass("selected");
                $(this).parent().next().find('.wdg_mostrated_02_listb').removeClass("selected");
            });
            $clickListB.bind('click', function(evt) {
                evt.preventDefault();
                $(this).prev('.wdg_mostrated_02_teama').removeClass("selected");
                $(this).addClass("selected");
                $(this).parent().next().find('.wdg_mostrated_02_listb').addClass("selected");
                $(this).parent().next().find('.wdg_mostrated_02_lista').removeClass("selected");
            });
        };
        $(onDocumentReady);
    }(Televisa, jQuery));

});