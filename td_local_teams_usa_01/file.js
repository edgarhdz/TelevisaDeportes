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
})(jQuery);;jQuery(function($){ 
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
});;jQuery(function($){ 
    (function(T, $) {
        var $x = $('.nav_team_header_01_nav');
        var $y = $('.nav_team_header_01_nav ul li');
        var $z = $('.nav_team_header_01_nav ul li:first-child');
        var $show = $('.wdg_matchesresult_hide');
        var $hide = $('.wdg_matchesresult_show');
		var $elements = $('.nav_team_header_01_nav ul li').size();
        var $totalWidth = 0;
        var $slide = $z.outerWidth(true);
		var $position = 1;
		$('.nav_team_header_01 .wdg_matchesresult_navlefticon .tvsa-double-caret-left').css('color', '#BABABA');
        
        $('.nav_team_header_01 .nav_team_header_01_nav p').on('mouseenter',function(e){
        	$(this).parents('li').addClass('border-bottom2');
        	$(this).addClass('textcolor-title2');
        }).on('mouseleave',function(e){
        	if( ! $(this).parent().hasClass('textcolor-title2') ){
        		$(this).removeClass('textcolor-title2');
            	$(this).parents('li').removeClass('border-bottom2');
        	}else{
        		//No elimina la clase
        	}
        	
        });
        
        $y.each(function() {
            $totalWidth += $(this).outerWidth(true);
        });
        var $m = $('.nav_team_header_01_components'),
        animationDelay = 500;
        var $w = $('.nav_team_header_01_components ul li');
        var $count = 0;
        $w.each(function() {
            $count ++;
        });
        var $unitary = $w.outerWidth(true);
        var $unitaryH = $w.outerHeight(true);
        var $round = 1;
        if($.browser.msie && parseFloat($.browser.version) <= 8){
            
        }
        else{
            $(window).resize(function() {
                var visShow = $show.css('visibility');
                //var visHide = $hide.css('visibility'); 
                $unitary = $w.outerWidth(true);
                $totalWidth = 0;
                $y.each(function() {
                    $totalWidth += $(this).outerWidth(true);
                });

                if( $(window).width() > 960  ){
                    $round = Math.round($count/3);
                    if( ($count / 3) > $round )
                        $m.find('ul').width( ($round + 1 + 2) * $unitary);
                    else
                        $m.find('ul').width( ($round * $unitary) + 2);
                    $m.find('ul').height($unitaryH * 3);
                    $m.height($unitaryH * 3);
                    $x.find('ul').width( $totalWidth + 20 + 2 );
                    if ( visShow == 'hidden' ) {
                        $('.nav_team_header_01').animate({
                            'height': 575
                        }, 0);
                    }
                }
                if( $(window).width() > 623 && $(window).width() <= 960){
                    $round = Math.round($count/2);
                    if( ($count / 2) > $round )
                        $m.find('ul').width( ($round + 1 + 2) * $unitary);
                    else
                        $m.find('ul').width( ($round * $unitary) + 2);
                    $m.find('ul').height($unitaryH * 2);
                    $m.height($unitaryH * 2);
                    $x.find('ul').width( $totalWidth + 20 + 2);
                    if ( visShow == 'hidden' ) {
                        $('.nav_team_header_01').animate({
                            'height': 460
                        }, 0);
                    }
                }
                if( $(window).width() < 624 ){    
                    $round = Math.round($count);
                    $m.find('ul').width( ($round * $unitary) + 2);
                    $m.height($unitaryH);
                    $m.find('ul').height($unitaryH);
                    if ( visShow == 'hidden' ) {

                    }
                    $('.nav_team_header_01').animate({
                        'height': 134
                    }, 0);

                }
                $m.animate({
                    'scrollLeft': 0
                }, 0);  


            });
        }
        $m.each(function() {
            var $parent = $(this);
            var $items = $(this).find('ul li');
            $count = 0;
            $items.each(function() {
                $count ++;
            });
            if (T.getDeviceSize() === 'large') {
                $round = Math.round($count/3);
                if( ($count / 3) > $round )
                    $(this).find('ul').width( ($round + 1 + 2) * $unitary);
                else
                    $(this).find('ul').width( ($round * $unitary) + 2);
                $(this).find('ul').height($unitaryH * 3);
                $(this).height($unitaryH * 3);
            }
            if (T.getDeviceSize() === 'medium') {
                $round = Math.round($count/2);
                if( ($count / 2) > $round )
                    $(this).find('ul').width( ($round + 1 + 2) * $unitary);
                else
                    $(this).find('ul').width( ($round * $unitary) + 2);
                $(this).find('ul').height($unitaryH * 2);
                $(this).height($unitaryH * 2);
            }
            if (T.getDeviceSize() === 'small') {
                $round = Math.round($count);
                $(this).find('ul').width( ($round * $unitary) + 2);
                $(this).find('ul').height($unitaryH);
                $(this).height($unitaryH);
            }
        });
        $x.each(function() {

            var $parent = $(this);

            if (T.getDeviceSize() === 'small') {
                $x.find('ul').width( $totalWidth + 2);
            }
            $parent.parent().parent().find('a.wdg_matchesresult_navleft').click(function(e) {
                e.preventDefault();
                //calculate move
				$z = $('.nav_team_header_01_nav ul li:nth-child('+$position+')');
				$slide = $z.outerWidth(true) + 10;
				if($position == 1){}else{$position--;}
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() - $slide
                }, animationDelay,"linear",function(){ 
				/*Verifico posición del scroll*/ 
					var large_tot = $(this).children().width();
					var position = $parent.scrollLeft();
					med = position + $(this).parent().width();
					if(position == 0)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#000000');
						}  
					if(med == large_tot)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#000000');
						}
					});          
            });

            $parent.parent().parent().find('a.wdg_matchesresult_navright').click(function(e) {
                e.preventDefault();
                //calculate move
				$z = $('.nav_team_header_01_nav ul li:nth-child('+$position+')');
				$slide = $z.outerWidth(true) + 10;
				if($position == $elements){}else{$position++;}
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() + $slide
                }, animationDelay,"linear",function(){ 
				/*Verifico posición del scroll*/ 
					var large_tot = $(this).children().width();
					var position = $parent.scrollLeft();
					med = position + $(this).parent().width();
					if(position == 0)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#000000');
						}  
					if(med == large_tot)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#00000');
						}
					});   
			});
        });  
		
		/*Monitoreo scroll*/
		$('.nav_team_header_01 .nav_team_header_01_nav').scroll(function() {
			var position3 =  parseInt($(this).scrollLeft());
			var large_tot3 =  parseInt($(this).children().width());
					med3 = parseInt(position3) + parseInt($(this).width());
					console.log('scroll esta en: '+position3+' largo tot: '+large_tot3+' suma: '+med3);
					if(position3 == 0)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowleft').children().children().children().css('color', '#000000');
						}  
					if(med3 == large_tot3)
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#BABABA');
						}
						else
						{
						$(this).parent().siblings('.wdg_matchesresult_navarrowright').children().children().children().css('color', '#000000');
						}
		});    
		      
		
		var color = $('.nav_team_header_01 .link_color').attr('data-color');
		if(color == "" || color == null)
			{
				color = '#A70A0B';
		$('.nav_team_header_01 .selected a').css('color', color);
		$('.nav_team_header_01 .link_color').css('color',color);
			}
			else
			{
		$('.nav_team_header_01 .selected a').css('color', $('.nav_team_header_01 .link_color').attr('data-color'));
			}
		$('.nav_team_header_01 .nav_team_header_01_container .nav_team_header_01_right .nav_team_header_01_navcontainer .nav_team_header_01_nav ul li.selected').css('border-bottom','3px solid ' + color);
		
		
    }(Televisa, jQuery));
});
//$(document).ready(function() { //Html esencial y DOM
$(window).load(function() {	 //Imágenes y demas HTML
    if( $(window).width() <  624 ){
        $('.mix_carru_03').css('overflow','hidden')
        var $height = $('.mix_carru_03 .resize img');
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
	
    $('.mix_carru_03 .resize img').load(function() {
        if( $(window).width() <  624 ){
            var $imageHeight = $height.width(); 
                var $totalHeight = $imageHeight * 0.75;
                $height.height($totalHeight+10);
                $height.parents('.resize').height($totalHeight);
        }
    });
	
	var elem = document.getElementById('mix_carru_03_swipe');
    var $time = $('.mix_carru_03 .type2b2_02').attr('data-time');
    window.mySwipe = Swipe(elem, {
        startSlide: 0,
        auto: $time, 
        continuous: true, 
        callback: function(index, element) { 
            /** inicia seccion para activar el bullet actual **/
            $(".bullets_02 ul li").each(function(){
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
            $(".galleryThumbs li").each(function(){
                id_thumb = $(this).attr("id"); 
                if("thumb_"+index == id_thumb)  
                { 
                    $(this).addClass("active");
                    title_item = $("#"+id_thumb +" a").attr('data-title'); 
                    $(".galleryCaption_02 h2").html(title_item);
                } 
                else 
                { $(this).removeClass("active"); }
            });   
				if($.browser.msie && $.browser.version <= 9)
					{	
						if(index == 0){
							$('.mix_carru_03 .galleryImages_02').scrollLeft(0);
						}
						if(index == 1){
							$('.mix_carru_03 .galleryImages_02').scrollLeft(624);
						}
						if(index == 2){
							$('.mix_carru_03 .galleryImages_02').scrollLeft(1248);
						}
					}
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {} 
    });  
 		/*Mouse Enter*/
		$('.mix_carru_03 .swipe-wrap')
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
            $(".bullets_02 ul li").each(function(){
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
            $(".galleryThumbs li").each(function(){
                id_thumb = $(this).attr("id"); 
                if("thumb_"+index == id_thumb)  
                { 
                    $(this).addClass("active");
                    title_item = $("#"+id_thumb +" a").attr('data-title'); 
                    $(".galleryCaption_02 h2").html(title_item);
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
    $(".galleryThumbs li").click(function(e){
        e.preventDefault();
		if($.browser.msie && $.browser.version <= 9)
		{	
			var id_actual = $(this).attr('id');
			id_actual = id_actual.split("_");  
			id_actual = id_actual[1];
			if(id_actual == 0){
				$('.mix_carru_03 .galleryImages_02').scrollLeft(0);
			}
			if(id_actual == 1){
				$('.mix_carru_03 .galleryImages_02').scrollLeft(624);
			}
			if(id_actual == 2){
				$('.mix_carru_03 .galleryImages_02').scrollLeft(1248);
			}
		}else{
			var id_actual = $(this).attr('id');
			id_actual = id_actual.split("_");  
			id_actual = id_actual[1]; 
			window.mySwipe.slide(parseInt(id_actual), 0);   
		}
    });  
    $(".galleryThumbs li").on('touchstart',function(e){
        e.preventDefault();
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 0);                    
    });  

    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $(".galleryThumbs li").bind(clickEvent, obtener_foto); 

    function obtener_foto()   
    { 
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 0);  
    }

     if ($.browser.version == 10.0 && $.browser.msie) {
            //document.getElementsByTagName('head')[0].appendChild('<meta content="IE=9" http-equiv="X-UA-Compatible">');     
            var head = document.getElementsByTagName('head')[0];
              meta = document.createElement('meta');
              meta.setAttribute('content', 'IE=9');
              meta.setAttribute('http-equiv', 'X-UA-Compatible');
              head.appendChild(meta);
        }

});
 

/*$(document).ready(function(e) {
	
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
});*//**
 * 
 *         @todo add hash to a pages' URL in order to load a specific image upon pageload (so that one can share links)
 *         the structure would need to be '%component% %album% %image%'
 *         %component% is the n-th occurence of the component within a page - must be a unique ID
 *         %album% the number of the album
 *         %image% the number of the image
 *         
 *         @todo autoplay
 *         @todo expand links
 *         @todo swipe implementation based on: @see http://www.awwwards.com/demo/touchSwipe-gallery-demo.html
 *         @todo device tests
 */

var IMG_WIDTH = 460;
var currentImg=0;
var maxImages=2;
var speed=750;
var imgs;
var total = 0;

/**
 * all gallery related behavior
 */
function img_galry_01_init() {
	// this function is fired upon resize, so we need to unbind each listener
	// in order not to have multiple listeners per dom element
	
	$("div.img_galry_01").each(function(){
		var rendition = new Array();
	    rendition['thumb'] = 'thumb';
	    rendition['image'] = 'image';
	    rendition['album'] = 'album';

	    $img_galry_01 = $(this);
	    var carousel = $img_galry_01;
	    
	    
        var num = 0,
        total = $img_galry_01.find('div.carrusel1 ul li').length;

		//////////////////////////////////////////////////////////////////////
		setWidthCarr1(total, $img_galry_01);
		setWidthCarr2();

		// the autoplay functionality
        if (total > 1) {
	        window.setInterval(function() {
	            // only if there is a class autoplay
	            if ($img_galry_01.hasClass('autoplay')) {
	                // increase by num 1, reset to 0 at 3 (or whatever amount of images there are)
	                num = (num + 1) % total;
					//console.log(num);
	                $img_galry_01.find('div.carrusel1 ul li a:eq('+num+')').click();
	                $img_galry_01.attr('data-current',num);
					
					// move 1st carrusel
					if(total > 5 && ((num%6)== 0) && num != 0){
						// Move right
						$img_galry_01.find('.carrusel1 a.right').click();
						////console.log('click');
					}
					else if(num== 0){
						// Reset to 0 position
						$img_galry_01.find('.carrusel1 .carruselcontainer').animate({
							'scrollLeft': 0
						}, 500);
					}
					////console.log(num);
	            }
	        }, 5000); // repeat forever, polling every n seconds
        }

        // pause, resume of the autoplay (this is the play/pause button)
        $img_galry_01.find('div.image-container div.controls a.td_bg:eq(0)').click(function(){
        	if ($(this).hasClass('play')) {
        		$img_galry_01.addClass('autoplay');
        		$(this).removeClass('play').addClass('pause').find('i').removeClass('tvsa-play').addClass('tvsa-pause');
        	} else {
        		$img_galry_01.removeClass('autoplay');
        		$(this).removeClass('pause').addClass('play').find('i').removeClass('tvsa-pause').addClass('tvsa-play');
				//num= 0;
        	}
        	return false;
        });

	    $img_galry_01.attr({'data-album':0,'data-image':0});
	    var data = jQuery.parseJSON($img_galry_01.find('span.data').text());
	    
	    $img_galry_01.find('span.loading').hide();
	    
	    // if we are in mobile
	    if ($(window).width() < 624) {
	    	
			// Remove the calculated width of carrusel
			setTimeout(function(){
				$img_galry_01.find('.carrusel2 .ulcarrusel').css('width','95%');	
			},200);
			
	    }

		/*Swipe*/
		$theUl = $img_galry_01.find('.carruselcontainer');
		$theUl.bind('swipeup',function(){
			$(this).animate({
					'scrollTop': $theUl.scrollTop() + 250
				}, 500);
		});
		$theUl.bind('swipedown',function(){
			$(this).animate({
					'scrollTop': $theUl.scrollTop() - 250
				}, 500);
		});

		if ($(window).width() > 623) {

	    	$img_galry_01.find('span.laoding').hide();
	    	$img_galry_01.find('ul.ulcarrusel').unbind();
	    	
	    	var swipeOptions={
	    		triggerOnTouchEnd : true,	
	    		swipeStatus : swipeStatus,
	    		allowPageScroll:"vertical",
	    		threshold:75
	    	}

	    	//$img_galry_01.find("div.carrusel1 ul.ulcarrusel").swipe(swipeOptions);
	    	//$img_galry_01.find("div.carrusel2 ul.ulcarrusel").swipe(swipeOptions);
	    	
			// Click IMG - Album or Photo
	        $img_galry_01.find('ul.ulcarrusel').on('click touchstart', 'a', function(ev){
	            var pos = $(this).data('pos');

	            if ($(this).hasClass('album')) {
	            	// album

	                $img_galry_01.find('a.album').removeClass('active');
	                $(this).addClass('active');
	                $img_galry_01.find('span.loading').fadeIn(200).show();
	                
	                var firstimage = data[pos].images[0].path,
	                desc = data[pos].images[0].description;

	                ////console.log(firstimage);
	                ////console.log(desc);
	                
	                $img_galry_01.find("img.mainimage:eq(0)").on('load', function() {
	                    ////console.log($img_galry_01.find('div.image-container div.overlay > p:eq(0)').text());
	                    
	                	$img_galry_01.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $img_galry_01.attr('data-album', pos).find('span.loading').hide();
	                    // replace carousel1 with the albums' images
	                    var html = '', src, desc;
	                    $img_galry_01.find('p.imageDescription').text(desc);
	                    for (var i=0;i<data[pos].images.length;i++) {
	                        var active = '';
	                        if (i===0) {
	                            active=' active ';
	                        }

	                        // add the real link to the final page
	                        html += '<li>'+
	                                    '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '" title="' + data[pos].images[i].description + '">'+
	                                        '<img src="' + data[pos].images[i].path + '" width="85" height="66" alt="" class=""  title="' + data[pos].images[i].description + '" />'+
	                                        '<span class="border"></span>'+
	                                        '<span class="icon"><i class="tvsa-camera"></i></span>'+
	                                        '<span class="title">' + data[pos].images[i].description + '</span>'+
	                                    '</a>'+
	                                '</li>';
	                    }
						
						
						// 1st DELETE
						$img_galry_01.find('div.carrusel1 ul.ulcarrusel li').remove();
						// Then ADD NEW ONES
	                    $img_galry_01.find('div.carrusel1 ul.ulcarrusel').append(html);
						
						$img_galry_01.find('.carrusel1 .carruselcontainer').animate({
							'scrollLeft': 0
						}, 500);
						
						
						
						
						$img_galry_01.find('div.carrusel1 .right .tvsa-double-caret-right').addClass('inactive');
						$img_galry_01.find('div.carrusel1 .right .tvsa-double-caret-right').removeClass('active');	
						
						if($img_galry_01.find('div.carrusel1 ul.ulcarrusel li').length > 6){
							
							$img_galry_01.find('div.carrusel1 .right .tvsa-double-caret-right').addClass('active');
							$img_galry_01.find('div.carrusel1 .right .tvsa-double-caret-right').removeClass('inactive');
						}
						
	                    $img_galry_01.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
	                    $img_galry_01.find('a.expand').attr({
	                    	'href': data[pos].images[0].expandurl,
	                    	'title' : data[pos].images[0].description
	                    }); // update expand link to detail URL
						
						// Recalculate first carrusel
						total = $img_galry_01.find('div.carrusel1 ul li').length;
						setWidthCarr1(total, $img_galry_01);
						num=0;
						////console.log('recalcular');
						
	                }).attr("src", firstimage);
	            } else {
	                // image
					
					$img_galry_01.find('a.image').removeClass('active');
					$(this).addClass('active');
					//alert($(this).attr('class'));

	                var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
	                href = $(this).attr('href');
	                desc = $(this).find('span.title:eq(0)').text();

	                // making sure an image is loaded before showing it
	                $img_galry_01.find('span.loading').fadeIn(200).show();
	                $img_galry_01.find("img.mainimage:eq(0)").on('load', function() {
						
	                    $img_galry_01.find('div.image-container div.overlay .imageDescription').text(desc);
	                    $img_galry_01.find('a.expand').attr({
	                    	'href': href,
	                    	'title' : desc
	                    }); // update expand link to detail URL
	                    $img_galry_01.attr('data-image', pos).find('span.loading').hide();
						
						
						
	                }).attr("src", '');
	                $img_galry_01.find("img.mainimage").attr("src", src);
	                //loadImage(src, 'img.mainimage', desc, $img_galry_01);
					if ($img_galry_01.hasClass('autoplay')) {
						num = pos;
					}
	            }
	            $img_galry_01.find('span.loading').hide();
	            return false;
	        });
		} else {
			return true;
		}
	});

	if ($(window).width() > 948) {
		// Mouse actions - Display/Hide Social Btns
		$(".img_galry_01 .image-container").mouseenter( function(){
			
			$(this).children('.td_bg').fadeIn();
		});
		
		$(".img_galry_01 .image-container").mouseleave( function(){
			
			$(this).children('.td_bg').fadeOut();
		});
	} else{
		// Mouse actions - Display/Hide Social Btns
		$(".img_galry_01 .image-container").click( function(){
			
			if( $(this).children('.td_bg').is(':visible') )
				$(this).children('.td_bg').fadeOut();
			else
				$(this).children('.td_bg').fadeIn();
		});
		
	}

	
	// ARROW CLICKS
	
	$img_galry_01.find("a.left").click(function(){
		
		$(this).parent().siblings('.carruselcontainer').animate({
				'scrollLeft': $(this).scrollLeft() - 477
			}, 500);
	});
	$img_galry_01.find("a.right").click(function(){
		
		total = $img_galry_01.find('div.carrusel1 ul li').length;
		var total2 = $img_galry_01.find('div.carrusel2 ul li').length;
		var quien = $(this).parent().parent();
		// Si es el carrusel 2
		if(
			(total > 6 && $(quien).hasClass( "carrusel1" ) ) 
			||
			(total2 > 3 && $(quien).hasClass( "carrusel2" ) ) 
		){
			$(this).parent().siblings('.carruselcontainer').animate({
				'scrollLeft': $(this).scrollLeft() + 477
			}, 500);
		}
		
	});
	// left-right arrows touch
	 $img_galry_01.find("a.left").bind('touchstart',function(e) {
		 
		 event.preventDefault();
		$(this).parent().siblings('.carruselcontainer').animate({
			'scrollLeft': $(this).scrollLeft() - 477
		}, 500);
	});
	$img_galry_01.find("a.right").bind('touchstart',function(e) {
		event.preventDefault();
		total = $img_galry_01.find('div.carrusel1 ul li').length;
		if(total > 6 ){
			$(this).parent().siblings('.carruselcontainer').animate({
				'scrollLeft': $(this).scrollLeft() + 477
			}, 500);
		}
	});
	
	
	$img_galry_01.find('.carrusel1 .carruselcontainer').scroll(function() {
		
		var $ig4_position = $(this).scrollLeft();
		var $id4_med = $ig4_position + $(this).width();
		var $id4_lt = $(this).children().width(); 
		
		if($ig4_position == 0){
			$(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
			$(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
		}
		else{
			$(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
			$(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
		}
		
		
		
		if($id4_med == $id4_lt || $img_galry_01.find('div.carrusel1 ul.ulcarrusel li').length < 7){
			$(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
			$(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
		}
		else{
			$(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
			$(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
		}
		
		
	});
	
	$img_galry_01.find('.carrusel2 .carruselcontainer').scroll(function() {
		
		var $ig4_position = $(this).scrollLeft();
		var $id4_med = $ig4_position + $(this).width();
		var $id4_lt = $(this).children().width(); 
		
		if($ig4_position == 0){
			$(this).parent().find('.left .tvsa-double-caret-left').removeClass('active');
			$(this).parent().find('.left .tvsa-double-caret-left').addClass('inactive');
		}
		else{
			$(this).parent().find('.left .tvsa-double-caret-left').removeClass('inactive');
			$(this).parent().find('.left .tvsa-double-caret-left').addClass('active');
		}
		
		//if($id4_med == $id4_lt){
		if($id4_med > 900){
			$(this).parent().find('.right .tvsa-double-caret-right').addClass('inactive');
			$(this).parent().find('.right .tvsa-double-caret-right').removeClass('active');
		}
		else{
			$(this).parent().find('.right .tvsa-double-caret-right').addClass('active');
			$(this).parent().find('.right .tvsa-double-caret-right').removeClass('inactive');
		}
		////console.log($id4_med);
	});
	
	
}

/**
* Catch each phase of the swipe.
* move : we drag the div.
* cancel : we animate back to where we were
* end : we animate to the next image
*/			
function swipeStatus(event, phase, direction, distance, carousel) {
	if (currentImg === "undefined") currentImg = 0;
	// If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
	if( phase=="move" && (direction=="left" || direction=="right") ) {
		var duration=0;
		if (direction == "left") {
			scrollImages((IMG_WIDTH * currentImg) + distance, duration, carousel);
		} else if (direction == "right") {
			scrollImages((IMG_WIDTH * currentImg) - distance, duration, carousel);
		}
	} else if ( phase == "cancel") {
		scrollImages(IMG_WIDTH * currentImg, speed, carousel);
	} else if ( phase =="end" ) {
		if (direction == "right") {
			previousImage(carousel);
		} else if (direction == "left") {
			nextImage(carousel);
		}
	}
}

/**
 * go to next image
 * @param carousel
 */
function previousImage(carousel) {
	if (currentImg === "undefined") currentImg = 0;
	currentImg = Math.max(currentImg-1, 0);
	scrollImages( IMG_WIDTH * currentImg, speed, carousel);
}

/**
 * go to previous image
 * @param carousel
 */
function nextImage(carousel) {
	if (currentImg === "undefined") currentImg = 0;
	currentImg = Math.min(currentImg+1, maxImages-1);
	scrollImages( IMG_WIDTH * currentImg, speed, carousel);
}
	
/**
* Manually update the position of the imgs on drag
*/
function scrollImages(distance, duration, carousel) {
	//var t = (duration/1000).toFixed(1);
//	carousel.css({
//		"-webkit-transition-duration": t + "s",		/* Chrome 1-25, Safari 3.2+ */
//		"-moz-transition": t + "s",					/* Firefox 4-15 */
//		"-o-transition": t + "s",					/* Opera 10.50–12.00 */
//		"transition": t + "s"						/* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */
//	});
//	
//	//inverse the number we set in the css
//	var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
//	
//	carousel.css({
//		"-webkit-transform": "translate3d("+value +"px,0px,0px)",	
//		"-moz-transform" : "translate3d("+value +"px,0px,0px)",  	/* Firefox 3.5-15 */ 
//	    "-ms-transform" : "translate3d("+value +"px,0px,0px)",  	/* IE 9 */
//	    "-o-transform" : "translate3d("+value +"px,0px,0px)",  		/* Opera 10.50-12.00 */ 
//	    "transform" : "translate3d("+value +"px,0px,0px)"  			/* Firefox 16+, IE 10+, Opera 12.10+ */ 
//	});
	////console.log(value);
//	//console.log(carousel.length);
//	//console.log(duration);
	//carousel.animate({marginLeft:value+'px'}, duration, 'easeInOutExpo');
	
	/*if(distance <= 0){
		carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').addClass('inactive');
		carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').removeClass('active');
		
		carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').addClass('active');
		carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').removeClass('inactive');
	}
	else{
		carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').addClass('active');
		carousel.parents('.type1a_').find('.left .tvsa-double-caret-left').removeClass('inactive');
		
		carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').addClass('inactive');
		carousel.parents('.type1a_').find('.right .tvsa-double-caret-right').removeClass('active');
	}*/
	
	
	// scroll
	
	
}

//$(document).ready(function(){
$(function(){
    // making sure that this works even if there's two or more of this component in a page...
    img_galry_01_init();
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8 ){
		$('.img_galry_01 .type1a_ .carruselcontainer').attr('overflow', 'hidden');
		//alert($('.img_galry_01 .type1a_ .carruselcontainer').attr('overflow'));
	}
});


$(window).resize(function(){
	if ($(window).width() < 624 && $('body:eq(0)').data('viewport') > 623) {
		// mobile reached
//		//console.log('firing the init.');
		img_galry_01_init();
	}
	if ($(window).width() >= 624) {
		// tablet and desktop reached
		//img_galry_01_init();
	}
	$('body:eq(0)').attr('data-viewport',$(window).width());
});

function setWidthCarr1(total, where){
	// 1st carrusel width
	var ancho_li = where.find('div.carrusel1 ul li').width()+11;
	var anchoul1 = (total * ancho_li) - 9;
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8){
		anchoul1 += 10;
	}
	$img_galry_01.find('div.carrusel1 ul.ulcarrusel').width(anchoul1);
}

function setWidthCarr2(){
	// 2nd carrusel width
	var total2 = $img_galry_01.find('div.carrusel2 ul li').length;
	var ancho_li = $img_galry_01.find('div.carrusel2 ul li').width()+22;
	var anchoul2 = (total2 * ancho_li);
	$img_galry_01.find('div.carrusel2 ul.ulcarrusel').width(anchoul2);
}


/*$(document).ready(function(){
		$('.img_galry_01 .carrusel1 .ulcarrusel li a.image').on("click", function(e){
			$img_galry_01.find('div.carrusel1 ul.ulcarrusel li a').removeClass('active');
			$(this).addClass('active');

			e.preventDefault();
		 });

 });*/
 
 function loadImage(path, parent, desc, where) {
	
		//$('.image-container .mainimage').remove();
	 	where.find('.image-container .mainimage').remove();
		var img = new Image();
		
		$(img).load(function(){
			
			where.find('.img_galry_01 .image-container .loading').hide();
		  	where.find('.img_galry_01 .image-container').append($(this));
			where.find('div.image-container div.overlay .imageDescription').text(desc);
		  
		
		}).attr({
		
		  src: path,
		  "class": 'mainimage',
		  "width" : '624',
		  "height" : '468' 
		
		}).error(function(){
		});
};jQuery(function($){ 

	(function($,T){

		$('.wdg_team_sched_01 table tr td').each(function(){
			var $restWeeke = $(this).attr("colspan");
			if ($restWeeke==3){$(this).addClass('weekend');}
		});
		
		
		$('.wdg_team_sched_01 tbody td a').addClass($('.wdg_team_sched_01 .link_class').attr('data-class'));
	})($,Televisa);

	var altura = $('.wdg_team_sched_01 #shsMiniStats').height();
  $('.wdg_team_sched_01 #shsMiniBody').scroll(function() {
  	$scrollTop = parseInt($('.wdg_team_sched_01 #shsMiniBody').scrollTop()) + parseInt($('.wdg_team_sched_01 #shsMiniBody').height());
    if( parseInt($scrollTop) == parseInt(altura)) {
              $('.wdg_team_sched_01 .degradado').css("visibility","hidden");
         }else{
     $('.wdg_team_sched_01 .degradado').css("visibility","visible");
    }
   });
});$(document).ready(function() {	

	// Quitamos la imagen que pone el script: http://comentarios.esmas.com/js/communities.js (redes sociales)
	$(window).load(function() {
		$('img[src*="vistas/spacer.gif"]').hide();
		$('#social_mailing').hide();
	});

});;jQuery(function($){ 

	(function($,T){
		
		$('.wdg_team_leaders_02 tbody td a').addClass($('.wdg_team_leaders_02 .link_class').attr('data-class'));
		
	})($,Televisa);
});;jQuery(function($){ 

	(function($,T){
		
		/*$('.wdg_team_teamsts_01 tbody td a').addClass($('.wdg_team_teamsts_01 .link_class').attr('data-class'));*/
		$('.wdg_team_teamsts_01 > table td tbody').prepend('<td class="espacio" colspan="2"></td>');
		
		$('.wdg_team_teamsts_01 > table td:nth-child(1) .shsTable tbody tr').append('<td class="blank"></td>');
		$('.wdg_team_teamsts_01 > table td:nth-child(2) .shsTable tbody tr').prepend('<td class="espaciov"></td>');
		
		$('.wdg_team_teamsts_01 > table td:nth-child(2) .shsTable  tr.shsTableTtlRow td').prepend('<div class="vline"></div>');
		
		
	})($,Televisa);
});	;jQuery(function($){ 

	(function($,T){
		
		$('.wdg_team_playersts_01 tbody td a').addClass($('.wdg_team_playersts_01 .link_class').attr('data-class'));
	})($,Televisa);
});;jQuery(function($){ 

	(function($,T){
		
		$('.wdg_team_injuries_01 tbody td a').addClass($('.wdg_team_injuries_01 .link_class').attr('data-class'));
		
	})($,Televisa);
});;jQuery(function($){ 

	(function($,T){
		
		$('.wdg_team_standings_01 tbody td a').addClass($('.wdg_team_standings_01 .link_class').attr('data-class'));
		
	})($,Televisa);
});// JavaScript Document
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

 



 $(document).ready(function() {	
 
 
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