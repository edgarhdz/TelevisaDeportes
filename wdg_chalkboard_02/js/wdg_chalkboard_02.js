$(document).ready(function(){
	/*$events = $('.wdg_chalkboard_02 .events').children('dl').children('dt');
	$events.on('click', function(){
		//console.log($(this).parent().children('dd'));
		$(this).parent().children('dd').toggle();
	});

	$('.wdg_chalkboard_02 .teams .homeTeam dt').on('click', function(){
		$(this).parent().children('dd').toggle();
		$(this).parent().siblings('.subs').first().toggle();
	});

	$('.wdg_chalkboard_02 .teams .awayTeam dt').on('click', function(){

		$(this).parent().children('dd').toggle();
		$(this).parent().siblings('.subs').eq(1).toggle();
	});*/
	
	// poner lineas divisoras de botones inferiores
	$('.wdg_chalkboard_02 .time-controls .button-panel button').wrap('<div class="button_separator" />');
	
});