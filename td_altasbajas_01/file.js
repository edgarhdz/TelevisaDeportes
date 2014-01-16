// JavaScript Document
var $large = 0;
$(document).ready(function(e) {
	$('.wdg_twitt_02').each(function(ix, element) {
	$elements = $(this).children().children('.wdg_twitt_02_carousel').children().children().size();
    $large = $(this).children().children('.wdg_twitt_02_carousel').children().children().width();
	$large = $elements * $large + (29 * ($elements - 1));
	
	if (!$.browser.msie){
		window.setTimeout("$('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');",500);
	}
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
		//$large += 100;
		$large = 958;
			window.setTimeout("$('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');",2000);
			//alert($large);
		
	}
});
	/*Monitor flechas*/
	$('.wdg_twitt_02 .tvsa-double-caret-left').addClass('inactive');
	$('.wdg_twitt_02 .tvsa-double-caret-left').click(function() {
		/*Verifico posición del scroll*/ 
					var large_tot = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').children().width();
					var position = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').scrollLeft();
					med = position + $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').width() + 201;
					if(position == 0 || position <= 329)
						{
						$(this).addClass('inactive');
						$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
						$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(0).addClass('background-color1');
						}
						else
						{
						$(this).removeClass('inactive');
						$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
						$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
						}  
						$(this).parent().parent().siblings('.wt2right').children().children().removeClass('inactive');
		});
		
		$('.wdg_twitt_02 .tvsa-double-caret-right').click(function() {
			//alert($large);
			// Reafirmamos el ancho del UL --- Problemas en IE
			if ($.browser.msie ){
				$('.wdg_twitt_02 .wdg_twitt_02_carousel ul').attr('style', 'width: '+$large+'px !important');
			}
			/*Verifico posición del scroll*/ 
				var large_tot = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').children().width();
				var position = $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').scrollLeft();
				med = position + $(this).parent().parent().parent().parent().siblings('.wdg_twitt_02_carousel').width() + 329;
					$(this).parent().parent().siblings('.wt2left').children().children().removeClass('inactive');  
				if(med == large_tot || med > large_tot)
					{
					$(this).addClass('inactive');
					$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
					$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(2).addClass('background-color1');
					}
					else
					{
					$(this).removeClass('inactive');
					$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
					$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
				}
		
		});
		/*Swipe*/
		$('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').bind('swipeleft',function(){
				$('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').animate({
						'scrollLeft': $('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').scrollLeft() + 329
					}, 500);
			});
		$('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').bind('swiperight',function(){
				$('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').animate({
						'scrollLeft': $('.wdg_twitt_02 .wdg_carousa .wdg_twitt_02_carousel').scrollLeft() - 329
					}, 500);
			});	
		/*Monitoreo scroll*/
	$('.wdg_twitt_02 .wdg_twitt_02_carousel').scroll(function() {
		var $wt2_position = $(this).scrollLeft();
		var $wt2_med = $wt2_position;
		if($wt2_position == 0){
				$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
				$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(0).addClass('background-color1');
		}
		else{
		$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
		$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(1).addClass('background-color1');
		}
		if($wt2_med > 350){
		$(this).parents('.wdg_twitt_02').children('.bullets').children().removeClass();
		$(this).parents('.wdg_twitt_02').children('.bullets').children().eq(2).addClass('background-color1');
		} 
	});
	
	$('.wdg_twitt_02').bind("touchmove",function(event){
    event.preventDefault();
    });
		
}); $(document).ready(function() {	
 
 
 	$('.btn_6prog_02 .left2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 9){var $b62_move = 995;}
			
		$(this).parent().parent().parent().siblings('.carrusel').animate({
			'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() - $b62_move
		}, 500);		
	});
	
	$('.btn_6prog_02 .right2').click(function(e) {
        e.preventDefault();
		if($(window).width() > 960){var $b62_move = 972;}
		if ($.browser.msie && parseInt($.browser.version, 10) <= 9){var $b62_move = 995;}
		
		$(this).parent().parent().parent().siblings('.carrusel').animate({
			'scrollLeft': $(this).parent().parent().parent().siblings('.carrusel').scrollLeft() + $b62_move
		}, 500);		
	});
	
	
	
	
	if ($(window).width()>624){
	 	 $('.btn_6prog_02 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_02 .carrusel').scrollLeft() - 648
	        });    
	    });

	    $('.btn_6prog_02 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        
	       $(this).animate({
	            'scrollLeft': $('.btn_6prog_02 .carrusel').scrollLeft() + 648
	        });
	    });
 	}else{
	 	 $('.btn_6prog_02 .carrusel').on('swiperight',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p2_move = 320;}else{$b6p2_move = 325;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_02 .carrusel').scrollLeft() - $b6p2_move
	        });    
	    });

	    $('.btn_6prog_02 .carrusel').on('swipeleft',function(e) {
	        e.preventDefault();
	        if($(window).width() > 624){$b6p2_move = 320;}else{$b6p2_move = 325;}
	        $(this).animate({
	            'scrollLeft': $('.btn_6prog_02 .carrusel').scrollLeft() + $b6p2_move
	        });
	    });
 	}
	
    var lis = $('.btn_6prog_02 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
	$(window).load(function(){
		if($(window).width() < 624){var extra = 12;}else{var extra = 0;}
		ancho = ulWidth + margin + extra;
		$(".btn_6prog_02 .type1a .carrusel ul").width(ancho);
		// Sacamos el ancho total del UL del carrusel
		anchoTotalUL = $(".btn_6prog_02 .type1a .carrusel ul").width(); // 100%
	});

	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_02 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
	var anchoTotalUL = $(".btn_6prog_02 .type1a .carrusel ul").width(); // 100%
	
	
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
	
	
	$('.btn_6prog_02 .type1a .carrusel').scroll(function(e){
		var $widthT = $('.btn_6prog_02 .type1a .carrusel').scrollLeft() + $('.btn_6prog_02 .type1a .carrusel').width();
		$('.btn_6prog_02 .type1a .carrusel ul').width();
		if($(this).scrollLeft()==0){
			$('.btn_6prog_02 .carouselArrowLeft i').addClass('inactive');
			// $('.btn_6prog_02 .carouselArrowLeft i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_02 .carouselArrowLeft i').removeClass('inactive');
			// $('.btn_6prog_02 .carouselArrowLeft i').addClass('arrow_active');	
		}
		
		
		if($widthT>=$('.btn_6prog_02 .type1a .carrusel ul').width()){
			$('.btn_6prog_02 .carouselArrowRight i').addClass('inactive');
			// $('.btn_6prog_02 .carouselArrowRight i').removeClass('arrow_active');	
		}
		else{
			$('.btn_6prog_02 .carouselArrowRight i').removeClass('inactive');
			// $('.btn_6prog_02 .carouselArrowRight i').addClass('arrow_active');	
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
})(jQuery);;jQuery(function($){ 
    (function($,T){
		
    	//desaparecer degradados izquierdo y derecho
    	 $('.wdg_altasbajas_01 .contenedor .tabla').scroll(function(event) {
	    	var anchoUL_carrusel;
	    	var position;
	    	var finaltotal;
	    	var anchotabla = $('.wdg_altasbajas_01 .contenedor .tabla .teams').width();
	    	
	    	anchoUL_carrusel = $('.wdg_altasbajas_01 .contenedor .tabla').width();	    	
	    	position = $('.wdg_altasbajas_01 .contenedor .tabla').scrollLeft();	    		    	
	    	finaltotal = position + anchoUL_carrusel;
	    	
	    	//degradado izquierdo	    		    
	    	if (position == 0){
	    		$('.wdg_altasbajas_01 .contenedor .degraded_left').hide();	    		
	    	}
	    	else {
	    		$('.wdg_altasbajas_01 .contenedor .degraded_left').show();	    		
	    	}
	    	
	    	//degradado derecho
	    	if (finaltotal >= anchotabla){	    			    		
	    		$('.wdg_altasbajas_01 .contenedor .degraded_right').hide();    		
	    	}
	    	else{
	    		$('.wdg_altasbajas_01 .contenedor .degraded_right').show();
	    	}
	    	
    	 });
    	
    	
		// set the date we're counting down to
		var target_date = new Date( $('.wdg_altasbajas_01 #target_date').attr('data-target_date') ).getTime();
		 
		// variables for time units
		var months, days, hours, minutes, seconds;
		
		// update the tag with id "countdown" every 1 second
		setInterval(function () {
		 
			// find the amount of "seconds" between now and target
			var current_date = new Date().getTime();
			var seconds_left = (target_date - current_date) / 1000;
		 
			// do some time calculations
			months = "<div class='superior'>"+parseInt(seconds_left / 2594000)+"<\/div><div class='inferior'>MES<\/div>";
			days = "<div class='superior'>"+parseInt(seconds_left / 86400)+"<\/div><div class='inferior'>DIA<\/div>";
			
			if(days > 30)
				days = days -30;
			
			seconds_left = seconds_left % 86400;
			 
			hours = "<div class='superior'>"+parseInt(seconds_left / 3600)+"<\/div><div class='inferior'>HRS<\/div>";
			seconds_left = seconds_left % 3600;
			 
			minutes = "<div class='superior'>"+parseInt(seconds_left / 60)+"<\/div><div class='inferior'>MIN<\/div>";
			seconds = "<div class='superior'>"+parseInt(seconds_left % 60)+"<\/div><div class='inferior'>SEG<\/div>";
			 
			
			$('.wdg_altasbajas_01 #months').html(months);
			$('.wdg_altasbajas_01 #days').html(days);
			$('.wdg_altasbajas_01 #hours').html(hours);
			$('.wdg_altasbajas_01 #minutes').html(minutes);
			$('.wdg_altasbajas_01 #seconds').html(seconds);
		 
		}, 1000);
		
		
	})($,Televisa);
});;jQuery(function($){ 
    (function($,T){
		
		function ocultar(){
			$('.wdg_mxm_live_03 .not_here').hide();
			$('.wdg_mxm_live_03 .vid_player_01 .not_here').hide();
			$('.wdg_mxm_live_03 .img_stage_01 .not_here').hide();
			$('.wdg_mxm_live_03 .vid_player_01 .not_here').css('display','none');
			$('.wdg_mxm_live_03 .img_stage_01 .not_here').css('display','none');
			$('.wdg_mxm_live_03 .tvsa-videocamera').removeClass("tvsa-error");
			$('.wdg_mxm_live_03 .tvsa-camera').show(); 
		};
		
		
        $('.wdg_mxm_live_03').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('.wdg_mxm_live_03_list');
                
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
                $('.wdg_mxm_live_03 .scroll').animate({
                    'scrollTop': $('.wdg_mxm_live_03 .scroll').scrollTop() - $theUl.height()
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $('.wdg_mxm_live_03 .scroll').animate({
                    'scrollTop': $('.wdg_mxm_live_03 .scroll').scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
        
        $('.wdg_mxm_live_03 .wdg_mxm_live_03_verMas').click(function(event){
            event.preventDefault();
            $('.wdg_mxm_live_03 ul').css('height','auto');
            $('.wdg_mxm_live_03 .wdg_mxm_live_03_verMas').hide();
			$('.wdg_mxm_live_03 .degradado').hide();
        });
		
		var activo_img = 0;
        var activo_vid = 0;
        $('.wdg_mxm_live_03 .tvsa-camera').on('click',function(event){
        	
			$('.wdg_mxm_live_03 .tvsa-videocamera').removeClass("textcolor-title1"); 
			$('.wdg_mxm_live_03 .tvsa-camera').removeClass("textcolor-title1");
			$('.wdg_mxm_live_03 .vid_player_01').removeClass('here').addClass('not_here');
			$('.wdg_mxm_live_03 .img_stage_01').removeClass('here').addClass('not_here');
			$(this).parent().next('.img_stage_01').removeClass('not_here').addClass('here');
			ocultar();
			
			var edo_this = $(this).parent().next('.img_stage_01').css('display'); 
			if(edo_this == 'block' ){
				$(this).parent().next('.img_stage_01').removeClass('here').addClass('not_here');
				$(this).parent().next('.img_stage_01').hide();
				$(this).addClass("textcolor-title1");
				
			}
			else{
				$(this).parent().next('.img_stage_01').show();
			}
			
            $(this).toggleClass("textcolor-title1");
			$(this).parent().siblings('.not_here').hide();
            $(this).parent().siblings('.vid_player_01').hide();
            $(this).parent().siblings('.icon-interactive').find('i').removeClass("textcolor-title1");
			
        });
         $('.wdg_mxm_live_03 .tvsa-videocamera').on('click',function(event){
            /*console.log( $(this).parent().siblings('.vid_player_01'));
			$alt_prev = $(this).parent().attr('data-nombre');
			$alt_prev2 = $(this).parent().attr('class')
			$hermano_del_padre = $(this).parent().siblings('.chronic');
			console.log($(this).parent().siblings('.chronic'));*/
			//console.log("entro: "+$(this).attr('class'));
        	 $('.tvsa-videocamera').removeClass("active");
			activo_vid = $(this).attr('class');
			if(activo_vid == "tvsa-videocamera"){
				/*Esconder todo*/
				$('.vid_player_01').hide();
				$('.tvsa-videocamera').removeClass("tvsa-error"); 
				$('.tvsa-videocamera').removeClass("textcolor-title1"); 
				$('.img_stage_01').hide();
				$('.tvsa-camera').removeClass("textcolor-title1");
				$('.tvsa-camera').show();
				//alert("mostrar video");		
				/*.............*/
			
			}
			//vsa-videocamera textcolor-title1 active tvsa-error
			$(this).addClass("active");
            $(this).parent().siblings('.vid_player_01').toggle();
            $(this).toggleClass("textcolor-title1");
            $(this).parent().siblings('.img_stage_01').hide();
            $(this).parent().siblings('.icon-interactive2').find('i').toggle();
            $(this).toggleClass('tvsa-error');
			activo_vid2 = $(this).attr('class');
			if( activo_vid2 == "tvsa-videocamera active")
			{
				//alert("cerrar video");
				$('.tvsa-videocamera').removeClass("active");				
			}
			//console.log("salgo: "+$(this).attr('class'));
        });
		
		
		/*Mido ancho pantalla
		anchoVentana = $(window).width();
		calc = anchoVentana - 22;
		if(anchoVentana < 624)
		{
			$('.wdg_mxm_live_03 .mantener').css('width',calc);
		}
		else
		{
			$('.wdg_mxm_live_03 .mantener').css('width','100%');
		}
		Diferente ventana
		$(window).resize(function() {
			if( $(window).width() > 960  ){
				$('.wdg_mxm_live_03 .mantener').css('width',624);
			}
			if( $(window).width() > 624 && $(window).width() < 960  ){
				$('.wdg_mxm_live_03 .mantener').css('width',624);
			}
			if( $(window).width() < 624 ){
				$('.wdg_mxm_live_03 .mantener').css('width',calc);
			}
		});*/
		
		
		$('.wdg_mxm_live_03 .scroll').scroll(function() {
			var altura = $('.wdg_mxm_live_03 .wdg_mxm_live_03_list').height();
				$scrollTop = parseInt($('.wdg_mxm_live_03 .scroll').scrollTop()) + parseInt($('.wdg_mxm_live_03 .scroll').height());
			if( parseInt($scrollTop) == parseInt(altura)) {
           		 $('.wdg_mxm_live_03 .degraded').css("visibility","hidden");
      			}else{
				 $('.wdg_mxm_live_03 .degraded').css("visibility","visible");
				}
			});	    
		
    })($,Televisa);
});


vid_player_01_player = new Object();

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
}/*$(document).ready(function(e) {
	
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
});*/$(document).ready(function(){ 
	var $wdg_comen_alt = 0;
	$('.wdg_comen_01 ul.wdg_comen_01_comments > li').each(function(index){
            $wdg_comen_alt += parseInt($(this).outerHeight());
        }); 	
	$('.wdg_comen_01 .wdg_comen_01_comments').scroll(function() {
		var $wdg_position = $(this).scrollTop() + $(this).height();
		if($wdg_position == $wdg_comen_alt){
		 $('.wdg_comen_01 .degraded').css("visibility","hidden");
		}else{
		 $('.wdg_comen_01 .degraded').css("visibility","visible");
		}
	});
	/*Tablet-Mobile*/
	$('.wdg_comen_01 .not_action').bind("touchstart",function(event){
    	event.preventDefault();
    });
	/*Swipe
	$('.wdg_comen_01 .wdg_comen_01_comments').bind('swipeup',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() + 385
            }, 500);
	});
	$('.wdg_comen_01 .wdg_comen_01_comments').bind('swipedown',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() - 385
            }, 500);
	});
	//----------------
	*/
});;jQuery(function($){ 
    (function($,T){
    	/*Swipe*/
    	var altWdgResult01 = 0;
    	if ($(window).width() < 978 && $(window).width() > 624){
    		altWdgResult01 = 568;
    	}
    	else{
    		altWdgResult01 = 163;  		
    	} 
    	
		$('.wdg_altasbajas_result_01 .deg').bind('swipeup',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01
                }, 500);
		});
		$('.wdg_altasbajas_result_01 .deg').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01
                }, 500);
		});   		
		
    	
        $('.wdg_altasbajas_result_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()-7
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()+7
                }, 500);
            }); 
        });
		

      	$list = $('.wdg_altasbajas_result_01 .deg li').size();
		$altura_li = parseInt($('.wdg_altasbajas_result_01 .deg li').height());
		$altura = ($altura_li * $list) + $list;

        var $parent = $('.wdg_altasbajas_result_01 ');
        var $dropdownAnchor = $parent.find('.lineaResultado .filter');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_altasbajas_result_012_dropdownlist');
            var $visibility = $listItems.css('visibility');
            var padre =$(this);
            if ( $visibility == 'hidden' ) 
                $listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 $listItems.css({
                    visibility: 'hidden',
                    height: '0px'
            });
              var $dropdownItems2 = $(this).find('.wdg_altasbajas_result_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_altasbajas_result_012_dropdowncontent p').html($(this).find('p').html());
            });
           
            $listItems.bind('mouseleave', function(evt) {
                evt.preventDefault();
                var visibilidad = $(this).css('visibility');
                if ( visibilidad == 'visible' ) {
                     $(this).css({
                        visibility: 'hidden',
                        height: '0px'       
                    });
                } 
            });
        });
        
      /*Monitoreo scroll*/
		$('.wdg_altasbajas_result_01 .deg').scroll(function() {
				var $war1_position = $(this).scrollTop();
				
				//alert($(this).height());
				if($(window).width() < 624 ){$war1_altura = 813;}
				if ($.browser.msie ){$war1_altura = 470;}
				else{$war1_altura = $(this).height()}
				
				
				if($war1_position >= $war1_altura) {
					$(this).siblings('.degraded').css("visibility","hidden");
					//$(this).siblings('.controls').children('.next').children('.tvsa-caret-down').css('color','#000');
					
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bgactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bginactive');
					
      			}else{
					$(this).siblings('.degraded').css("visibility","visible");
					//$(this).siblings('.controls').children().children('.tvsa-caret-down').css('color','#FFF');
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bginactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bgactive');
				}
				
				if($war1_position == 0){
					//$(this).siblings('.controls').children('.prev').children('.tvsa-caret-up').css('color','#000');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bgactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bginactive');
				}
				else{
					//$(this).siblings('.controls').children('.prev').children('.tvsa-caret-up').css('color','#FFF');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bginactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bgactive');
				}
				//console.log('Scroll: '+$war1_position+' suma: '+$(this).height());
			});	   
        

    })($,Televisa);
});

if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
      $(function() {
        var zIndexNumber = 1000;
        $('.wdg_altasbajas_result_01 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 $(document).ready(function() {
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