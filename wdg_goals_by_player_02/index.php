<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<script type="text/javascript" src="js/jquery.tablesorter.js"></script>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 960px)">   


<!-- BEGIN: wdg_goals_by_player_02 -->

<div class="wdg_goals_by_player_02">
	
	<!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Convocados
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
	
	<div class="pleca_inferior">
		<div>
			<h5>Ordenado por</h5>
		</div>
		<div class="wdg_goals_by_player_02_dropdown">
			<div class="wdg_goals_by_player_02_dropdowncontent">
				<p></p>
				<div> <a id="dropdwon-right"  href="#" title="Link Description"> <i class="tvsa-caret-down"></i></a> </div>
			</div>
			<div class="wdg_goals_by_player_02_listcontainer">
				<ul class="wdg_goals_by_player_02_dropdownlist">
					<li>
						<p data-sort="0">Torneo </p>
					</li>
					<li>
						<p data-sort="1">Equipo </p>
					</li>
					<li>
						<p data-sort="2"><i class="tvsa-hash"></i> </p>
					</li>
					<li>
						<p data-sort="3">JJ</p>
					</li>
					<li>
						<p data-sort="4">MI</p>
					</li>
					<li>
						<p data-sort="5">GO</p>
					</li>
					<li>
						<p data-sort="6">AG</p>
					</li>
					<li>
						<p data-sort="7">AS</p>
					</li>
					<li>
						<p data-sort="8">AM</p>
					</li>
					<li>
						<p data-sort="9">EX</p>
					</li>					
				</ul>
			</div>
		</div>
	</div>
	
	<!--HTML Externo-->
	
	<table class="sortable" id="tableDraftOperation">
		<thead>
			<tr>
				<th class="textcolor-title1">TORNEO</th>
				<th class="textcolor-title1">EQUIPO</th>
				<th class="textcolor-title1"><i class="tvsa-hash"></i></th>
				<th class="textcolor-title1">JJ</th>
				<th class="textcolor-title1">MI</th>
				<th class="textcolor-title1">GO</th>
				<th class="textcolor-title1">AG</th>
				<th class="textcolor-title1">AS</th>
				<th class="textcolor-title1">AM</th>
				<th class="textcolor-title1">EX</th>
			</tr>
			<tr>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
				<th class="textcolor-title1"><i class="tvsa-caret-down"></i></th>
			</tr>
		</thead>
		<tbody>
			<tr class="">
				<td class="aLeft">Torneo 1</td>
				<td><div>América</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>12</div></td>
				<td class="textcolor-title2"><div>5</div></td>
				<td class="textcolor-title2"><div>5</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class="  odd">
				<td class="aLeft">Torneo 2</td>
				<td><div>Monterrey</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>6</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>4</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
			</tr>
			<tr class=" ">
				<td class="aLeft">Torneo 3</td>
				<td><div>Morelia</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>11</div></td>
				<td class="textcolor-title2"><div>5</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class=" odd">
				<td class="aLeft">Torneo 4</td>
				<td><div>América</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>8</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class=" ">
				<td class="aLeft">Torneo 5</td>
				<td><div>Pachuca</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>5</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class="  odd">
				<td class="aLeft">Torneo 6</td>
				<td><div>Cruz Azul</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class=" ">
				<td class="aLeft">Torneo 7</td>
				<td><div>Cruz Azul</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>6</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>1</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class="  odd">
				<td class="aLeft">Torneo 8</td>
				<td><div>Tigres</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>9</div></td>
				<td class="textcolor-title2"><div>7</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class="  ">
				<td class="aLeft">Torneo 9</td>
				<td><div>Atlante</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>5</div></td>
				<td class="textcolor-title2"><div>3</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>
			<tr class="   odd">
				<td class="aLeft">Torneo 10</td>
				<td><div>Atlas</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>4</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>2</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>0</div></td>
				<td class="textcolor-title2"><div>1</div></td>
			</tr>			
		</tbody>
	</table>	
	<!--END HTML Externo-->
	<!-- BEGIN: wdg_simbology_02 -->
	<div class="wdg_simbology_02">
	    <div class="alineacion_partido">
	        <div class="title_simbologia">
	            <h4 class="one"><span class="textcolor-title4">simbologia</span></h4>
	        </div>
	        <div class="tabla_simbologia">
	                <div class="icon_simbologia line_left"><h5 class="textcolor-title2">JJ</h5><h3 class="textcolor-title4">Goles Anotados</h3></div>
	                <div class="icon_simbologia line_left nomostrar"><h5 class="textcolor-title2">MI</h5><h3 class="textcolor-title4">Partidos Jugados</h3></div>
	                <div class="icon_simbologia line_left "><h5 class="textcolor-title2">GO</h5><h3 class="textcolor-title4">Promedio de Gol por Partido</h3></div>	                
	        </div>
	        <div class="tabla_simbologia">
	            	<div class="icon_simbologia line_left"><h5 class="textcolor-title2">AG</h5><h3 class="textcolor-title4">Goles Anotados</h3></div>
	                <div class="icon_simbologia line_left nomostrar"><h5 class="textcolor-title2">AS</h5><h3 class="textcolor-title4">Partidos Jugados</h3></div>
	                <div class="icon_simbologia line_left "><h5 class="textcolor-title2">AM</h5><h3 class="textcolor-title4">Promedio de Gol por Partido</h3></div>	            
	        </div>
	        <div class="tabla_simbologia">
	        		<div class="icon_simbologia line_left"><h5 class="textcolor-title2">EX</h5><h3 class="textcolor-title4">Goles Anotados</h3></div>	               
	        		<div class="icon_simbologia line_left nomostrar"><h5 class="textcolor-title2"></h5><h3 class="textcolor-title4"></h3></div>
	                <div class="icon_simbologia line_left "><h5 class="textcolor-title2"></h5><h3 class="textcolor-title4"></h3></div> 
	            <div style="clear:both;"></div>
	        </div>
	    </div>
	    <div style="clear:both;"></div>
	</div>
	<!-- END: wdg_simbology_02 --> 
	
</div>
<!-- END: wdg_goals_by_player_02 -->

<?
// footer
require_once("../global/footer.php");
?>
