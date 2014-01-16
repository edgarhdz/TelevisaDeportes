;jQuery(function($){ 
    (function($,T){
		//CSS necesary
		if($(window).width() < 590){		
			$('.wdg_teams_carru_01 .row').toggle();
			$('.wdg_teams_carru_01 .up').hide();
			
			
			$('.wdg_teams_carru_01 .titulo_bar .ocultar a').hide();
			$('.wdg_teams_carru_01 .titulo_bar .mostrar a').show();
			$('.wdg_teams_carru_01').height('30px');
        }
		
		$('.wdg_teams_carru_01 .titulo_bar .ocultar a').click(function(event){
			event.preventDefault();	
			$(this).parent().parent().siblings('.wrapper').children('.row').toggle();		
			$(this).hide();
			$(this).parent().siblings('.mostrar').children('a').show();
			$(this).parents('.wdg_teams_carru_01').height('40px');
		});
		
			posicionReal = $('.wdg_teams_carru_01 .wrapper').offset();
			$('.wdg_teams_carru_01 .wrapper .deg-izq').css('left',posicionReal.left);
			if($(window).width() > 624){$ajusta = 605;}else{$ajusta = 270;}
			$derecha = posicionReal.left + $ajusta;
			$('.wdg_teams_carru_01 .wrapper .deg-der').css('left',$derecha);
		
		$('.wdg_teams_carru_01 .titulo_bar .mostrar a').click(function(event){
			event.preventDefault();			
			$(this).parent().parent().siblings('.wrapper').children('.row').toggle();
			$(this)	.hide();
			$(this).parent().siblings('.ocultar').children('a').show();
			
			if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
				var anchoVentna = document.body.offsetWidth;
			}
			else{
				var anchoVentna =  $(window).width();
			}
			if(anchoVentna > 960)
				$(this).parents('.wdg_teams_carru_01').height('200px');	
					else
				$(this).parents('.wdg_teams_carru_01').height('244px');
		});
		
		/*Monitor scroll*/
		var $wtc1_altura = $('.wdg_teams_carru_01 .wrapper .row').width();
		$('.wdg_teams_carru_01 .wrapper').scroll(function() {
			$wtc1_position = $(this).scrollLeft();
			$wtc1_med = $wtc1_position + $(this).width();
			if($wtc1_position == 0){
				$(this).children('.deg-izq').hide();
			}else{
				$(this).children('.deg-izq').show();
			}
			if($wtc1_med == $wtc1_altura){
				$(this).children('.deg-der').hide();
			}else{
				$(this).children('.deg-der').show();
			}
			//console.log('Estoy : '+$wtc1_position+' sumo: '+$wtc1_med+' espero: '+$wtc1_altura);
		});
		
		$(window).resize(function() {
			posicionReal = $('.wdg_teams_carru_01 .wrapper').offset();
			$('.wdg_teams_carru_01 .wrapper .deg-izq').css('left',posicionReal.left);
			if($(window).width() > 624){$ajusta = 605;}else{$ajusta = 270;}
			$derecha = posicionReal.left + $ajusta;
			$('.wdg_teams_carru_01 .wrapper .deg-der').css('left',$derecha);
			//console.log('top: ' +posicionReal.top+' left: '+posicionReal.left);
			if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
				var anchoVentna = document.body.offsetWidth;
			}
			else{
				var anchoVentna =  $(window).width();
			}
			
			if( $('.wdg_teams_carru_01 .titulo_bar .ocultar a').is(":visible") ){
					if(anchoVentna > 960){
						$('.wdg_teams_carru_01 .wrapper').scrollLeft(0);
						$('.wdg_teams_carru_01').height('200px');	
					}
					else
					{
						$('.wdg_teams_carru_01').height('244px');
					}
			}
		});
		
	})($,Televisa);
});
