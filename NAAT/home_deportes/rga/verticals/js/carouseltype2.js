/* BEGIN: carouseltype2 */
;(function($, T) {
    if (!$.browser.opera) {

        $('select.select').each(function(){
            var title = $(this).attr('title');

            if ($('option:selected', this).val().length > 0) {
                title = $('option:selected', this).text();
            }

            $(this)
                .css({
                        'z-index': 10,
                        'opacity': 0,
                        '-khtml-appearance': 'none'
                    })
                    .after('<span class="select">' + title + '<span class="arrow">></span></span>')
                    .change(function(){
                        var val = $('option:selected', this).text();

                        $(this).next().html(val + '<span class="arrow">></span>');
                    });
        });
    };

    var $m = $('.carouseltype2 div:last-child'),
        animationDelay = 750;

    $m.each(function() {

        var $items = $(this).find('ul li'),
            padding = 14.35,
            Pointer = {
                UP: (T.getIsTouchDevice() && !T.isBlackBerryCurve()) ? 'touchend' : 'mouseup',
                DOWN: (T.getIsTouchDevice() && !T.isBlackBerryCurve()) ? 'touchstart' : 'mousedown'
            },
            $parent = $(this);

        $(this).find('ul').width(($items.width() + padding) * $items.length);

        if (/iPhone|iPod|iPad/.test(navigator.userAgent) && // If it's an iPad, iPod or iPhone
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

}(jQuery, Televisa));
/* END: carouseltype2 */