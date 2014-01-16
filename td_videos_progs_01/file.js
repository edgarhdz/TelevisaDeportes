 $(document).ready(function() {	
 	$('.btn_6prog_07 .left2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $bg5_move = 648;}
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - $bg5_move
                }, 500);		
	});
	$('.btn_6prog_07 .right2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $bg5_move = 648;}
		$(this).parent().parent().parent().siblings('.carrusel').animate({
                    'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + $bg5_move
                }, 500);		
	});
	
	if ($(window).width()>624){
	 	 $('.btn_6prog_07 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_07 .carrusel').scrollLeft() - 648
	        });    
	    });

	    $('.btn_6prog_07 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        
	       $(this).animate({
	            'scrollLeft': $('.btn_6prog_07 .carrusel').scrollLeft() + 648
	        });
	    });
 	}else{
	 	 $('.btn_6prog_07 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p5_move = 320;}else{$b6p5_move = 324;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_07 .carrusel').scrollLeft() - $b6p5_move
	        });    
	    });

	    $('.btn_6prog_07 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p5_move = 320;}else{$b6p5_move = 324;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_07 .carrusel').scrollLeft() + $b6p5_move
	        });
	    });
 	}
	
    var lis = $('.btn_6prog_07 .type1a:first .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	$(window).load(function(){
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		$(".btn_6prog_07 .type1a .carrusel ul").width(ancho);
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_07 .type1a .carrusel ul").width(); // 100%
	});

	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_07 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
	var anchoTotalUL = $(".btn_6prog_07 .type1a .carrusel ul").width(); // 100%
	
	
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
	
	
	$('.btn_6prog_07 .type1a .carrusel').scroll(function(e){
		var $widthT = $(this).scrollLeft() + $(this).width();
		$(this).children('ul').width();
		if($(this).scrollLeft()==0){
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').addClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').removeClass('arrow_active');	
		}
		else{
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').removeClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.izq').children().children('i').addClass('arrow_active');	
			//$('.btn_6prog_07 .carouselArrowLeft i').removeClass('arrow_inactive');
			//$('.btn_6prog_07 .carouselArrowLeft i').addClass('arrow_active');	
		}
		if($widthT==$('.btn_6prog_07 .type1a .carrusel ul').width()){
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').addClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').removeClass('arrow_active');	
			//$('.btn_6prog_07 .carouselArrowRight i').addClass('arrow_inactive');
			//$('.btn_6prog_07 .carouselArrowRight i').removeClass('arrow_active');	
		}
		else{
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').removeClass('arrow_inactive');
			$(this).siblings('.title').children('.flechas').children('.der').children().children('i').addClass('arrow_active');	
			//$('.btn_6prog_07 .carouselArrowRight i').removeClass('arrow_inactive');
			//$('.btn_6prog_07 .carouselArrowRight i').addClass('arrow_active');	
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

});;jQuery(function($){ 
    (function ($, T) {

        var $m = $('.vid_4vids_03 .wdg_mix_carrousa .general'),
        animationDelay = 500;
        
        var $w = $('.wdg_mix_carrousa div:last-child ul li');
        var $count = 0;
        
        $w.each(function() {
            $count ++;
        });
        
        $m.each(function() {
            var $total = 160;
            if( $count <= 2){
               $total = 60; 
            }
            var $items = $(this).find('ul li'),
            padding = ($(this).parent().hasClass('wdg_mix_carrousa')) ? 41 : 24,
            Pointer = {
                UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
            },
            $parent = $(this);

           
			/*Anchura........*/
			//alert($(window).width());			
            if( $(window).width() > 960  ){
				$('.vid_4vids_03 .carrusel-sizes').width('956px');
			}
			if( $(window).width() >= 624 && $(window).width() <= 960  ){
				$('.vid_4vids_03 .carrusel-sizes').width('956px');			
			}
			if( $(window).width() < 624 ){
				$('.vid_4vids_03 .carrusel-sizes').width('956px');
				//$('.carrusel-sizes').width($(window).width());
			}
			/*Default*/
			
			
            if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
                !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))) { // And the version of the OS is bigger than 4.x...
                $(this).addClass('iOS');
            } else {
                    
                // Touch devices (non-iOS or iOS < 5)
                var isWinPhone = /Windows Phone/.test(navigator.userAgent);

                if (T.getIsTouchDevice() && !T.isBlackBerryCurve()) {

                    // Hide the arrows if it's not carouseltype1b
                    /*if (!$(this).parent().hasClass('wdg_mix_carrousa')) {
					$(this).parent().find('div:first-child ul').hide();
				}*/

                    $(this).bind('touchstart', function(e) {
                        var clientX = e.originalEvent.changedTouches[0].clientX;

                        $(this).attr('startX', clientX);
                        $(this).attr('down', true);
                        $(this).attr('scrollLeft', $(this).scrollLeft());
                    });

                    $(this).bind('touchend', function(e) {
                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        $(this).attr('active', false);
                        $(this).attr('down', false);
                    });

                    $(this).bind('touchmove', function(e) {
                                        
                                        
                        var clientX = e.originalEvent.changedTouches[0].clientX,
                        sx = $(this).attr('startX') >> 0,
                        ex = clientX;

                        if (Math.abs(sx - ex) > 10) {
                            $(this).attr('active', true);
                        }

                        if ($(this).attr('active') === 'true') {
                            e.preventDefault();

                            $(this).scrollLeft(($(this).attr('scrollLeft') >> 0) + (sx - ex));
                        }

                        return false;
                    });
                } else {
                    // Force the arrows to show up
                    $(this).parent().addClass('showArrows');
                }
            }

            // Support the click event on arrows
            $parent.parent().find('a.wdg_carousa_left').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 300
					}, animationDelay);
				}else
				{
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 329
					}, animationDelay);
					
				}
                        
            });

            $parent.parent().find('a.wdg_carousa_right').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$('.vid_4vids_03 .wdg_mix_carrousa .general').animate({
						'scrollLeft': $parent.scrollLeft() + 300
					}, animationDelay);
				}else
				{
					$parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 329
                	}, animationDelay);
				}
            });

        });

		/*Diferente ventana*/
		$(window).resize(function() {
			if( $(window).width() > 960  ){
				$('.carrusel-sizes').width('956px');
			}
			if( $(window).width() > 624 && $(window).width() < 960  ){
				$('.carrusel-sizes').width('956px');
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('956px');
				//$('.carrusel-sizes').width($(window).width());
			}
		});
		/*Swipe*/
			/*horizontal*/
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipeleft',function(){
			if($(window).width() > 624){$v4v4_move = 330;}else{$v4v4_move = 320;}
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() + $v4v4_move
					}, 500);
			});
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swiperight',function(){
			if($(window).width() > 624){$v4v4_move = 330;}else{$v4v4_move = 320;}
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() - $v4v4_move
					}, 500);
			});	
			/*vertical*/
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipeup',function(){
				 $('body,html').animate({
						'scrollTop': $(window).scrollTop() + 200
					}, 500);
			});
		$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipedown',function(){
				$('body,html').animate({
						'scrollTop': $(window).scrollTop() - 200
					}, 500);
			});
		/*Monitoreo scroll*/
	$('.vid_4vids_03 .general').scroll(function() {
		/*Horizontal*/
		var $v43_position = $(this).scrollLeft();
		var $v43_med = $v43_position;
		if($v43_position == 0){
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-left').addClass('inactive');
				$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
				$(this).parents('.vid_4vids_03').children('.bullets').children().eq(0).addClass('background-color1');
		}
		else{
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-left').removeClass('inactive');
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-right').removeClass('inactive');
			$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
			$(this).parents('.vid_4vids_03').children('.bullets').children().eq(1).addClass('background-color1');
		}
		if($v43_med > 350){
			$(this).siblings('.vid_4vids_03_title').children('.arrows').children().children().children('.tvsa-double-caret-right').addClass('inactive');
			$(this).parents('.vid_4vids_03').children('.bullets').children().removeClass();
			$(this).parents('.vid_4vids_03').children('.bullets').children().eq(2).addClass('background-color1');
		}
		/*Vertical*/
		var $v43_alt = $(this).children('.carrusel-sizes').height();
		var $v43_position2 = $(this).scrollTop();
		var $v43_med2 = $v43_position2 + $(this).height();
		if($v43_med2 == $v43_alt ){
			$(this).parent().siblings('.degraded').css("visibility","hidden");
		}
		else{
			$(this).parent().siblings('.degraded').css("visibility","visible");
		}
		//console.log('Scroll: '+$v43_position2+' suma: '+$v43_med2+' alt_tot: '+$v43_alt);
	});
	
	$('.vid_4vids_03 .general').bind("touchmove",function(event){
    	event.preventDefault();
    });
		
		/*Ver más modo mobile*/
		/*$('.vid_4vids_03 .vid_4vids_03_verMas').click(function(event){
            event.preventDefault();
			$('.vid_4vids_03 .carrusel-sizes > div').show();
			altura = $('.vid_4vids_03 .carrusel-sizes').height();
			altura = altura + 40;
            $('.vid_4vids_03').css('height',altura);
            $('.vid_4vids_03 .vid_4vids_03_verMas').hide();
		});*/
		
    }(jQuery, Televisa));
});

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

});/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
(function ($) {
    var nav_header = {
        speed : 500,
        init : function() {
            nav_header.initTopNav();
            nav_header.initMainNav();
            nav_header.initSearch();
            nav_header.initResize();
        },
        initResize : function() {
            $(window).resize(function(){
                //console.log('resize.');
            });
        },
        initTopNav : function() {
        	if ($(window).width() < 624) {
	        	var nHeight = $('header.nav_header_01 div.topnav div.inner > nav').show().height();
	    		$('header.nav_header_01 div.topnav div.inner > nav').attr('height',nHeight).hide(); // store height
        	}
        	
	        	$('header.nav_header_01 div.topnav div.inner > a.menu').click(function(){
	        		// @todo show submenu in mobile
	        		if ($(this).hasClass('active')) {
	        			// hide
	        			$('header.nav_header_01 div.topnav div.inner > nav').animate({height:0},250,'easeInOutExpo',function(){$(this).hide();});
	        		} else  {
	        			// show
	        			var h = $('header.nav_header_01 div.topnav div.inner > nav').attr('height');
                        
	        			$('header.nav_header_01 div.topnav div.inner > nav').show().css('height',0).animate({height:h+'px'},250,'easeInOutExpo');
	        		}
	        		$(this).toggleClass('active');
	        	});
        	
        	
        	$('header.nav_header_01 div.collapsable-verticals').show();
            $('header.nav_header_01 div.collapsable-verticals div.inner > div').each(function(){

               if ($.browser.msie && parseInt($.browser.version, 10) == 7)
                    $(this).attr('data-height',$(this).innerHeight()-100);
                else
                    $(this).attr('data-height',$(this).innerHeight());
            });
            $('header.nav_header_01 div.collapsable-verticals').hide();
            
            if ($(window).width() > 623) {
            $("header.nav_header_01 div.topnav nav li a").click(function(e){
                var c = $(this).data('collapsable'); // value of data-collapsable="attribute"
                
                var th = $('header.nav_header_01 div.'+c).data('height'); // content height
                //alert(th);
                var active = $(this).parent().hasClass('active');
                var visible = false;
                if ($('header.nav_header_01 div.collapsable-verticals').height() > 0 && $('header.nav_header_01 div.collapsable-verticals').css('display') !== 'none') {
                    visible = true; // test if collapsable is currently opened
                }
                var open = false;
                if (active && visible) {
                    open = true;
                }
                
                // store dom element(s) in order to reuse them without searching the dom again...
                $collapsable = $('header.nav_header_01 div.collapsable-verticals div.collapsable-content.'+c);
                $collapsables = $('header.nav_header_01 div.collapsable-verticals div.collapsable-content');
                
                $(this).parents('ul').find('li').removeClass('active');
                $(this).parent().addClass('active');
                
                // 3 scenarios:
                if (visible) {
                    if ($('header.nav_header_01 div.collapsable-verticals div.collapsable-content.open').hasClass(c)) {
                        nav_header.closeCollapsible(e, $collapsable, $collapsables, c);
                    } else {
                        // show different collapsible
                        $('header.nav_header_01 div.collapsable-verticals div.collapsable-content.open').animate({height:0},header.speed,'easeInOutExpo', function(){
                            $(this).hide().removeClass('open');
                        });
                        $collapsable.addClass('open').css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo');
                    }
                } else {
                    // show a collapsible
                    $collapsables.removeClass('open');
                    $('header.nav_header_01 div.collapsable-verticals').show();
                    $('header.nav_header_01 div.collapsable-verticals div.collapsable-content').hide();
                    $('header.nav_header_01 div.collapsable-verticals div.'+c).css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo').show();
                        $collapsable.addClass('open').css({height:0}).show().animate({height:th+'px'},header.speed,'easeInOutExpo',function(){
                    });
                    $(this).parent().addClass('active');
                }
                return false;
            });
            }
        },
        
        closeCollapsible: function(e, col, cols, c){
            col.animate({height:0},650,'easeInOutExpo', function() {
                $(e).hide();
            });
            $('header.nav_header_01 div.collapsable-verticals div.'+c).animate({height:0},header.speed,'easeInOutExpo', function(){
                $(this).hide();
                cols.removeClass('open');
            });
            $('header.nav_header_01 div.topnav ul li').removeClass('active');
        },
        
        initSearch : function() {
            if ( $.browser.msie ) {
                //alert( 'You are using Internet Exploiter v' + $.browser.version );
                /**
                 * @todo add placeholder text for IE (as value)
                 */
            }
            $("header.nav_header_01 div.topnav button.search_submit").click(function(){
                if ($(this).parent().hasClass('open')) {
                    nav_header.closeSearch();
                } else {
                    nav_header.openSearch();
                }
                return false;
            });
        },
        
        initMainNav : function() {
        	$('header.nav_header_01 a:not(header.nav_header_01 nav.social a)').hover(
                function(){
                    nav_header.closeSocialNav();
                }
            );
            $('header.nav_header_01 li').hover(function(){
                $('.header.nav_header_01 .mas-deportes .tvsa-caret-down').show();
            });
            $('header.nav_header_01 div.mainnav a').click(
                function(){
                    nav_header.closeMoreSportsDropdown();
                    nav_header.closeSearch();
                }
            );
            $('header.nav_header_01 div.mainnav nav li a').each(function(){
                var classname = $(this).data('more');
                $('div.collapsable-mainnav').show();
                $(this).attr('data-height',$('div.collapsable-mainnav > div.'+classname).height());
                $('div.collapsable-mainnav').hide();
            });
            
            $("header.nav_header_01 div.mainnav nav li a").click(function(){
                nav_header.closeSearch();
                $(this).parents('div.mainnav').find('li').removeClass('active');
                $(this).parent().addClass('active');
                if ($(this).attr('data-more')) {
                    var classname = $(this).data('more');
                    var myheight = $(this).data('height');
                    
                    if ($(this).hasClass('open') === false) {
                        $('div.collapsable-mainnav, div.collapsable-mainnav > div').show();
                        $('div.collapsable-mainnav > div').hide();
                        $('header.nav_header_01 div.mainnav nav.main li a').removeClass('open').find('i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                        $('div.collapsable-mainnav div.'+classname).css({height:0}).show().animate({height:myheight+'px'},header.speed,'easeInOutExpo');
                        $(this).addClass('open').find('i').removeClass('tvsa-caret-down').addClass('tvsa-caret-up');
                    } else {
                        $('div.collapsable-mainnav div.'+classname).animate({myheight:0},header.speed,'easeInOutExpo',function(){
                            $('div.collapsable-mainnav, div.collapsable-mainnav > div').hide();
                            $('header.nav_header_01 div.mainnav nav.main li a i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                        });
                        $(this).removeClass('open');
                    }
                } else {
                    $('div.collapsable-mainnav > div').hide();
                    $('header.nav_header_01 div.mainnav nav.main li a').removeClass('open').find('i.tvsa-caret-up').removeClass('tvsa-caret-up').addClass('tvsa-caret-down');
                }
                return false;
            });
            
            $("header.nav_header_01 div.mainnav nav.social li a").click(function(){
                $(this).parents('div.mainnav').find('li').removeClass('active');
                $(this).parent().addClass('active');
                return false;
            });
            
            $('header.nav_header_01 div.mainnav nav.social a.toggle').click(function(){
                nav_header.closeSearch();
                if ($(this).hasClass('open')) {
                    nav_header.closeSocialNav();
                } else {
                    nav_header.openSocialNav(this);
                }
                return false;
            });
            
            $('header.nav_header_01 div.collapsable-mainnav nav.tabs a').click(function(){
                var tab = $(this).data('tab');
                $(this).parents('ul').find('li').removeClass('active'); // remove active state from all
                $(this).parent().addClass('active'); // add active state to current
                $(this).parents("div.dropdown-content").find('div.maintab').hide(); // hide all
                $(this).parents("div.dropdown-content").find("div[data-tab='"+tab+"']").show();
                return false;
            });
            
            $('header.nav_header_01 div.collapsable-mainnav ul.subtabs a').click(function(){
                var tab = $(this).data('subtab');
                $(this).parents('ul.subtabs').find('li').removeClass('active'); // remove active state from all
                $(this).parent().addClass('active'); // add active state to current
                $(this).parents("div.maintab:eq(0)").find('div.subtab').hide(); // hide all
                $(this).parents("div.maintab:eq(0)").find("div.subtab[data-subtab='"+tab+"']").show();
                return false;
            });
        },
        
        openSocialNav : function(e) {
            nav_header.closeSearch();
            $('header.nav_header_01 div.mainnav nav.social ul').show();
            $(e).find('i').removeClass('tvsa-double-caret-down').addClass('tvsa-double-caret-up');
            $(e).addClass('open');
        },
        
        closeSocialNav : function() {
            $('header.nav_header_01 div.mainnav nav.social ul').hide();
            $('header.nav_header_01 div.mainnav nav.social a.toggle').removeClass('open').find('i').removeClass('tvsa-double-caret-up').addClass('tvsa-double-caret-down');
        },
        closeMoreSportsDropdown : function () {
            $('header.nav_header_01 div.mainnav nav.main li').removeClass('active');
        },
        
        openSearch : function() {
        	if ($(window).width() < 624) {
//        		$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({height:'36px'},150,'easeInOutExpo',function(){
//	            }).focus();
        		$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().focus();
        	} else {
	        	$('form.site_search').addClass('open').find("input.search_term:eq(0)").show().animate({width:'180px'},150,'easeInOutExpo',function(){
	            }).focus();
        	}
            nav_header.closeSocialNav();
        },
        
        closeSearch : function() {
        	if ($(window).width() < 624) {
//        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").animate({height:'0'},150,'easeInOutExpo',function(){
//                    $(this).hide();
//                });
        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").slideUp(333,'easeInOutExpo').blur();
        	} else {
        		$('form.site_search').removeClass('open').find("input.search_term:eq(0)").animate({width:'0'},150,'easeInOutExpo',function(){
                    $(this).hide();
                });
        	}
        }
    };
    
    $(document).ready(function(){
        nav_header.init();
    });
})(jQuery);vid_player_01_player = new Object();

vid_player_01_player.width = 625; // Delay entre cambio y cambio de imagenes en el autoplay
vid_player_01_player.height = 380;

$(document).ready(function() {
	
	// Si existe el componente de video
	if($('.vid_player_01')){
		
		// Click  del btn play
		$('.vid_player_01 #videobtn').click(function (){
			
			$(this).parent().siblings('.vid_player_01_image').children('#img_stage_01_IMG').hide();
			$(this).hide();
			$(this).parent().siblings('.vid_player_01_whtbkg').hide();
			$(this).parent().siblings('.overlay').css('margin-top','25px');
			
			
			setPlayerSize();
			
			$(this).parent().siblings('.vid_player_01_image').children('#theaterContainer').show();
		});
		
		// ponemos el thumb y el titulo del video 
		
		/*if (typeof(objHtml5) != "undefined"){
			$('.vid_player_01 .vid_player_01_black').text(objHtml5.properties.title);
			$('.vid_player_01 #img_stage_01_IMG').attr('src', objHtml5.properties.thumbnail);
		}*/
		
		
		
		$(window).resize(function() {
			setPlayerSize();
		});
	}
	
});


function setPlayerSize(){
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;
		
	}
	else{
		var anchoVentna =  $(window).width();
	}
	
	// Si el version movil obtenemos el alto y ancho de la imagen para adaptar el tamaño del player
	if( anchoVentna <= 590 ){
		
		// proporcion entre el ancho y alto fijos con el ancho variable
		var altoVentana = (anchoVentna * vid_player_01_player.height) / vid_player_01_player.width;
		
		$('.vid_player_01 #myExperience').width( anchoVentna );
		$('.vid_player_01 #myExperience').height( altoVentana );
		
		$('.vid_player_01 #contenedor').width( anchoVentna );
		$('.vid_player_01 #contenedor').height( altoVentana );
	}
	else{
		
		$('.vid_player_01 #myExperience').width( vid_player_01_player.width );
		$('.vid_player_01 #myExperience').height( vid_player_01_player.height );
		
		$('.vid_player_01 #contenedor').width( vid_player_01_player.width );
		$('.vid_player_01 #contenedor').height( vid_player_01_player.height );
		
	}
};jQuery(function($){ 
    (function(T, $) {
		$('.mix_12arts_01 .str_pleca_01 .ocultar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_01');			
			event.preventDefault();			
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			//$(parent).find('.str_pleca_01').css('margin-bottom','36px');
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		});
		
		$('.mix_12arts_01 .str_pleca_01 .mostrar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_01');
			event.preventDefault();			
			$(parent).find('.type1a_').toggle();
			$(parent).find('.nav_paginator_01').toggle();
			$(parent).find('.str_pleca_01 .ocultar').show();
			$(parent).find('.str_pleca_01 .mostrar').hide();
			//$(parent).find('.str_pleca_01').css('margin-bottom','24px');
			$(parent).css('margin-bottom','25px');
			$(parent).height('auto');
		});
		if($(window).width()<624){
			$('.mix_12arts_01 .dotted-add').removeClass('dotted-bottom');
		}

		$(window).resize(function() {
   			if($(window).width()<624){
				$('.mix_12arts_01 .dotted-add').removeClass('dotted-bottom');
			}
		});
		
		var start = function(param){
			var parent = $(param).closest('.mix_12arts_01');		
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		}

		start('.mix_12arts_01 .str_pleca_01 .ocultar a');	

	}(Televisa, jQuery));
});$(document).ready(function() {	

	// Quitamos la imagen que pone el script: http://comentarios.esmas.com/js/communities.js (redes sociales)
	$(window).load(function() {
		$('img[src*="vistas/spacer.gif"]').hide();
		$('#social_mailing').hide();
	});

});/*$(document).ready(function(e) {
	
	$(window).resize(function() {	
			if( $(window).width() < 624){
				//Nothing
			}
			else
			{
			    $('.collapsable').siblings().show();
			}
	});
	
	$('.collapsable').on('click',function(e){
		e.preventDefault();
		$(this).siblings().slideToggle('slow');
		$(this).find('i').toggleClass('tvsa-caret-down','tvsa-caret-up');
		var add = $(this).parent().attr('class');
		var directo = $('.'+add+' .str_pleca_01').css('margin-bottom');
		//console.log("Margin-bottom antes vale: " +add+ " bottom: " +directo);
		if(directo == "0px")
		{
			$('.'+add+' .str_pleca_01').css('margin-bottom',0);
		}
		else
		{
			$('.'+add+' .str_pleca_01').css('margin-bottom',0);
		}
		//console.log("Margin-bottom despues vale: " +add+ " bottom: " +directo);
	});	
});*/$(document).ready(function() {
	var $nav_footer_retorna = 0;
	$('.nav_footer_01 .icon-social').bind('touchstart', function(e) {
		e.preventDefault();
	});
	$('.nav_footer_01 .back').click(function(e) {
        e.preventDefault();
		jQuery('body,html').animate({
					scrollTop: 0
					}, 800);
					return false;
	});
});