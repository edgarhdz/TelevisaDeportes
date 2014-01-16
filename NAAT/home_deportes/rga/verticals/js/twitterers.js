;jQuery(function($){ 
    (function($,T){
        $('.twitterers').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('ul')
            ;
            
            $this.find('div:last-child div a').click(function(event){
                event.preventDefault();
            });
            
            $this.find('div:last-child div:first-child a').bind(Pointer.DOWN,function(){
                
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
                
            });
            
            $this.find('div:last-child div:last-child a').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
    })($,Televisa);
});
