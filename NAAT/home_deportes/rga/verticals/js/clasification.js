;jQuery(function($){ 
    (function($,T){
        $('.clasificaction').each(function(ix,element){
            
            var $this = $(this), 
                Pointer = {
                    UP: (T.getIsTouchDevice()) ? 'touchend' : 'mouseup',
                    DOWN: (T.getIsTouchDevice()) ? 'touchstart' : 'mousedown'
                }, 
                $theUl = $this.find('ul')
            ;
            
            $this.find('a.up, a.down').click(function(event){
                event.preventDefault();
            });
            
            $this.find('a.up').bind(Pointer.DOWN,function(){
                
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() - $theUl.height()
                }, 500);
                
            });
            
            $this.find('a.down').bind(Pointer.DOWN,function(){
                $theUl.animate({
                    'scrollTop': $theUl.scrollTop() + $theUl.height()
                }, 500);

            });
            
        });
    })($,Televisa);
});
