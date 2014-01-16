;jQuery(function($){ 
    (function($,T){
        $('.wdg_titles_won_01').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $('#navigation_list');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
				$('#navigation_list').animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
                /*$(this).parents().children('.datos').children('#navigation_list').animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);*/
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $('#navigation_list').animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);
				/*$(this).parents().children('.datos').children('#navigation_list').animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);*/

            });
			
			if($(window).width() <= 624){
					/*captura clase*/
					var clase_act = $('td.sin_base').attr('class');
					var myArray = clase_act.split(' ');
					//alert("Class: "+ myArray[0] + " Class 2: " + myArray[1]);
					$('td.sin_base').removeClass(myArray[1]);
					$('.wdg_titles_won_01 .ver_todos .sin_base a').addClass('textcolor-title2');
				}
				else
				{
					var clase_act = $('td.sin_base').attr('class');
					var myArray = clase_act.split(' ');
				}
          
		   $(window).resize(function() {
        //alert(ancho);
        if($(window).width() < 624){
				$('td.sin_base').removeClass(myArray[1]);
				//$('.wdg_titles_won_01 .ver_todos .sin_base a').css('color','#FFF');
				$('.wdg_titles_won_01 .ver_todos .sin_base a').addClass('textcolor-title2');
			}
			else{
				$('td.sin_base').addClass(myArray[1]);
				$('.wdg_titles_won_01 .ver_todos .sin_base a').removeClass('textcolor-title2');
			}
		});
		  
		  
        });
    })($,Televisa);
});
