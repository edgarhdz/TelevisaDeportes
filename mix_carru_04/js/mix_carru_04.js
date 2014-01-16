//$(document).ready(function() { //Html esencial y DOM
$(window).load(function() {	 //Imágenes y demas HTML
   
	var elem = document.getElementById('mix_carru_04_swipe');
    var $time = $('.mix_carru_04 .type2b2_02').attr('data-time');
    window.mySwipe = Swipe(elem, {
        startSlide: 0,
        auto: $time, 
        continuous: true, 
        callback: function(index, element) { 
            /** inicia seccion para activar el bullet actual **/
            $(".bullets_02 ul li").each(function(){
                id = $(this).attr("id"); 
                if("bullet_"+index == id) 
                {
                    $(this).removeClass('background-color4');
                    $(this).addClass('background-color1');
                }
                else 
                {
                    $(this).removeClass('background-color1');
                    $(this).addClass('background-color4');
                }
            });   
            /** termina seccion para activar el bullet actual **/  

            /** inicia seccion para activar el thumb_ actual **/
            $(".galleryThumbs li").each(function(){
                id_thumb = $(this).attr("id"); 
                if("thumb_"+index == id_thumb)  
                { 
                    $(this).addClass("active");
                    title_item = $("#"+id_thumb +" a").attr('data-title'); 
                    $(".galleryCaption_02 h4").html(title_item);
                } 
                else 
                { $(this).removeClass("active"); }
            });    
            /** termina seccion para activar el thumb_ actual **/
        },
        transitionEnd: function(index, element) {} 
    });  
 
    /** Evento click para los thumbs **/
    $(".galleryThumbs li").click(function(e){
        e.preventDefault();
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 0);                    
    });  

    var clickEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $(".galleryThumbs li").bind(clickEvent, obtener_foto); 

    function obtener_foto()   
    { 
        var id_actual = $(this).attr('id');
        id_actual = id_actual.split("_");  
        id_actual = id_actual[1]; 
        window.mySwipe.slide(parseInt(id_actual), 0);  
    }

});
 

