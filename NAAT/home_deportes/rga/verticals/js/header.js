;(function(T, $, Modernizr) {

    var getRealHeight = function($what) {
        var prevStyle = $what.attr('style'),
            value = $what.css({
                position: 'absolute',
                top: '-100%',
                visibility: 'hidden',
                height: 'auto'
            }).height();
        if (prevStyle) {
            $what.attr('style', prevStyle);
        } else {
            $what.removeAttr('style');
        }
        return value;
    };

    var onDocumentReady = function() {

        // TODO: refactor for a better approach

        var $parent = $('header.main'),
            $sectionHeader = $parent.children('div.section'),
            $links = $parent.find('a'),
            $nav = $parent.children('nav').children('ul'),
            $search = $parent.children('.search'),
            $subsections = $sectionHeader.children('.subsections'),
            $sectionLink = $sectionHeader.find('h2 a'),
            $superDropdowns = $parent.children('.toggleable').find('.wrapper > div'),
            navHeight = getRealHeight($nav),
            subsectionsHeight = getRealHeight($subsections),
            searchHeight = getRealHeight($search);

        $links.filter('.mobile-menu').bind('click', function(evt) {
            evt.preventDefault();
            if ($parent.hasClass('show-menu')) {
                $parent.removeClass('show-menu');
                $nav.css('height', 0);
            } else {
                $parent.addClass('show-menu');
                $nav.css('height', navHeight);
            }
        });

        $links.filter('.search').bind('click', function(evt) {
            evt.preventDefault();
            if ($parent.hasClass('show-search')) {
                $parent.removeClass('show-search');
                $search.css('height', 0);
            } else {
                $parent.addClass('show-search');
                $search.css('height', searchHeight);
            }
        });

        //Event handlers for mobile menu navigation links
        $nav.on('click', 'a', function(evt) {
            var $anchor = $(this),
                section = $anchor.parent().attr('class');

            if (T.getDeviceSize() !== 'small') {
                evt.preventDefault();

                $superDropdowns.slideUp();
                if ($anchor.hasClass('active')) {
                    $anchor.removeClass('active');
                } else {
                    $nav.find('a.active').removeClass('active');
                    $anchor.addClass('active');
                    $superDropdowns.filter('.' + section).slideDown();
                }
            }

            // TODO: should I hide header '.section.' + section ? e.g.: .section.news
        });

        $sectionLink.bind('click', function(evt) {
            evt.preventDefault();
            if (T.getDeviceSize() === 'small') {
                if ($sectionLink.hasClass('active')) {
                    $sectionLink.removeClass('active');
                    $subsections.css('height', 0);
                } else {
                    $sectionLink.addClass('active');
                    $subsections.css('height', subsectionsHeight);
                }
            }
        });

        var $dropdownLinks = $parent.find('.dropdown > a');
        $dropdownLinks.bind('click', function(evt) {
            var $anchor = $(this),
                $ul = $anchor.next();
            evt.preventDefault();

            if ($ul.is(':visible')) {
                $anchor.removeClass('active');
                $ul.removeAttr('style');
            } else {
                $dropdownLinks.filter('.active').each(function() {
                    $(this).removeClass('active')
                        .next().removeAttr('style');
                });
                $anchor.addClass('active');
                $ul.show();
            }
        });

        var $dataTriggers = $parent.find('a[data-trigger]'),
            $dataTriggerTargets = $($dataTriggers.map(function(){
                return $(this).data('trigger');
            }).get().join());
        $dataTriggers.bind('click', function(evt) {
            var $anchor = $(this),
                $target = $dataTriggerTargets.filter($anchor.data('trigger'));
            evt.preventDefault();

            $dataTriggers.removeClass('active');
            if ($target.is(':visible')) {
                $anchor.removeClass('active');
                $target.removeAttr('style');
            } else {
                $dataTriggerTargets.removeAttr('style');
                $anchor.addClass('active');
                $target.show();
            }
        });

        var $tabsContainer = $parent.find('.dropdown-content .tabs'),
            $tabsLinks = $tabsContainer.find('.filter a'),
            $tabs = $tabsContainer.find('.container').children();
        $tabsLinks.bind('click', function(evt) {
            var $anchor = $(this);
            evt.preventDefault();
            $tabsLinks.parent().removeClass('active');
            $anchor.parent().addClass('active');
            $tabs.removeClass('selected').filter('[data-tab="' + $anchor.data('tab') + '"]').addClass('selected');
        });

        var lastSize = null;
        lastSize = T.getDeviceSize();
        $(T).on('resize.Televisa', function() {
            if (lastSize !== T.getDeviceSize()) {
                lastSize = T.getDeviceSize();
                // reset measures
                navHeight = getRealHeight($nav);
                subsectionsHeight = getRealHeight($subsections);
                searchHeight = getRealHeight($search);
                // clear style
                $subsections.add($search).add($nav).removeAttr('style');
                $parent.removeClass('show-search show-menu');
                $sectionLink.removeClass('active');
            }
        });

    };

    $(onDocumentReady);

}(Televisa, jQuery, Modernizr));
