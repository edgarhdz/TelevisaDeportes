$(document).ready(function(){
	
	/*Para IPAD*/
	$('.wdg_teamdraft_01 .tblDraft .vote_block').on('touchstart', function(e){
		//e.event.preventDefault();
		if($(window).width() > 624){
			var state = $(this).next('tr').find('td.separador .qualifies').css('display');
			var state2 = $(this).next('tr').find('td.separador .calification').css('display');
			var state3 = $(this).next('tr').find('td.separador .participated').css('display');
			if(state != "none" || state2 != "none" || state3 != "none"){
				$(this).next('tr').find('td.separador .qualifies').hide();
				$(this).next('tr').find('td.separador .calification').hide();
				$(this).next('tr').find('td.separador .participated').hide();
				$(this).next('tr').find('td.separador .dotted-top').show();
			   }else{
				$(this).next('tr').find('td.separador .qualifies').show();
				$(this).next('tr').find('td.separador .calification').show();
				$(this).next('tr').find('td.separador .dotted-top').hide();
			}
			if(state2 == null && state3 == "none"){
				$(this).next('tr').find('td.separador .qualifies').show();
				$(this).next('tr').find('td.separador .participated').show();
				$(this).next('tr').find('td.separador .dotted-top').hide();
			}
		}else{}
	});
	//Over del jugador
	$('.wdg_teamdraft_01 .tblDraft .vote_block').mouseenter(function(){
		if ($(window).width() < 624) {
			return;
		}
		
		// Cerramos TODOS las calificaciones
		setCleanRecord();
		
		$(this).next('tr').find('td.separador .dotted-top').hide();
		$(this).next('tr').find('td.separador .qualifies').show();
		
		// Verificamos si ya votaron
		//alert($(this).next('tr').find(' td.separador .calification'));
		if($(this).next('tr').find(' td.separador .calification').length > 0){
			$(this).next('tr').find(' td.separador .calification').show();
			
		}
		else{
			$(this).next('tr').find(' td.separador .participated').show();
			
		}
		
	});
	
	//Over del jugador
	$('.wdg_teamdraft_01 .tblDraft ').mouseleave(function(){
		
		setCleanRecord();
	});
	
	//click calificacion
	$('.wdg_teamdraft_01 .tblDraft .separador .calification a').click(function(event){
		event.preventDefault();
		$(this).parents('.calification').hide();
				
		$(this).parents('.separador').find('.participated').fadeIn().delay(1000).fadeOut(function() {
				
			// Animation complete.
			$(this).parents('.separador').find('.qualifies').hide();
			$(this).parents('.separador').find('.dotted-top').show();
			
		});
		$(this).parents('.calification').remove();
	});
	
	// Mouseput del "gracias por votar"
	$('.wdg_teamdraft_01 .tblDraft .separador .participated').mouseout(function(){
		
		$(this).hide();
		$(this).parents('.separador').find('.qualifies').hide();
		$(this).parents('.separador').find('.dotted-top').show();
		
	});
	
	// Over de calificaciones
	$('.wdg_teamdraft_01  .tblDraft .calification div a').mouseover(function(){
		$(this).addClass('textcolor-title1');
	});
	
	$('.wdg_teamdraft_01  .tblDraft .calification div a').mouseout(function(){
		$(this).removeClass('textcolor-title1');
	});
	
	function setCleanRecord(){
		$('.wdg_teamdraft_01 .tblDraft td.separador .calification').hide();
		$('.wdg_teamdraft_01 .tblDraft td.separador .participated').hide();
		$('.wdg_teamdraft_01 .tblDraft td.separador .qualifies').hide();
		$('.wdg_teamdraft_01 .tblDraft td.separador .dotted-top').show();
	}
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
		$('.wdg_teamdraft_01 .tblDraft td').css('display','block');
		$('.wdg_teamdraft_01 .tblDraft th').css('display','block');
	}
});