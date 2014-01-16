$(document).ready(function() {
	/*BEGIN: Swipe*/
	var altWdgResult01 = 0;
	
	if ($(window).width() < 978 && $(window).width() > 624){
		altWdgResult01 = 380;
	}
	else{
		altWdgResult01 = 160;  		
	} 
	
	$('.wdg_tennisresult_01 .scroll2').bind('swipeup',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() + altWdgResult01
            }, 500);
	});
	$('.wdg_tennisresult_01 .scroll2').bind('swipedown',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() - altWdgResult01
            }, 500);
	}); 
	/*END: Swipe*/
	
    var onDocumentReady = function() {    	
        var $content = $('.wdg_tennisresult_01_content');
        $content.each(function(){
            var $totalHeight = 0;
            var $parent = $(this);
            $totalHeight = $parent.find('.wdg_tennisresult_01_results ul li').outerHeight(true);
            $parent.next().find('.wdg_tennisresult_01_up').click(function(){
                $parent.animate({
                    'scrollTop': $parent.scrollTop() - ( $totalHeight * 3 )
                }, 500);
            });
            
            $parent.next().find('.wdg_tennisresult_01_down').click(function(){
                $parent.animate({
                    'scrollTop': $parent.scrollTop() + ( $totalHeight * 3 )
                }, 500);
            });
        });
		
		 $('.wdg_tennisresult_01 .wdg_scroll_events').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_tennisresult_01 .wdg_scroll_events');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'         
                });
            } 
        });
		
		//Ocultar Degradado 	       
		$('.wdg_tennisresult_01 .scroll2').scroll(function() {
			var altura = $('.wdg_tennisresult_01 .alto').height();
			var alto =  $('.wdg_tennisresult_01 .scroll2').height();
			var scroll = $('.wdg_tennisresult_01 .scroll2').scrollTop() + alto;										
				//console.log('alto: ' + altura + 'scroll: ' + scroll );
				
			if(scroll  == altura) {					
				$('.wdg_tennisresult_01 .degraded').css("visibility","hidden");  					
      			}else{      			
      				$('.wdg_tennisresult_01 .degraded').css("visibility","visible");
				}
			});	  

    };
    $(onDocumentReady);
});
