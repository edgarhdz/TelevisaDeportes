$(document).ready(function() {
    var onDocumentReady = function() 
    {
        $('.wdg_stats_res_01 .wdg_scroll_elements').bind('mouseleave', function(evt) {
                    evt.preventDefault();
                    var $listItems = $('.wdg_stats_res_01 .wdg_scroll_events');
                    var visibilidad = $listItems.css('visibility');
                    if ( visibilidad == 'visible' ) {
                        $listItems.css({
                            visibility: 'hidden',
                            height: '0px'       
                        });
                    } 
                });
        var $parent2 = $('.wdg_stats_res_01 ');
		/*One*/
		 var $dropdownAnchor2 = $parent2.find('.wdg_stats_res_012_dropdown');
        $dropdownAnchor2.bind('click', function(evt) {
            evt.preventDefault();
            var listItems = $(this).find('.wdg_stats_res_01_dropdownlist');
            //console.log(listItems);
            var padre =$(this);
            var visibilidad = listItems.css('visibility'); 
            if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            var $dropdownItems2 = $(this).find('.wdg_stats_res_01_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                //console.log('Entando');
                evt.preventDefault();
                padre.find('.wdg_stats_res_012_dropdowncontent p').html($(this).find('p').html());
            });
        });
		
		$('.wdg_stats_res_01 .wdg_stats_res_01_dropdownlist').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_stats_res_01 .wdg_stats_res_01_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            } 
        });
		/*END One*/
		
        var $dropdownAnchor2 = $parent2.find('.wdg_stats_res_012_dropdown');
        $dropdownAnchor2.bind('click', function(evt) {
            evt.preventDefault();
            var listItems = $(this).find('.wdg_stats_res_012_dropdownlist');
            //console.log(listItems);
            var padre =$(this);
            var visibilidad = listItems.css('visibility'); 
            if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            var $dropdownItems2 = $(this).find('.wdg_stats_res_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                //console.log('Entando');
                evt.preventDefault();
                padre.find('.wdg_stats_res_012_dropdowncontent p').html($(this).find('p').html());
            });
			
    			$('.wdg_stats_res_01 .wdg_stats_res_012_dropdownlist').bind('mouseleave', function(evt) {
                    evt.preventDefault();
        			var $listItems = $('.wdg_stats_res_01 .wdg_stats_res_012_dropdownlist');
        			var visibilidad = $listItems.css('visibility');
                    if ( visibilidad == 'visible' ) {
                        $listItems.css({
                            visibility: 'hidden',
                            height: '0px'       
                        });
                    } 
                });

        });
	
    };
	
    $(onDocumentReady);
});

$(function() {
    var zIndexNumber = 1000;
    $('.wdg_stats_res_01 div').each(function() {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 10;
    });
});