;jQuery(function($){ 

	(function($,T){

		$('.wdg_nfl_sched_01 table tr td').each(function(){
			var $restWeeke = $(this).attr("colspan");
			if ($restWeeke==3){$(this).addClass('weekend');}
		});
		
		
		$('.wdg_nfl_sched_01 tbody td a').addClass($('.wdg_nfl_sched_01 .link_class').attr('data-class'));
	})($,Televisa);

	var altura = $('.wdg_nfl_sched_01 #shsMiniStats').height();
  $('.wdg_nfl_sched_01 #shsMiniBody').scroll(function() {
  	$scrollTop = parseInt($('.wdg_nfl_sched_01 #shsMiniBody').scrollTop()) + parseInt($('.wdg_nfl_sched_01 #shsMiniBody').height());
    if( parseInt($scrollTop) == parseInt(altura)) {
              $('.wdg_nfl_sched_01 .degradado').css("visibility","hidden");
         }else{
     $('.wdg_nfl_sched_01 .degradado').css("visibility","visible");
    }
   });
});