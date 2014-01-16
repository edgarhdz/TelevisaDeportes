;jQuery(function($){ 
    (function($,T){
        $('.wdg_goalsanoted_01').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('.scroll-carrusel')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
		
		var altura1 = $('.wdg_goalsanoted_01 .convocados').height();
		var altura2 = $('.wdg_goalsanoted_01 .wdg_mxm_penalties_01').height();
		var altura = altura1 +altura2;
		$('.wdg_goalsanoted_01 .scroll').scroll(function() {
				$scrollTop = parseInt($('.wdg_goalsanoted_01 .scroll').scrollTop()) + parseInt($('.wdg_goalsanoted_01 .scroll').height());
			if( parseInt($scrollTop) == parseInt(altura)) {
           		 $('.wdg_goalsanoted_01 .degradado').css("visibility","hidden");
      			}else{
				 $('.wdg_goalsanoted_01 .degradado').css("visibility","visible");
				}
			});	    
    })($,Televisa);
	
});


