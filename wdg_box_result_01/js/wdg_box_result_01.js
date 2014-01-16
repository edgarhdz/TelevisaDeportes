$(document).ready(function() {
    var onDocumentReady = function() {
        // TODO: refactor for a better approach
        var $parent = $('.wdg_box_result_01');
        var $dropdownAnchor = $parent.find('.wdg_box_result_01_dropdown');
        var $firstItem = $('.wdg_box_result_01_dropdownlist li:first-child');        
        $('.wdg_box_result_01_dropdowncontent p').html($firstItem.find('p').html());
        
        $dropdownAnchor.bind('click', function(evt) {
            evt.preventDefault();
            var listItems = $(this).find('.wdg_box_result_01_listcontainer').find('.wdg_box_result_01_dropdownlist');
            var padre =$(this);
            var visibilidad = listItems.css('visibility'); 
            if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '180px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
            var $dropdownItems2 = $(this).find('.wdg_box_result_01_dropdownlist li');
            $dropdownItems2.bind('click', function(evt) {
                console.log('Entando');
                evt.preventDefault();
                padre.find('.wdg_box_result_01_dropdowncontent p').html($(this).find('p').html());
            });
        });
        $("#dropdwon-right").click(function(e) {
            console.log($(this).parents('div'));
        });
		
		
		/*Swipe*/
		$(document).ready(function(){
			$theUl = $('.wdg_box_result_01 .scroll2');
			$('.wdg_box_result_01 .scroll2').bind('swipeup',function(){
				$(this).animate({
						'scrollTop': $theUl.scrollTop() + 330
					}, 500);
			});
			$('.wdg_box_result_01 .scroll2').bind('swipedown',function(){
				$(this).animate({
						'scrollTop': $theUl.scrollTop() - 330
					}, 500);
			});
		});
        
         
    };
    $(onDocumentReady);

    (function($,T){
        $('.wdg_box_result_01').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $('.boxers_block');
            
            $this.find('a.prev, a.next').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.prev').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
            });
            
            $this.find('a.next').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
		
		 $('.wdg_box_result_01 .wdg_box_result_01_dropdownlist').bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $('.wdg_box_result_01 .wdg_box_result_01_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'         
                });
            } 
        });
		
		var altura = $('#alto').height();
		$('.scroll2').scroll(function() {
				if($('.scroll2').scrollTop() + $('.scroll2').height() == altura) {
           		 $('.degradado').css("visibility","hidden");
      			}else{
				 $('.degradado').css("visibility","visible");
				}
			});	  
    })($,Televisa);

});