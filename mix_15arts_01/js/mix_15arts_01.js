$(document).ready(function(){
	$('.mix_15arts_01 .mix_15arts_01_ver_mas').click(function(e){ 
		e.preventDefault();
		$('.mix_15arts_01 div.list_container .mix_1arts_12').css('display','block');
		$('.mix_15arts_01 .mix_15arts_01_ver_mas').hide();
		$('.mix_15arts_01 .see_less').show();
	});
	
	$('.mix_15arts_01 .see_less').on('click', function(){
		$('.mix_15arts_01 .mix_1arts_12').hide();
        $('.mix_15arts_01 .mix_1arts_12:nth-child(-n+5)').show();
		$('.mix_15arts_01 .mix_15arts_01_ver_mas').show();
        $(this).hide();
    });
});