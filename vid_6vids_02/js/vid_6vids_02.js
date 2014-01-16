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

            //$(this).find('ul').width(($items.outerWidth(true) + padding) * $items.length - $total + 15);
			/*Anchura........*/
			//alert($(window).width());
			if( $(window).width() > 960  ){
				$('.carrusel-sizes').width('630px');
			}
			if( $(window).width() >= 624 && $(window).width() <= 960  ){
				$('.carrusel-sizes').width('945px');
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('1800px');
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
						'scrollLeft': $parent.scrollLeft() - 324
					}, animationDelay);
				}else
				{
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 330
					}, animationDelay);
					
				}
                        
            });

            $parent.parent().find('a.wdg_carousa_right').click(function(e) {
                e.preventDefault();
				if( $(window).width() >= 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() + 324
					}, animationDelay);
				}else
				{
					$parent.animate({
                    'scrollLeft': $parent.scrollLeft() + 330
                	}, animationDelay);
				}
            });
	
			
        });

		/*Diferente ventana*/
		$(window).resize(function() {
			if( $(window).width() > 960  ){
				$('.carrusel-sizes').width('630px');
			}
			if( $(window).width() > 624 && $(window).width() < 960  ){
				$('.carrusel-sizes').width('945px');
			}
			if( $(window).width() < 624 ){
				$('.carrusel-sizes').width('1800px');
			}
		});
		
		// Sacamos el ancho total del UL del carrusel
		var anchoTotalUL = $(".vid_6vids_02 .wdg_mix_carrousa .general div.carrusel-sizes").width(); // 100%
		var bulletSelected;
		
		/*Para mostrar el bullet*/
		$('.vid_6vids_02 .general').scroll(function(e){
			
			scrollLeft = $(this).scrollLeft();
	        
			var porcentaje = scrollLeft; 
			
			if( porcentaje >= 1440)
				bulletSelected = 5;
			else if( porcentaje >= 1080)
				bulletSelected = 4;
			else if( porcentaje >= 720)
				bulletSelected = 3;
			else if( porcentaje >= 360)
				bulletSelected = 2;
			else 
				bulletSelected = 1;
				
			//alert(bulletSelected);
			
			$('.vid_6vids_02 .bullets ul li').removeClass('selected');
			$(".vid_6vids_02 .bullets ul li:nth-child("+bulletSelected+")").addClass('selected');
	    });
		
    }(jQuery, Televisa));
});

