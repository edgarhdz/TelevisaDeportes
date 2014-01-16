;jQuery(function($){ 

	(function($,T){
		
		/*$('.wdg_mlb_teamsts_01 tbody td a').addClass($('.wdg_mlb_teamsts_01 .link_class').attr('data-class'));*/
		$('.wdg_mlb_teamsts_01 > table td tbody').prepend('<td class="espacio" colspan="2"></td>');
		
		$('.wdg_mlb_teamsts_01 > table td:nth-child(1) .shsTable tbody tr').append('<td class="blank"></td>');
		$('.wdg_mlb_teamsts_01 > table td:nth-child(2) .shsTable tbody tr').prepend('<td class="espaciov"></td>');
		
		$('.wdg_mlb_teamsts_01 > table td:nth-child(2) .shsTable  tr.shsTableTtlRow td').prepend('<div class="vline"></div>');
		
		
	})($,Televisa);
});	