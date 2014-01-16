<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
require_once("../global/template.php");
?>
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown.css" media="screen and (min-width: 60em)">

<div class="wdg_programacion_01">
	<?php getHtmlComponente("../wdg_scroll_dropdown/index.html"); ?>
	<div class="carrusel"> <a href="#" class="arrow_left"><i class="tvsa-double-caret-left inactive"></i></a>
		<div class="scroll">
			<ul>
				<li class="selected"> <a href="#">
					<div class="dotted-right"> DOMINGO
						<div class="textcolor-title4">Junio 2</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> LUNES
						<div class="textcolor-title4">Junio 3</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> MARTES
						<div class="textcolor-title4">Junio 4</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> MIERCOLES
						<div class="textcolor-title4">Junio 5</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> JUEVES
						<div class="textcolor-title4">Junio 6</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> VIERNES
						<div class="textcolor-title4">Junio 7</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> SABADO
						<div class="textcolor-title4">Junio 8</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> DOMINGO
						<div class="textcolor-title4">Junio 9</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> LUNES
						<div class="textcolor-title4">Junio 10</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> MARTES
						<div class="textcolor-title4">Junio 11</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> MIERCOLES
						<div class="textcolor-title4">Junio 12</div>
					</div>
					</a> </li>
					<li> <a href="#">
					<div class="dotted-right"> MIERCOLES
						<div class="textcolor-title4">Junio 13</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> JUEVES
						<div class="textcolor-title4">Junio 14</div>
					</div>
					</a> </li>
				<li> <a href="#">
					<div class="dotted-right"> VIERNES
						<div class="textcolor-title4">Junio 15</div>
					</div>
					</a> </li>
			</ul>
		</div>
		<a class="arrow_right" href="#"><i class="tvsa-double-caret-right active"></i></a> </div>
	<div class="wdg_programacion_01_status">
		<ul class="wdg_programacion_01_list">
			<li>
				<div class="textcolor-title2 time">10:40</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Más deporte
					<div class="chronic_description">Canal de las estrellas</div>
				</div>
				<a class="textcolor-title1" href="#">Ver más</a> </li>
			<li>
				<div class="textcolor-title2 time">09:50</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Acción
					<div class="chronic_description">Canal 5</div>
				</div>
			</li>
			<li>
				<div class="textcolor-title2 time">08:20</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					America vs. Pumas
					<div class="chronic_description">Canal 2</div>
					<div class="textcolor-title4">Partido amistoso</div>
				</div>
				<a class="textcolor-title1" href="#">Ver más</a> </li>
			<li>
				<div class="textcolor-title2 time">08:14</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Acción
					<div class="chronic_description">Canal 4</div>
				</div>
			</li>
			<li>
				<div class="textcolor-title2 time">10:40</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Más deporte
					<div class="chronic_description">Canal de las estrellas</div>
					<div class="textcolor-title4">Partido amistoso</div>
				</div>
			</li>
			<li>
				<div class="textcolor-title2 time">09:50</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Acción
					<div class="chronic_description">Canal 5</div>
				</div>
			</li>
			<li>
				<div class="textcolor-title2 time">08:20</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					America vs. Pumas
					<div class="chronic_description">Canal 2</div>
				</div>
			</li>
			<li>
				<div class="textcolor-title2 time">08:14</div>
				<div class="chronic">
					<div class="logoTeam"><img src="http://lorempixel.com/45/35/sports" alt="Image description"> </div>
					Acción
					<div class="chronic_description">Canal 4</div>
					<div class="textcolor-title4">Partido amistoso</div>
				</div>
				<a class="textcolor-title1" href="#">Ver más</a> </li>
		</ul>
	</div>
</div>
<?
// footer
require_once("../global/footer.php");
?>
