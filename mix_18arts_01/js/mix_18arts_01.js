$(document).ready(function() {
    var onDocumentReady = function() {
        // TODO: refactor for a better approach
        var $parent = $('.mix_18arts_01');
        var $dropdownAnchor = $parent.find('.mix_18arts_01_dropdown');
        var $firstItem = $('.mix_18arts_01_dropdownlist li:first-child');        
        $('.mix_18arts_01_dropdowncontent p').html($firstItem.find('p').html());
        
        $dropdownAnchor.bind('click', function(evt) {
            evt.preventDefault();
            var listItems = $(this).find('.mix_18arts_01_listcontainer').find('.mix_18arts_01_dropdownlist');
            var padre =$(this);
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
            var $dropdownItems2 = $(this).find('.mix_18arts_01_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                console.log('Entando');
                evt.preventDefault();
                padre.find('.mix_18arts_01_dropdowncontent p').html($(this).find('p').html());
            });
        });
        $("#dropdwon-right").click(function(e) {
            console.log($(this).parents('div'));
        });

        $dropdownAnchor.bind('mouseleave', function(evt) {
            evt.preventDefault();
            var $listItems = $(this).find('.mix_18arts_01_dropdownlist');
            var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'        
                });
            } 
        });
        
         
    };
    $(onDocumentReady);
	
	// Btn ver mas
   /* $('.mix_18arts_01 .see_more').on('click', function(){
        $('.mix_18arts_01 .mix_1arts_14').show();
		$('.mix_18arts_01 .see_less').show();
        $(this).hide();
    });
	$('.mix_18arts_01 .see_less').on('click', function(){
		$('.mix_18arts_01 .mix_1arts_14').hide();
        $('.mix_18arts_01 .mix_1arts_14:nth-child(-n+6)').show();
		$('.mix_18arts_01 .see_less').hide();
		$('.mix_18arts_01 .see_more').show();
        $(this).hide();
    });*/
	
	/*Swipe*/
	$theUlmix_18arts_01 = $('.mix_18arts_01 .estadios');
	$('.mix_18arts_01 .estadios').bind('swipeup',function(){
		$(this).animate({
				'scrollTop': $theUlmix_18arts_01.scrollTop() + 155
			}, 500);
	});
	$('.mix_18arts_01 .estadios').bind('swipedown',function(){
		$(this).animate({
				'scrollTop': $theUlmix_18arts_01.scrollTop() - 155
			}, 500);
	});
	

    $(function() {
		var zIndexNumber = 1000;
		$('.mix_18arts_01 div').each(function() {
			$(this).css('zIndex', zIndexNumber);
			zIndexNumber -= 10;
        });
    });
});