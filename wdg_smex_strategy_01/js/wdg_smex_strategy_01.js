$(document).ready(function(){
	function loadAlineacion(el,type) {
		// var url = 'http://mxm.televisadeportes.esmas.com/futbol/data/284/20839/previo_alineacion.js?185';
		var url = '../wdg_smex_strategy_01/' + type + '.json'; // just an example using plain text files
		$.ajax({
		  url: url,
		  dataType: 'json',
		  cache: false,
		  context: document.body,
		  success: function(data) {
			var miHTML = '';
			/* each player */
			for (var i=0;i<data.length;i++) { 
				/* arrow styles based on px values */
				var arrow = '';
				if (data[i]['pos-x'] <= 290 && data[i]['pos-y'] <= 140) arrow = 'grid1';
				else if (data[i]['pos-x'] <= 290 && data[i]['pos-y'] > 140) arrow = 'grid3';
				else if (data[i]['pos-x'] > 290 && data[i]['pos-y'] <= 140) arrow = 'grid2';
				else arrow = 'grid4';
				
				/* each players actions */
				var actions = '';
				for (var a=0;a<data[i]['actions'].length;a++) {
					actions += '<i class="tvsa-'+data[i]['actions'][a]['type']+'"></i>'+data[i]['actions'][a]['minute']+'\'';
				}
				/* the html */
				miHTML += '<span class="player '+data[i]['team']+' '+arrow+'" style="left:'+data[i]['pos-x']+'px;top:'+data[i]['pos-y']+'px;">'+
					'<a href="#" title="'+data[i]['firstname']+' '+data[i]['lastname']+'">'+
						'<span class="number textcolor-title2">'+data[i]['number']+'</span>'+
						'<span class="tooltip">'+
							'<img class="playerfoto" src="http://lorempixel.com/51/38" alt="'+data[i]['firstname']+' '+data[i]['lastname']+'" width="51" height="38" />'+
							'<span class="arrow"></span>'+
							'<span class="name">'+data[i]['firstname']+' '+data[i]['lastname']+'</span>'+
							'<span class="position textcolor-title2">'+data[i]['position']+'</span>'+
							'<em>acciones</em>'+
							'<span class="actions">'+ actions + 
							'</span>'+
						'</span>'+
					'</a>'+
				'</span>';
			}
			el.find('span.players').html(miHTML);
		  }
		}).done(function() {
			// post update
		});
	}
	$('section.wdg_smex_strategy_01').each(function(){
		/* Show Retina Version */
		var root = (typeof exports == 'undefined' ? window : exports);
		var config = {check_mime_type: true};
		root.Retina = Retina;
		function Retina() {}
		Retina.configure = function(options) {
		    if (options == null) options = {};
		    for (var prop in options) config[prop] = options[prop];
		};
		Retina.isRetina = function(){
			var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
	                           (min--moz-device-pixel-ratio: 1.5),\
	                           (-o-min-device-pixel-ratio: 3/2),\
	                           (min-resolution: 1.5dppx)";
			if (root.devicePixelRatio > 1) 
				return true;
			if (root.matchMedia && root.matchMedia(mediaQuery).matches)
				return true;
			return false;
		};
		
		var $parent = $(this); // store component
		
		if (Retina.isRetina()) {
			var low = $parent.find('img.cancha').attr('src');
			$parent.find('img.cancha').attr('src',low.replace('.png','@2x.png'));
		}
		
		// load the first ajax players
		loadAlineacion($parent, 'jornada1');
		
		// attach click event to navigation
		/*$parent.find('ul.menu a').click(function(){
			$(this).parents('ul.menu').find('li').removeClass('active');
			$(this).parent().addClass('active');
			//console.log('loading players...');
			loadAlineacion($parent, 'jornada1');
			return false;
		});//Raro caso*/
		
		// TODO: refactor for a better approach
        var $parent = $('.wdg_smex_strategy_01');
        var $dropdownAnchor = $parent.find('.wdg_smex_strategy_01_dropdown');
		
		
		var $firstItem2 = $('.pleca_inferior .wdg_smex_strategy_01_dropdownlist li:first-child'); 
		$('.pleca_inferior .wdg_smex_strategy_01_dropdowncontent p').html($firstItem2.find('p').html());
        
        $dropdownAnchor.bind('click','touchstart', function(evt) {
            
			evt.preventDefault();
            
			var listItems = $(this).find('.wdg_smex_strategy_01_listcontainer').find('.wdg_smex_strategy_01_dropdownlist');
            var padre = $(this);
            var visibilidad = listItems.css('visibility'); 
            
			if ( visibilidad == 'hidden' ) 
                listItems.css({
                    visibility: 'visible',
                    height: 'auto',
                    'max-height' : '180px',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'         
                });
             else 
                 listItems.css({
                    visibility: 'hidden',
                    height: '0px'
                });
				
          $dropdownAnchor.bind('mouseleave', function(evt) {
            evt.preventDefault();
			var $listItems = $(this).find('.wdg_smex_strategy_01_dropdownlist');
			var visibilidad = $listItems.css('visibility');
            if ( visibilidad == 'visible' ) {
                $listItems.css({
                    visibility: 'hidden',
                    height: '0px'       
                });
            } 
        });
			
			var $dropdownItems2 = $(this).find('.wdg_smex_strategy_01_dropdownlist li');
            $dropdownItems2.bind('click','touchstart', function(evt) {
                evt.preventDefault();
                padre.find('.wdg_smex_strategy_01_dropdowncontent p').html($(this).find('p').html());
                
                // calling the AJAX method
                loadAlineacion($parent, $(this).find('p').data('field'));
				
				// Cambiar Campos //
				
				$('.wdg_smex_strategy_01 table tr td').removeClass();
				$('.wdg_smex_strategy_01 table tr td a').removeClass();
				$('.wdg_smex_strategy_01 table tr td').addClass('largo');
				$('.wdg_smex_strategy_01 table tr td a').addClass('font_menu');
				
				var field = $(this).find('p').attr("data-field");

				
				$('.wdg_smex_strategy_01 .campo').hide();
				$('.wdg_smex_strategy_01 .' + field).show();
				
            });
			
			
        });
	});
	
	/*Desktop*/
	$('section.wdg_smex_strategy_01 .player a').live('mouseenter',function(event){
		event.preventDefault();
			$(this).children('.tooltip').css('display','block');
    });
	$('section.wdg_smex_strategy_01 .player a').live('mouseleave',function(event){
		event.preventDefault();
			$(this).children('.tooltip').css('display','none');
    });
	if($(window).width() < 948)
	{
		/*Tablet-Mobile*/
		$('section.wdg_smex_strategy_01 .player a').live('click','touchstart',function(event){
			event.preventDefault();
			$wss1_status = $(this).children('.tooltip').css('display');
			if($wss1_status == 'block'){
				$(this).children('.tooltip').css('display','none');
			}else{
				$(this).children('.tooltip').css('display','block');
			}
		});
		$('section.wdg_smex_strategy_01 .player a > span').bind("touchstart",function(event){
			event.preventDefault();
		});
	}
});