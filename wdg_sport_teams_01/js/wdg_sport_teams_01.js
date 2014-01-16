$(document).ready(function() {
    var onDocumentReady = function() {

		var altura = $('.wdg_sport_teams_01 #shsBody').height();
		$('.wdg_sport_teams_01 .scroll').scroll(function() {
				if($('.wdg_sport_teams_01 .scroll').scrollTop() + $('.wdg_sport_teams_01 .scroll').height() == altura) {
           		 $('.wdg_sport_teams_01 .degradado').css("visibility","hidden");
      			}else{
				 $('.wdg_sport_teams_01 .degradado').css("visibility","visible");
				}
			});	  
    };
    $(onDocumentReady);
});