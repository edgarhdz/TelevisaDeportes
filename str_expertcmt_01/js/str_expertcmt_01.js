$(document).ready(function() {	
	$('.str_expertcmt_01 .more').on('click',function(){
		$(this).siblings('.expert_container_block').show();
		$(this).css('display','none');
		$('.str_expertcmt_01 .see_less').show();
	})
	
	$('.str_expertcmt_01 .see_less').on('click', function(){
		$('.str_expertcmt_01 .expert_container_block').hide();
		$('.str_expertcmt_01 .see_less').hide();
		$('.str_expertcmt_01 .more').show();
        $(this).hide();
    });
});