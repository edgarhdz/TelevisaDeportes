;jQuery(function($){ 
    (function($,T){
	/*$('.mix_15arts_01b .mix_15arts_01b_ver_mas').click(function(e){ 
		e.preventDefault();
		$('.mix_15arts_01b div.list_container .mix_1arts_12').css('display','block');
		$('.mix_15arts_01b .mix_15arts_01b_ver_mas').hide();
		$('.mix_15arts_01b .see_less').show();
	});
	
	$('.mix_15arts_01b .see_less').on('click', function(){
		$('.mix_15arts_01b .mix_1arts_12').hide();
        $('.mix_15arts_01b .mix_1arts_12:nth-child(-n+5)').show();
		$('.mix_15arts_01b .mix_15arts_01b_ver_mas').show();
        $(this).hide();
    });*/
	 $('.mix_15arts_01b').each(function(ix,element){ 
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('>ul')
            ;
		/*Swipe*/
		$('.mix_15arts_01b .list_container').bind('swipedown',function(e){
				$(this).animate({
						'scrollTop': $(this).scrollTop() - 384
					}, 500);
				//Desbloquea
                if($(this).scrollTop() == 0){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() - 100
                    }, 500);
                    return false;
					//e.stopPropagation();
                }
			});
		$('.mix_15arts_01b .list_container').bind('swipeup',function(e){
				$(this).animate({
						'scrollTop': $(this).scrollTop() + 384
					}, 500);
				 //Desbloquea
				 $m151b_scrollH = $(this).scrollTop() + $(this).height();
				 if(1130 == $m151b_scrollH){
                    $('body,html').animate({
                        scrollTop: $(window).scrollTop() + 100
                    }, 500);
                    return false;
					//e.stopPropagation();
                }
			});	
		$('.mix_15arts_01b .list_container').bind("touchmove",function(event){
			event.preventDefault();
		});

	 });
	 
	/*Monitorea scroll*/
	$m15b_altura = 1130;
	$i = 0;
	/*$('.mix_15arts_01b .mix_1arts_12').each(function(ix,element){ 
		$m15b_altura += $(this).outerHeight();
		$i += 1;
	});*/

	$('.mix_15arts_01b .list_container').scroll(function() {
				var $m15b_position = $(this).scrollTop();
				var $m15b_med = $m15b_position  + $(this).height(); 
				if($m15b_med == 1130){
					// inactivo
					 $(this).siblings('.degradado').css("visibility","hidden");
				}else{
					// activo
					 $(this).siblings('.degradado').css("visibility","visible");
				}
				//console.log('Estoy: '+$m15b_position+' Sumo: '+$m15b_med+' Espero: '+$m15b_altura+' Ciclos:'+$i);
			});	
	
	
	var $parent = $('.mix_15arts_01b');
	var $dropdownAnchor = $parent.find('.lineaResultado');
	$dropdownAnchor.on('click', function(evt) {
		var $listItems = $(this).find('.mix_15arts_01b_dropdownlist');
		var $visibility = $listItems.css('visibility');
		var padre =$(this);
		if ( $visibility == 'hidden' ) 
			$listItems.css({
				visibility: 'visible',
				height: 'auto',
				'max-height' : '156px',
				'overflow-y': 'scroll',
				'overflow-x': 'hidden'         
			});
		 else 
			 $listItems.css({
				visibility: 'hidden',
				height: '0px'
		});
		  var $dropdownItems2 = $(this).find('.mix_15arts_01b_dropdownlist li');
		$dropdownItems2.bind('click', function(evt) {
			//console.log('Entando');
			evt.preventDefault();
			padre.find('.mix_15arts_01b_dropdowncontent p').html($(this).find('p').html());
		});
	   
		$listItems.bind('mouseleave', function(evt) {
			evt.preventDefault();
			var visibilidad = $(this).css('visibility');
			if ( visibilidad == 'visible' ) {
				 $(this).css({
					visibility: 'hidden',
					height: '0px'       
				});
			} 
		});
		
	});
 })($,Televisa);
});