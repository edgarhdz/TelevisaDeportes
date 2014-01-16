 $(document).ready(function() {
	/*BEGIN: Swipe*/
	var altWdgResult01 = 0;
	
	if ($(window).width() < 978 && $(window).width() > 624){
		altWdgResult01 = 380;
	}
	else{
		altWdgResult01 = 160;  		
	} 
	
	$('.wdg_golfresult_01 .scroll2').bind('swipeup',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() + altWdgResult01
            }, 500);
	});
	$('.wdg_golfresult_01 .scroll2').bind('swipedown',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() - altWdgResult01
            }, 500);
	}); 
	/*END: Swipe*/
	
    var onDocumentReady = function() {
        var $content = $('.wdg_golfresult_01_content');
        $content.each(function(){
 
            var $totalHeight = 0;
            var $count = 0;
            $(this).find('.wdg_golfresult_01_month').each(function() {
                $totalHeight += $(this).outerHeight(true);
                $count ++;
            });
            var $moveUP = $totalHeight / ( $count * 2 );
            var $parent = $(this);
            //$parent.height($totalHeight);
            $parent.next().find('.wdg_golfresult_01_up').click(function(){
                $parent.animate({
                    'scrollTop': $parent.scrollTop() - $moveUP
                }, 500);
            });
            
            $parent.next().find('.wdg_golfresult_01_down').click(function(){
                $parent.animate({
                    'scrollTop': $parent.scrollTop() + $moveUP
                }, 500);

            });
        });

		
        $('.wdg_golfresult_01 .wdg_scroll_events').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_golfresult_01 .wdg_scroll_events');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
        });
        
        
        //Ocultar Degradado 
        $('.wdg_golfresult_01 .scroll .scroll2').scroll(function() {        	
			var $war1_position = $(this).scrollTop();
			var $war1_position = $war1_position + 188;
			if($(window).width() < 624 ){$war1_altura = 813;}else{$war1_altura = $(this).height()}			
			if($war1_position >= $war1_altura) {				
				$('.wdg_golfresult_01 .degraded').css('visibility','hidden');						
  			}else{
				$('.wdg_golfresult_01 .degraded').css("visibility","visible");
				console.log('mostrar');				
			}			
		});	
        
    };
    $(onDocumentReady);
});
