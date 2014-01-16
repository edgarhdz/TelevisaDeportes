<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>

<!-- BEGIN: wdg_altasbajas_01-->
<div class="wdg_altasbajas_01 background-color1">

	<div class="contenedor">
	<div class="degraded_left"></div>
	
		<div class="sup_izq textcolor-title3">
			
			<div class="background-color2">
				DRAFT
				<div class="hline"></div>
			</div>
			<div class="background-color2 hide-mobile">
				MXM
				<div class="hline"></div>
			</div>
			<div class="subtitulo">Altas y Bajas por equipo</div>
			<div class="textcolor-title2">Torneo Liga MX Apertura  2013</div>
		</div>
		
		<div class="sup_der">
			
			<!--Set the final target date to start the countdown-->
			<div id="target_date" data-target_date="Nov 15, 2013 14:00:00"></div>
			<!--********************************************************-->
			
			<table  class="timing">
				<tr class="one">
					<td rowspan="2" class="textcolor-title2 cut">
						<div class="vline"></div>
						El torneo comienza en:
					</td>
					<td class="textcolor-title3" id="months"></td>
					<td class="textcolor-title3">·</td>
					<td class="textcolor-title3" id="days">10</td>
					<td class="espacio">&nbsp;</td>
					<td class="textcolor-title3" id="hours">00</td>
					<td class="textcolor-title3">:</td>
					<td class="textcolor-title3" id="minutes">00</td>
					<td class="textcolor-title3">:</td>
					<td class="textcolor-title3" id="seconds">00</td>
				</tr>
				<tr class="two">
					<td class="textcolor-title2"><!--MES--></td>
					<td class="textcolor-title2">&nbsp;</td>
					<td class="textcolor-title2"><!--DIA--></td>
					<td class="textcolor-title2">&nbsp;</td>
					<td class="textcolor-title2"><!--HRS--></td>
					<td class="textcolor-title2">&nbsp;</td>
					<td class="textcolor-title2"><!--MIN--></td>
					<td class="textcolor-title2">&nbsp;</td>
					<td class="textcolor-title2"><!--SEG--></td>
				</tr>
			</table>
		</div>
		
		<div class="tabla_ab">
		
			<div class="titles">
				<div class="textcolor-title3">ALTAS</div>
				<div class="textcolor-title3">BAJAS</div>
			</div>
			
			<div class="tabla">
			
				<table  class="teams">
					<tr>						
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
						<td class="textcolor-title3"><img src="http://placehold.it/27x27" alt="#">AME</td>
					</tr>
					<tr class="ab">
						<td>5</td>
						<td>6</td>
						<td>9</td>
						<td>4</td>
						<td>-</td>
						<td>5</td>
						<td>6</td>
						<td>9</td>
						<td>4</td>
						<td>-</td>
						<td>5</td>
						<td>6</td>
						<td>9</td>
						<td>4</td>
						<td>-</td>
						<td>5</td>
						<td>6</td>
						<td>9</td>
					</tr>
					<tr class="ab">
						<td>2</td>
						<td>1</td>
						<td>3</td>
						<td>-</td>
						<td>4</td>
						<td>2</td>
						<td>1</td>
						<td>3</td>
						<td>-</td>
						<td>4</td>
						<td>2</td>
						<td>1</td>
						<td>3</td>
						<td>-</td>
						<td>4</td>
						<td>2</td>
						<td>1</td>
						<td>3</td>
					</tr>
				</table>
			</div>
			
			<div class="totales">
				<div class="textcolor-title2">Totales</div>
				<div class="numeros">
					<div class="textcolor-title3">190</div>
					<div class="textcolor-title3">70</div>
				</div>
			</div>
			
		</div>
		<div class="degraded_right"></div>
	</div>
	<!-- END: contenedor-->
</div>
<!-- END: wdg_altasbajas_01-->
<?
// footer
require_once("../global/footer.php");
?>
