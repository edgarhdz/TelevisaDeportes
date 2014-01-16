/* 
    Document   : wdg_podcast_03
    Created on : 16/Jun/2013, 04:02:15 PM
    Author     : Luis Jesús Ruelas Merino
    Description:
*/
$(document).ready(function(){
	
	/*Begin: Swipe*/
	var altWdgResult01 = 0;
	
	if ($(window).width() < 624){
		altWdgResult01 = 205;
	}
	else if ($(window).width() < 978 && $(window).width() > 624){
		altWdgResult01 = 205;
	}
	else{
		altWdgResult01 = 255;  		
	} 
	$(window).resize(function(){
		if ($(window).width() < 624){
			altWdgResult01 = 205;
		}
		else if ($(window).width() < 978 && $(window).width() > 624){
			altWdgResult01 = 205;
		}
		else{
			altWdgResult01 = 255;  		
		} 
	});
	
	$('.wdg_podcast_03 .scroll').bind('swipeup',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() + altWdgResult01
            }, 500);
	});
	$('.wdg_podcast_03 .scroll').bind('swipedown',function(){
		$(this).animate({
                'scrollTop': $(this).scrollTop() - altWdgResult01
            }, 500);
	});	
	
	
	
	
	/*End: Swipe*/
	
	$('.wdg_podcast_03 .see_more').click(function(){
		$('.wdg_podcast_03 .container').css('height','auto');
		$('.wdg_podcast_03 .scroll').css('height','auto');
		$(this).hide();
		$('.wdg_podcast_03 .see_less').show();	
	});
	
	$('.wdg_podcast_03 .see_less').click(function(){
		$('.wdg_podcast_03 .container').css('height',261);
		$('.wdg_podcast_03 .scroll').css('height',261);
		$(this).hide();
		$('.wdg_podcast_03 .see_more').show();	
	});

	$('.wdg_podcast_03 .scroll').scroll(function() {
		if($('.wdg_podcast_03 .scroll').scrollTop()>=360){
		 $('.wdg_podcast_03 .degraded').css("visibility","hidden");
		}else{
		 $('.wdg_podcast_03 .degraded').css("visibility","visible");
		}
	});	
});