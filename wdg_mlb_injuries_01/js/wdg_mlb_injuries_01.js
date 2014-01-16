;jQuery(function($){ 

	(function($,T){
		
		$('.wdg_mlb_injuries_01 tbody td a').addClass($('.wdg_mlb_injuries_01 .link_class').attr('data-class'));
		$('.wdg_mlb_injuries_01 .wdg_mlb_injuries_01_container').scroll(function(){
			$scroll=$('.wdg_mlb_injuries_01 .wdg_mlb_injuries_01_container').scrollTop();
			if ($scroll > 130){
				$('.wdg_mlb_injuries_01 .degraded').hide();
			}else{
				$('.wdg_mlb_injuries_01 .degraded').show();
			}
		});
	})($,Televisa);
});