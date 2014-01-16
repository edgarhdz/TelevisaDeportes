<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
require_once("../global/template.php");
// header
require_once("../global/header.php");
?>
<script type="text/javascript" src="js/jquery.tablesorter.js"></script>
<!-- BEGIN: wdg_goals_by_player_01 -->
<link rel="stylesheet" type="text/css" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_mobile.css" media="screen">
<link rel="stylesheet" type="text/css" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_tablet.css" media="screen and (min-width: 623px)">
<link rel="stylesheet" type="text/css" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown.css" media="screen and (min-width: 948px)">

   
<div class="wdg_goals_by_player_01">
	<?php getHtmlComponente("../wdg_scroll_dropdown/index.html"); ?>
	<div class="titulo textcolor-title1">Goleo Individual</div>
	<div class="pleca_inferior">
		<div>
			<strong>Ordenado por</strong>
		</div>
		<div class="wdg_goals_by_player_01_dropdown">
			<div class="wdg_goals_by_player_01_dropdowncontent">
				<p></p>
				<div> <a class="dropdwon-right"  href="#" title="Link Description"> <i class="tvsa-caret-down"></i></a> </div>
			</div>
			<div class="wdg_goals_by_player_01_listcontainer">
				<ul class="wdg_goals_by_player_01_dropdownlist">
					<li>
						<p data-sort="0"><i class="tvsa-hash"></i></p>
					</li>
					<li>
						<p data-sort="1">Jugador</p>
					</li>
					<li>
						<p data-sort="2">Equipo</p>
					</li>
					<li>
						<p data-sort="3">Goles</p>
					</li>
					<li>
						<p data-sort="4">Penales</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<!--HTML Externo-->
	
	<table class="sortable" id="tableDraftOperation">
		<thead>
			<tr class="encabezado">
				<th class="textcolor-title1 numero"><i class="tvsa-hash"></i></th>
				<th class="textcolor-title1 jugador">JUGADOR</th>
				<th class="textcolor-title1 equipo">EQUIPO</th>
				<th class="textcolor-title1 chicos">GO</th>
				<th class="textcolor-title1 chicos">PE</th>
			</tr>
			<tr>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1 hide"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
			</tr>
		</thead>
		<tbody>
			<tr class="">
				<td>1</td>
				<td class="aLeft"><span>Christian Rogelio Benítez</span></td>
				<td>América</td>
				<td><div>12</div></td>
				<td class="sel"><div>1</div></td>
			</tr>
			<tr class="odd">
				<td>7</td>
				<td class="aLeft"><span>Jesús Aldo De Nigris</span></td>
				<td>Monterrey</td>
				<td><div>6</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class=" ">
				<td>2</td>
				<td class="aLeft"><span>Héctor Raúl Mancilla</span></td>
				<td>Morelia</td>
				<td><div>11</div></td>
				<td class="sel"><div>1</div></td>
			</tr>
			<tr class="odd">
				<td>5</td>
				<td class="aLeft"><span>Raúl Alonso Jiménez</span></td>
				<td>América</td>
				<td><div>8</div></td>
				<td class="sel"><div>1</div></td>
			</tr>
			<tr class=" ">
				<td>8</td>
				<td class="aLeft"><span>Abraham Darío Carreño</span></td>
				<td>Pachuca</td>
				<td><div>5</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="  odd">
				<td>10</td>
				<td class="aLeft"><span>Luis Amaranto Perea</span></td>
				<td>Cruz Azul</td>
				<td><div>3</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class=" ">
				<td>7</td>
				<td class="aLeft"><span>Christian Eduardo Giménez</span></td>
				<td>Cruz Azul</td>
				<td><div>6</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="  odd">
				<td>4</td>
				<td class="aLeft"><span>Emanuel Alejandro Villa</span></td>
				<td>Tigres</td>
				<td><div>9</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr>
				<td>8</td>
				<td class="aLeft"><span>Esteban Efraín Paredes</span></td>
				<td>Atlante</td>
				<td><div>5</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="   odd">
				<td>9</td>
				<td class="aLeft"><span>Vicente José Matías Vuoso</span></td>
				<td>Atlas</td>
				<td><div>4</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr>
				<td>10</td>
				<td class="aLeft"><span>Jesús Eduardo Zavala</span></td>
				<td>Monterrey</td>
				<td><div>3</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="odd">
				<td>11</td>
				<td class="aLeft"><span>Leobardo López</span></td>
				<td>Monterrey</td>
				<td><div>2</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class=" ">
				<td>11</td>
				<td class="aLeft"><span>Jesús Antonio Molina</span></td>
				<td>América</td>
				<td><div>2</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="odd">
				<td>11</td>
				<td class="aLeft"><span>Raúl Enríquez</span></td>
				<td>Tijuana</td>
				<td><div>2</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class=" ">
				<td>6</td>
				<td class="aLeft"><span>Javier Cortés</span></td>
				<td>Pumas</td>
				<td><div>7</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr class="odd">
				<td>9</td>
				<td class="aLeft"><span>Hérculez Gómez</span></td>
				<td>Santos</td>
				<td><div>4</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			<tr>
				<td>5</td>
				<td class="aLeft"><span>Oribe Peralta</span></td>
				<td>Santos</td>
				<td><div>8</div></td>
				<td class="sel"><div>1</div></td>
			</tr>
			<tr class="  odd">
				<td>8</td>
				<td class="aLeft"><span>Amaury Gabriel Escoto</span></td>
				<td>Querétaro</td>
				<td><div>5</div></td>
				<td class="sel"><div>0</div></td>
			</tr>
			
		</tbody>
	</table>
	
	<!--END HTML Externo--> 
	
</div>
<!-- END: wdg_stadistics_01 -->
<?
// footer
require_once("../global/footer.php");
?>
