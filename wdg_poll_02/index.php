<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<!-- BEGIN: wdg_poll_02 -->
<div  class="wdg_poll_02">
	<div class="title textcolor-title1">Lesón Oribe Peralta</div>
	<div class="subtitle">¿Cual fué el mejor gol de la Jornada 10 del Clausura 2013?</div>
	
	<table class="poll">
		<tr class="dotted-bottom">
			<td class="col2">
				<div class="scores">
					<input name="poll" type="radio" value="1" id="r1"> 
					<span>Aldo De Nigris</span>
					<div class="graph left" id="graph1"></div>
					<div class="left count" id="count1"></div>
					<div id="percentage1" class="right"></div>	
				</div>
			</td>
		</tr>
		<tr class="dotted-bottom">
			<td class="col2">
				<div class="scores">
					<input name="poll" type="radio" value="1" id="r2">
					<span>Rafael Marquez Lugo</span>
					<div class="graph left" id="graph2"></div>
				<div class="left count" id="count2"></div>
				<div id="percentage2" class="right"></div>				
				</div>
			</td>
		</tr>
		<tr>
			<td class="col2">
				<div class="scores">
					<input name="poll" type="radio" value="1" id="r3">
					<span>Otro</span>
					<div class="graph left" id="graph3"></div>
					<div class="left count" id="count3"></div>
					<div id="percentage3" class="right"></div>
				</div>
			</td>
		</tr>
	</table>
	
	<div class="linetop">
	
		<div class="textcolor-title4 left gracias">Gracias por votar</div>
	
		<div class="buttonVotar background-color2">
			<a href="#" class="linkVotar textcolor-title3">Votar</a>
		</div>
		
	</div>
</div>
<!-- END: wdg_poll_video_01 -->
<?
// footer
require_once("../global/footer.php");
?>
