;jQuery(function($){ 
    (function($,T){
		
		if($(window).width() < 590){		
			$('.wdg_teams_carru_03 .row').toggle();
			$('.wdg_teams_carru_03 .up').toggle();
			
			
			$('.wdg_teams_carru_03 .titulo_bar .ocultar a').hide();
			$('.wdg_teams_carru_03 .titulo_bar .mostrar a').show();
			$('.wdg_teams_carru_03').height('40px');
        }
		
		$('.wdg_teams_carru_03 .titulo_bar .ocultar a').click(function(event){
			event.preventDefault();	
			$(this).parent().parent().siblings('.wrapper').children('.row').toggle();		
			$(this).hide();
			$(this).parent().siblings('.mostrar').children('a').show();
			$(this).parents('.wdg_teams_carru_03').height('40px');
		});
		
		$('.wdg_teams_carru_03 .titulo_bar .mostrar a').click(function(event){
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
				$(this).parents('.wdg_teams_carru_03').height('200px');	
					else
				$(this).parents('.wdg_teams_carru_03').height('236px');
		});
		
		
		
		
		$(window).resize(function() {
			
			if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
				var anchoVentna = document.body.offsetWidth;
				
			}
			else{
				var anchoVentna =  $(window).width();
			}
			
			if( $('.wdg_teams_carru_03 .titulo_bar .ocultar a').is(":visible") ){
				if (anchoVentna > 960)
					$('.wdg_teams_carru_03').height('200px');
				else
					$('.wdg_teams_carru_03').height('236px');
			}
		});
		
		
	})($,Televisa);
});
