;jQuery(function($){ 
    (function($,T){
        $('.wdg_programacion_01').each(function(ix,element){
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('.wdg_programacion_01_list');
                
            $this.find('a.prev, a.next').click(function(event){

                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
        });
        
        /*Monitorero flechas*/
         $('.wdg_programacion_01 .carrusel .scroll').on('swiperight',function(e) {
            e.preventDefault();
            
            $('.wdg_programacion_01 .carrusel .scroll ').animate({
                'scrollLeft': $('.wdg_programacion_01 .carrusel .scroll').scrollLeft() - 585
            });    
        });

        $('.wdg_programacion_01 .carrusel .scroll').on('swipeleft',function(e) {
            e.preventDefault();
            
           $('.wdg_programacion_01 .carrusel .scroll ').animate({
                'scrollLeft': $('.wdg_programacion_01 .carrusel .scroll ').scrollLeft() + 585
            });
        });

        $('.wdg_programacion_01 .carrusel .arrow_left').click(function(e) {
            e.preventDefault();
			
			$('.wdg_programacion_01 .carrusel .scroll ').animate({
				'scrollLeft': $('.wdg_programacion_01 .carrusel .scroll').scrollLeft() - 585
			});    
		});

		$('.wdg_programacion_01 .carrusel .arrow_right').click(function(e) {
			e.preventDefault();
			
		   $('.wdg_programacion_01 .carrusel .scroll ').animate({
				'scrollLeft': $('.wdg_programacion_01 .carrusel .scroll ').scrollLeft() + 585
			});
		});
		$('.wdg_programacion_01 .carrusel .scroll').scroll(function(){
            $widthTotal = $('.wdg_programacion_01 .carrusel .scroll').scrollLeft()+$('.wdg_programacion_01 .carrusel .scroll').width();
            console.log($widthTotal+' = '+$('.wdg_programacion_01 .carrusel .scroll ul').width());
                if($('.wdg_programacion_01 .carrusel .scroll').scrollLeft() == 0){
                    $('.wdg_programacion_01 .tvsa-double-caret-left').addClass('inactive');
                    $('.wdg_programacion_01 .tvsa-double-caret-left').removeClass('active');
                }
                else{
                    $('.wdg_programacion_01 .tvsa-double-caret-left').removeClass('inactive');
                    $('.wdg_programacion_01 .tvsa-double-caret-left').addClass('active');
                }
                if ($widthTotal == $('.wdg_programacion_01 .carrusel .scroll ul').width()){
                    $('.wdg_programacion_01 .tvsa-double-caret-right').addClass('inactive');
                    $('.wdg_programacion_01 .tvsa-double-caret-right').removeClass('active');
                }
                else{
                    $('.wdg_programacion_01 .tvsa-double-caret-right').removeClass('inactive');
                    $('.wdg_programacion_01 .tvsa-double-caret-right').addClass('active');
                }
        });
		
    })($,Televisa);
});


