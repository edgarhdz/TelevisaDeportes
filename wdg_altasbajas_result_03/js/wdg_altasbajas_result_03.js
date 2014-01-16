;jQuery(function($){ 
    (function($,T){
    	/*Swipe*/
    	var altWdgResult01 = 0;
    	if ($(window).width() < 978 && $(window).width() > 624){
    		altWdgResult01 = 568;
    	}
    	else{
    		altWdgResult01 = 156;  		
    	} 
    	
		$('.wdg_altasbajas_result_03 .deg').bind('swipeup',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01
                }, 500);
		});
		$('.wdg_altasbajas_result_03 .deg').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01
                }, 500);
		});   		
		
    	
        $('.wdg_altasbajas_result_03').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $war3_theUl = $this.find('>ul')
            ;
            
            $this.find('a.prev, a.next, .deportes-prev, .deportes-next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev, .deportes-prev').bind(Pointer.DOWN,function(){
                $war3_theUl.animate({
                    'scrollTop': $war3_theUl.scrollTop() - $war3_theUl.height() - 7
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $war3_theUl.animate({
                    'scrollTop': $war3_theUl.scrollTop() + $war3_theUl.height() + 7
                }, 500);
            }); 
        });
		

      	$list = $('.wdg_altasbajas_result_03 .deg li').size();
		$altura_li = parseInt($('.wdg_altasbajas_result_03 .deg li').height());
		$altura = ($altura_li * $list) + $list;

        var $parent = $('.wdg_altasbajas_result_03 ');
        var $dropdownAnchor = $parent.find('.lineaResultado');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_altasbajas_result_032_dropdownlist');
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
              var $dropdownItems2 = $(this).find('.wdg_altasbajas_result_032_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_altasbajas_result_032_dropdowncontent p').html($(this).find('p').html());
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
		$('.wdg_altasbajas_result_03 .deg').scroll(function() {
				var $war3_position = $(this).scrollTop();
				var $war3_med = $war3_position + $(this).height();
				var $war3_elements = $(this).find('li').size();
				var $alt_li = $(this).find('li').height();
				var $war3_altura = $war3_elements * $alt_li;
				if($(window).width() < 624 ){$war3_alt = 813;}else{$war3_alt = $(this).height()}
				
				if($war3_med == $war3_altura) {
					$(this).siblings('.degraded').css("visibility","hidden");
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bgactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bginactive');
					
      			}else{
					$(this).siblings('.degraded').css("visibility","visible");
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().removeClass('bginactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-down').parent().addClass('bgactive');
				}
				if($war3_position == 0){
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bgactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bginactive');
				}
				else{
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().removeClass('bginactive');
					$(this).siblings('.controls').children().children('.tvsa-caret-up').parent().addClass('bgactive');
				}
				//console.log('Scroll: '+$war3_position+' suma: '+$(this).height());
			});	   
        

    })($,Televisa);
});

if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
      $(function() {
        var zIndexNumber = 1000;
        $('.wdg_altasbajas_result_03 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 