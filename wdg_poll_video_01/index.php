<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");

?>      


<!-- BEGIN: wdg_poll_video_01 -->
<div  class="wdg_poll_video_01" data-enhance="false">
	<div class="title textcolor-title1">El mejor Gol</div>
	<div class="subtitle">¿Cual fué el mejor gol de la Jornada 10 del Clausura 2013?</div>
	<div class="order_by textcolor-title4">Ordenalos con tu ranking</div>
	<table class="poll">
		<tr>
			<td rowspan="3" class="videoimg">
			
			<a class="player" href="#">
				<div class="overlayPlay">
					<i class="tvsa-play  tvsa-1x"></i>
				</div>
			</a>
			 
				<img src="http://lorempixel.com/343/193/" alt="Image Description">
			</td>
			<td class="col1 dotted-bottom">
				<a href="#" class="imgPlayer">
					<div class="overlay">
						<i class="tvsa-videocamera tvsa-1x"></i>
					</div>					
					<img src="http://lorempixel.com/84/47/" alt="Image Description">
				</a>
				
				<div class="score textcolor-title4" id="score1"></div>
			</td>
			<td class="col2 dotted-bottom">
				<div class="nombre">Lucas Lobos</div>
				<div class="equipo textcolor-title4">Tigres</div>
				
				<div class="scores">
					<form>
						<input name="player1" type="radio" value="3" id="player1">
						<label for="player1" class="rating textcolor-title4">3</label>
						<input name="player1" type="radio" value="2" id="player2">
						<label for="player2" class="rating textcolor-title4">2</label>
						<input name="player1" type="radio" value="1" checked="checked" id="player3">
						<label for="player3" class="rating textcolor-title4">1</label>
					</form>
				</div>
				<div class="graph left" id="graph1"></div>
				<div id="percentage1" class="right"></div>
			</td>
		</tr>
		<tr>
			<td class="col1 dotted-bottom">
				<a href="#" class="imgPlayer">
					<div class="overlay">
						<i class="tvsa-videocamera tvsa-1x"></i>
					</div>
					<img src="http://lorempixel.com/84/47/" alt="Image Description">
				</a>
				<div class="score textcolor-title4" id="score2"></div>
			</td>
			<td class="col2 dotted-bottom">
				<div class="nombre">Lucas Lobos</div>
				<div class="equipo textcolor-title4">Tigres</div>
				
				<div class="scores">
					<input name="player2" type="radio" value="3" >
					<label for="player1" class="rating textcolor-title4">3</label>
					<input name="player2" type="radio" value="2" >
					<label for="player2" class="rating textcolor-title4">2</label>
					<input name="player2" type="radio" value="1"  checked="checked">
					<label for="player3" class="rating textcolor-title4">1</label>
				</div>
				
				<div class="graph left" id="graph2"></div>
				<div id="percentage2" class="right"></div>
			</td>
		</tr>
		<tr>
			<td class="col1">
				<a href="#" class="imgPlayer">
					<div class="overlay">
						<i class="tvsa-videocamera tvsa-1x"></i>
					</div>
					<img src="http://lorempixel.com/84/47/" alt="Image Description">
				</a>
				<div class="score textcolor-title4" id="score3"></div>
			</td>
			<td class="col2">
				<div class="nombre">Lucas Lobos</div>
				<div class="equipo textcolor-title4">Tigres</div>
				
				<div class="scores">
					<input name="player3" type="radio" value="3" >
					<label for="player1" class="rating textcolor-title4">3</label>
					<input name="player3" type="radio" value="2" >
					<label for="player2" class="rating textcolor-title4">2</label>
					<input name="player3" type="radio" value="1"  checked="checked">
					<label for="player3" class="rating textcolor-title4">1</label>
				</div>
				
				<div class="graph left" id="graph3"></div>
				<div id="percentage3" class="right"></div>
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
