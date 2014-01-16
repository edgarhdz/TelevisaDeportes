;jQuery(function($){ 
	 (function(T, $) {
		 
		 if ($(window).width() > 624) {
			$('.nav_smnu_sports_01 .nav_smnu_sports_01_bar a').on('mouseenter',function(e){
				$(this).parent('li').addClass('border-top1');
				$(this).addClass('textcolor-title1');
			}).on('mouseleave',function(e){
				if (! $(this).parent().hasClass('textcolor-title1')){
					//$(this).removeClass('textcolor-title1');
					$(this).parent('li').removeClass('border-top1');
					$(this).removeClass('textcolor-title1');
				}else{
					//No elimina clase
				}
			});
		 }
			
			/*Monitorero flechas*/
			$('.nav_smnu_sports_01 .navarrowleft').click(function(e) {
                e.preventDefault();
                $('.nav_smnu_sports_01 .container').animate({
                    'scrollLeft': $('.nav_smnu_sports_01 .container').scrollLeft() - 80
                });    
            });

            $('.nav_smnu_sports_01 .navarrowright').click(function(e) {
                e.preventDefault();
               $('.nav_smnu_sports_01 .container').animate({
                    'scrollLeft': $('.nav_smnu_sports_01 .container').scrollLeft() + 80
                });
            });
			
			$('.nav_smnu_sports_01 .container').scroll(function(e){
				//var $widthT = $('.nav_smnu_sports_01 .container').scrollLeft() + $('.nav_smnu_sports_01 .container').width();
				
				if($(this).scrollLeft()==0){
					$('.nav_smnu_sports_01 a .navlefticon i').addClass('inactive');
					$('.nav_smnu_sports_01 a .navlefticon i').removeClass('active');	
				}
				else{
					$('.nav_smnu_sports_01 a .navlefticon i').addClass('active');
					$('.nav_smnu_sports_01 a .navlefticon i').removeClass('inactive');
					
					$('.nav_smnu_sports_01 a .navrighticon i').removeClass('inactive');
					$('.nav_smnu_sports_01 a .navrighticon i').addClass('active');	
				}
				
				if($(this).scrollLeft() >= 145){
					$('.nav_smnu_sports_01 a .navrighticon i').removeClass('active');
					$('.nav_smnu_sports_01 a .navrighticon i').addClass('inactive');	
				}
				else{
					$('.nav_smnu_sports_01 a .navrighticon i').removeClass('inactive');
					$('.nav_smnu_sports_01 a .navrighticon i').addClass('active');	
				}
			});
	
			 	
	 }(Televisa, jQuery));
});