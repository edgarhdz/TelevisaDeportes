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

});;jQuery(function($){ 
    (function($,T){
       
	   
	   $('.wdg_poll_video_01 input:radio').focus(updateSelectedStyle);
       $('.wdg_poll_video_01 input:radio').blur(updateSelectedStyle);
       $('.wdg_poll_video_01 input:radio').change(updateSelectedStyle);
	   
	  
		function updateSelectedStyle() {
			$('.wdg_poll_video_01 input:radio').removeClass('focused').next().removeClass('focused');
			$('.wdg_poll_video_01 input:radio:checked').addClass('focused').next().addClass('focused');
		}
		
		
		// Click  de Votar
		$('.wdg_poll_video_01 .linkVotar, .wdg_poll_video_01 .buttonVotar').click(function(event){
			
			event.preventDefault();
			
			// Obtenemos los resultados
			
			var r1 = $('.wdg_poll_video_01 input[name=player1]:radio:checked').val();
			var r2 = $('.wdg_poll_video_01 input[name=player2]:radio:checked').val();
			var r3 = $('.wdg_poll_video_01 input[name=player3]:radio:checked').val();
			
			$('.wdg_poll_video_01 #score1').text(r1);
			$('.wdg_poll_video_01 #score2').text(r2);
			$('.wdg_poll_video_01 #score3').text(r3);
			
			$('.wdg_poll_video_01 .imgPlayer').hide();
			
			// mostramos los resultados
			$('.wdg_poll_video_01 #score1').show();
			$('.wdg_poll_video_01 #score2').show();
			$('.wdg_poll_video_01 #score3').show();
			
			// cambiamos el boton votar
			$('.wdg_poll_video_01 .buttonVotar').removeClass('background-color2');			
			$('.wdg_poll_video_01 .buttonVotar').addClass('buttonVotado');
			$('.wdg_poll_video_01 .buttonVotar').removeClass('buttonVotar');
			
			var totalVotos = 1500; 
			$('.wdg_poll_video_01 .buttonVotado .linkVotar').text('Total de votos ' + totalVotos);
			
			// Quitamos los radio buttons
			$('.wdg_poll_video_01 .col2 .scores').hide();
			
			var p1= '15.5';
			var p2= '45.5';
			var p3= '55.5';
			
			//Colocamos la grafica y el porcentaje
			$('.wdg_poll_video_01 #percentage1').text(p1 + '%');
			$('.wdg_poll_video_01 #percentage2').text(p2 + '%');
			$('.wdg_poll_video_01 #percentage3').text(p3 + '%');
			
			$('.wdg_poll_video_01 #percentage1').addClass('rate2');
			$('.wdg_poll_video_01 #percentage2').addClass('rate2');
			$('.wdg_poll_video_01 #percentage3').addClass('rate1');
			
			
			// Creamos las barras o graficas
			// 137px es el tope maximo del ancho de la barra
			var graph1 = (p1 * 137) / 100;
			var graph2 = (p2 * 137) / 100;
			var graph3 = (p3 * 137) / 100;
			
			$('.wdg_poll_video_01 #graph1').width (graph1);
			$('.wdg_poll_video_01 #graph2').width (graph2);
			$('.wdg_poll_video_01 #graph3').width (graph3);
			
			$('.wdg_poll_video_01 #graph1').addClass('graph2');
			$('.wdg_poll_video_01 #graph2').addClass('graph2');
			$('.wdg_poll_video_01 #graph3').addClass('graph1');
			
			$('.wdg_poll_video_01 .graph').show();
			$('.wdg_poll_video_01 .linetop .gracias').show();
			
			$(this).unbind('click');
			
		});
	   
    })($,Televisa);
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

/**
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

var IMG_WIDTH = 465;
var currentImg=0;
var maxImages=2;
var speed=500;
var imgs;


/**
 * all gallery related behavior
 */
function img_galry_04_init() {
	// this function is fired upon resize, so we need to unbind each listener
	// in order not to have multiple listeners per dom element
	
	$("div.img_galry_04").each(function(){
		
		/** general configuration - patterns to be replaced in file names:
	    var rendition;
	    rendition['thumb'] = '64.48';
	    rendition['image'] = '624.450';
	    rendition['album'] = '137.105';
	    **/
	
		var rendition = new Array();
	    rendition['thumb'] = 'thumb';
	    rendition['image'] = 'image';
	    rendition['album'] = 'album';
	
	    
	    $parent = $(this);
	    var carousel = $parent;
	    $parent.attr({'data-album':0,'data-image':0});
	    var data = jQuery.parseJSON($parent.find('span.data').text());
	    
	    $parent.find('span.loading').hide();
	    
	    // if we are in mobile: make sure only 3 thumbs are visible onload
	    if ($(window).width() < 624) {
	    	$parent.find('div.carrusel1 li:gt(2)').hide();
	        $parent.find('div.img_galry_04_verMas a').addClass('hidden');
	    } else {
	    	$parent.find('div.carrusel1 li:gt(2)').show().removeClass('hidden');
	    }
	    
	    // Ver más
	    $parent.find('div.img_galry_04_verMas a').unbind();
	    $parent.find('div.img_galry_04_verMas a').click(function(){
	        $parent.find('div.carrusel1 li:gt(2)').toggle();
	        if ($(this).hasClass('hidden')) {
	            $(this).text('Ocultar').removeClass('hidden');
	        } else {
	            $(this).text('Ver más').addClass('hidden')
	        }
	        return false;
	    });
	    
	    // click event (only in tablet and desktop)
	    if ($(window).width() > 623) {
	    	$parent.find('ul.ulcarrusel').unbind();
	    	
	    	var swipeOptions={
	    		triggerOnTouchEnd : true,	
	    		swipeStatus : swipeStatus,
	    		allowPageScroll:"vertical",
	    		threshold:75
	    	}
	    	//$parent.find("div.carrusel1 ul.ulcarrusel").swipe(swipeOptions);
	    	//$parent.find("div.carrusel2 ul.ulcarrusel").swipe(swipeOptions);
	    	
	        $parent.find('ul.ulcarrusel').on('click', 'a', function(e){
	            // general
	            var pos = $(this).data('pos');
				var link_img = $(this).attr('href');
				$('.img_galry_04 .expand').attr('href',link_img);
	            if ($(this).hasClass('album')) {
	                // album
	                $parent.find('a.album').removeClass('active');
	                $(this).addClass('active');
	                $parent.find('span.loading').fadeIn(200);
	                
	                var firstimage = data[pos].images[0].path,
	                desc = data[pos].images[0].description;
	                
	                //console.log(firstimage);
	                //console.log(desc);
	                
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    //console.log($parent.find('div.image-container div.overlay > p:eq(0)').text());
	                    
	                	$parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.attr('data-album', pos).find('span.loading').hide();
	                    // replace carousel1 with the albums' images
	                    var html = '', src, desc;
	                    $parent.find('p.imageDescription').text(desc);
	                    for (var i=0;i<data[pos].images.length;i++) {
	                        var active = '';
	                        if (i===0) {
	                            active=' active';
	                        }

	                        // add the real link to the final page
	                        html += '<li>'+
	                                    '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '">'+
	                                        '<img src="' + data[pos].images[i].path + '" width="64" height="48" alt="" class="" />'+
	                                        '<span class="border"></span>'+
	                                        '<span class="icon"><i class="tvsa-camera"></i></span>'+
	                                        '<span class="title">' + data[pos].images[i].description + '</span>'+
	                                    '</a>'+
	                                '</li>';
	                    }
	                    $parent.find('div.carrusel1 ul.ulcarrusel').html(html);
	                    $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
	                    $parent.find('a.expand').attr({
	                    	'href': data[pos].images[0].expandurl,
	                    	'title' : data[pos].images[0].description
	                    }); // update expand link to detail URL
	                }).attr("src", firstimage).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            } else {
	                // image
	                $parent.find('a.image').removeClass('active');
	                $(this).addClass('active');
	                var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
	                desc = $(this).find('span.title:eq(0)').text();
	                // making sure an image is loaded before showing it
	                $parent.find('span.loading').fadeIn(200);
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.find('a.expand').attr({
	                    	'href': $(this).attr('href'),
	                    	'title' : desc
	                    }); // update expand link to detail URL
	                    $parent.attr('data-image', pos).find('span.loading').hide();
	                }).attr("src", src).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            }
	            return false;
	        });
			/*BEGIN:Evento touch*/
			 $parent.find('ul.ulcarrusel').on('touchstart', 'a', function(e){
				 e.preventDefault();
	            // general
	            var pos = $(this).data('pos');
				var link_img = $(this).attr('href');
				$('.img_galry_04 .expand').attr('href',link_img);
	            if ($(this).hasClass('album')) {
	                // album
	                $parent.find('a.album').removeClass('active');
	                $(this).addClass('active');
	                $parent.find('span.loading').fadeIn(200);
	                
	                var firstimage = data[pos].images[0].path,
	                desc = data[pos].images[0].description;
	                
	                //console.log(firstimage);
	                //console.log(desc);
	                
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    //console.log($parent.find('div.image-container div.overlay > p:eq(0)').text());
	                    
	                	$parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.attr('data-album', pos).find('span.loading').hide();
	                    // replace carousel1 with the albums' images
	                    var html = '', src, desc;
	                    $parent.find('p.imageDescription').text(desc);
	                    for (var i=0;i<data[pos].images.length;i++) {
	                        var active = '';
	                        if (i===0) {
	                            active=' active';
	                        }

	                        // add the real link to the final page
	                        html += '<li>'+
	                                    '<a href="' + data[pos].images[i].expandurl + '" class="image' + active + '" data-pos="' + i + '">'+
	                                        '<img src="' + data[pos].images[i].path + '" width="64" height="48" alt="" class="" />'+
	                                        '<span class="border"></span>'+
	                                        '<span class="icon"><i class="tvsa-camera"></i></span>'+
	                                        '<span class="title">' + data[pos].images[i].description + '</span>'+
	                                    '</a>'+
	                                '</li>';
	                    }
	                    $parent.find('div.carrusel1 ul.ulcarrusel').html(html);
	                    $parent.find('p.imageDescription').text(data[pos].images[0].description); // update desc to first image
	                    $parent.find('a.expand').attr({
	                    	'href': data[pos].images[0].expandurl,
	                    	'title' : data[pos].images[0].description
	                    }); // update expand link to detail URL
	                }).attr("src", firstimage).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            } else {
	                // image
	                $parent.find('a.image').removeClass('active');
	                $(this).addClass('active');
	                var src = $(this).find('img:eq(0)').attr('src').replace(rendition['thumb'],rendition['image']),
	                desc = $(this).find('span.title:eq(0)').text();
	                // making sure an image is loaded before showing it
	                $parent.find('span.loading').fadeIn(200);
	                $parent.find("img.mainimage:eq(0)").on('load', function() {
	                    $parent.find('div.image-container div.overlay > p:eq(0)').text(desc);
	                    $parent.find('a.expand').attr({
	                    	'href': $(this).attr('href'),
	                    	'title' : desc
	                    }); // update expand link to detail URL
	                    $parent.attr('data-image', pos).find('span.loading').hide();
	                }).attr("src", src).each(function() {
	                    if(this.complete) {
	                        $(this).load();
	                    }
	                });
	            }
	            return false;
	        });
			/*END:Evento touch*/
			
	        // left-right arrows
	        var carousel = $(this).parents('div:eq(1)').find('ul.ulcarrusel');
	        $parent.find("a.left").click(function(){
				$(this).parent().siblings('carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() + 455
					}, 500);
	        });
	        $parent.find("a.right").click(function(){
	        	$(this).parent().siblings('carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() - 455
					}, 500);
	        });
			// left-right arrows touch
			 $parent.find("a.left").bind('touchstart',function(e) {
				 event.preventDefault();
				$(this).parent().siblings('.carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() - 455
					}, 500);
	        });
	        $parent.find("a.right").bind('touchstart',function(e) {
				event.preventDefault();
	        	$(this).parent().siblings('.carruselcontainer').animate({
						'scrollLeft': $(this).scrollLeft() + 455
					}, 500);
	        });
			
	    } else {
	    	return true;
	    }
		
		//Monitoreo evento touch
		//touchmove "Mientras se mueve"
		//touchstar "Inicia"
		//touchend "Termina"
		$parent.find('.mainimage').bind("touchstart",function(event){
			event.preventDefault();
			$parent.find('.twitter').toggle();
    		$parent.find('.facebook').toggle();
    		$parent.find('.pinterest').toggle();
		});
		
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
function carru_next(run){
	img_f1_delay = 3000;
	findNextImgGallery(1);
}
function carru_stop(){
	run = 0;
	img_f1_delay = 99999999999999999;
}
function ply_mov(){
	$('div.img_galry_04 .image-container a.td_bg.play').hide();
	$('div.img_galry_04 .image-container a.td_bg.pause_mov').css('visibility','visible');
	carru_next();
}
function pause_mov(){
	$('div.img_galry_04 .image-container a.td_bg.pause_mov').css('visibility','hidden');
	$('div.img_galry_04 .image-container a.td_bg.play').show();
	carru_stop();
}
// funciones que encuentra la siguiente y anterior imagen al hacer click tomando en cuenta la que está YA seleccionada
function findPrevImgGallery(run){
// Buscamos la imagen anterior
	//Verifico si era el fin del carril...
	$order_list = $('.img_galry_04 a.image.active').parent().index();
	if($order_list != 0)
	{
var txt = $('.img_galry_04 a.image.active').closest('li').prev().find('a').attr('title');
var img_n = $('.img_galry_04 a.image.active').closest('li').prev().find('a').children('img').attr('src');
$('.img_galry_04 a.image.active').addClass('e');
$('.img_galry_04 a.image.active').closest('li').prev().find('a').addClass('active');
$('.img_galry_04 a.image.active.e').removeClass('active e');
img_n = img_n.replace("thumb", "image");
	$('.img_galry_04 p.imageDescription').text(txt);
	$('.img_galry_04 .mainimage').attr('src',img_n);
		//Llamada con autoplay
		if(run == 1){
			setTimeout("findPrevImgGallery(1)", img_f1_delay);	
		}
	}
	else
	{
		if(run == 1){
			setTimeout("findNextImgGallery(2)", img_f1_delay);	
		}
	}
}

function findNextImgGallery(run){
// Buscamos la siguiente imagen
    var txt = null;
	//Move scroll
	$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() + 77
							}, 1500);
	//Llego al final vuelta al carrusel
	if(run==2){
		$('.img_galry_04 a.image.active').removeClass('active');
		$('.img_galry_04 a.image').eq(0).addClass('active');
		txt = $('.img_galry_04 a.image.active').attr('title');
		var img_n = $('.img_galry_04 a.image.active').children('img').attr('src');
		var img_n = img_n.replace("thumb", "image");
		var link_img = $('.img_galry_04 a.image.active').attr('href');
		$('.img_galry_04 .mainimage').attr('src',img_n);
		setTimeout(function(){
				  $('.img_galry_04 p.imageDescription').text(txt);
				}, 50);
		$('.img_galry_04 .expand').attr('href',link_img);
		$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': 0
							}, 500);
		setTimeout("findNextImgGallery(1)", img_f1_delay);
	}
//Verifico si era el fin del carril...
	$large_elements = $('.img_galry_04 ul.ulcarrusel li').size() - 1;
	$order_list = $('.img_galry_04 a.image.active').parent().index();
	if($order_list != $large_elements && run != 2)
	{
var img_n = $('.img_galry_04 a.image.active').closest('li').next().find('a').children('img').attr('src');
var txt = $('.img_galry_04 a.image.active').closest('li').next().find('a').attr('title');
var link_img = $('.img_galry_04 a.image.active').closest('li').next().find('a').attr('href');
$('.img_galry_04 a.image.active').addClass('e');
$('.img_galry_04 a.image.active').closest('li').next().find('a').addClass('active');
$('.img_galry_04 a.image.active.e').removeClass('active e');
img_n = img_n.replace("thumb", "image");
	//alert(img_n);
	$('.img_galry_04 .image-container .mainimage').attr('src',img_n);
	//alert($('.img_galry_04 .image-container .mainimage').attr('src'));
	//alert(txt);
	setTimeout(function(){
				  $('.img_galry_04 p.imageDescription').text(txt);
				}, 50);
	$('.img_galry_04 .expand').attr('href',link_img);
	//$('.img_galry_04 p.imageDescription').text(txt);
	
	
		//Llamada con autoplay
		if(run == 1){
			setTimeout(function(){
				  findNextImgGallery(1);
				}, img_f1_delay);	
		}
	}
	else
	{
		if(run == 1){
			setTimeout("findNextImgGallery(2)", img_f1_delay);	
		}
	}
}




$(document).ready(function(){
    // making sure that this works even if there's two or more of this component in a page...
    img_galry_04_init();
    
    if($(window).width()<431){
        $('div.img_galry_04 .overlay').css('margin-top','-72px')
    }
    $(window).resize(function() {
    	if($(window).width()<431){
     	   $('div.img_galry_04 .overlay').css('margin-top','-72px')
   		}	
   		else{
   			$('div.img_galry_04 .overlay').css('margin-top','-56px')
   		}

    });
    if($(window).width()<624){
        $('.img_galry_04 .txt1').removeClass('dotted-right');
        $('.img_galry_04 .txt1').addClass('dotted-bottom');
    }
	//swipe
			$(this).find('.carruselcontainer').bind('swipeleft',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() + 455
							}, 500);
			});
			$(this).find('.carruselcontainer').bind('swiperight',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() - 455
							}, 500);
			});
			
	//swipe principal
		var $list = $('.img_galry_04').find('ul.ulcarrusel li').size();
			$(this).find('.mainimage').bind('swipeleft',function(){
				$order_list2 = $(this).parent().parent().find('a.image.active').parent().index();
				$large_elements2 = $('.img_galry_04 ul.ulcarrusel li').size() - 1;
				if($large_elements2 == $order_list2){$('.img_galry_04 a.right').trigger( "click" );}
				findNextImgGallery(0);
				$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() + 77
							}, 500);
			});
			$(this).find('.mainimage').bind('swiperight',function(){
				findPrevImgGallery(0);
				$('.img_galry_04 .carruselcontainer').animate({
								'scrollLeft': $('.img_galry_04 .carruselcontainer').scrollLeft() - 77
							}, 500);
			});
	//swipe secundario
			$(this).find('.carruselcontainer').bind('swipeleft',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() + 455
							}, 500);
			});
			$(this).find('.carruselcontainer').bind('swiperight',function(){
				$(this).animate({
								'scrollLeft': $(this).scrollLeft() - 455
							}, 500);
			});			
	// scroll
	$(this).find('.carruselcontainer').scroll(function() {
		var $ig4_position = $(this).scrollLeft();
		var $id4_med = $ig4_position + $(this).width();
		var $id4_lt = $(this).children().width(); 
		if($ig4_position == 0){
			$(this).siblings('.arrowLeft').children().children('.tvsa-double-caret-left').css('color','#BABABA');
		}
		else{
			$(this).siblings('.arrowLeft').children().children('.tvsa-double-caret-left').css('color','#000000');
		}
		if($id4_med == $id4_lt){
			$(this).siblings('.arrowRight').children().children('.tvsa-double-caret-right').css('color','#BABABA');
		}
		else{
			$(this).siblings('.arrowRight').children().children('.tvsa-double-caret-right').css('color','#000000');
		}
		//console.log('scroll: '+$ig4_position+' suma: '+$id4_med+' large: '+$id4_lt);
	});
    $(window).resize(function() {
    	if($(window).width()<624){
     	   	$('.img_galry_04 .txt1').removeClass('dotted-right');
        	$('.img_galry_04 .txt1').addClass('dotted-bottom');
   		}	
   		else{
        	$('.img_galry_04 .txt1').removeClass('dotted-bottom');
   			$('.img_galry_04 .txt1').addClass('dotted-right');
   		}
    });
	$parent.find('a.play').click(function(e){
	   e.preventDefault();
       ply_mov();
	});
	$parent.find('a.pause_mov').click(function(){
        pause_mov();
	});
});
$(window).load(function(){
//whidth
			var $elements = $('.img_galry_04').find('ul.ulcarrusel li').size();
			var $elements = ($elements * 78) - 16;
			$('.img_galry_04').find('ul.ulcarrusel').addClass('my');
			$('.img_galry_04').find('.my').width($elements); 

});

$(window).resize(function(){
	if ($(window).width() < 624 && $('body:eq(0)').data('viewport') > 623) {
		// mobile reached
//		console.log('firing the init.');
		img_galry_04_init();
	}
	if ($(window).width() >= 624) {
		// tablet and desktop reached
		img_galry_04_init();
	}
	$('body:eq(0)').attr('data-viewport',$(window).width());
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