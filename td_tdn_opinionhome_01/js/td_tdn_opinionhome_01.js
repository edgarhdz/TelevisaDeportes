$(document).ready(function(){
	/**
	 * @Encargado de maximizar el video en caso de reproducción.
	 */
	 //valido que se ecuentre en desktop
	 
	 $('.td_tdn_opinionhome_01 .vid_player_02 #videobtn').click(function(event){
            event.preventDefault();
		if( $(window).width() > 959){
			//Oculta contenedor a la derecha del reproductor (2 componentes)
			$('.td_tdn_opinionhome_01 .main .c3').hide();
			$('.td_tdn_opinionhome_01 .vid_player_02 .tvsa-expand').hide(); 
			//Agranda el contenedor del componente de video para que ocupe el ancho de la pantalla (main).
			$('.td_tdn_opinionhome_01 .main .c2').css('width','100%');
			//Ajusto medidas de detalle del componente de video
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt1').css('width','61%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt2').css('width','100%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt3').css('width','100%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .content_text').css('width','30%');
		}
	 });
	 
	  $('.td_tdn_opinionhome_01 .vid_player_02 #expandbtn').click(function(event){
            event.preventDefault();
		if( $(window).width() > 959){
			//Oculta contenedor a la derecha del reproductor (2 componentes)
			$('.td_tdn_opinionhome_01 .main .c3').hide(); 
			//Agranda el contenedor del componente de video para que ocupe el ancho de la pantalla (main).
			$('.td_tdn_opinionhome_01 .main .c2').css({width:'100%'});
			$('.td_tdn_opinionhome_01 .main .c2 img').css({height: '574px'});

			//Ajusto medidas de detalle del componente de video
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt1').css('width','61%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt2').css('width','100%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt3').css('width','100%');
			$('.td_tdn_opinionhome_01 .vid_player_02 .content_text').css('width','30%');
			$('.td_tdn_opinionhome_01 .vid_player_02 #videobtn').css('margin-top', '89px');
			$('.td_tdn_opinionhome_01 .vid_player_02 #expandbtn').css('visibility', 'hidden');
			$('.td_tdn_opinionhome_01 .vid_player_02 #contractbtn').css('visibility', 'visible');
		}
	 });
	$('.td_tdn_opinionhome_01 .vid_player_02 #contractbtn').click(function(event){
            event.preventDefault();
		if( $(window).width() > 959){
			//Oculta contenedor a la derecha del reproductor (2 componentes)
			$('.td_tdn_opinionhome_01 .main .c3').show(); 
			//Agranda el contenedor del componente de video para que ocupe el ancho de la pantalla (main).
			$('.td_tdn_opinionhome_01 .main .c2').css({width:'624'});
			$('.td_tdn_opinionhome_01 .main .c2 img').css({height: '350'});

			//Ajusto medidas de detalle del componente de video
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt1').css('width','217px');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt2').css('width','270px');
			$('.td_tdn_opinionhome_01 .vid_player_02 .txt3').css('width','270px');
			$('.td_tdn_opinionhome_01 .vid_player_02 .content_text').css('width','270px');
			$('.td_tdn_opinionhome_01 .vid_player_02 #videobtn').css('margin-top', '-135px');
			$('.td_tdn_opinionhome_01 .vid_player_02 #expandbtn').css('visibility', 'visible');
			$('.td_tdn_opinionhome_01 .vid_player_02 #contractbtn').css('visibility', 'hidden');
		}
	 });
});