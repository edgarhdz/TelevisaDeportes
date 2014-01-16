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
		
});
(function() {
    $(document).ready(function() {
        $('.wdg_poll_01_submitbutton').click(function(){
            $(this).siblings(".wdg_poll_01_results").show();
            $(".wdg_poll_01 form .wdg_poll_01_options").hide();
            $(this).hide();
            $(this).siblings(".wdg_poll_01_total").show();

        });

    }); 
}());

 



$(document).ready(function(){
    $('.wdg_podcast_video_01 .map_play').parent().css({'position':'absolute'});    
});/* 
    Document   : wdg_podcast_03
    Created on : 16/Jun/2013, 04:02:15 PM
    Author     : Luis Jesús Ruelas Merino
    Description:
*/
$(document).ready(function(){
	
	/*Begin: Swipe*/
	var altWdgResult01 = 0;
	
	if ($(window).width() < 624){
		altWdgResult01 = 205;
	}
	else if ($(window).width() < 978 && $(window).width() > 624){
		altWdgResult01 = 205;
	}
	else{
		altWdgResult01 = 255;  		
	} 
	$(window).resize(function(){
		if ($(window).width() < 624){
			altWdgResult01 = 205;
		}
		else if ($(window).width() < 978 && $(window).width() > 624){
			altWdgResult01 = 205;
		}
		else{
			altWdgResult01 = 255;  		
		} 
	});
	
	$('.wdg_podcast_03 .scroll').bind('swipeup',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() + altWdgResult01
            }, 500);
	});
	$('.wdg_podcast_03 .scroll').bind('swipedown',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() - altWdgResult01
            }, 500);
	});	
	
	
	
	
	/*End: Swipe*/
	
	$('.wdg_podcast_03 .see_more').click(function(){
		$('.wdg_podcast_03 .container').css('height','auto');
		$('.wdg_podcast_03 .scroll').css('height','auto');
		$(this).hide();
		$('.wdg_podcast_03 .see_less').show();	
	});
	
	$('.wdg_podcast_03 .see_less').click(function(){
		$('.wdg_podcast_03 .container').css('height',261);
		$('.wdg_podcast_03 .scroll').css('height',261);
		$(this).hide();
		$('.wdg_podcast_03 .see_more').show();	
	});

	$('.wdg_podcast_03 .scroll').scroll(function() {
		if($('.wdg_podcast_03 .scroll').scrollTop()>=360){
		 $('.wdg_podcast_03 .degraded').css("visibility","hidden");
		}else{
		 $('.wdg_podcast_03 .degraded').css("visibility","visible");
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
})(jQuery);;$(document).ready(function() {
 
    ;(function ($, T) {
	/*Para version ie7*/
	
	var n_bullets_tablet = 0;
	var n_bullets_mobile = 0;
	var anchoTotalUL = $(".btn_carru_prog_03 .typecarruse .carrusel ul").width(); // 100%
	

	var bulletSelected;
	var scrollLeft;
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;
	}
	else{
		var anchoVentna =  $(window).width();
	}
	/*Termina ie7*/	
			var $m = $('.typecarruse .carrusel'),
                    animationDelay = 500;

            $m.each(function() {

                    var $items = $(this).find('ul li'),
                            padding = ($(this).parent().hasClass('type1c')) ? 41 : 0,
                            Pointer = {
                                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'click'
                                    //DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'  // Linea original
                            },
                            $parent = $(this);


                    /* adding new code block to get the width of the elements, 
                    along with left and right padding, border, and optionally margin,
                    in pixels. */
                        
                    var itemsLength = $items.length;
                    var ulWidth = (itemsLength  * 137) + ((itemsLength - 1) * 25) + 22;
                    // Sacamos el ancho total del UL del carrusel
					var anchoTotalUL = $(".btn_carru_prog_03 .typecarruse .carrusel ul").width(); // 100%
					var elements = $(".btn_carru_prog_03 .typecarruse .carrusel li").size();
					var ulWidth = elements * 321;
					var ulWidth = ulWidth - 5;
					
					
					
					/*calculo número de bullets tablet*/
					n_bullets_tablet = elements / 2;
					n_bullets_tablet = Math.ceil(n_bullets_tablet);
					n_bullets_tablet = n_bullets_tablet;
					var lis = "";
					for(n=0;n < n_bullets_tablet;n++){
							if(n==0)
							{
								lis = "<li class='background-color1'></li>"+lis;
							}
							else
							{
								lis = "<li></li>"+lis;
							}
						}
					$('#b_tablet').html("<ul>"+lis+"</ul>")
					/*calculo número de bullets mobile*/
					n_bullets_mobile = elements;
					var lis_m = "";
					for(n=0;n < n_bullets_mobile;n++){
							if(n==0)
							{
								lis_m = "<li class='background-color1'></li>"+lis_m;
							}
							else
							{
								lis_m = "<li></li>"+lis_m;
							}
						}
					$('#b_mobile').html("<ul>"+lis_m+"</ul>")
					
					
					
                    $(this).find('ul').width(ulWidth + padding);
                    
                    if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
                            !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))) { // And the version of the OS is bigger than 4.x...
                            $(this).addClass('iOS');
                    } else {
                            // Touch devices (non-iOS or iOS < 5)
                            var isWinPhone = /Windows Phone/.test(navigator.userAgent);

                            if (T.getIsTouchDevice() && !T.isBlackBerryCurve()) {

                                    // Hide the arrows if it's not carouseltype1b
                                    if (!$(this).parent().hasClass('type1b')) {
                                            $(this).parent().find('div:first-child ul').hide();
                                    }

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
                                                    // alert("Paso 3");
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
                    $parent.parent().find('a.left').click(function(e) {
                        e.preventDefault();
                            $parent.animate({
                                    'scrollLeft': $parent.scrollLeft() - ($parent.width() + 30)
                            }, animationDelay,"linear",function(){
					/*Verifico posición del scroll*/ 
					var large_tot = $(this).children().width();
					var estoy = $(this).attr('class');
					var position = $parent.scrollLeft();
					var med = position + $parent.width();
				/*	console.log('scroll: '+position+' med: '+med+' large_tot: '+large_tot+' estoy: '+estoy);*/
					if(position == 0)
						{
							$(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
						}
						else
						{
							$(this).siblings('.title').children().children().children().children().css('color', '#000000');
						}  
					if(med == large_tot)
						{
							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
						}
						else
						{
							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
						}
					});  
				});

                    $parent.parent().find('a.right').click(function(e) {
                        e.preventDefault();
                            $parent.animate({
                                    'scrollLeft': $parent.scrollLeft() + $parent.width() + 30                                   
                            }, animationDelay,"linear",function(){
					/*Verifico posición del scroll*/ 
					var large_tot2 = $(this).children().width();
					var estoy2 = $(this).attr('class');
					var position2 = $parent.scrollLeft();
					var ancho = $parent.width();
					var med2 = position2 + ancho;
					
					if(position2 == 0)
						{
							$(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
						}
						else
						{
							$(this).siblings('.title').children().children().children().children().css('color', '#000000');
						}  
					if(med2 == large_tot2)
						{
							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
						}
						else
						{
							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
						}
					});  
				});
                
                    
                // **************** Comportamiento Mobile ****************
                // BEGIN: SWIPE                                   
                
                    var btn_carru_prog_03Valor = 0;
                    
                    // valor para "Tablet"
                        if( $(window).width() >= '624' ){
                        	btn_carru_prog_03Valor = 25;                          	
                    } 
                    // valor para "Mobile"
                    else {
                    	btn_carru_prog_03Valor = 1;                    	
                    }    
                    
                $parent.bind('swipeleft',function(){
    		    $parent.animate({
    		    	'scrollLeft': $parent.scrollLeft() + $parent.width() + btn_carru_prog_03Valor
    		    }, animationDelay,"linear",function(){
    		    
    		    //Verifico posición del scroll
    					var large_tot2 = $(this).children().width();
    					var estoy2 = $(this).attr('class');
    					var position2 = $parent.scrollLeft();
    					var med2 = position2 + $parent.width();
    					//console.log('scroll: '+position2+' med: '+med2+' large_tot: '+large_tot2+' estoy: '+estoy2);
    					if(position2 == 0)
    						{
    							$(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
    						}
    						else
    						{
    							$(this).siblings('.title').children().children().children().children().css('color', '#000000');
    						}  
    					if(med2 == large_tot2)
    						{
    							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
    						}
    						else
    						{
    							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
    						}
    					});     
    			});     
                
                $parent.bind('swiperight',function(){
    				$parent.animate({
                                        'scrollLeft': $parent.scrollLeft() - $parent.width() - btn_carru_prog_03Valor
                                }, animationDelay,"linear",function(){
    					/*Verifico posición del scroll*/ 
    					var large_tot = $(this).children().width();
    					var estoy = $(this).attr('class');
    					var position = $parent.scrollLeft();
    					var med = position + $parent.width();
    					//console.log('scroll: '+position+' med: '+med+' large_tot: '+large_tot+' estoy: '+estoy);
    					if(position == 0)
    						{
    							$(this).siblings('.title').children().children().children().children().css('color', '#BABABA');
    						}
    						else
    						{
    							$(this).siblings('.title').children().children().children().children().css('color', '#000000');
    						}  
    					if(med == large_tot)
    						{
    							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#BABABA');
    						}
    						else
    						{
    							$(this).siblings('.title').children().children().siblings().children().children('.tvsa-double-caret-right').css('color', '#000000');
    						}
    					}); 
    			});	
                
                //END: SWIPE
                    
                    
            });
			
		/*Mobile change bullet*/

		/*Verificamos que bullet pintar*/
		$carrusel = $('.btn_carru_prog_03 .typecarruse .carrusel');
		$carrusel.scroll(function(e){
		scrollLeft = $(this).scrollLeft() + (anchoVentna/2.5) ;
        
		var porcentaje =  ( scrollLeft * 1000) / anchoTotalUL; 
		
		/*Mobile*/
		
		//armar estructura dinámica según número de bullets
		typem = n_bullets_mobile; 
		if(typem == 8 && $(window).width() < 624)
		{
		if( scrollLeft < 250)
			bulletSelected = 8;
		else if( scrollLeft >= 251 && scrollLeft <= 540)
			bulletSelected = 7;
		else if( scrollLeft >= 541 && scrollLeft <= 890)
			bulletSelected = 6;
		else if( scrollLeft >= 891 && scrollLeft <= 1230)
			bulletSelected = 5;
		else if( scrollLeft >= 1231 && scrollLeft <= 1540)
			bulletSelected = 4;
		else if( scrollLeft >= 1541 && scrollLeft <= 1900)
			bulletSelected = 3;
		else if( scrollLeft >= 1901 && scrollLeft <= 2190)
			bulletSelected = 2;
		else if( scrollLeft >= 2191 && scrollLeft <= 2500)
			bulletSelected = 1;
		else if( scrollLeft >= 2501)
			bulletSelected = 1;
		}
		if(typem == 9 && $(window).width() < 624)
		{
		if( scrollLeft < 251)
			bulletSelected = 9;
		else if( scrollLeft >= 251 && scrollLeft <= 540)
			bulletSelected = 8;
		else if( scrollLeft >= 541 && scrollLeft <= 890)
			bulletSelected = 7;
		else if( scrollLeft >= 891 && scrollLeft <= 1230)
			bulletSelected = 6;
		else if( scrollLeft >= 1231 && scrollLeft <= 1540)
			bulletSelected = 5;
		else if( scrollLeft >= 1541 && scrollLeft <= 1900)
			bulletSelected = 4;
		else if( scrollLeft >= 1901 && scrollLeft <= 2190)
			bulletSelected = 3;
		else if( scrollLeft >= 2191 && scrollLeft <= 2500)
			bulletSelected = 2;
		else if( scrollLeft >= 2501)
			bulletSelected = 1;
		}
		if($(window).width() < 624)
		{
		$('.btn_carru_prog_03 #b_mobile ul li').removeClass('background-color1');
		$(".btn_carru_prog_03 #b_mobile ul li:nth-child("+bulletSelected+")").addClass('background-color1');
		}
			
			
		/*Tablet*/
		
		//armar estructura dinámica según número de bullets
		type = n_bullets_tablet%2; 
			if(type != 0)
			{
				type = n_bullets_tablet -1;
			}
			else
			{
				type = n_bullets_tablet;
			}
		//console.log("Cantidad de elementos: " + n_bullets_tablet +" Posición scroll" + scrollLeft + " type: " + type);
		if(type == 4 && $(window).width() >= 624)
		{
			if( scrollLeft < 625)
				bulletSelected_t = 5;
			else if( scrollLeft >= 626 && scrollLeft <= 1230)
				bulletSelected_t = 4;
			else if( scrollLeft >= 1231 && scrollLeft <= 1900)
				bulletSelected_t = 3;
			else if( scrollLeft >= 1901 && scrollLeft <= 2500)
				bulletSelected_t = 2;
			else if( scrollLeft >= 2501)
				bulletSelected_t = 1;
		}
		if(type == 5 && $(window).width() >= 624)
		{
			if( scrollLeft < 500)
				bulletSelected_t = 5;
			else if( scrollLeft >= 901 && scrollLeft <= 1230)
				bulletSelected_t = 4;
			else if( scrollLeft >= 1231 && scrollLeft <= 1900)
				bulletSelected_t = 3;
			else if( scrollLeft >= 1901 && scrollLeft <= 2500)
				bulletSelected_t = 2;
			else if( scrollLeft >= 2501)
				bulletSelected_t = 1;
		}
		$('.btn_carru_prog_03 #b_tablet ul li').removeClass('background-color1');
		$(".btn_carru_prog_03 #b_tablet ul li:nth-child("+bulletSelected_t+")").addClass('background-color1')
		
    	});
		
			$('.btn_carru_prog_03 .wdg_scroll_events').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.btn_carru_prog_03 .wdg_scroll_events');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
       	});
    }(jQuery, Televisa)); 
   
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
	 
});//$(document).ready(function() { //Html esencial y DOM
$(window).load(function() {	 //Imágenes y demas HTML
    if( $(window).width() <  624 ){
         $('.mix_carru_01b').css('overflow','hidden')
        var $height = $('.mix_carru_01b .resize img');
        $height.load(function() {
                var $imageHeight = $(this).width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.height($totalHeight);
                $height.parents('.resize').height($totalHeight);
        });
    }
	
    $(window).resize(function() {
        if( $(window).width() <  624 ){
            var $imageHeight = $height.width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.height($totalHeight+10);
                $height.parents('.resize').height($totalHeight);
        }
    });
	
    $('.mix_carru_01b .resize img').load(function() {
        if( $(window).width() <  624 ){
            var $imageHeight = $height.width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.height($totalHeight+10);
                $height.parents('.resize').height($totalHeight);
        }
    });
	
	var elem = document.getElementById('mix_carru_01b_swipe');
    var $time = $('.mix_carru_01b .type2b2_02').attr('data-time');
    window.mySwipe = Swipe(elem, {
        startSlide: 0,
        auto: $time, 
        continuous: true, 
        callback: function(index, element) { 
            /** inicia seccion para activar el bullet actual **/
            $(".mix_carru_01b .bullets_02 ul li").each(function(){
                id = $(this).attr("id"); 
                if("bullet_"+index == id) 
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                }
                else 
                {
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });   
            /** termina seccion para activar el bullet actual **/  

            /** inicia seccion para activar el thumb_ actual **/
            $(".mix_carru_01b .galleryThumbs li").each(function(){
                id_thumb = $(this).attr("id"); 
                if("thumb_"+index == id_thumb)  
                { 
                    $(this).addClass("active");
                    title_item = $("#"+id_thumb +" a").attr('data-title'); 
                    $(".mix_carru_01b .galleryCaption_02 h2 a").html(title_item);
                } 
                else 
                { $(this).removeClass("active"); }
            });
			if($.browser.msie && $.browser.version <= 9)
					{	
						if(index == 0){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(0);
						}
						if(index == 1){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(624);
						}
						if(index == 2){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(1248);
						}
						if(index == 3){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(1872);
						}
						if(index == 4){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(2496);
						}
						if(index == 5){
							$('.mix_carru_01b .galleryImages_02').scrollLeft(3120);
						}
					}    
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {} 
    });  
 		/*Mouse Enter*/
		$('.mix_carru_01b .swipe-wrap')
			.mouseenter(function() {
			//$(this).attr('id');
			$hijo_act = $(this).parent().siblings('.galleryThumbs').children('.active').index();
			window.mySwipe.slide(parseInt($hijo_act), 0);
			})
			.mouseleave(function() {
				//window.mySwipe.slide(parseInt($hijo_act), 1);
				 window.mySwipe = Swipe(elem, {
        startSlide: $hijo_act,
        auto: $time, 
        continuous: true, 
        callback: function(index, element) { 
            /** inicia seccion para activar el bullet actual **/
            $(".mix_carru_01b .bullets_02 ul li").each(function(){
                id = $(this).attr("id"); 
                if("bullet_"+index == id) 
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                }
                else 
                {
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });   
            /** termina seccion para activar el bullet actual **/  

            /** inicia seccion para activar el thumb_ actual **/
            $(".mix_carru_01b .galleryThumbs li").each(function(){
                id_thumb = $(this).attr("id"); 
                if("thumb_"+index == id_thumb)  
                { 
					
                    $(this).addClass("active");
                    title_item = $(".mix_carru_01b #"+id_thumb +" a").attr('data-title'); 
					
                    $(".mix_carru_01b .galleryCaption_02 h2 a").html(title_item);
                } 
                else 
                { $(this).removeClass("active"); }
            });    
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {} 
    });  
			});
		/*END Mouse Enter*/
 
 
    /** Evento click para los thumbs **/
    $(".mix_carru_01b .galleryThumbs li").click(function(e){
        e.preventDefault();
		if($.browser.msie && $.browser.version <= 9)
		{	
			var id_actual = $(this).attr('id');
			id_actual = id_actual.split("_");  
			id_actual = id_actual[1];
			if(id_actual == 0){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(0);
			}
			if(id_actual == 1){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(624);
			}
			if(id_actual == 2){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(1248);
			}
			if(id_actual == 3){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(1872);
			}
			if(id_actual == 4){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(2496);
			}
			if(id_actual == 5){
				$('.mix_carru_01b .galleryImages_02').scrollLeft(3120);
			}
		}else{
			var id_actual = $(this).attr('id');
			id_actual = id_actual.split("_");  
			id_actual = id_actual[1]; 
			window.mySwipe.slide(parseInt(id_actual), 1);  
		}
		
		
		
    });  
	/*Tablet*/
	$(".mix_carru_01b .galleryThumbs li").on('touchstart',function(e) {
		event.preventDefault();
	 	var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 1); 
	});
    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $(".mix_carru_01b .galleryThumbs li").bind(clickEvent, obtener_foto); 

    function obtener_foto()   
    { 
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 1); 
    }
});
 

$(document).ready(function(){
    if( $(window).width() <  624 ){
		var $height = $('.mix_1arts_03 .resize img');
		$height.load(function() {
	   			var $imageHeight = $(this).width(); 
				var $totalHeight = $imageHeight * 0.75;
			    $height.parent().height($totalHeight);
    	});
	}
	$(window).resize(function() {
   		if( $(window).width() <  624 ){
   			var $imageHeight = $height.width(); 
				var $totalHeight = $imageHeight * 0.75;
			    $height.parent().height($totalHeight);
   		}
   	});
});;jQuery(function($){ 
    (function ($, T) {
        vid_4vids_01_player = new Object();
        vid_4vids_01_player.width = 624; // Delay entre cambio y cambio de imagenes en el autoplay
        vid_4vids_01_player.height = 378;

        // Si cambian de mobile a tablet se quita el ancho fijo que pone el carrusel al 'ul' y viceversa.
        $(window).resize(function(){
             if($(window).width() <= 590){
                 // $('.vid_4vids_01 .type1a .carruselContainer #carrusel').css('width', '105%');
             }
             else{    
                 // $('.vid_4vids_01 .type1a .carruselContainer ul').width(ulWidth + margin_r + 19);
             }
        });
        
        // Si cargan la pagina en movil se quita el ancho fijo que pone el carrusel al 'ul'
        $(window).load(function() {
            if($(window).width() <= 590){
                //$('.vid_4vids_01 .type1a .carruselContainer #carrusel').css('width', '105%');
            }
        });
    
        var anchoUL_carrusel;
        
        if($(window).width() > 620){
            anchoUL_carrusel = $('.vid_4vids_01 .type1a .carruselContainer #carrusel').width();
        }
        
        var lis = $('.vid_4vids_01 .type1a .carruselContainer ul li');
       
            var margin_r = 0;
            var ulWidth = 0;
            var anchoUL = 0;
            for(var i=0; i<lis.length; i++){
                margin_r += parseInt($(lis[i]).css("margin-right"));
                ulWidth += $(lis[i]).width();
            }
            // $('.vid_4vids_01 .type1a .carruselContainer ul').width(ulWidth + margin_r + 19);              
    
        // Bind del carrsuel 2 con la galeria escogida
        $('.vid_4vids_01 .galleryLink').click( function (event){
            $('.vid_4vids_01 .td_bg').hide();
                event.preventDefault();
                // Si es version tablet o desktop
                if($(window).width() > 620) {
                        // Quitamos el estilo y agregamos el estilo "sellecionado" a la imagen que le dieron click
                        $('.vid_4vids_01 .galleryLink').each( function (){
                                $(this).find('div.selectedGallery').removeClass('selectedGallery');
                        });
                        $(this).find('.iconGallery').addClass('selectedGallery');
                }
    
        });
    
    
        //Click  del btn play
        $('.vid_4vids_01 #video_play, .vid_4vids_01 .galleryLink').click(function (event){
                event.preventDefault();
                changePlayVideo($(this));
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
                var altoVentana = (anchoVentna * vid_4vids_01_player.height) / vid_4vids_01_player.width;
                
                $('.vid_4vids_01 #myExperience').width( anchoVentna );
                $('.vid_4vids_01 #myExperience').height( altoVentana );
                
                $('.vid_4vids_01 #contenedor').width( anchoVentna );
                $('.vid_4vids_01 #contenedor').height( altoVentana );
            }
            else{
                
                $('.vid_4vids_01 #myExperience').width( vid_4vids_01_player.width );
                $('.vid_4vids_01 #myExperience').height( vid_4vids_01_player.height );
                
                $('.vid_4vids_01 #contenedor').width( vid_4vids_01_player.width );
                $('.vid_4vids_01 #contenedor').height( vid_4vids_01_player.height );
                
            }
        }
    
        function changePlayVideo(galleryIcon){
        
            if( typeof( modVP ) != "undefined"){
                
                if(modVP.isPlaying())
                    modVP.stop();
                
                var player = new BCEsmasPlayer("myExperience",643082227001,"contenedor",params,options);
                player.removePlayer();
                player.addPlayer();
                openerSkin();                
                modVP.play();
            }
            
            var imgContainer = $(galleryIcon).parents('.vid_4vids_01');
            
            setPlayerSize();                    
            $(imgContainer).find('#theaterContainer').show();
            $(imgContainer).find('#img_stage_01_IMG').hide();
            $(imgContainer).find('#video_play').hide();
            $(imgContainer).find('.overlay').hide();
        }
        
        //Begin: Swipe         
        var altWdgResult01 = 0;
        if ($(window).width() < 978 && $(window).width() > 624){
            altWdgResult01 = 568;
        }
        else{
            altWdgResult01 = 156;
        } 
        
        $('.vid_4vids_01 #carrusel' ).bind('swipeup',function(){                
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01 + 7
                }, 500);
        });
        $('.vid_4vids_01 #carrusel').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01 - 7
                }, 500);
        }); //End: Swipe
        
        //Begin: Degraded show/hidden
        $('.vid_4vids_01 #carrusel').scroll(function() {
            var altura = $('.vid_4vids_01 #carrusel').height();                        
            $scrollTop = parseInt($('.vid_4vids_01 #carrusel').scrollTop()) + parseInt($('.vid_4vids_01 #carrusel').height());            
            if( parseInt($scrollTop) > parseInt(altura)) {
                    $('.vid_4vids_01 .carruselContainer .degraded').css("visibility","hidden");                     
              }
            else{
                 $('.vid_4vids_01 .carruselContainer .degraded').css("visibility","visible");                
            }
        });  //End: Degraded
        
        //--------------------------------------------------------------------------
        //--SCROLL - desplazamiento de las imágenes del videos
        //--------------------------------------------------------------------------
        $('.vid_4vids_01').find('a.left').click(function(e) {            
            e.preventDefault();
            console.log('izquierda');
            $(this).parent().siblings('.carruselContainer').animate({                
                        'scrollLeft': $(this).parent().siblings('.carruselContainer').scrollLeft() - $(this).parent().siblings('.carruselContainer').width()
                });
        });
                
        $('.vid_4vids_01').find('a.right').click(function(e) {            
            e.preventDefault();
            console.log('derecha');
            $(this).parent().siblings('.carruselContainer').animate({                
                'scrollLeft': $(this).parent().siblings('.carruselContainer').scrollLeft() + $(this).parent().siblings('.carruselContainer').width()
            });            
        });
        
        //---------------------------------------------------------------------
        //--ACTIVAR / DESACTIVAR las flechas del carrusel
        //---------------------------------------------------------------------
        $('.vid_4vids_01').find('.carruselContainer').scroll(function(e) {                   
            var $v4v_position = $('.vid_4vids_01').find('.carruselContainer').scrollLeft();
            var $v4v_widthTotal = $('.vid_4vids_01').find('.carruselContainer ul').width();
            var $v4v_med = $('.vid_4vids_01').find('.carruselContainer').width() + $v4v_position;
            
            //Flecha Izquierda...
            if($v4v_position == 0)
            {
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').removeClass('activo');
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').addClass('desactivo');
            }
            else
            {
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').removeClass('desactivo');
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').addClass('activo');
            }  
            
            //Flecha derecha...
            if($v4v_med == $v4v_widthTotal)
            {
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').removeClass('activo');
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').addClass('desactivo');
            }
            else
            {
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').removeClass('desactivo');
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').addClass('activo');
            }
            
        });
         // Support the click event on video
        $('.vid_4vids_01 .monitor').click(function(e) {
            e.preventDefault();
            $('.vid_4vids_01 .iconGallery').removeClass('selectedGallery');
            $(this).children('.iconGallery').addClass('selectedGallery').addClass('not_change');
        });
    }(jQuery, Televisa));
});
$(document).ready(function(){
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
});;jQuery(function($){ 
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