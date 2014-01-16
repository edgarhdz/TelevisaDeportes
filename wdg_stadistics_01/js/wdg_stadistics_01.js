;jQuery(function($){ 
    (function($,T){
       $('.wdg_stadistics_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl_wdg_stadistics_01 = $this.find('.scroll');
            
            
			
			
			$this.find('a.prev, a.next').click(function(event){
				
				event.preventDefault();
				
				$(this).parents('.wdg_stadistics_01').find('.scroll').scroll(function() {
					
					var $scroll = $theUl_wdg_stadistics_01.scrollTop() + $theUl_wdg_stadistics_01.height();
					var $maxBottom = $('.encabezado').height()+$('.datos').height();
					
					
					var $down = $(this).parents('.wdg_stadistics_01').find('.prev');
					var $up = $(this).parents('.wdg_stadistics_01').find('.next');
					
					
					
					/*if($theUl_wdg_stadistics_01.scrollTop()==0){
						//$('.wdg_stadistics_01 .nav .prev').css({'background-color':'#ccc'});
						$down
						 .removeClass('bgactive')
						 .addClass('bginactive');
					}
					else if($theUl_wdg_stadistics_01.scrollTop()>10){
						//$('.wdg_stadistics_01 .nav .prev').css({'background-color':'#A41D21'});
						$down
						 .removeClass('bginactive')
						 .addClass('bgactive');
					}
					
					if($theUl_wdg_stadistics_01.scrollTop()==0){
						//$('.wdg_stadistics_01 .nav .next').css({'background-color':'#ccc'});   
						$up
						.removeClass('bginactive')
						.addClass('bgactive');
					}
					 else{
						//$('.wdg_stadistics_01 .nav .next').css({'background-color':'#A41D21'});
						$up
						.removeClass('bgactive')
						.addClass('bginactive');
					}*/
					//console.log($theUl_wdg_stadistics_01.scrollTop());
					
				});
			});
			
			
			
           
             $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl_wdg_stadistics_01.animate({
                    'scrollTop': $theUl_wdg_stadistics_01.scrollTop() - $theUl_wdg_stadistics_01.height()
                }, 900);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl_wdg_stadistics_01.animate({
                    'scrollTop': $theUl_wdg_stadistics_01.scrollTop() + $theUl_wdg_stadistics_01.height()
                }, 900);
            }); 
        });
            /*Swipe*/
        $('.wdg_stadistics_01 .scroll').bind('swipeup',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + 136
                }, 500);
        });
        $('.wdg_stadistics_01 .scroll').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - 136
                }, 500);
        });

		
		
		var altura = $('wdg_stadistics_01_container').height();
		
		
		$('.wdg_stadistics_01 .scroll').scroll(function() {
			
			
			
				if($('.wdg_stadistics_01 .scroll').scrollTop() > 334) {
					$('.degradado').css("visibility","hidden");
				}else{
					$('.degradado').css("visibility","visible");
				}
			
					
					var $up = $(this).parents('.wdg_stadistics_01').find('.prev');
					var $down = $(this).parents('.wdg_stadistics_01').find('.next');
					
					if($('.wdg_stadistics_01 .scroll').scrollTop()==0){
						
						$up
						.removeClass('bgactive')
						.addClass('bginactive');
					}
					 else{
						
						$up
						.removeClass('bginactive')
						.addClass('bgactive');
					}
					
					if($('.wdg_stadistics_01 .scroll').scrollTop()> 535){
						//$('.wdg_stadistics_01 .nav .prev').css({'background-color':'#ccc'});
						$down
						 .removeClass('bgactive')
						 .addClass('bginactive');
					}
					else{
						//$('.wdg_stadistics_01 .nav .prev').css({'background-color':'#A41D21'});
						$down
						 .removeClass('bginactive')
						 .addClass('bgactive');
					}
					
					//console.log($('.wdg_stadistics_01 .scroll').scrollTop());
			
		});	
		
		    
    })($,Televisa);
});
