$(document).ready(function() {
    var onDocumentReady = function() {
         var $wst2_height = (parseInt($('.wdg_stats_teams_01 .teams_stadistics').height()) + 1 )* parseInt($('.wdg_stats_teams_01 .teams_stadistics').length);
         var $childrenSize = 0; 
		var $height = (parseInt($('.wdg_stats_teams_01 .teams_stadistics').height()) + 1 )* parseInt($('.wdg_stats_teams_01 .teams_stadistics').length);
            $('.wdg_stats_teams_01 .scroll').bind('swipeup',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() + 265
                    }, 500);
					 $scrollH = $(this).scrollTop() + $(this).height();
                if($height == $scrollH){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() + 100
                    }, 800);
                    return false;
                }
            });
            $('.wdg_stats_teams_01 .scroll').bind('swipedown',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() - 265
                    }, 500);
					 $scrollH = $(this).scrollTop() + $(this).height();
                if($(this).scrollTop() == 0){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() - 100
                    }, 800);
                    return false;
                }
            });
            $('.wdg_stats_teams_01 .scroll').scroll(function(){
                $scrollH = $(this).scrollTop() + $(this).height();
                if($height == $scrollH){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() + 100
                    }, 800);
                    return false;
                }
                if($(this).scrollTop() == 0){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() - 100
                    }, 800);
                    return false;
                }
            });

            $('.wdg_scroll_events').bind('mouseleave', function(evt) {
            evt.preventDefault();
            var $listItems = $(this);
            var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'         
                });
            } 
        });

        //Verifico el último hijo
        $('.wdg_stats_teams_01 div.teams_stadistics_table:last > div').each(function(index){
            $childrenSize += parseInt($(this).width());
        });
        if($(window).width() > 624){
            $('.wdg_stats_teams_01 div.teams_stadistics_table:last').width($childrenSize + 10);
        }
            
        // TODO: refactor for a better approach
        var $parent = $('.wdg_stats_teams_01');
        var $dropdownAnchor = $parent.find('.wdg_stats_teams_01_dropdown');
        var $firstItem = $('.wdg_stats_teams_01_dropdownlist li:first-child');        
        $('.wdg_stats_teams_01_dropdowncontent p').html($firstItem.find('p').html());
        
        $dropdownAnchor.bind('click', function(evt) {
            evt.preventDefault();
            var listItems = $(this).find('.wdg_stats_teams_01_listcontainer').find('.wdg_stats_teams_01_dropdownlist');
            var padre =$(this);
            var visibilidad = listItems.css('visibility'); 
            if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '180px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            var $dropdownItems2 = $(this).find('.wdg_stats_teams_01_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                //console.log('Entando');
                evt.preventDefault();
                padre.find('.wdg_stats_teams_01_dropdowncontent p').html($(this).find('p').html());
            });
        });
        $("#dropdwon-right").click(function(e) {
           // console.log($(this).parents('div'));
        });

        $dropdownAnchor.bind('mouseleave', function(evt) {
            evt.preventDefault();
            var $listItems = $(this).find('.wdg_stats_teams_01_dropdownlist');
            var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
        });
        
         
    };
    $(onDocumentReady);

   

    $(function() {
    var zIndexNumber = 1000;
    $('.wdg_stats_teams_01 div.wdg_scroll_dropdown').each(function() {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 10;
        });
    });
});