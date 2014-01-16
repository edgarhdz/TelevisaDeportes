;jQuery(function($){ 
    (function ($, T) {
		// CSS please
		 if($(window).width() < 590){		
			$('.wdg_teams_carru_02 .row').toggle();
			$('.wdg_teams_carru_02 .up').hide();
			
			$('.wdg_teams_carru_02 .titulo_bar .ocultar a').hide();
			$('.wdg_teams_carru_02 .titulo_bar .mostrar a').show();
			$('.wdg_teams_carru_02').height('30px');
		}
		
		$('.wdg_teams_carru_02 .titulo_bar .ocultar a').click(function(event){
			event.preventDefault();			
			$(this).parent().parent().siblings('.wrapper').children().toggle();
			$(this).parent().parent().parent().find('.line').css('visibility','hidden');
			
			$(this).hide();
			$(this).parent().siblings('.mostrar').children().show();
			$(this).parent().parent().parent().parent().height('30px');
			
		});
		
		$('.wdg_teams_carru_02 .titulo_bar .mostrar a').click(function(event){
			event.preventDefault();
			$(this).parent().parent().siblings('.wrapper').children().toggle();
			$(this).parent().parent().parent().find('.line').css('visibility','visible');
			
			$(this).parent().siblings('.ocultar').children().show();
			$(this).hide();
			$(this).parent().parent().parent().parent().height('105px');
			$(this).parents('.wdg_teams_carru_02').find('.deg-izq').show();
			$(this).parents('.wdg_teams_carru_02').find('.deg-der').show();
		});
   }(jQuery, Televisa));
});