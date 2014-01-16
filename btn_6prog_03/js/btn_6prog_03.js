$(document).ready(function() {	

	
    var lis = $('.btn_6prog_03 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
	for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		
		if ($.browser.msie){
			ancho -= 22;
			$(".btn_6prog_03 .type1a .carrusel ul").css({width:ancho});
		}
		else{
			$(".btn_6prog_03 .type1a .carrusel ul").width(ancho);
		}
		
		
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_03 .type1a .carrusel ul").width(); // 100%
		//alert(anchoTotalUL);
	
	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_03 .type1a .carrusel ul").length;
	
	var bulletSelected;
	var scrollLeft;
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;
		//alert($.width());
		//alert(document.body.offsetWidth);
	}
	else{
		var anchoVentna =  $(window).width();
	}
	
	
	// checamos si se deben mostrar las flechas del carrusel si hay mas de 6 elementos
	if(anchoVentna > 590){
		
		if($(".btn_6prog_03 .type1a .carrusel ul li").length > 6){
			
			$(".btn_6prog_03 .flechas").show();
		}
		else{
			$(".btn_6prog_03 .flechas").hide();
		}
		
	}
	
	
	$('.btn_6prog_03 .type1a .carrusel').scroll(function(e){
		/*Motion activate-inactivate*/
		var $b6p3_position = $(this).scrollLeft();
		var $b6p3_med =  $(this).scrollLeft() + $(this).width();
		if($b6p3_position == 0){
			$(this).siblings('.title').children('.flechas').children().children('.left2').removeClass('arrow_activate');
			$(this).siblings('.title').children('.flechas').children().children('.left2').addClass('arrow_inactivate');
		}else{
			$(this).siblings('.title').children('.flechas').children().children('.left2').removeClass('arrow_inactivate');
			$(this).siblings('.title').children('.flechas').children().children('.left2').addClass('arrow_activate');
			
		}
		
		
		if($b6p3_med >= anchoTotalUL){
			$(this).siblings('.title').children('.flechas').children().children('.right2').removeClass('arrow_activate');
			$(this).siblings('.title').children('.flechas').children().children('.right2').addClass('arrow_inactivate');
		}else{
			$(this).siblings('.title').children('.flechas').children().children('.right2').removeClass('arrow_inactivate');
			$(this).siblings('.title').children('.flechas').children().children('.right2').addClass('arrow_activate');
		}
		console.log('Scroll esta: '+$b6p3_position+' Suma: '+$b6p3_med+' total alcanzar: '+anchoTotalUL);
		
		scrollLeft = $(this).scrollLeft();
		
		var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
		
		if( scrollLeft <= 300)
			bulletSelected = 1;
		else if( scrollLeft >= 310 && scrollLeft <= 600)
			bulletSelected = 2;
		else if( scrollLeft >= 601 && scrollLeft <= 900)
			bulletSelected = 3;
			
		$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('selected');
		
		$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('selected');
    });
	
	/*Arrows*/
	 $('.btn_6prog_03 .title .flechas a.left2').click(function(event){
                event.preventDefault();
				$(this).parent().parent().parent().siblings('.carrusel').animate({
						'scrollLeft':$(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - 324
					}, 500);
            });
	 $('.btn_6prog_03 .title .flechas a.right2').click(function(event){
                event.preventDefault();
				$(this).parent().parent().parent().siblings('.carrusel').animate({
						'scrollLeft':$(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + 324
					}, 500);
            });
	/*Swipe*/
		$('.btn_6prog_03 .type1a .carrusel').bind('swipeleft',function(){
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() + 328
					}, 500);
			});
		$('.btn_6prog_03 .type1a .carrusel').bind('swiperight',function(){
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() - 328
					}, 500);
			});	


	$('.btn_6prog_03 .carrusel').bind("touchmove",function(event){
    event.preventDefault();
    });

});