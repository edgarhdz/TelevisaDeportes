$(document).ready(function() {	

    var lis = $('.btn_6prog_04 .type1a .carrusel ul li');
    var margin = 0;
    var ulWidth = 0;
    for(var i=0; i<lis.length; i++){
        margin += parseInt($(lis[i]).css("margin-left"));
        ulWidth += $(lis[i]).width();
    }
    
  //Obtener el ancho de la ventana
    
    $(window).resize(function() {	    
    	var anchoVentana =  $(window).width(); 
    	if (anchoVentana < 624){    	
    		$('.btn_6prog_04 .type1a .carrusel ul').css('width','100%');
 
    	}else{		
    		$(".btn_6prog_04 .type1a .carrusel ul").width(ulWidth + margin);
  
    	}    	
    });
     
	// sacamos cuantas imagenes
	//var totalImagenes = $(".btn_6prog_04 .type1a .carrusel ul").length;
	
	// Sacamos el ancho total del UL del carrusel
    var anchoVentana =  $(window).width(); 
     
    if (anchoVentana < 624){     	
    	window.setTimeout("$('.btn_6prog_04 .type1a .carrusel ul').css('width','100%');", 500);    
    }else{
    	 var anchoTotalUL = $(".btn_6prog_04 .type1a .carrusel ul").width(); // 100%
    }
	
	var bulletSelected;
	var scrollLeft;
	
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
		var anchoVentna = document.body.offsetWidth;		
	}
	else{
		var anchoVentna =  $(window).width();
	}
	
	
	
	// checamos si se deben mostrar las flechas del carrusel si hay mas de 6 elementos
	if(anchoVentna > 590){
		
		if($(".btn_6prog_04 .type1a .carrusel ul li").length > 6){			
			$(".btn_6prog_04 .title .flechas").show();
		}
		else{
			$(".btn_6prog_04 .title .flechas").hide();
		}
		
	}
	
	
	$('.btn_6prog_04 .type1a .carrusel').scroll(function(e){
		
		scrollLeft = $(this).scrollLeft()  + (anchoVentna/2.5) ;
		
		var porcentaje =  ( scrollLeft * 100) / anchoTotalUL; 
		
		if( scrollLeft <= 320)
			bulletSelected = 1;
		else if( scrollLeft >= 321 && scrollLeft <= 630)
			bulletSelected = 2;
		else if( scrollLeft >= 630 && scrollLeft <= 940)
			bulletSelected = 3;
		else if( scrollLeft >= 940 && scrollLeft <= 1250)
			bulletSelected = 4;
		else 
			bulletSelected = 5;
			
		$(this).parents('.type1a').siblings('.bullets').find('li').removeClass('selected');
		
		$(this).parents('.type1a').siblings('.bullets').find('li:nth-child('+bulletSelected+')').addClass('selected');
    });
	
	/*Botón Ver más modo mobile*/
	$('.btn_6prog_04 .btn_6prog_04_verMas').click(function(event){
        event.preventDefault();		
        $('.btn_6prog_04 .carrusel ul li').css('display','block');
        $('.btn_6prog_04 .btn_6prog_04_verMas').hide();
        $('.btn_6prog_04 .btn_6prog_04_ocultar').show();
	});
	/*Botón Ocultar modo mobile*/
	$('.btn_6prog_04 .btn_6prog_04_ocultar').click(function(event){
        event.preventDefault();		
        $('.btn_6prog_04 .carrusel ul li').css('display','none');
        $('.btn_6prog_04 .type1a .carrusel ul li:nth-child(-n+3)').css('display','block');
        $('.btn_6prog_04 .btn_6prog_04_ocultar').hide();
        $('.btn_6prog_04 .btn_6prog_04_verMas').show();
	});

});