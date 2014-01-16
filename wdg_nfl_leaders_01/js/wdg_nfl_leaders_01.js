$(document).ready(function() {
    var onDocumentReady = function() {
       
        $('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(0)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(1)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(2)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(3)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(4)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(5)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(6)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr:nth-child(7)').show();
		$('.wdg_nfl_leaders_01 table.shsTable tr.shsViewMore').show();

		$('.wdg_nfl_leaders_01  table.shsBorderTable tr.shsLeaderRow td.shsMoreLeaders').append('<div class="arrow"><img src="../global/img/arrow_down.png"></div>');
		
		var altura = $('#shsBody').height();
		$('.scroll').scroll(function() {
				if($('.scroll').scrollTop() + $('.scroll').height() == altura) {
           		 $('.degradado').css("visibility","hidden");
      			}else{
				 $('.degradado').css("visibility","visible");
				}
			});	
    };
    $(onDocumentReady);
});