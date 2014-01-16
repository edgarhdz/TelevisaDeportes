;jQuery(function($){ 
    (function($,T){
        $('.wdg_positions_01').each(function(ix,element){
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $wp1_theUl = $('#navigation_list');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
				$('#navigation_list').animate({
                    'scrollTop': $wp1_theUl.scrollTop() - $wp1_theUl.height()
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $('#navigation_list').animate({
                    'scrollTop': $wp1_theUl.scrollTop() + $wp1_theUl.height()
                }, 500);
            });
     	});
		
		/*Swipe*/
		$('.wdg_positions_01 .scroll').bind('swipeup',function(){
			$move =  $(this).children().children().children().height();
			$move = $move * 3;
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + $move
                }, 500);
		});
		$('.wdg_positions_01 .scroll').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - $move
                }, 500);
		});
		/*Monitoreo scroll*/
		var wp1_altura = $('.wdg_positions_01 .datos').height();
		$('.wdg_positions_01 .scroll').scroll(function() {
				var $wp1_position = $(this).scrollTop();
				if($(this).scrollTop() + $(this).height() == wp1_altura) {
           		 $(this).siblings('.degradado').css("visibility","hidden");
				 //$(this).siblings('.wdg_positions_01_cnt').children().children('.next').css('color','#000');
				 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').addClass('bginactive');
				 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').removeClass('bgactive');
      			}else{
				 $(this).siblings('.degradado').css("visibility","visible");
				 //$(this).siblings('.wdg_positions_01_cnt').children().children('.next').css('color','#FFF');
				  $(this).siblings('.wdg_positions_01_cnt').children().children('.next').addClass('bgactive');
				 $(this).siblings('.wdg_positions_01_cnt').children().children('.next').removeClass('bginactive');
				}
				if($wp1_position == 0){
				 //$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').css('color','#000');
				 $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').addClass('bginactive');
				 $(this).siblings('.wdg_positions_01_cnt').children().children('.prev').removeClass('bgactive');
				}
				else
				{
					//$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').css('color','#FFF');
					$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').addClass('bgactive');
					$(this).siblings('.wdg_positions_01_cnt').children().children('.prev').removeClass('bginactive');
				}
			});	   
    })($,Televisa);
});
