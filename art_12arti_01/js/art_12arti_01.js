$(document).ready(function(){
	
	var $height = (parseInt($('.art_12arti_01 .container-items ul li').height()) + 1 )* parseInt($('.art_12arti_01 .container-items ul li').length);
	
	var $scrollold = 0;
	var $scrollnew = 1;
	
	$theUl = $('.art_12arti_01 .container-items');
	$('.art_12arti_01 .container-items').bind('swipeup',function(){
		$(this).animate({
			'scrollTop': $theUl.scrollTop() + 500
		}, 500);
		
		$scrollold = $theUl.scrollTop();
		
		
		if($scrollold == $scrollnew){
			$('body,html').animate({
				scrollTop: $(window).scrollTop() + 150
			}, 100);
			return false;
		}
		else{
			$scrollnew = $scrollold;
		}
				
	});
	$('.art_12arti_01 .container-items').bind('swipedown',function(){
		$(this).animate({
			'scrollTop': $theUl.scrollTop() - 500
		}, 500);
		
		
		if($(this).scrollTop() == 0){
			$('body,html').animate({
				scrollTop: $(window).scrollTop() - 150
			}, 100);
			return false;
		}
	});	
	
	
	// Scroll
	$('.art_12arti_01 .container-items').scroll(function(){
		
		$scrollH = $(this).scrollTop() + $(this).height();
		
		if($height == $scrollH){
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