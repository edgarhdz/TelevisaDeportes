;jQuery(function($){ 

	(function($,T){

		$('.wdg_team_sched_01 table tr td').each(function(){
			var $restWeeke = $(this).attr("colspan");
			if ($restWeeke==3){$(this).addClass('weekend');}
		});
		
		
		$('.wdg_team_sched_01 tbody td a').addClass($('.wdg_team_sched_01 .link_class').attr('data-class'));
	})($,Televisa);

	var altura = $('.wdg_team_sched_01 #shsMiniStats').height();
  $('.wdg_team_sched_01 #shsMiniBody').scroll(function() {
  	$scrollTop = parseInt($('.wdg_team_sched_01 #shsMiniBody').scrollTop()) + parseInt($('.wdg_team_sched_01 #shsMiniBody').height());
    if( parseInt($scrollTop) == parseInt(altura)) {
              $('.wdg_team_sched_01 .degradado').css("visibility","hidden");
         }else{
     $('.wdg_team_sched_01 .degradado').css("visibility","visible");
    }
   });
});