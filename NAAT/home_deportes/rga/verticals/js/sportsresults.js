;(function() {
    $(document).ready(function() {
        var current, next, prev, menu = $(".sportsResults .menu");
        var boxes= $(".sportsResults .boxes");
        var nextprevarr = $('.sportsResults .sportsPrevNext');
        var gallerySwipe = null;
        var sportsResultsSwipe = $('.sportsResults .sportsResultsSwipe');

        menu.find(".show").bind("click",function(event){
            event.preventDefault();
            toggleExpand();
        });

        menu.find(".hide").bind("click",function(event){
            event.preventDefault();
            toggleExpand();
        });

        function toggleExpand(){
            if(menu.hasClass("closed") && boxes.hasClass("closed")){
                menu.removeClass("closed");
                menu.addClass("expanded");
                boxes.removeClass("closed");
                boxes.addClass("expanded");
                nextprevarr.removeClass("closed");
                nextprevarr.addClass("expanded");
            }else{
                menu.removeClass("expanded");
                menu.addClass("closed");
                boxes.removeClass("expanded");
                boxes.addClass("closed");
                nextprevarr.removeClass("expanded");
                nextprevarr.addClass("closed");
            }
        }
        
        $('.sportsResults').show();
        
        //For mobile devices, initialize swipe
        if ( Modernizr.cssanimations && Modernizr.touch ) { // Should test for csstransforms instead, but I am assuming that if a browser supports annimations, it will support transforms 
            var sliderContainer = sportsResultsSwipe.get(0);
            gallerySwipe = new Swipe(sliderContainer,{callback:null});
        }

        menu.removeClass("expanded");
        menu.addClass("closed");
        boxes.removeClass("expanded");
        boxes.addClass("closed");
        nextprevarr.removeClass("expanded");
        nextprevarr.addClass("closed");

        //Handle prev and next arrows
        $(nextprevarr.find('a').get(1)).click(function(event){
            event.preventDefault();
            //Left
            if(gallerySwipe){
                gallerySwipe.prev();
            }else{
                current = sportsResultsSwipe.find('li:visible');
                prev = current.prev();
                if (prev.length){
                    current.hide();
                    prev.show();
                }

            }
            
            
        });
        
        $(nextprevarr.find('a').get(0)).click(function(event){
            event.preventDefault();
            //Right
            if(gallerySwipe){
                gallerySwipe.next();
            }else{
                current = sportsResultsSwipe.find('li:visible');
                next = current.next();
                if (next.length){
                    current.hide();
                    next.show();
                }
            }

        });
        
        
    });
}());
