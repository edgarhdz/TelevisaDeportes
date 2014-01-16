;jQuery(function($){ 
    (function($,T){
		
		
		$('.wdg_team_comparison_01 .opta-widget-container ul.tabs-nav li a').click(function(e){
			$(this).parent().siblings().removeClass('tabs-selected');
			$(this).parent().addClass('tabs-selected');
			$(this).parent().parent().siblings().children().hide();
			//$('.wdg_team_comparison_01 .opta-widget-container ul.tabs-content li').hide();
			var tab = $(this).attr('href');
			//$(this).parent().addClass('tabs-selected');
			//$('.wdg_team_comparison_01 .opta-widget-container ul.tabs-content li ' + tab).parent().addClass('tabs-selected');
			 //var v = $(this).parent().parent().siblings().children().children().siblings().closest(tab).prop('tagName');
			var z = $(this).parent().parent().siblings().children().children().siblings().closest(tab);
			$(z).parent().show();
			//$('.wdg_team_comparison_01 .opta-widget-container ul.tabs-content li ' + tab).parent().show();
			
			// Add style
			$(this).parent('li.tabs-selected').siblings().find('a').removeClass('textcolor-title1');
			$(this).parent('li.tabs-selected').siblings().removeClass('border-bottom1');
   			$(this).addClass('textcolor-title1');
   			$(this).parent().addClass('border-bottom1');
			e.preventDefault();

		});
		// add the arrow to the tabs
		// $('.wdg_team_comparison_01 div.opta-widget-container ul.tabs-nav li a').append('<span class="arrow"></span>');
		
		
		// Add the template and theme styles
		$('.wdg_team_comparison_01 div.opta-widget-container h2 span').addClass('textcolor-title3');
		$('.wdg_team_comparison_01 div.opta-widget-container h2 span').addClass('background-color1');
		$('.wdg_team_comparison_01 div.opta-widget-container div.comparison legend').addClass('textcolor-title4');
		$('.wdg_team_comparison_01 div.opta-widget-container table tbody tr td').addClass('textcolor-title4');

		 $('.wdg_team_comparison_01 div.opta-widget-container ul.tabs-nav li.tabs-selected a').addClass('textcolor-title1');
		 $('.wdg_team_comparison_01 div.opta-widget-container ul.tabs-nav li.tabs-selected').addClass('border-bottom1');
		$('.wdg_team_comparison_01 div.opta-widget-container ul.tabs-nav li a').hover(
			 function () {
			 	$(this).parent().addClass("border-bottom1");
				$(this).addClass("textcolor-title1");
				//console.log($(this).parent());
			},
			function () {
				
				if( ! $(this).parent().hasClass('tabs-selected') ){
					$(this).removeClass("textcolor-title1");
					$(this).parent().removeClass("border-bottom1");
				}
			}
		);
		//console.log($('.wdg_team_comparison_01 .compare2').find('dd'));
		$('.wdg_team_comparison_01 .compare2').before('<div class="compare_vs_team" />');

		$('.wdg_team_comparison_01 div.opta-widget-container table tbody tr td:first-child').append('<div class="player_left" />');

		$('.wdg_team_comparison_01 div.opta-widget-container table tbody tr td:last-child').append('<div class="player_right" />');

		$('.ie7 .wdg_team_comparison_01 div.opta-widget-container table tbody tr td:last-child').css('border-left','1px dashed #8f8f8f');
		
		
		if (!$.browser.opera) {
			// select element styling
			$('.wdg_team_comparison_01 select.team_1,.wdg_team_comparison_01 select.team_2').each(function(){
				var title = $(this).attr('title');
				if ($.browser.msie && $.browser.version < 9) {

				}
				else
			{
				if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
				$(this)
					.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
					.after('<span class="select">' + title + '</span>')
					.change(function(){
						val = $('option:selected',this).text();
						$(this).next().text(val);
						})
				}
			});
		};
		
	})($,Televisa);
});
