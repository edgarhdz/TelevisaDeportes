;$(document).ready(function() {
 
    ;(function ($, T) {

		
		var firstTeamArray = $( ".wdg_reinforcement_match_01 .floatleft tr" );

		for (i=0;i<firstTeamArray.length;i++){
			$(firstTeamArray[i]).height();
		};

		var secondTeamArray = $( ".wdg_reinforcement_match_01 .floatright tr" );
		for (i=0;i<secondTeamArray.length;i++){
			$(secondTeamArray[i]).height();
		}

		for (j=0;j<27;j++){
			firstItem = $(firstTeamArray[j]).height();
			secondItem = $(secondTeamArray[j]).height();

			if(firstItem > secondItem){
				 $(secondTeamArray[j]).height(firstItem);
			}else if(firstItem < secondItem){
				 $(firstTeamArray[j]).height(secondItem);		
			}
		}

  	}(jQuery, Televisa)); 
 });