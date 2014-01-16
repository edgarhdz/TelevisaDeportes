$(document).ready(function(){
	$('.wdg_simbology_01 .see-all').click(function(){
		$('.wdg_simbology_01 .alineacion_partido').css('height','auto');
		$(this).hide();
	});
	$('.wdg_simbology_01 .simbologia').scroll(function() {
		$wdgs1_alto = $(this).children('.wdgs_alto').height();
		$wdgs1_position = $(this).scrollTop();
		$wdgs1_med = $wdgs1_position + $(this).height();
		if($wdgs1_med == $wdgs1_alto){
		 $(this).parent().siblings('.degraded').css("visibility","hidden");
		}else{
		  $(this).parent().siblings('.degraded').css("visibility","visible");
		}
	});
});