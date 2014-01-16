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
    	
		$('.wdg_smex_result_01 .deg').bind('swipeup',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01
                }, 500);
		});
		$('.wdg_smex_result_01 .deg').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01
                }, 500);
		});   		
		
    	
        $('.wdg_smex_result_01').each(function(ix,element){ 
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
                    'scrollTop': $theUl.scrollTop() - $theUl.height() - 7
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height() + 7
                }, 500);
            }); 
        });
		

      	$list = $('.wdg_smex_result_01 .deg li').size();
		$altura_li = parseInt($('.wdg_smex_result_01 .deg li').height());
		$altura = ($altura_li * $list) + $list;

        var $parent = $('.wdg_smex_result_01 ');
        var $dropdownAnchor = $parent.find('.lineaResultado');
        $dropdownAnchor.on('click', function(evt) {
            var $listItems = $(this).find('.wdg_smex_result_012_dropdownlist');
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
              var $dropdownItems2 = $(this).find('.wdg_smex_result_012_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_smex_result_012_dropdowncontent p').html($(this).find('p').html());
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
		$('.wdg_smex_result_01 .deg').scroll(function() {
				var $war3_position = $(this).scrollTop();
				var $war3_med = $war3_position + $(this).height();
				var $war3_elements = $(this).find('li').size();
				var $alt_li = $(this).find('li').height();
				var $war3_altura = $war3_elements * $alt_li;
				
				if($(window).width() < 624 ){$war3_alt = 813;}
				if ($.browser.msie && parseInt($.browser.version, 10) >= 8){$war3_altura = 950;}
				else{$war3_alt = $(this).height()}
				
				console.log($war3_med);
				
				if($war3_med >= $war3_altura) {
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
        $('.wdg_smex_result_01 div').each(function() {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
 }
 