$(document).ready(function() {
    var onDocumentReady = function() {
		
		
        
		// TODO: refactor for a better approach
        var $parent = $('.wdg_hexagonal_estadistics_01');
        var $dropdownAnchor = $parent.find('.wdg_hexagonal_estadistics_01_dropdown');
		
		
		var $firstItem2 = $('.pleca_inferior .wdg_hexagonal_estadistics_01_dropdownlist li:first-child'); 
		$('.pleca_inferior .wdg_hexagonal_estadistics_01_dropdowncontent p').html($firstItem2.find('p').html());
        
        $dropdownAnchor.bind('click', function(evt) {
            
			evt.preventDefault();
            
			var listItems = $(this).find('.wdg_hexagonal_estadistics_01_listcontainer').find('.wdg_hexagonal_estadistics_01_dropdownlist');
            var padre = $(this);
            var visibilidad = listItems.css('visibility'); 
            
			if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '180px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
				
          $dropdownAnchor.bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $(this).find('.wdg_hexagonal_estadistics_01_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'       
                });
            } 
        });
			
			var $dropdownItems2 = $(this).find('.wdg_hexagonal_estadistics_01_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
               
                evt.preventDefault();
                padre.find('.wdg_hexagonal_estadistics_01_dropdowncontent p').html($(this).find('p').html());
				
				
            });
			
			
        });
		
		
		// Funcion de indexacion para IE7
		$(function() {
			var zIndexNumber = 1000;
			$('.wdg_hexagonal_estadistics_01 div').each(function() {
				$(this).css('zIndex', zIndexNumber);
				zIndexNumber -= 10;
			});
		});
         
    };
    $(onDocumentReady);
	
});