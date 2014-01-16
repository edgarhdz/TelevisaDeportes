$(document).ready(function() {	
		
		
		$('.wdg_player_comparison_01 .opta-widget-container ul.tabs-nav li a').click(function(e){
			e.preventDefault();
			$(this).parent().siblings().removeClass('tabs-selected');
			$(this).parent().siblings().removeClass('border-bottom1');
			$(this).parent().addClass('tabs-selected');
			$(this).removeClass('textcolor-title1');
			$(this).addClass('textcolor-title1');
			$(this).parent().addClass('tabs-selected');
			$(this).parent().addClass('border-bottom1');
			$(this).parent().parent().siblings().children().hide();
			var tab = $(this).attr('href');
			var z = $(this).parent().parent().siblings().children().children().siblings().closest(tab);
			$(z).parent().addClass('tabs-selected');
			$(z).parent().show();
			
			// Add style
			$(this).parent('li.tabs-selected').siblings().find('a').removeClass('textcolor-title1');
			$(this).parent('li.tabs-selected').siblings().removeClass('border-bottom1');
   			$(this).addClass('textcolor-title1');
   			$(this).parent().addClass('border-bottom1');

		});
		// add the arrow to the tabs
		// $('.wdg_player_comparison_01 div.opta-widget-container ul.tabs-nav li a').append('<span class="arrow"></span>');
		
		
		// Add the template and theme styles
		$('.wdg_player_comparison_01 div.opta-widget-container h2 span').addClass('textcolor-title3');
		$('.wdg_player_comparison_01 div.opta-widget-container h2 span').addClass('background-color1');
		$('.wdg_player_comparison_01 div.opta-widget-container div.comparison legend').addClass('textcolor-title4');
		$('.wdg_player_comparison_01 div.opta-widget-container table tbody tr td').addClass('textcolor-title4');

		 $('.wdg_player_comparison_01 div.opta-widget-container ul.tabs-nav li.tabs-selected a').addClass('textcolor-title1');
		 $('.wdg_player_comparison_01 div.opta-widget-container ul.tabs-nav li.tabs-selected').addClass('border-bottom1');
		$('.wdg_player_comparison_01 div.opta-widget-container ul.tabs-nav li a').hover(
		
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
		//console.log($('.wdg_player_comparison_01 .compare2').find('dd'));
		$('.wdg_player_comparison_01 .compare2').before('<div class="compare_vs_team" />');

		//$('.wdg_player_comparison_01 div.opta-widget-container table tbody tr td:first-child').append('<div class="player_left" />');

		//$('.wdg_player_comparison_01 div.opta-widget-container table tbody tr td:last-child').append('<div class="player_right" />');

		$('.ie7 .wdg_player_comparison_01 div.opta-widget-container table tbody tr td:last-child').css('border-left','1px dashed #8f8f8f');
		
			if (!$.browser.opera) {
			// select element styling
			$('.wdg_player_comparison_01 select#player_p1,.wdg_player_comparison_01 select#player_p2').each(function(){
				//var title = $(this).attr('title');
				var title = "--Seleccione un jugador--";
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
});
