;jQuery(function($){ 
    (function(T, $) {
		
		var anchoScreen = $(window).width(); 
		
		
        if($.browser.msie && parseFloat($.browser.version) <= 8){

        }
        else{
            $(window).resize(function() {
				
				if ($(window).width()==anchoScreen) return; 
				$('.wdg_categories_01 li').show();
				
                if( $(window).width() > 960  ){
                    //$('.wdg_categories_01 li:lt(15)').show();
                    $('.wdg_categories_01 li:gt(14)').hide();
                }
                
                else if( $(window).width() > 623 && $(window).width() <= 960){
                    //$('.wdg_categories_01 li:lt(10)').show();
                    $('.wdg_categories_01 li:gt(9)').hide();
                }
                else if( $(window).width() < 624 ){ 
                    //$('.wdg_categories_01 li:lt(5)').show();
                    $('.wdg_categories_01 li:gt(4)').hide();
                }
            });
        }
        
        if ($(window).width() < 624) {
            $('.wdg_categories_01 li:lt(5)').show();
        }
        else if ($(window).width() > 623 && $(window).width() <= 960) {
            $('.wdg_categories_01 li:lt(10)').show();
        }
        else if ($(window).width() > 960) {
            $('.wdg_categories_01 li:lt(15)').show();
        }
		
		
		$('.wdg_categories_01 .ocultar').click(function(event){
            event.preventDefault();
            $(this).hide();
			$(this).siblings('.verTodo').show();
			if( $(window).width() > 960  ){
				$('.wdg_categories_01 li:gt(14)').hide();
			}
			else if( $(window).width() > 623 && $(window).width() <= 960){
				$('.wdg_categories_01 li:gt(9)').hide();
			}
			else if( $(window).width() < 624 ){ 
				$('.wdg_categories_01 li:gt(4)').hide();
			}
        });
		
		$('.wdg_categories_01 .verTodo').click(function(event){
            event.preventDefault();
            $(this).hide();
			/*$(this).children().hide();*/
			$(this).siblings('.ocultar').show();
            $(this).parent().siblings('.wdg_categories_01_container').children().show();
        });


    }(Televisa, jQuery));
});
