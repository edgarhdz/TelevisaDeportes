;jQuery(function($){ 
    (function($,T){
    	//Aggregate on : 16/Jun/2013, 04:02:15 PM
        //Author     		 : Isaac Aarón Díaz Reveles    	
    	$('.wdg_goals_carru_01 .deg').scroll(function() {
    		if($(this).scrollTop()>=329){
    		 $('.wdg_goals_carru_01 .degraded').css("visibility","hidden");
    		}else{
    		 $('.wdg_goals_carru_01 .degraded').css("visibility","visible");
    		}
    	});
    	
    	/*Swipe*/
		$('.wdg_goals_carru_01 .deg').bind('swipeup',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + 265
                }, 500);
		});
		$('.wdg_goals_carru_01 .deg').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - 265
                }, 500);
		});
    	//----------------
    	
        $('.wdg_goals_carru_01').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $wgc1_theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $wgc1_theUl.animate({
                    'scrollTop': $wgc1_theUl.scrollTop() - $wgc1_theUl.height()
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $wgc1_theUl.animate({
                    'scrollTop': $wgc1_theUl.scrollTop() + $wgc1_theUl.height()
                }, 500);
            }); 
        });
		

      	$wgc_list = $('.wdg_goals_carru_01 .deg li').size();
		$wgc_altura_li = $('.wdg_goals_carru_01 .deg li').outerHeight();
		$wgc_altura = $wgc_altura_li * $wgc_list;
		$('.wdg_goals_carru_01 .deg').scroll(function() {
			$wgc_scrollTop = parseInt($(this).scrollTop()) + parseInt($(this).height());
			//console.log('Movimiento: '+$wgc_scrollTop+' Altura_tot: '+$wgc_altura +' Elementos: '+ $wgc_list+' Cada uno: '+$wgc_altura_li);
				if($(this).scrollTop() == 0){
						$(this).siblings('.controls').children('.prev').addClass('bginactive');
						$(this).siblings('.controls').children('.prev').removeClass('bgactive');
					}else{
						$(this).siblings('.controls').children('.prev').removeClass('bginactive');
						$(this).siblings('.controls').children('.prev').addClass('bgactive');
					}
				if($wgc_scrollTop == $wgc_altura){
                 $(this).siblings('.degradado').css("visibility","hidden");
				 $(this).siblings('.controls').children('.next').addClass('bginactive');
				 $(this).siblings('.controls').children('.next').removeClass('bgactive');
                }else{
                 $(this).siblings('.degradado').css("visibility","visible");
				 $(this).siblings('.controls').children('.next').removeClass('bginactive');
				 $(this).siblings('.controls').children('.next').addClass('bgactive');
                }
            }); 

        var $parent = $('.wdg_goals_carru_01 ');
        var $dropdownAnchor = $parent.find('.lineaResultado');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_goals_carru_012_dropdownlist');
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
              var $dropdownItems2 = $(this).find('.wdg_goals_carru_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_goals_carru_012_dropdowncontent p').html($(this).find('p').html());
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

    })($,Televisa);
});

if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
      $(function() {
        var zIndexNumber = 1000;
        $('.wdg_goals_carru_01 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 ;jQuery(function($){ 
    (function ($, T) {
        var $m = $('.wdg_mix_carrousa div:last-child'),
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
				$('.carrusel-sizes').width('956px');
			}
			if( $(window).width() >= 624 && $(window).width() <= 960  ){
				$('.carrusel-sizes').width('956px');			
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('956px');
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
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() + 300
					}, 500);
				}else
				{
					$parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 329
                	}, 500);
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
		$('.vid_4vids_04 .wdg_mix_carrousa .general').bind('swipeleft',function(){
			if($(window).width() > 624){$v4v4_move = 329;}else{$v4v4_move = 318;}
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() + $v4v4_move
					}, 500);
			});
		$('.vid_4vids_04 .wdg_mix_carrousa .general').bind('swiperight',function(){
			if($(window).width() > 624){$v4v4_move = 329;}else{$v4v4_move = 318;}
				$(this).animate({
						'scrollLeft': $(this).scrollLeft() - $v4v4_move
					}, 500);
			});	
			/*vertical*/
		$('.vid_4vids_04 .wdg_mix_carrousa .general').bind('swipeup',function(){
				 $('body,html').animate({
						'scrollTop': $(window).scrollTop() + 200
					}, 500);
			});
		$('.vid_4vids_04 .wdg_mix_carrousa .general').bind('swipedown',function(){
				$('body,html').animate({
						'scrollTop': $(window).scrollTop() - 200
					}, 500);
			});
		/*Monitoreo scroll*/
	$('.vid_4vids_04 .general').scroll(function() {
		/*Horizontal*/
		var $v43_position = $(this).scrollLeft();
		var $v43_med = $v43_position;
		if($v43_position == 0){
			$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-left').addClass('inactive');
				$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
				$(this).parents('.vid_4vids_04').children('.bullets').children().eq(0).addClass('background-color1');
		}
		else{
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-left').removeClass('inactive');
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-right').removeClass('inactive');
		$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
		$(this).parents('.vid_4vids_04').children('.bullets').children().eq(1).addClass('background-color1');
		}
		if($v43_med > 350){
		$(this).siblings('.vid_4vids_04_title').children('.arrows').children().children().children('.tvsa-double-caret-right').addClass('inactive');
		$(this).parents('.vid_4vids_04').children('.bullets').children().removeClass();
		$(this).parents('.vid_4vids_04').children('.bullets').children().eq(2).addClass('background-color1');
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
		console.log('Scroll: '+$v43_position2+' suma: '+$v43_med2+' alt_tot: '+$v43_alt);
	});
	
	$('.vid_4vids_04 .general').bind("touchmove",function(event){
    event.preventDefault();
    });
		
		/*Ver más modo mobile*/
		/*$('.vid_4vids_04 .vid_4vids_04_verMas').click(function(event){
            event.preventDefault();
			$('.vid_4vids_04 .carrusel-sizes > div').show();
			altura = $('.vid_4vids_04 .carrusel-sizes').height();
			altura = altura + 40;
            $('.vid_4vids_04').css('height',altura);
            $('.vid_4vids_04 .vid_4vids_04_verMas').hide();
		});*/
		
    }(jQuery, Televisa));
});

/*
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
})(jQuery);/*$(document).ready(function(e) {
	
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
});*/$(document).ready(function(){
	/**
	 * @desc make the separator line as high as the higher div that it is separating
	 * @todo shouldn't the separator line be a component itself?
	 */
	 $h1 = $('#higth_1').height();
	 $h2 = $('#higth_2').height();
	 if($h1 >= $h2)
		{
			$h = $h1;
		}
		else
		{
			$h = $h2;
		}
	 $('.mix_2arts_05 .divisor').css('height',$h);
	 
});$(document).ready(function(){ 
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
});$(document).ready(function() {	

	
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

});// JavaScript Document
$(document).ready(function(e) { 
		
		$('.wdg_top10_01').each(function(ix, element) {   
			$wt10_elements = $('.wdg_top10_01 .wdg_top10_01_carousel ul li').size();     
		    $wt10_large = $('.wdg_top10_01 .wdg_top10_01_carousel').width(); 
			$wt10_large = $wt10_elements * $wt10_large + (29 * ($wt10_elements - 1));
			window.setTimeout("$('.wdg_top10_01 .wdg_top10_01_carousel').children().attr('style', 'width: '+$wt10_large+'px !important');",500);
			$wt10_move = 0;
		});      

		
		/*Monitor flechas*/ 
		$('.wdg_top10_01 .tvsa-double-caret-left').click(function() {  
		if($wt10_move == 0){}else{$wt10_move = $wt10_move - 1;} 
		$(this).parents('.wdg_top10_01').find('.wdg_top10_01_carousel').animate({
						'scrollLeft': $(this).parents('.wdg_top10_01').find('.wdg_top10_01_carousel').scrollLeft() - 329
					}, 500);
			if($wt10_move <= 0)
			{
				$(this).addClass('inactive');
				$(this).parent().parent().siblings().children().children('.tvsa-double-caret-right').removeClass('inactive');
				$(this).parents('.wdg_top10_01').children('.bullets').children().removeClass();
				$(this).parents('.wdg_top10_01').children('.bullets').children().eq(0).addClass('background-color1');
			} 
			else
			{
				$(this).parents('.wdg_top10_01').find('.bullets').children().removeClass();
				$(this).parents('.wdg_top10_01').find('.bullets').children().eq(1).addClass('background-color1');
			}    
			$(this).parent().parent().siblings('.wt2right').children().children().css('color', '#000000');
		});


		$('.wdg_top10_01 .tvsa-double-caret-right').click(function() {
		/*Verifico posición del scroll*/ 
		if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
			var $wt10_large = 625;
			$('.wdg_top10_01 .wdg_top10_01_carousel').children().attr('style', 'width: '+$wt10_large+'px !important');
		}

		$(this).parents('.wdg_top10_01').find('.wdg_top10_01_carousel').animate({
						'scrollLeft': $(this).parents('.wdg_top10_01').find('.wdg_top10_01_carousel').scrollLeft() + 329
					}, 500);
		if($wt10_move == 1){}else{$wt10_move = $wt10_move + 1;}  
					if($wt10_move == 1)
						{
						$(this).addClass('inactive');
						$(this).parents('.wdg_top10_01').find('.tvsa-double-caret-left').removeClass('inactive');
						$(this).parents('.wdg_top10_01').find('.bullets').children().removeClass();
						}
						else
						{
						$(this).removeClass('inactive');
						$(this).parents('.wdg_top10_01').find('.bullets').children().removeClass();
						$(this).parents('.wdg_top10_01').find('.bullets').children().eq(1).addClass('background-color1');
						}
		
		});


		/*Swipe*/ 
		$('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').bind('swipeleft',function(){
				$('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').animate({
						'scrollLeft': $('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').scrollLeft() + 329
				}, 500); 
		}); 

		$('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').bind('swiperight',function(){
				$('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').animate({
						'scrollLeft': $('.wdg_top10_01 .wdg_carousa .wdg_top10_01_carousel').scrollLeft() - 329
				}, 500);
		}); 

		/*Monitoreo scroll*/
		$('.wdg_top10_01 .wdg_top10_01_carousel').scroll(function() {
			var $wt10_position = $(this).scrollLeft();
			var $wt10_med = $wt10_position;
			if($wt10_position == 0){
					$(this).parents('.wdg_top10_01').children('.bullets').children().removeClass();
					$(this).parents('.wdg_top10_01').children('.bullets').children().eq(0).addClass('background-color1');
			}
			else{
			$(this).parents('.wdg_top10_01').children('.bullets').children().removeClass();
			$(this).parents('.wdg_top10_01').children('.bullets').children().eq(1).addClass('background-color1');
			}
			if($wt10_med > 350){
			$(this).parents('.wdg_top10_01').children('.bullets').children().removeClass();
			} 
		});

		$('.wdg_top10_01').bind("touchmove",function(event){
    		event.preventDefault();
    	});    
});  ;jQuery(function($){ 
    (function($,T){

		
		// Click  de Votar
		$('.wdg_poll_02 .linkVotar, .wdg_poll_02 .buttonVotar').click(function(event){
			
			event.preventDefault();
			
			// Obtenemos los resultados
			var r1 = $('.wdg_poll_02 input[name=poll]:radio:checked').val();
			
			
			// mostramos los resultados
			$('.wdg_poll_02 #score1').show();
			$('.wdg_poll_02 #score2').show();
			$('.wdg_poll_02 #score3').show();
			
			// cambiamos el boton votar
			$('.wdg_poll_02 .buttonVotar').removeClass('background-color2');			
			$('.wdg_poll_02 .buttonVotar').addClass('buttonVotado');
			$('.wdg_poll_02 .buttonVotar').removeClass('buttonVotar');
			
			var totalVotos = 1500; 
			$('.wdg_poll_02 .buttonVotado .linkVotar').text('Total de votos ' + totalVotos);
			
			// Quitamos los radio buttons
			$('.wdg_poll_02 input[name=poll]:radio').hide();
			
			
			// Porcentajes
			var p1= '15.5';
			var p2= '45.5';
			var p3= '55.5';
			
			//Colocamos la grafica y el porcentaje
			$('.wdg_poll_02 #percentage1').text(p1 + '%');
			$('.wdg_poll_02 #percentage2').text(p2 + '%');
			$('.wdg_poll_02 #percentage3').text(p3 + '%');
			
			
			// ponemos las clases segun corresponda
			$('.wdg_poll_02 #percentage1').addClass('rate2');
			$('.wdg_poll_02 #percentage2').addClass('rate2');
			$('.wdg_poll_02 #percentage3').addClass('rate1');
			
			
			// Numero de votos por respuesta
			var res1 = 100;
			var res2 = 200;
			var res3 = 300;
			
			
			$('.wdg_poll_02 #count1').text(res1);
			$('.wdg_poll_02 #count2').text(res2);
			$('.wdg_poll_02 #count3').text(res3);
			
			$('.wdg_poll_02 #count1').addClass('count2');
			$('.wdg_poll_02 #count2').addClass('count2');
			$('.wdg_poll_02 #count3').addClass('count1');
			
			$('.wdg_poll_02 .poll .col2 .count').show();
			
			
			// Creamos las barras o graficas
			// 137px es el tope maximo del ancho de la barra
			var graph1 = (p1 * 530) / 100;
			var graph2 = (p2 * 530) / 100;
			var graph3 = (p3 * 530) / 100;
			
			$('.wdg_poll_02 #graph1').width (graph1);
			$('.wdg_poll_02 #graph2').width (graph2);
			$('.wdg_poll_02 #graph3').width (graph3);
			
			$('.wdg_poll_02 #graph1').addClass('graph2');
			$('.wdg_poll_02 #graph2').addClass('graph2');
			$('.wdg_poll_02 #graph3').addClass('graph1');
			
			$('.wdg_poll_02 .graph').show();
			$('.wdg_poll_02 .linetop .gracias').show();
			
			
			$(this).unbind('click');
			
		});
	   
    })($,Televisa);
});$(document).ready(function() {
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