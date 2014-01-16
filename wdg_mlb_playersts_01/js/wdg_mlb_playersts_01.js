;jQuery(function($){ 

	(function($,T){
		$('.wdg_mlb_playersts_01 tbody td a').addClass($('.wdg_mlb_playersts_01 .link_class').attr('data-class'));
		$('.wdg_mlb_playersts_01 .wdg_mlb_playersts_01_container').scroll(function(){
			$scroll=$('.wdg_mlb_playersts_01 .wdg_mlb_playersts_01_container').scrollTop();
			if ($scroll > 275){
				$('.wdg_mlb_playersts_01 .degraded').hide();
			}else{
				$('.wdg_mlb_playersts_01 .degraded').show();
			}
		});
	})($,Televisa);
});