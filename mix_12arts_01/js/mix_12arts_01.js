;jQuery(function($){ 
    (function(T, $) {
		$('.mix_12arts_01 .str_pleca_01 .ocultar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_01');			
			event.preventDefault();			
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			//$(parent).find('.str_pleca_01').css('margin-bottom','36px');
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		});
		
		$('.mix_12arts_01 .str_pleca_01 .mostrar a').click(function(event){
			var parent = $(this).closest('.mix_12arts_01');
			event.preventDefault();			
			$(parent).find('.type1a_').toggle();
			$(parent).find('.nav_paginator_01').toggle();
			$(parent).find('.str_pleca_01 .ocultar').show();
			$(parent).find('.str_pleca_01 .mostrar').hide();
			//$(parent).find('.str_pleca_01').css('margin-bottom','24px');
			$(parent).css('margin-bottom','25px');
			$(parent).height('auto');
		});
		if($(window).width()<624){
			$('.mix_12arts_01 .dotted-add').removeClass('dotted-bottom');
		}

		$(window).resize(function() {
   			if($(window).width()<624){
				$('.mix_12arts_01 .dotted-add').removeClass('dotted-bottom');
			}
		});
		
		var start = function(param){
			var parent = $(param).closest('.mix_12arts_01');		
			$(parent).find(' .type1a_').toggle();
			$(parent).find(' .nav_paginator_01').toggle();
			$(parent).find(' .str_pleca_01 .ocultar').hide();
			$(parent).find(' .str_pleca_01 .mostrar').show();
			$(parent).css('margin-bottom','36px');
			$(parent).height('33px');
		}

		start('.mix_12arts_01 .str_pleca_01 .ocultar a');	

	}(Televisa, jQuery));
});