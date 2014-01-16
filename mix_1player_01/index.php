<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<link href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen" rel="stylesheet"  type="text/css">
<link href="../str_pleca_01/css/str_pleca_01_tablet.css"   media="screen and (min-width: 39em)"  rel="stylesheet" type="text/css">
<link href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)" rel="stylesheet" type="text/css">

<!-- BEGIN: mix_1player_01 -->
<div class="mix_1player_01">    	  
    <div class="left_div">
        <div class="mix_img">
            <img src="http://lorempixel.com/280/370/sports" alt="Toño de Valdez"/>
        </div>
			<div class="overlay">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				<span> / Foto: Emilio Ascarraga</span>
			</div>	
    </div>
    <div class="right_div">
        <div class="art_right_text">
            <h1 class="textcolor-title1">Christian Benitez</h1>			
			<span class="textcolor-title4"><i class="tvsa-facebook facebook"></i> /AntoniodeValdes</span>		
			<span class="textcolor-title4"><i class="tvsa-twitter twitter"></i> @adevaldes</span>          
        </div>
        <div class="art_contenido">
            <p class="began"><span>Nombre Completo: </span>Christian Rogelio Benitez Betancourt</p>
            <p class="began"><span>Posición: </span>Director Técnico</p>
            <p class="began"><span>Fecha de nacimiento: </span>13/11/1965</p>
            <p class="began"><span>Lugar de nacimiento: </span>Guadalajara, Jalisco</p>
            <p class="began"><span>Nacionalidad: </span>Mexicana</p>
        </div>
    </div>
	<div class="descripcion">
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>	
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
	</div>
    <div style="clear: both;"></div>
</div>
<!-- END: mix_1player_01 -->
<?
// footer
require_once("../global/footer.php");
?>