;jQuery(function($){ 
    (function($,T){
        $('.mix_6arts_04 .mix_6arts_04_verMas').click(function(event){
            event.preventDefault();
			$('.mix_6arts_04 div.mix_2arts_04').show();
            $('.mix_6arts_04 .mix_6arts_04_verMas').hide();
			$('.mix_6arts_04 .see_less').show();
        });
		
		$('.mix_6arts_04 .see_less').on('click', function(){
			$('.mix_6arts_04 div.mix_2arts_04').hide();
			$('.mix_6arts_04 .mix_2arts_04:nth-child(-n+2)').show();
			$('.mix_6arts_04 .mix_6arts_04_verMas').show();
			$(this).hide();
		});
	
	
    })($,Televisa);
});


