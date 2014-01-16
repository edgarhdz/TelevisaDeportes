;jQuery(function($){ 
    (function($,T){
		
		
		$('.wdg_video_chat_01 .wdg_video_chat_01_bar ul li a').click(function(event){
			
			event.preventDefault();
			$('.wdg_video_chat_01 .wdg_video_chat_01_bar ul li').removeClass('current');
			$(this).parent().addClass('current');
			
			$('.wdg_video_chat_01 .tab').hide();
			$('.wdg_video_chat_01 #' +  $(this).attr('href')).show();
		});
		
		
		$('.wdg_video_chat_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('.scroll');
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height() - 85
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height() + 85
                }, 500);
            }); 
        });
		/*Monitor scroll*/
		$('.wdg_video_chat_01 .scroll').scroll(function() {
				var $wvc1_alt = $('.wdg_video_chat_01 .carrusel').height();
				var $wvc1_position = $(this).scrollTop();
				var $wvc1_med = $wvc1_position + $(this).height(); 
				var $wvc1_down = $(this).siblings('.nav').children().children('.tvsa-caret-down').parent();
				var $wvc1_up = $(this).siblings('.nav').children().children('.tvsa-caret-up').parent();
				if($wvc1_position == 0){
					$wvc1_up
					.removeClass('bgactive')
					.addClass('bginactive');
				}else{
					$wvc1_up
					.removeClass('bginactive')
					.addClass('bgactive');
				}
				if($wvc1_med >= $wvc1_alt){
					// inactivo
					 $(this).siblings('.degraded').css("visibility","hidden");
					 $wvc1_down
					 .removeClass('bgactive')
					 .addClass('bginactive');
				}else{
					// activo
					 $(this).siblings('.degraded').css("visibility","visible");
					 $wvc1_down
					 .removeClass('bginactive')
					 .addClass('bgactive');
				}
				console.log('Estoy: '+$wvc1_position+' sumo: '+$wvc1_med+' espero: '+$wvc1_alt);
		});
		
	 })($,Televisa);
});