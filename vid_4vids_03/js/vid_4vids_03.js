;jQuery(function($){ 
    (function ($, T) {

        var $m = $('.vid_4vids_03 .wdg_mix_carrousa .general'),
        animationDelay = 500;
        
        var $w = $('.wdg_mix_carrousa div:last-child ul li');
        var $count = 0;
        
        $w.each(function() {
            $count ++;
        });
        
		var elem = $('.vid_4vids_03 .carrusel-sizes > div');
		var num = elem.length;
		var tam = Math.ceil(num/4);
		
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
			
			if(tam <= 1 )$('.vid_4vids_03 .tvsa-double-caret-right').addClass('inactive');

			if( $(window).width() < 624){
				$(".vid_4vids_03 .izq,.vid_4vids_03 .izq1").css('width',$(window).width()/2+'px').css('text-align','center');
				$('.vid_4vids_03 .carrusel-sizes').width(num*($(window).width()/2) +'px');
			}
			else{
				$('.vid_4vids_03 .carrusel-sizes').width( tam*300 + 'px');
				if(num==5)$(elem[3]).before('<div class="izq" style="width:136px;height:140px;" ></div>');
				if(num==9)$(elem[5]).before('<div class="izq" style="width:136px;height:140px;" ></div>');
			}
			
			
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
				if( $(window).width() < 624 && $(window).width() <= 960  ){
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 300
					}, animationDelay);
				}else
				{
					$parent.animate({
						'scrollLeft': $parent.scrollLeft() - 300
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
                    'scrollLeft': $parent.scrollLeft() + 300
                	}, animationDelay);
				}
            });

        });

			$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swipeleft',function(){
				if($(window).width() > 624)
					$(this).animate({'scrollLeft': $(this).scrollLeft() + 300}, 500);
				else
					$(this).animate({'scrollLeft': $(this).scrollLeft() + $(window).width() }, 500);
			});
			$('.vid_4vids_03 .wdg_mix_carrousa .general').bind('swiperight',function(){
				if($(window).width() > 624)
					$(this).animate({'scrollLeft': $(this).scrollLeft() - 300}, 500);
				else
					$(this).animate({'scrollLeft': $(this).scrollLeft() - $(window).width() }, 500);
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

		if($v43_position < 5){
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
		
    }(jQuery, Televisa));
});

