$(document).ready(function() {
	 var $wst2_height = (parseInt($('.wdg_stats_teams_02 .teams_stadistics').height()) + 1 )* parseInt($('.wdg_stats_teams_02 .teams_stadistics').length);
	 var $childrenSize = 0;	
		/*Swipe*/
		$('.wdg_stats_teams_02 .more_teams_stadistics').bind('swipeup',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() + 270
                }, 500);
				/*Desbloquea*/
				$wst2_scrollH = $(this).scrollTop() + $(this).height();
                if($wst2_height == $wst2_scrollH){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() + 100
                    }, 800);
                    return false;
                }
			});
		$('.wdg_stats_teams_02 .more_teams_stadistics').bind('swipedown',function(){
			$(this).animate({
                    'scrollTop': $(this).scrollTop() - 270
                }, 500);
				/*Desbloquea*/
				$wst2_scrollH = $(this).scrollTop() + $(this).height();
                if($(this).scrollTop() == 0){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() - 100
                    }, 800);
                    return false;
                }
			});
		//Verifico el último hijo
		$('.wdg_stats_teams_02 div.teams_stadistics_table:last > div').each(function(index){
			$childrenSize += parseInt($(this).width());
		});
		if($(window).width() > 624){
			$('.wdg_stats_teams_02 div.teams_stadistics_table:last').width($childrenSize + 10);
		}
			/*Diferente ventana*/
		$(window).resize(function() {
			if( $(window).width() > 624){
				$('.wdg_stats_teams_02 div.teams_stadistics_table:last').width($childrenSize + 10);
			}
			else{
				$('.wdg_stats_teams_02 div.teams_stadistics_table:last').width('auto');
			}
		});
			/*Monitor scroll*/
		$('.wdg_stats_teams_02 .more_teams_stadistics').scroll(function(){
                $wst2_scrollH = $(this).scrollTop() + $(this).height();
                if($wst2_height == $wst2_scrollH){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() + 100
                    }, 800);
                    return false;
                }
                if($(this).scrollTop() == 0){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() - 100
                    }, 800);
                    return false;
                }
            });
		
});