;$(document).ready(function() {
 
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
   
 });