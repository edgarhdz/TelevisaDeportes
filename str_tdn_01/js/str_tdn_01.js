$(document).ready(function(){
	  (function($,T){
		  
	/*Default mobile*/
	if( $(window).width() < 624 ){	  
		var altura1 = $('.str_tdn_01 .national').height();
		var altura2 = $('.str_tdn_01 .international').height();
		var altura = altura1 + altura2;
			$('.str_tdn_01 .scroll').scroll(function() {
					if($('.str_tdn_01 .scroll').scrollTop() + $('.str_tdn_01 .scroll').height() == altura) {
					 $('.str_tdn_01 .degraded').css("visibility","hidden");
					}else{
					 $('.str_tdn_01 .degraded').css("visibility","visible");
					}
				});	  
	}
	/*Dinámico*/
	$(window).resize(function() {
			if( $(window).width() < 624 ){
				var altura1 = $('.str_tdn_01 .national').height();
				var altura2 = $('.str_tdn_01 .international').height();
				var altura = altura1 + altura2;
					$('.str_tdn_01 .scroll').scroll(function() {
							if($('.str_tdn_01 .scroll').scrollTop() + $('.str_tdn_01 .scroll').height() == altura) {
							 $('.str_tdn_01 .degraded').css("visibility","hidden");
							}else{
							 $('.str_tdn_01 .degraded').css("visibility","visible");
							}
						});	  
			}
		});
		
    })($,Televisa);
});