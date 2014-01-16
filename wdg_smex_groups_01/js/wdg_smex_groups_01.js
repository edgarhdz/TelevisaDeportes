;jQuery(function($){ 
    (function($,T){
	var altura1 = $('.wdg_smex_groups_01 .titulo_goal').height();
	var altura2 = $('.wdg_smex_groups_01 .goal').height();
	var altura = altura1 + altura1 + altura2 + altura2; 
		$('.wdg_smex_groups_01 .scroll').scroll(function() {
			var sum = $(this).scrollTop() + $(this).height() + 6;
				if(sum == altura) {
           		 $(this).siblings('.degraded').css("visibility","hidden");
      			}else{
				 $(this).siblings('.degraded').css("visibility","visible");
				}
			});	  
    })($,Televisa);
});
