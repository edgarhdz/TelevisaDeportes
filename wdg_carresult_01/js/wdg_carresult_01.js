$(document).ready(function() {
    var onDocumentReady = function() 
    {
            $('.wdg_carresult_01 .scroll2').bind('swipeup',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() + 265
                    }, 500);
            });
            $('.wdg_carresult_01 .scroll2').bind('swipedown',function(){
                $(this).animate({
                        'scrollTop': $(this).scrollTop() - 265
                    }, 500);
            });
        // TODO: refactor for a better approach
        var $parent2 = $('.wdg_carresult_01 ');
        var $dropdownAnchor2 = $parent2.find('.wdg_carresult_012_dropdown');
        var $firstItem2 = $('.wdg_carresult_012_dropdownlist li:first-child');
        //var $dropdownItems2 = $parent2.find('.wdg_carresult_012_dropdownlist li');
        
        $dropdownAnchor2.bind('click', function(evt) {
            evt.preventDefault();
            var $listItems2 = $(this).find('.wdg_carresult_012_dropdownlist');
            $(this).find('p').html($firstItem2.find('p').html());
            var visibilidad = $listItems2.css('visibility'); 
            
            if ( visibilidad == 'hidden' ) {
                $listItems2.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
                
            } else {
                $listItems2.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            }
        });
        // TODO: refactor for a better approach
        var $parent = $('.wdg_carresult_01 ');
        var $dropdownAnchor = $parent.find('.wdg_carresult_01_dropdown');
        var $firstItem = $('.wdg_carresult_01_dropdownlist li:first-child');
        //var $dropdownItems2 = $parent2.find('.wdg_carresult_012_dropdownlist li');
        
        $dropdownAnchor.bind('click', function(evt) {
            evt.preventDefault();
            var $listItems = $(this).find('.wdg_carresult_01_dropdownlist');
            $(this).find('p').html($firstItem.find('p').html());
            var visibilidad = $listItems.css('visibility'); 
            
            if ( visibilidad == 'hidden' ) {
                $listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '156px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
                
            } else {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            }
        });
        
    };
    $(onDocumentReady);
});
;jQuery(function($){ 
    (function($,T){
        $('.wdg_carresult_01').each(function(ix,element){
            
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
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
            });
            
            $this.find('a.next, .deportes-next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
		
		$('.wdg_carresult_01 .wdg_carresult_012_dropdownlist').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_carresult_01 .wdg_carresult_012_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'    
                });
            }
        });
		
		$('.wdg_carresult_01 .wdg_carresult_01_dropdownlist').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_carresult_01 .wdg_carresult_01_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'    
                });
            } 
        });
		
		$('.wdg_carresult_01 .scroll2').scroll(function() {
    		if($('.wdg_carresult_01 .scroll2').scrollTop()>300){
    		 $('.wdg_carresult_01 .degraded').css("visibility","hidden");
    		}else{
    		 $('.wdg_carresult_01 .degraded').css("visibility","visible");
    		}
		});	    

	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
			$(function() {
			var zIndexNumber = 1000;
			$('div').each(function() {
				$(this).css('zIndex', zIndexNumber);
				zIndexNumber -= 10;
				});
			});
		}
		else
		{
			//Nada
			}
			
    })($,Televisa);
	
	$('.wdg_carresult_01 .wdg_carresult_01_verMas').click(function(event){
	
		event.preventDefault();
		$('.wdg_carresult_01 > ul li').show();
		$('.wdg_carresult_01 .wdg_carresult_01_verMas').hide();
	});
});


