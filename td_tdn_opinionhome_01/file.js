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
$(document).ready(function() {	

	// Quitamos la imagen que pone el script: http://comentarios.esmas.com/js/communities.js (redes sociales)
	$(window).load(function() {
		$('img[src*="vistas/spacer.gif"]').hide();
		$('#social_mailing').hide();
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
});*/vid_player_02_player = new Object();

vid_player_02_player.width = 625; // Delay entre cambio y cambio de imagenes en el autoplay
vid_player_02_player.height = 380;

$(document).ready(function() {
	
	// Si existe el componente de video
	if($('.vid_player_02')){
		
		// Click  del btn play
		$('.vid_player_02 #videobtn').click(function (){
			$search = $(this).parent().prev().children('img');
			$search2 = $(this).parent().siblings('.vid_player_02_whtbkg');
			$search3 = $(this).parent().prev().children('div');
			$search4 = $(this).parent().next().children('i');
			$search5 = $(this).parent().siblings('.overlay');
			$tag = $search3.prop("tagName");
			$clase = $search3.attr("class");
			//alert($tag+' '+$clase);
			$($search).closest('#img_stage_01_IMG').hide();
			//$('.vid_player_02 #img_stage_01_IMG').hide();
			//$('.vid_player_02 .vid_player_02_whtbkg').hide();
			$(this).hide();
			$($search2).hide();
			$($search4).hide();

			setPlayerSize();
			$($search5).css('margin-top','25px');
			$('.vid_player_01 .overlay').css('margin-top','25px');
			$($search3).show();
			//$('.vid_player_02 #theaterContainer').show();
		});
		
		// ponemos el thumb y el titulo del video 
		
		/*if (typeof(objHtml5) != "undefined"){
			$('.vid_player_02 .vid_player_02_black').text(objHtml5.properties.title);
			$('.vid_player_02 #img_stage_01_IMG').attr('src', objHtml5.properties.thumbnail);
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
		var altoVentana = (anchoVentna * vid_player_02_player.height) / vid_player_02_player.width;
		
		$('.vid_player_02 #myExperience').width( anchoVentna );
		$('.vid_player_02 #myExperience').height( altoVentana );
		
		$('.vid_player_02 #contenedor').width( anchoVentna );
		$('.vid_player_02 #contenedor').height( altoVentana );
	}
	else{
		
		$('.vid_player_02 #myExperience').width( vid_player_02_player.width );
		$('.vid_player_02 #myExperience').height( vid_player_02_player.height );
		
		$('.vid_player_02 #contenedor').width( vid_player_02_player.width );
		$('.vid_player_02 #contenedor').height( vid_player_02_player.height );
		
	}
}$(document).ready(function() {
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