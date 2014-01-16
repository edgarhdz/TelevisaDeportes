;jQuery(function($){ 
    (function($,T){

		
		// Click  de Votar
		$('.wdg_poll_02 .linkVotar, .wdg_poll_02 .buttonVotar').click(function(event){
			
			event.preventDefault();
			
			// Obtenemos los resultados
			var r1 = $('.wdg_poll_02 input[name=poll]:radio:checked').val();
			
			
			// mostramos los resultados
			$('.wdg_poll_02 #score1').show();
			$('.wdg_poll_02 #score2').show();
			$('.wdg_poll_02 #score3').show();
			
			// cambiamos el boton votar
			$('.wdg_poll_02 .buttonVotar').removeClass('background-color2');			
			$('.wdg_poll_02 .buttonVotar').addClass('buttonVotado');
			$('.wdg_poll_02 .buttonVotar').removeClass('buttonVotar');
			
			var totalVotos = 1500; 
			$('.wdg_poll_02 .buttonVotado .linkVotar').text('Total de votos ' + totalVotos);
			
			// Quitamos los radio buttons
			$('.wdg_poll_02 input[name=poll]:radio').hide();
			
			
			// Porcentajes
			var p1= '15.5';
			var p2= '45.5';
			var p3= '55.5';
			
			//Colocamos la grafica y el porcentaje
			$('.wdg_poll_02 #percentage1').text(p1 + '%');
			$('.wdg_poll_02 #percentage2').text(p2 + '%');
			$('.wdg_poll_02 #percentage3').text(p3 + '%');
			
			
			// ponemos las clases segun corresponda
			$('.wdg_poll_02 #percentage1').addClass('rate2');
			$('.wdg_poll_02 #percentage2').addClass('rate2');
			$('.wdg_poll_02 #percentage3').addClass('rate1');
			
			
			// Numero de votos por respuesta
			var res1 = 100;
			var res2 = 200;
			var res3 = 300;
			
			
			$('.wdg_poll_02 #count1').text(res1);
			$('.wdg_poll_02 #count2').text(res2);
			$('.wdg_poll_02 #count3').text(res3);
			
			$('.wdg_poll_02 #count1').addClass('count2');
			$('.wdg_poll_02 #count2').addClass('count2');
			$('.wdg_poll_02 #count3').addClass('count1');
			
			$('.wdg_poll_02 .poll .col2 .count').show();
			
			
			// Creamos las barras o graficas
			// 137px es el tope maximo del ancho de la barra
			var graph1 = (p1 * 530) / 100;
			var graph2 = (p2 * 530) / 100;
			var graph3 = (p3 * 530) / 100;
			
			$('.wdg_poll_02 #graph1').width (graph1);
			$('.wdg_poll_02 #graph2').width (graph2);
			$('.wdg_poll_02 #graph3').width (graph3);
			
			$('.wdg_poll_02 #graph1').addClass('graph2');
			$('.wdg_poll_02 #graph2').addClass('graph2');
			$('.wdg_poll_02 #graph3').addClass('graph1');
			
			$('.wdg_poll_02 .graph').show();
			$('.wdg_poll_02 .linetop .gracias').show();
			
			
			$(this).unbind('click');
			
		});
	   
    })($,Televisa);
});