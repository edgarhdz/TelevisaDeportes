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
    (function(T, $) {
        // var $widthF = $('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width() - 5;
        var $x = $('.wdg_matchesresult_01_nav');
        var $y = $('.wdg_matchesresult_01_nav ul li');
        var $z = $('.wdg_matchesresult_01_nav ul li:first-child');
        var $show = $('.wdg_matchesresult_hide');
        var $hide = $('.wdg_matchesresult_show');
        var $totalWidth = 0;
        var $slide = $z.outerWidth(true);
        $y.each(function() {
            $totalWidth += $(this).outerWidth(true);
        });
        var $m = $('.wdg_matchesresult_01_components'),
        animationDelay = 500;
        var $w = $('.wdg_matchesresult_01_components ul li');
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
                        $m.find('ul').width(800);
                    else
                        $m.find('ul').width(800);
                    $m.find('ul').height(575);
                    $m.height(575);
                    $x.find('ul').width(800);
                    if ( visShow == 'hidden' ) {
                        $('.wdg_matchesresult_01').animate({
                            'height': 700
                        }, 0);
                    }
                }
                if( $(window).width() > 623 && $(window).width() <= 960){
                    $round = Math.round($count/2);
					
					// Se comentan estas lineas ya que modifican el ancho del ul del carrusel y descuadra en tablet
                    /*if( ($count / 2) > $round )
                        $m.find('ul').width( (($round + 1) * $unitary) - 152);
                    else
                        $m.find('ul').width( ($round * $unitary) - 152);
					
                    $m.find('ul').height($unitaryH * 2);*/
                    $m.height($unitaryH * 2);
                    //$x.find('ul').width( $totalWidth + 20 );
                    if ( visShow == 'hidden' ) {
                        $('.wdg_matchesresult_01').animate({
                            'height': 460
                        }, 0);
                    }
                }
                if( $(window).width() < 624 ){    
                    $round = Math.round($count);
                    $m.find('ul').width( ($round * $unitary) - 6);
                    $m.height($unitaryH + 28);
                    $m.find('ul').height($unitaryH);
                    /*if ( visShow == 'hidden' ) {

                    }*/
                    $('.wdg_matchesresult_01').animate({
                        'height': 218
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
                    $(this).find('ul').width( ($round + 1) * $unitary);
                else
                    $(this).find('ul').width( $round * $unitary);
                $(this).find('ul').height($unitaryH * 3);
                $(this).height($unitaryH * 3);
            }
            if (T.getDeviceSize() === 'medium') {
                $round = Math.round($count/2);
                /*if( ($count / 2) > $round )
                    $(this).find('ul').width( ($round + 1) * $unitary);
                else
                    $(this).find('ul').width( $round * $unitary);*/
                $(this).find('ul').height($unitaryH * 2);
                $(this).height($unitaryH * 2);
            }
            if (T.getDeviceSize() === 'small') {
                $round = Math.round($count);
                $(this).find('ul').width( ($round * $unitary));
                $(this).find('ul').height($unitaryH);
                $(this).height($unitaryH + 28);
            }
			/*Arrows Mobile*/
            $parent.parent().find('.wdg_matchesresult_01_mobileleft a.wdg_matchesresult_left').click(function(e) {
                e.preventDefault();
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() - 222
                }, animationDelay,"linear",function(){
					/*Verifico posición del scroll*/ 
					var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
					large_tot = large_tot -220;
					var position = $parent.scrollLeft();//alert("termine izq " + position +" "+ large_tot);
					if(position < 222)
						{
							//$('.wdg_matchesresult_01 #left').addClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
						}
						else
						{
							//$('.wdg_matchesresult_01 #left').removeClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
						}  
					if(position == large_tot)
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
						}
						else
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
						}
					});  
				
            });
						
            $parent.parent().find('.wdg_matchesresult_01_mobileright a.wdg_matchesresult_right').click(function(e) {
                e.preventDefault();
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 222
                }, animationDelay,"linear",function(){
					/*Verifico posición del scroll*/ 
					var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
					large_tot = large_tot -220;
					var position2 = $parent.scrollLeft();//alert("termine der " + position2);
					if(position2 < 222)
						{
							//$('.wdg_matchesresult_01 #left').addClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
						}
						else
						{
							//$('.wdg_matchesresult_01 #left').removeClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
						} 
						if(position2 >= large_tot)
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
						}
						else
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
						}
					});
					  
            	});
				/*Arrows Tablet*/
				$parent.parent().find('.wdg_matchesresult_01_arrows a.wdg_matchesresult_left').click(function(e) {
                	e.preventDefault();
               	 	$parent.animate({
                   	 	'scrollLeft': $parent.scrollLeft() - 370
                	}, 500);
            	});
				$parent.parent().find('.wdg_matchesresult_01_arrows a.wdg_matchesresult_right').click(function(e) {
                	e.preventDefault();
               	 	$parent.animate({
                   	 	'scrollLeft': $parent.scrollLeft() + 370
                	}, 500);
            	});
			
        });
        $(document).ready(function(){
			if($(window).width()>=948){$_brinca = 888}
			if($(window).width()>=624){$_brinca = 370}
			if($(window).width()<624){$_brinca = 222}	
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').bind('swipeleft',function(){
                        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').animate({
                                'scrollLeft': $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scrollLeft() + $_brinca
                            }, 500);
                    });
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').bind('swiperight',function(){
                        $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').animate({
                                'scrollLeft': $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scrollLeft() - $_brinca
                            }, 500);
                    }); 
        });

		/*Monitorea scroll*/
		$('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').scroll(function() {

            var $scroll = $('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components');
            var $width = $('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width()-5;
            var $widthT = $scroll.scrollLeft() + $scroll.width();
                // var $height = $parent.height();
                $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left').css('color','#D6A256');
                if($scroll.scrollLeft()==0){
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-left').css('color','#6C0808');
                } 
                else{
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-left, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-left').css('color','#D6A256');
                }
                if($width<$widthT){
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-right, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-right').css('color','#6C0808');
                } 
                else{
                    $('.wdg_matchesresult_01 .wdg_matchesresult_01_mobileleft .tvsa-double-caret-right, .wdg_matchesresult_01 .wdg_matchesresult_01_arrows .tvsa-double-caret-right').css('color','#D6A256');  
                }


			var position3 = $(this).scrollLeft();
			var large_tot = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_list').width();
					large_tot = large_tot -220;
			if(position3 < 222)
						{
							//$('.wdg_matchesresult_01 #left').addClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#6C0808');
						}
						else
						{
							//$('.wdg_matchesresult_01 #left').removeClass('end');
							$('.wdg_matchesresult_01 .wdg_matchesresult_left').css('color', '#D6A256');
						} 
						if(position3 >= large_tot)
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#6C0808');
						}
						else
						{
							$('.wdg_matchesresult_01 .wdg_matchesresult_right').css('color', '#D6A256');
						}
		});

		
        $x.each(function() {

            var $parent = $(this);

            if (T.getDeviceSize() === 'small') {
                $x.find('ul').width( $totalWidth + 20 );
            }
			$p = 0;
			$slide = 0;
			
			
			/*Sub menu principal*/
            $parent.parent().find('a.wdg_matchesresult_navleft').click(function(e) {
                e.preventDefault();
				//calculate move
				/*for($i=1;$i<4;$i++)
					{
					$z = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme li:nth-child('+$i+')');
						$sl = $z.outerWidth(true);
						$slide = $slide + $sl;
					}*/
                $parent.stop(true).animate({
                    'scrollLeft': $parent.scrollLeft() - 250
                }, animationDelay,"linear",function(){ 
				/*Verifico posición del scroll*/ 
					var large_tot = $(this).children().width();
					var position = $parent.scrollLeft();
					med = position + $(this).parent().width();
					if(position == 0)
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
						}  
					if(position != 0)
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
						}
					});        
            });

            
			$parent.stop(true).parent().find('a.wdg_matchesresult_navright').click(function(e) {
                e.preventDefault();
				//calculate move
				/*for($i=1;$i<4;$i++)
					{
					$z = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme li:nth-child('+$i+')');
						$sl = $z.outerWidth(true);
						$slide = $slide + $sl;
					}*/
                $parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 250
                }, animationDelay,"linear",function(){ 
				/*Verifico posición del scroll*/ 
					var large_tot = $(this).children().width();
					var position = $parent.scrollLeft();
					med = position + $(this).parent().width();
					console.log('This es:'+$(this).attr('class')+' position: '+position);	
					if(position == 0)
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
						}  
					if(position != 0)
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
						}
					});    
            });
        });  
		
		/*Monitorea scroll sub menu principal*/
		$('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_navcontainer .wdg_matchesresult_01_nav').scroll(function() {
			var position4 = $(this).scrollLeft();
			var large_tot4 = $('.wdg_matchesresult_01 ul.wdg_matchesresult_01_theme').width();
					large_tot4 = large_tot4 - 245;
			if(position4 < 57)
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowleft').children().children().css('color', '#D6A256');
						}
						console.log('position: '+position4+' largo: '+large_tot4); 
						if(position4 >= large_tot4)
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#6C0808');
						}
						else
						{
						$(this).siblings('.wdg_matchesresult_navarrowright').children().children().css('color', '#D6A256');
						}
		});      

        $hide.click(function(e) {
            e.preventDefault();
            var $closeElement = $(this).closest('.wdg_matchesresult_01');
            $show = $closeElement.find('.wdg_matchesresult_hide');
            $hide = $closeElement.find('.wdg_matchesresult_show');
            var visShow = $show.css('visibility');
			 if (T.getDeviceSize() === 'large') {
			 $('.wdg_matchesresult_01 .wdg_matchesresult_01_left .wdg_matchesresult_visible').css('margin-top','32%');
			 }
            $closeElement.animate({
                'height': 218
            }, animationDelay);
            $(this).closest('.wdg_matchesresult_01_left').find('.wdg_matchesresult_01_bottom').hide();
            if ( visShow == 'hidden' ) {
                $show.css({
                    visibility: 'visible'      
                });
                $hide.css({
                    visibility: 'hidden'      
                });
                
            } else {
                $show.css({
                    visibility: 'hidden'
                });
                $hide.css({
                    visibility: 'visible'      
                });
            }
        });


        $show.click(function(e) {
            e.preventDefault();
            var $closeElement = $(this).closest('.wdg_matchesresult_01');
            $show = $closeElement.find('.wdg_matchesresult_hide');
            $hide = $closeElement.find('.wdg_matchesresult_show');
            var visHide = $hide.css('visibility'); 

            if (T.getDeviceSize() === 'large') {
				$('.wdg_matchesresult_01 .wdg_matchesresult_01_left .wdg_matchesresult_visible').css('margin-top','95%');
				$('.wdg_matchesresult_01 .wdg_matchesresult_01_container .wdg_matchesresult_01_right .wdg_matchesresult_01_components').css('height','575px');
                $closeElement.animate({
                    'height': 700
                }, animationDelay);
            }
            if (T.getDeviceSize() === 'medium') {
                $closeElement.animate({
                    'height': 460
                }, animationDelay);              
            }
            $(this).closest('.wdg_matchesresult_01_left').find('.wdg_matchesresult_01_bottom').show();
            if ( visHide == 'hidden' ) {
                $hide.css({
                    visibility: 'visible'      
                });
                $show.css({
                    visibility: 'hidden'
                });
                
            } else {
                $show.css({
                    visibility: 'visible'
                });
                $hide.css({
                    visibility: 'hidden'
                });
            }
        });
$(window).load(function(){
			if($(window).width() >= 948){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(800)}
			if($(window).width() < 948 && $(window).width() >= 624){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(1482)}
			if($(window).width() < 624){$('.wdg_matchesresult_01 .wdg_matchesresult_01_list').width(3546)}
});
		

    }(Televisa, jQuery));
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
});$(document).ready(function(){
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
 ;jQuery(function($){ 
    (function($,T){
        $('.wdg_teams_classification_01').each(function(ix,element){
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $('.wdg_teams_classification_01 .scroll');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
				$(this).parent().parent().siblings('.scroll').animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height() - 2
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $(this).parent().parent().siblings('.scroll').animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height() + 2
                }, 500);
            });
     	});
		
		/*Swipe*/
		$(document).ready(function(){
		$wtc =  164;
			$('.wdg_teams_classification_01 .scroll').bind('swipeup',function(){
				$(this).animate({
						'scrollTop': $(this).scrollTop() + $wtc
					}, 500);
			});
			$('.wdg_teams_classification_01 .scroll').bind('swipedown',function(){
				$(this).animate({
						'scrollTop': $(this).scrollTop() - $wtc
					}, 500);
			});	
		});
		
		
		/*Monitoreo scroll*/
		var $wtc_altura = $('.wdg_teams_classification_01 .datos').height();
		$('.wdg_teams_classification_01 .scroll').scroll(function() {
				
				
				
				if($(this).scrollTop() + $(this).height() == $wtc_altura) {
           		 $(this).siblings('.degraded').css("visibility","hidden");
				 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-down').css('color','#000');
				  $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bginactive');
				  $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bgactive');
      			}
				else if ($.browser.msie && parseInt($.browser.version, 10) <= 8 && $(this).scrollTop() >= 475){
					
					$(this).siblings('.degraded').css("visibility","hidden");
				 	
				  	$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bginactive');
				  	$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bgactive');
				}
				else{
				 $(this).siblings('.degraded').css("visibility","visible");
				 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-down').css('color','#FFF');
				 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').addClass('bgactive');
				 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.next').removeClass('bginactive');
				}
				
				if($(this).scrollTop() == 0){
				 //$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-up').css('color','#000');
				 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').addClass('bginactive');
				 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').removeClass('bgactive');
				}
				else
				{
				//$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings().children('.tvsa-caret-up').css('color','#FFF');	
				$(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').addClass('bgactive');
				 $(this).siblings('.wdg_teams_classification_01_cnt').children().children().siblings('.prev').removeClass('bginactive');
				}
			});	   
    })($,Televisa);
});
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