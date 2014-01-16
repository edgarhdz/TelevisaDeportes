;jQuery(function($){ 
    (function ($, T) {
        vid_4vids_01_player = new Object();
        vid_4vids_01_player.width = 624; // Delay entre cambio y cambio de imagenes en el autoplay
        vid_4vids_01_player.height = 378;

        // Si cambian de mobile a tablet se quita el ancho fijo que pone el carrusel al 'ul' y viceversa.
        $(window).resize(function(){
             if($(window).width() <= 590){
                 // $('.vid_4vids_01 .type1a .carruselContainer #carrusel').css('width', '105%');
             }
             else{    
                 // $('.vid_4vids_01 .type1a .carruselContainer ul').width(ulWidth + margin_r + 19);
             }
        });
        
        // Si cargan la pagina en movil se quita el ancho fijo que pone el carrusel al 'ul'
        $(window).load(function() {
            if($(window).width() <= 590){
                //$('.vid_4vids_01 .type1a .carruselContainer #carrusel').css('width', '105%');
            }
        });
    
        var anchoUL_carrusel;
        
        if($(window).width() > 620){
            anchoUL_carrusel = $('.vid_4vids_01 .type1a .carruselContainer #carrusel').width();
        }
        
        var lis = $('.vid_4vids_01 .type1a .carruselContainer ul li');
       
            var margin_r = 0;
            var ulWidth = 0;
            var anchoUL = 0;
            for(var i=0; i<lis.length; i++){
                margin_r += parseInt($(lis[i]).css("margin-right"));
                ulWidth += $(lis[i]).width();
            }
            // $('.vid_4vids_01 .type1a .carruselContainer ul').width(ulWidth + margin_r + 19);              
    
        // Bind del carrsuel 2 con la galeria escogida
        $('.vid_4vids_01 .galleryLink').click( function (event){
            $('.vid_4vids_01 .td_bg').hide();
                event.preventDefault();
                // Si es version tablet o desktop
                if($(window).width() > 620) {
                        // Quitamos el estilo y agregamos el estilo "sellecionado" a la imagen que le dieron click
                        $('.vid_4vids_01 .galleryLink').each( function (){
                                $(this).find('div.selectedGallery').removeClass('selectedGallery');
                        });
                        $(this).find('.iconGallery').addClass('selectedGallery');
                }
    
        });
    
    
        //Click  del btn play
        $('.vid_4vids_01 #video_play, .vid_4vids_01 .galleryLink').click(function (event){
                event.preventDefault();
                changePlayVideo($(this));
        });
          
        function setPlayerSize(){
            if ($.browser.msie && parseInt($.browser.version, 10) <= 7){
                var anchoVentna = document.body.offsetWidth;            
            }
            else{
                var anchoVentna =  $(window).width();
            }
            
            // Si el version movil obtenemos el alto y ancho de la imagen para adaptar el tamaño del player
            if( anchoVentna <= 590 ){            
                // proporcion entre el ancho y alto fijos con el ancho variable
                var altoVentana = (anchoVentna * vid_4vids_01_player.height) / vid_4vids_01_player.width;
                
                $('.vid_4vids_01 #myExperience').width( anchoVentna );
                $('.vid_4vids_01 #myExperience').height( altoVentana );
                
                $('.vid_4vids_01 #contenedor').width( anchoVentna );
                $('.vid_4vids_01 #contenedor').height( altoVentana );
            }
            else{
                
                $('.vid_4vids_01 #myExperience').width( vid_4vids_01_player.width );
                $('.vid_4vids_01 #myExperience').height( vid_4vids_01_player.height );
                
                $('.vid_4vids_01 #contenedor').width( vid_4vids_01_player.width );
                $('.vid_4vids_01 #contenedor').height( vid_4vids_01_player.height );
                
            }
        }
    
        function changePlayVideo(galleryIcon){
        
            if( typeof( modVP ) != "undefined"){
                
                if(modVP.isPlaying())
                    modVP.stop();
                
                var player = new BCEsmasPlayer("myExperience",643082227001,"contenedor",params,options);
                player.removePlayer();
                player.addPlayer();
                openerSkin();                
                modVP.play();
            }
            
            var imgContainer = $(galleryIcon).parents('.vid_4vids_01');
            
            setPlayerSize();                    
            $(imgContainer).find('#theaterContainer').show();
            $(imgContainer).find('#img_stage_01_IMG').hide();
            $(imgContainer).find('#video_play').hide();
            $(imgContainer).find('.overlay').hide();
        }
        
        //Begin: Swipe         
        var altWdgResult01 = 0;
        if ($(window).width() < 978 && $(window).width() > 624){
            altWdgResult01 = 568;
        }
        else{
            altWdgResult01 = 156;
        } 
        
        $('.vid_4vids_01 #carrusel' ).bind('swipeup',function(){                
            $(this).animate({
                    'scrollTop': $(this).scrollTop() + altWdgResult01 + 7
                }, 500);
        });
        $('.vid_4vids_01 #carrusel').bind('swipedown',function(){
            $(this).animate({
                    'scrollTop': $(this).scrollTop() - altWdgResult01 - 7
                }, 500);
        }); //End: Swipe
        
        //Begin: Degraded show/hidden
        $('.vid_4vids_01 #carrusel').scroll(function() {
            var altura = $('.vid_4vids_01 #carrusel').height();                        
            $scrollTop = parseInt($('.vid_4vids_01 #carrusel').scrollTop()) + parseInt($('.vid_4vids_01 #carrusel').height());            
            if( parseInt($scrollTop) > parseInt(altura)) {
                    $('.vid_4vids_01 .carruselContainer .degraded').css("visibility","hidden");                     
              }
            else{
                 $('.vid_4vids_01 .carruselContainer .degraded').css("visibility","visible");                
            }
        });  //End: Degraded
        
        //--------------------------------------------------------------------------
        //--SCROLL - desplazamiento de las imágenes del videos
        //--------------------------------------------------------------------------
        $('.vid_4vids_01').find('a.left').click(function(e) {            
            e.preventDefault();
            console.log('izquierda');
            $(this).parent().siblings('.carruselContainer').animate({                
                        'scrollLeft': $(this).parent().siblings('.carruselContainer').scrollLeft() - $(this).parent().siblings('.carruselContainer').width()
                });
        });
                
        $('.vid_4vids_01').find('a.right').click(function(e) {            
            e.preventDefault();
            console.log('derecha');
            $(this).parent().siblings('.carruselContainer').animate({                
                'scrollLeft': $(this).parent().siblings('.carruselContainer').scrollLeft() + $(this).parent().siblings('.carruselContainer').width()
            });            
        });
        
        //---------------------------------------------------------------------
        //--ACTIVAR / DESACTIVAR las flechas del carrusel
        //---------------------------------------------------------------------
        $('.vid_4vids_01').find('.carruselContainer').scroll(function(e) {                   
            var $v4v_position = $('.vid_4vids_01').find('.carruselContainer').scrollLeft();
            var $v4v_widthTotal = $('.vid_4vids_01').find('.carruselContainer ul').width();
            var $v4v_med = $('.vid_4vids_01').find('.carruselContainer').width() + $v4v_position;
            
            //Flecha Izquierda...
            if($v4v_position == 0)
            {
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').removeClass('activo');
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').addClass('desactivo');
            }
            else
            {
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').removeClass('desactivo');
                $('.vid_4vids_01 .type1a .arrows a i.tvsa-double-caret-left').addClass('activo');
            }  
            
            //Flecha derecha...
            if($v4v_med == $v4v_widthTotal)
            {
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').removeClass('activo');
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').addClass('desactivo');
            }
            else
            {
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').removeClass('desactivo');
                $('.vid_4vids_01 .type1a .arrowRight a i.tvsa-double-caret-right').addClass('activo');
            }
            
        });
         // Support the click event on video
        $('.vid_4vids_01 .monitor').click(function(e) {
            e.preventDefault();
            $('.vid_4vids_01 .iconGallery').removeClass('selectedGallery');
            $(this).children('.iconGallery').addClass('selectedGallery').addClass('not_change');
        });
    }(jQuery, Televisa));
});
