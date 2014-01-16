;jQuery(function($){ 
    (function($,T){
    	//--------------------------------------------------------------------------------------------
    	//Función para mostrar u ocultar el degradado ***        	
    	//--------------------------------------------------------------------------------------------
    	function  degradedShowHidden(){      		
    		var $wdg5podcast01PosScroll = $('.wdg_5podcast_01 .scroll').scrollTop();
    		var $wdg5podcast01Altura = $('.wdg_5podcast_01 .scroll').height();				
    		var $wdg5podcast01AlturaMax = $wdg5podcast01PosScroll +  $wdg5podcast01Altura;    		    		    	    		
    		if($wdg5podcast01Altura == $wdg5podcast01AlturaMax) {    	
    			$('.wdg_5podcast_01 .degraded').removeClass('show');
    			$('.wdg_5podcast_01 .degraded').addClass('hidden');    		
    		}    	    		
    		if ($wdg5podcast01Altura == 0) {    			
    			$('.wdg_5podcast_01 .degraded').removeClass('hidden');
    			$('.wdg_5podcast_01 .degraded').addClass('show');    			
    		}    		
    	}
    	
    	//--------------------------------------------------------------------------------------------
    	//BEGIN: Swipe ***
    	//--------------------------------------------------------------------------------------------
    	
	    	var altWdgResult01 = 0;
	        	
	    	if ($(window).width() < 978 && $(window).width() > 624){
	    		altWdgResult01 = 420;
	    	}
	    	else{
	    		altWdgResult01 = 420;  		
	    	} 
	    	
			$w5p1_altura = 0;
			$w5p1_position_a = 0;
			$('.wdg_5podcast_01 .scroll .wdg_podcast_02').each(function() {
				$w5p1_altura += $(this).height(); 
			});
			
			$('.wdg_5podcast_01 .scroll').bind('swipeup',function(event){
				$w5p1_position = $(this).scrollTop();
				$w5p1_med = $w5p1_position + $(this).height();
				$(this).animate({
	                    'scrollTop': $(this).scrollTop() + altWdgResult01
	            }, 500);
				
				degradedShowHidden();  //Mostrar u ocultar degradado
				if($w5p1_position_a == $w5p1_position){
					  $('body,html').animate({
                     scrollTop: $(window).scrollTop() + 100
                 }, 200);
				}
				$w5p1_position_a = $w5p1_position;
				
				if($w5p1_med == $w5p1_altura){
					  $('body,html').animate({
                     scrollTop: $(window).scrollTop() + altWdgResult01
                 }, 800);
                 return false;
                 event.stopPropagation(); 
				}
			});
			
			$('.wdg_5podcast_01 .scroll').bind('swipedown',function(event){
				$w5p1_position = $(this).scrollTop();
				$w5p1_med = $w5p1_position + $(this).height();
				$(this).animate({
	                    'scrollTop': $(this).scrollTop() - altWdgResult01
	            }, 500);
				
				degradedShowHidden();  //Mostrar u ocultar degradado
				$('.wdg_5podcast_01 .degraded').addClass('show');
				
				if($(this).scrollTop() == 0){					
				  $('body,html').animate({
                     scrollTop: $(window).scrollTop() - altWdgResult01
                 }, 200);
                 return false;
                 event.stopPropagation(); 
				}				
			});
			
			$('.wdg_5podcast_01 .scroll').scroll(function(event){
				$w5p1_position_s = $(this).scrollTop();
				$w5p1_med_s = $w5p1_position_s + $(this).height();
				if($w5p1_med_s == $w5p1_altura){
					  event.stopPropagation(); 
				}
				if($(this).scrollTop() == 0){
	                 event.stopPropagation();
				}
				 //console.log('Estoy: '+$w5p1_position_s+'Suma: '+$w5p1_med_s+' Espero: '+$w5p1_altura);	
			});
		
		//--------------------------------------------------------------------------------------------
    	//Función para hacer un salto en pantalla ***        	
    	//--------------------------------------------------------------------------------------------
    	/*
			if ($(window).width() < 624){
    		//alert('estoy en mobile');
			$('.wdg_5podcast_01 .scroll').bind('swipedown',function(){		
				if($(this).scrollTop() == 0){
					$('body,html').animate({
						scrollTop: $(window).scrollTop() - 100
					}, 800);
					return false;
				}
			});
					
			$('.wdg_5podcast_01 .scroll').bind('swipeup',function(){			
				if($(this).scrollTop()== $(this).scrollTop()){
					$('body,html').animate({
						scrollTop: $(window).scrollTop() + 100
					}, 800);
					return false;
				}			
			});
		*/	
		
		
    })($,Televisa);
});