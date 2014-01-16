$(document).ready(function(){
	$events = $('.events').children('dl').children('dt');
	$events.on('click', function(){
		//console.log($(this).parent().children('dd'));
		$(this).parent().children('dd').toggle();
		//Cambio de flechas
		cambioFlechas(this);
	});

	$('.teams .homeTeam dt').on('click', function(){
		$(this).parent().children('dd').toggle();
		$(this).parent().siblings('.subs').first().toggle();
		
		//Cambio de flechas
		cambioFlechas(this);
		
	});

	$('.teams .awayTeam dt').on('click', function(){
		//console.log('teto');

		$(this).parent().children('dd').toggle();
		$(this).parent().siblings('.subs').eq(1).toggle();
		
		//Cambio de flechas
		cambioFlechas(this);
	});
	
	// poner lineas divisoras de botones inferiores
	$('.wdg_chalkboard_01 .time-controls .button-panel button').wrap('<div class="button_separator" />');
	
	function cambioFlechas(obj){
		//Cambio de flechas

		if( $(obj).parent().children('dd').is(':visible') )
		{
			$(obj).find('.expansion i').addClass('tvsa-double-caret-up');
			$(obj).find('.expansion i').removeClass('tvsa-double-caret-down');
			
		}			
		else
		{
			$(obj).find('.expansion i').addClass('tvsa-double-caret-down');
			$(obj).find('.expansion i').removeClass('tvsa-double-caret-up');			
		}
			
	}
	
});