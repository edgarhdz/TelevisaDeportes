img_galry_03_js = new Object();

img_galry_03_js.delaySecs = 3; // Delay entre cambio y cambio de imagenes en el autoplay
img_galry_03_js.intervalID;
img_galry_03_js.totalLis; // Numero total de li's del carrusel 1
img_galry_03_js.jsonurl = "../json/img_galry_01.php?g="; // Ajax Json URL
img_galry_03_js.anchoUL_carrusel;
img_galry_03_js.idGallery;

var btnPlay;


//head.ready(function() {
$(document).ready(function() {
    var divs = $('.img_galry_03 .type1a .carruselcontainer ul');
    for (var j = 0; j < divs.length; j++) {
        var lis = $(divs[j]).find("li");
        var margin_l = 0;
        var margin_r = 0;
        var ulWidth = 0;
        for (var i = 0; i < lis.length; i++) {
            margin_l += parseInt($(lis[i]).css("margin-left"));
            margin_r += parseInt($(lis[i]).css("margin-right"));
            ulWidth += $(lis[i]).width();
        }
        $(divs[j]).width(ulWidth + margin_l + margin_r + 10);
    }

    // Si entran en movil se quita el ancho fijo que pone el carrusel al 'ul'
    $(window).load(function() {
        if ($(window).width() <= 590) {
            $('.img_galry_03 #carrusel2 #carrusel2_ul').css('width', $(window).width());
        }
        else {
            img_galry_03_js.anchoUL_carrusel = $('.img_galry_03 #carrusel2 #carrusel2_ul').width();
            //alert(img_galry_03_js.anchoUL_carrusel);
        }

        // Si son menos de 7 elem en el 1er carrusel no se muestran las flechas
        if ($('.img_galry_03 #carrusel1_ul li').length < 7) {


            $('.img_galry_03 #carrusel1 .arrowLeft a').html('&nbsp;');
            $('.img_galry_03 #carrusel1 .arrowRight a').html('&nbsp;');
        }
    });

    // Si son mas de 3 elem en el 2do carrusel se muestran las flechas
    if ($('.img_galry_03 #carrusel2_ul li').length < 4) {

        $('.img_galry_03 #carrusel2 .arrowLeft a').html('&nbsp;');
        $('.img_galry_03 #carrusel2 .arrowRight a').html('&nbsp;');
    }


    // Bind del click en el boton de Play o pausa
    $('.play').bind('click', function(event) {
        event.preventDefault();

        btnPlay = $(this);
        // si esta corriendo el autoplay
        if ($(this).hasClass('stop')) {
            //alert(img_galry_03_js.intervalID);
        	$('.img_galry_03 .stop i').removeClass('tvsa-pause');
        	$('.img_galry_03 .stop i').addClass('tvsa-play');
        	
            $(this).removeClass('stop');
            $(this).addClass('play');
            
            clearInterval(img_galry_03_js.intervalID);
        }
        else {
        	$('.img_galry_03 .play i').removeClass('tvsa-play');
        	$('.img_galry_03 .play i').addClass('tvsa-pause');
        	
        	$(this).removeClass('play');
            $(this).addClass('stop');            
            
            //$('.img_galry_03 #firstImg').trigger('click');
            img_galry_03_js.intervalID = window.setInterval(function() {
                findNextImgGallery(btnPlay)
            }, (img_galry_03_js.delaySecs * 1000));
        }
    });

    var imgSelected = $(".img_galry_03 .type1a div ul li a div.selectedGallery");
    // Bind del carrsuel 2 con la galeria escogida
    $('.img_galry_03 .galleryLink').click(function(event) {

        // Si es version tablet o desktop
        if ($(window).width() > 590) {
            event.preventDefault();
            img_galry_03_js.idGallery = $(this).attr('galleryid');

            // Quitamos el estilo y agregamos el estilo "sellecionado" a la imagen que le dieron click
            $(this).parents('.img_galry_03').find('.galleryLink').each(function() {
                $(this).find('div.selectedGallery').removeClass('selectedGallery');
            });

            $(this).find('.iconGallery').addClass('selectedGallery');
            imgSelected = $(this).find('.iconGallery');
            fillCarousel(img_galry_03_js.idGallery, '', $(this).parents('.img_galry_03'));
        }
        else {
            /*event.preventDefault();	
             var textDesc = $(this).find(".gal_desc").text();
             var imgSrc = $(this).find("img").attr("src");
             $(".img_galry_03 #imgContainer").find("img").attr("src",imgSrc);
             $(".img_galry_03 .overlay .overlay2 p#imageDescription").text(textDesc);*/
        }

    });
    // Boton del VER MAS (Movil)
    $('.img_galry_03 #img_galry_03_btnverMas').click(function() {

        $(this).parents('.img_galry_03').find('#carrusel2 #carrusel2_ul li').show();
        $(this).hide();
    });



    // Sacamos el total de los li's para saber cuando hacer scroll
    img_galry_03_js.totalLis = $('.img_galry_03 #carrusel2_ul li').length;


    if ($(window).width() < 624) {
        $(".img_galry_03 .type1a div ul li a div.iconGallery").addClass("selectedGallery");
    }
    $(window).resize(function() {
        //alert(ancho);
        if ($(window).width() < 590) {

            $('.img_galry_03 #carrusel2 #carrusel2_ul').css('width', 'auto');
        }
        else {
            $('.img_galry_03 #carrusel2 #carrusel2_ul').css('width', img_galry_03_js.anchoUL_carrusel);
        }
        if ($(window).width() <= 624) {
            $(".img_galry_03 .type1a div ul li a div.iconGallery").addClass("selectedGallery");
        }
        else {
            if ($(window).width() > 624) {
                $(".img_galry_03 .type1a div ul li a div.iconGallery").removeClass("selectedGallery");
                $(imgSelected).addClass("selectedGallery");
            }
        }
        if ($(window).width() > 624) {
            var divs = $('.img_galry_03 .type1a .carruselcontainer ul');
            for (var j = 0; j < divs.length; j++) {
                var lis = $(divs[j]).find("li");
                var margin_l = 0;
                var margin_r = 0;
                var ulWidth = 0;
                for (var i = 0; i < lis.length; i++) {
                    margin_l += parseInt($(lis[i]).css("margin-left"));
                    margin_r += parseInt($(lis[i]).css("margin-right"));
                    ulWidth += $(lis[i]).width();
                }
                $(divs[j]).width(ulWidth + margin_l + margin_r + 10);
            }
        }

    });




    ////////////////////////// Se llenan los li's del carrusel UNO /////////////////////////////////



    var hash = window.location.hash;

    // obtenemos el photoID del hash
    if (hash.indexOf('ph=') > -1) {
        var index = hash.indexOf('ph=');

        var photoid = hash.substring(index + 3, index + 4);
        //alert(photoid);
    }


    // obtenemos el galleryID del hash
    if (hash.indexOf('g=') > -1) {
        var index = hash.indexOf('g=');
        //alert(index);
        img_galry_03_js.idGallery = hash.substring(index + 2, index + 3);
        //alert(img_galry_03_js.idGallery);
    }
    else {
        // Sino viene ninguna galeria por el hash obtnemos el id del PRIMER elemento del CARRUSEL 2
        img_galry_03_js.idGallery =  1;  //$('.img_galry_03 #carrusel2_ul .galleryLink:first').attr('galleryid');
    }

    if (typeof($('img_galry_03')) != "undefined")
        fillCarousel(img_galry_03_js.idGallery, photoid, '');


    $(".img_galry_03 #carrusel2 .arrowRight a").addClass("wdg_carousa_right sprite carouselArrowRight");
    $(".img_galry_03 #carrusel2 .arrowLeft a").addClass("wdg_carousa_right sprite carouselArrowLeft");
    $(".img_galry_03 #carrusel1 .arrowRight a").addClass("wdg_carousa_right sprite carouselArrowRight");
    $(".img_galry_03 #carrusel1 .arrowLeft a").addClass("wdg_carousa_right sprite carouselArrowLeft");

    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $(".img_galry_03 .type1a .carruselcontainer ul li .gal_desc").css({"display": "none"});
        var t = setTimeout(function() {
            $(".img_galry_03 .type1a .carruselcontainer ul li .gal_desc").css({"display": "block"})
        }, 5000);
    }
});


// funcion que encuentra la siguiente imagen a hacer click tomando en cuenta la que está YA seleccionada
function findNextImgGallery(btnPlay) {


    //$(btnPlay).css('border', '1px solid red');

    // Buscamos la siguiente imagen
    //var obj = $('.img_galry_03 .carrusel1_img  img.img_galry_03_selected').closest('li').next().find('.carrusel1_img');
    var obj = $(btnPlay).parents('.img_galry_03').find('.carrusel1_img  img.img_galry_03_selected').closest('li').next().find('.carrusel1_img');

    if (obj.is("a")) {
        clickGaleria(obj);
    }
    else {

        //$('.img_galry_03 #firstImg').trigger('click');
        var obj = $(btnPlay).parents('.img_galry_03').find('#firstImg');
        clickGaleria(obj);

        resetCarrusel1stImg();
    }


//alert($(obj).attr('id'));
}



function resetCarrusel1stImg() {

    // Animamos el carrusel al inicio
    $('#division_dotted').animate({
        'scrollLeft': 0
    });
}


// Funcion que simula un "click" en una imagen determinada de la galeria
function clickGaleria(obj) {

    // Quitamos la imagen grande
    $(obj).parents('.img_galry_03').find('#img_galry_03_IMG').attr('src', '');


    var imagen = $(obj).attr('img');
    $(obj).parents('.img_galry_03').find('#img_galry_03_IMG').attr('src', imagen);

    // quitamos el borde
    $(obj).parents('.img_galry_03').find('.carrusel1_img img').each(function(index) {
        $(this).removeClass('img_galry_03_selected');
    });

    // ponemos borde al anchor que le dieron click
    $(obj).children('img').addClass('img_galry_03_selected');

    // Cambiamos el texto del Overlay
    setOverlayText($(obj).attr('title'));

    // sacamos el NUMERO DE li que estara activo para saber si hacemos SCROLL en el carrusel1
    var selectedIndex = $(obj).parents('.img_galry_03').find('.carrusel1_img  img.img_galry_03_selected').closest('li').index() + 1;
    if (selectedIndex == 7 || selectedIndex == 14 || selectedIndex == 21 || selectedIndex == 28 || selectedIndex == 35) {

        var rightArrow = $('.img_galry_03 #carrusel1 #rightC1');
        //$(rightArrow).trigger('Pointer.DOWN');
        $(rightArrow).mousedown();

    }

    var photo_id = $(obj).children('img').attr('id');

    // cambiamos el link de compartir de fb, tw y pn
    if (window.location.href.indexOf('#') > 0)
        var shareUrl = window.location.href.substr(0, window.location.href.indexOf('#'));
    else
        var shareUrl = window.location.href;

    shareUrl = shareUrl + '#g=' + img_galry_03_js.idGallery + '&ph=' + photo_id;


    var shareTitle = "Fotogaleria%20Televisa";

    //$('.img_galry_03 #lnk_pinterest').attr('href', $('.img_galry_03 #hidden_pinterest').attr('href')+shareUrlBase+shareUrl);
    $('.img_galry_03 #lnk_twitter').attr('href', 'http://twitter.com/share?text=' + shareTitle + '&url=' + shareUrl);
    $('.img_galry_03 #lnk_facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl + '&t=' + shareTitle);

}



// funcion que llena el primer carrusel con un id de galeria 
function fillCarousel(idGallery, idSelPhoto, galleryObj) {

    //alert(img_galry_03_js.idGallery);

    if ($.isEmptyObject(galleryObj))
        var galleryObj = $('.img_galry_03');

    // quitamos todos los li's del carrusel
    $(galleryObj).find('#carrusel1_ul').children().remove();

    // Quitamos la imagen grande
    $(galleryObj).find('#img_galry_03_IMG').attr('src', '');



    var jsonRequest = img_galry_03_js.jsonurl + idGallery


    // Hacemos la consulta json
    $.getJSON(jsonRequest, function(data) {

        var items = [];
        var contador = 1;
        var primeraimg = '';

        // Recorremos la info por CADA foto regresada
        $.each(data.photos, function(id, photo) {

            var selected = "";

            // Ponmos la imagen grande
            $(galleryObj).find('#img_galry_03_IMG').attr('src', photo.image);

            // ponemos la clase a la 1era imagen
            if (contador == 1)
                primeraimg = 'firstImg';
            else
                primeraimg = '';

            // ponemos el titulo del imagen en el recuadro blanco
            setOverlayText(photo.title);


            // Guardamos el id de la photo seleccionada VIA HASH (sino abajo seleccionaremos la 1era imagen de la galeria selccionada/default)
            if (parseInt(idSelPhoto) > 0 && idSelPhoto == photo.id) {

                selected = 'img_galry_03_selected';
            }


            $(galleryObj).find('#carrusel1_ul').append('<li><a href="javascript: void(0);" img="' + photo.image + '" title="' + photo.title + '" class="carrusel1_img" id="' + primeraimg + '"><img src="' + photo.thumb + '" alt="' + photo.title + '" class="' + selected + '" id="' + photo.id + '"></a></li>');
            //alert(photo.thumb);

            contador++;

        });



        // agregamos el comportamiento del carrusel a los elementos agregados anteriormente
        doCarruselTelevisa('.img_galry_03 #division_dotted', jQuery, Televisa);


        // Agregamos el evento click a los elementos anteriormente generados al vuelo
        $(galleryObj).find('.carrusel1_img').live('click', function() {


            // Quitamos el timer del autoplay
            //alert(img_galry_03_js.intervalID);
            clearInterval(img_galry_03_js.intervalID);

            // reseteamos los botones
            $('#videobtn').removeClass('stop');
            $('#videobtn').addClass('play');

            clickGaleria(this);
            setOverlayText($(this).attr('title'));

        });

        // simulamos el click de la imagen correspondiente, ya sea la default o la escogida via hash
        if (parseInt(idSelPhoto) > 0) {

            var obj = $(galleryObj).find('.carrusel1_img  img.img_galry_03_selected').parent();
        }
        else {
            var obj = $(galleryObj).find('#firstImg');
        }

        clickGaleria(obj);

        //resetCarrusel1stImg();

    });
}



function setOverlayText(texto) {
    $(btnPlay).parents('.img_galry_03').find('#imageDescription').text(texto);
}





function doCarruselTelevisa(id, $, T) {

    var $m = $(id),
            animationDelay = 500;

    $m.each(function() {

        var $items = $(this).find('ul li'),
                padding = ($(this).parent().hasClass('type1c')) ? 41 : 0,
                Pointer = {
            UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
            DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
        },
        $parent = $(this);

        $(this).find('ul').width(($items.outerWidth(true) + padding) * $items.length);

        if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
                !(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))) { // And the version of the OS is bigger than 4.x...
            $(this).addClass('iOS');
        } else {
            // Touch devices (non-iOS or iOS < 5)
            var isWinPhone = /Windows Phone/.test(navigator.userAgent);

            if (T.getIsTouchDevice() && !T.isBlackBerryCurve()) {

                // Hide the arrows if it's not carouseltype1b
                if (!$(this).parent().hasClass('type1b')) {
                    $(this).parent().find('div:first-child ul').hide();
                }

                $(this).bind('touchstart', function(e) {
                    var clientX = e.originalEvent.changedTouches[0].clientX;

                    $(this).attr('startX', clientX);
                    $(this).attr('down', true);
                    $(this).attr('scrollLeft', $(this).scrollLeft());
                });

                $(this).bind('touchend', function(e) {
                    if ($(this).attr('active') === 'true') {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    $(this).attr('active', false);
                    $(this).attr('down', false);
                });

                $(this).bind('touchmove', function(e) {
                    var clientX = e.originalEvent.changedTouches[0].clientX,
                            sx = $(this).attr('startX') >> 0,
                            ex = clientX;

                    if (Math.abs(sx - ex) > 10) {
                        $(this).attr('active', true);
                    }

                    if ($(this).attr('active') === 'true') {
                        e.preventDefault();

                        $(this).scrollLeft(($(this).attr('scrollLeft') >> 0) + (sx - ex));
                    }

                    return false;
                });
            } else {
                // Force the arrows to show up
                $(this).parent().addClass('showArrows');
            }
        }

        // Support the click event on arrows
        $parent.parent().find('a.left').bind(Pointer.DOWN, function() {
            $parent.animate({
                'scrollLeft': $parent.scrollLeft() - $parent.width()
            }, animationDelay);
        });

        $parent.parent().find('a.right').bind(Pointer.DOWN, function() {
            $parent.animate({
                'scrollLeft': $parent.scrollLeft() + $parent.width()
            }, animationDelay);
        });



    });

}