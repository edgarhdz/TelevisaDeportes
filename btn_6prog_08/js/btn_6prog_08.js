 $(document).ready(function() {	
 	$('.btn_6prog_08 .left2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $bg5_move = 995;}
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - $bg5_move
                }, 500);		
	});
	$('.btn_6prog_08 .right2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $bg5_move = 995;}
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + $bg5_move
                }, 500);		
	});
	
	/*Pleca collapsable*/
	$('.btn_6prog_08 .title').on('click',function(e){
		e.preventDefault();
		if($(window).width() < 624){
			$(this).parent().siblings().slideToggle('slow');
			$(this).siblings().slideToggle('slow');
			$(this).find('i').toggleClass('tvsa-caret-down','tvsa-caret-up');
			var add = $(this).parent().attr('class');
			var directo = $('.'+add+' .str_pleca_03').css('margin-bottom');
			//console.log("Margin-bottom antes vale: " +add+ " bottom: " +directo);
			if(directo == "0px")
			{
				$('.'+add+' .title').css('margin-bottom',0);
			}
			else
			{
				$('.'+add+' .title').css('margin-bottom',0);
			}
		}
		//console.log("Margin-bottom despues vale: " +add+ " bottom: " +directo);
	});	
	/*Special case*/
	if($(window).width() < 624){
		$('.btn_6prog_08 .title').parent().siblings().slideToggle('fast');
			$('.btn_6prog_08 .title').siblings().slideToggle('fast');
			$('.btn_6prog_08 .title').find('i').toggleClass('tvsa-caret-down','tvsa-caret-up');
			var add = $('.btn_6prog_08 .title').parent().attr('class');
			var directo = $('.'+add+' .str_pleca_03').css('margin-bottom');
			//console.log("Margin-bottom antes vale: " +add+ " bottom: " +directo);
			if(directo == "0px")
			{
				$('.'+add+' .title').css('margin-bottom',0);
			}
			else
			{
				$('.'+add+' .title').css('margin-bottom',0);
			}
	}
	
	$(window).resize(function() {	
			if( $(window).width() < 624){
				//Nothing
			}
			else
			{
			    $(this).parent().siblings().show();
				$('.btn_6prog_08 .title').siblings().show();
			}
	});
	if($(window).width() >= 624){$b6p5_move = 648;}else{$b6p5_move = 325;}
	 	 $('.btn_6prog_08 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	  
	        $(this).animate({
	            'scrollLeft': $(this).scrollLeft() - $b6p5_move
	        });    
	    });

	    $('.btn_6prog_08 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        
	       $(this).animate({
	            'scrollLeft': $(this).scrollLeft() + $b6p5_move
	        });
	    });
	
    var lis = $('.btn_6prog_08 .type1a:first .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	$(window).load(function(){
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		$(".btn_6prog_08 .type1a .carrusel ul").width(ancho);
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_08 .type1a .carrusel ul").width(); // 100%
	});

	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_08 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
	var anchoTotalUL = $(".btn_6prog_08 .type1a .carrusel ul").width(); // 100%
	
	
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
	
	
	$('.btn_6prog_08 .type1a .carrusel').scroll(function(e){
		var $widthT = $(this).scrollLeft() + $(this).width();
		$(this).children('ul').width();
		if($(this).scrollLeft()==0){
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').addClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').removeClass('arrow_active');	
		}
		else{
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').removeClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').addClass('arrow_active');	
			//$('.btn_6prog_08 .carouselArrowLeft i').removeClass('arrow_inactive');
			//$('.btn_6prog_08 .carouselArrowLeft i').addClass('arrow_active');	
		}
		if($widthT==$('.btn_6prog_08 .type1a .carrusel ul').width()){
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').addClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').removeClass('arrow_active');	
			//$('.btn_6prog_08 .carouselArrowRight i').addClass('arrow_inactive');
			//$('.btn_6prog_08 .carouselArrowRight i').removeClass('arrow_active');	
		}
		else{
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').removeClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').addClass('arrow_active');	
			//$('.btn_6prog_08 .carouselArrowRight i').removeClass('arrow_inactive');
			//$('.btn_6prog_08 .carouselArrowRight i').addClass('arrow_active');	
		}

		if ($(window).width()<624){
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 320)
				bulletSelected = 1;
			else if( scrollLeft >= 321 && scrollLeft <= 630)
				bulletSelected = 2;
			else if( scrollLeft >= 630 && scrollLeft <= 940)
				bulletSelected = 3;
			else if( scrollLeft >= 940 && scrollLeft <= 1250)
				bulletSelected = 4;
			else if( scrollLeft >= 1250 && scrollLeft <= 1560)
				bulletSelected = 5;
			else 
				bulletSelected = 6;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}else{
			scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
			var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
			if( scrollLeft <= 520)
				bulletSelected = 1;
			else if( scrollLeft >= 520 && scrollLeft <= 980)
				bulletSelected = 2;
			else 
				bulletSelected = 3;
			$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('background-color1');
			
			$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('background-color1');
		}
    });

});