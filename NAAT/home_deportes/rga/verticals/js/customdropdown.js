/*BEGIN: customdropdown*/
;(function() {
    $(document).ready(function() {
        if (!$.browser.opera) {

            $('select.select').each(function(){
                var title = $(this).attr('title');
                if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
                $(this)
                .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                .after('<span class="select">' + title + '<span class="arrow"></span></span>')
                .change(function(){
                    $(this).next().html( val + '<span class="arrow"></span>');
                });
            });
        };
    });
}());


;jQuery(function($){ 
    (function($,T){
        $('.customdropdown').each(function(ix,element){
            
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


/*END: customdropdown*/