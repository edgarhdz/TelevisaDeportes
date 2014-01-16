<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'nav_pdf_header_01';
$comp[] = 'nav_pdf_footer_01';
getData($comp, "css");
getData($comp, "js");	
?>
<section class="td_pdf1_01">
	
	<div class="header">	
		<?php getHtmlComponente("../nav_pdf_header_01/index.html"); ?>
	</div>
		 	
	<div class="main">
		<h1 class="td_pdf1_01_title">Alineación inicial</h1>
		<div class="td_pdf1_01_soccerfield">
			<div class="campo">
				<img src="../global/img/cancha.png">	
			</div>			
			                <div class="team1">			                	
			                    <div class="player1 textcolor-title2" >01</div>
			                    <div class="player2 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Exdivemo" data-player="Francisco Javier Rodríguez Pinedo" data-x="148px" data-y="8px">18</div>
			                    <div class="player3 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-success:17',tvsa-success:54',tvsa-like:70'" data-position="Defensa" data-player="Aquivaldo Mosquera Romaña" data-x="235px" data-y="8px">09</div>
			                    <div class="player4 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa" data-player="Efraín Juárez Valdez" data-x="125px" data-y="75px">03</div>
			                    <div class="player5 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Cendivocampista" data-player="Christian Rogelio Benítez Bentancourt" data-x="195px" data-y="55px">16</div>
			                    <div class="player6 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Cendivocampista" data-player="Francisco Javier Rodríguez Pinedo" data-x="240px" data-y="105px">08</div>
			                    <div class="player7 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Cendivocampista" data-player="Efraín Juárez Valdez" data-x="110px" data-y="170px">21</div>
			                    <div class="player8 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Exdivemo" data-player="Aquivaldo Mosquera Romaña" data-x="95px" data-y="250px">42</div>
			                    <div class="player9 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Mediocendivo organizador" data-player="Efraín Juárez Valdez" data-x="190px" data-y="155px">11</div>
			                    <div class="player10 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Christian Rogelio Benítez Bentancourt" data-x="175px" data-y="230px">19</div>
			                    <div class="player11 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Francisco Javier Rodríguez Pinedo" data-x="260px" data-y="200px">24</div>
			                </div>
			                <div class="team2">
			                    <div class="player1 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-success:1',tvsa-like:13',tvsa-success:56',tvsa-like:87',tvsa-success:93'" data-position="Portero" data-player="Efraín Juárez Valdez" data-x="80px" data-y="105px">01</div>
			                    <div class="player2 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Exdivemo" data-player="Pele Ochoa" data-x="350px" data-y="8px">11</div>
			                    <div class="player3 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Exdivemo" data-player="Francisco Javier Rodríguez Pinedo" data-x="420px" data-y="10px">21</div>
			                    <div class="player4 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa (fútbol)" data-player="Gil Cordero Burgos" data-x="405px" data-y="80px">10</div>
			                    <div class="player5 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa (fútbol)" data-player="Christian Rogelio Benítez Bentancourt" data-x="475px" data-y="65px">03</div>
			                    <div class="player6 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Cendivocampista" data-player="Maradona Perez" data-x="305px" data-y="60px">13</div>
			                    <div class="player7 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Cendivocampista" data-player="Aquivaldo Mosquera Romaña" data-x="440px" data-y="230px">31</div>
			                    <div class="player8 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17''" data-position="Cendivocampista" data-player="Efraín Juárez Valdez" data-x="350px" data-y="8px">07</div>
			                    <div class="player9 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Mediocendivo organizador" data-player="Gil Cordero Burgos" data-x="490px" data-y="165px">41</div>
			                    <div class="player10 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Christian Rogelio Benítez Bentancourt" data-x="380px" data-y="155px">04</div>
			                    <div class="player11 textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Aquivaldo Mosquera Romaña" data-x="360px" data-y="240px">02</div>			                    
			                </div>			                			        
			</div>
		<table class="td_pdf1_01_alignment_table">
			<tr>
				<td colspan="2">
					<table class="title">
						<tr>
							<td class="line_vertical"><h2>América (Ame)</h2></td>																									
							<td><h2>Chivas (Chi)</h2></td>							
						</tr>
						<tr>
							<td><p class="line"></p></td>
							<td><p class="line"></p></td>
						</tr>							
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table class="alignment_team1" cellspacing="0">
						<tr>				
							<td>( 1 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 2 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>				
							<td>( 3 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 4 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 5 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 6 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 7 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 8 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 9 )</td>
							<td> Christian Benítez</td>																				
						</tr>	
						<tr>					
							<td>( 10 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 11 )</td>
							<td> Christian Benítez</td>																				
						</tr>								
					</table>					
				</td>
				<td>
					<table class="alignment_team2" cellspacing="0">
						<tr>				
							<td>( 1 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 2 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>				
							<td>( 3 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 4 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 5 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 6 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 7 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 8 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 9 )</td>
							<td> Christian Benítez</td>																				
						</tr>	
						<tr>					
							<td>( 10 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 11 )</td>
							<td> Christian Benítez</td>																				
						</tr>							
					</table>					
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>
							<td><p class="line"></p></td>
						</tr>						
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table class="alignment_team1"  cellspacing="0">
						<tr>
							<td colspan="2"><h3>Suplentes</h3></td>
						</tr>
						<tr>				
							<td>( 1 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 2 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>				
							<td>( 3 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 4 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 5 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 6 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 7 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 8 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 9 )</td>
							<td> Christian Benítez</td>																				
						</tr>	
						<tr>					
							<td>( 10 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 11 )</td>
							<td> Christian Benítez</td>																				
						</tr>								
					</table>					
				</td>
				<td>
					<table class="alignment_team2" cellspacing="0">
						<tr>
							<td colspan="2"><h3>Suplentes</h3></td>
						</tr>
						<tr>				
							<td>( 1 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 2 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>				
							<td>( 3 )</td>
							<td> Christian Benítez</td>																
						</tr>									
						<tr>					
							<td>( 4 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 5 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 6 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 7 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 8 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 9 )</td>
							<td> Christian Benítez</td>																				
						</tr>	
						<tr>					
							<td>( 10 )</td>
							<td> Christian Benítez</td>																				
						</tr>
						<tr>					
							<td>( 11 )</td>
							<td> Christian Benítez</td>																				
						</tr>							
					</table>					
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>
							<td><p class="line"></p></td>
						</tr>						
					</table>
				</td>
			</tr>
			<tr>
				<td class=" couch line_vertical"><p><span>Director Técnico:</span> Andrés Ademar Rodríguez <p></td>																									
				<td class="couch"><p><span>Director Técnico:</span> Carlos Ernesto Cisneros Barajas <p></td>							
			</tr>
	</table>
<!-- BEGIN: Details Table  -->
	<table class="td_pdf1_01_details_table">
		<tr>
			<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>
							<td><p class="line"></p></td>
						</tr>						
					</table>
				</td>
			</tr>			
			<tr>
				<td>
					<table class="details_left">
						<tr>
							<td class="subtitle"><p><span> Goles anotados</span></p></td>							
						</tr>
						<tr>				
							<td class="description"><p>Osvaldo Martinez Arce (Esp) 16'</p></td>
						</tr>
						<tr>
							<td><p class="line"></p></td>
						</tr>
						<tr>
							<td class="subtitle"><p><span>Expulsiones</span></p></td>
						</tr>
						<tr>				
							<td class="description"><p>Andrés Ademar Rodríguez (Ame) 129' 2TA, Jesús Enrique Sánchez García (Bol) 10', Rafael Márquez Lugo (Bra) 11'</p></td>
						</tr>
					</table>
				</td>
				<td class="amonestados">
					<table class="details_right">
						<tr>
							<td class="subtitle"><p><span>Amonestaciones</span></p></td>							
						</tr>
						<tr>			
							<td class="description" colspan="4"><p>Moisés Muñoz (Ing) 15', Osvaldo Martínez Arce (Esp) 16', Andrés Ademar Rodríguez (Nor) 29', Miguel Ángel Layún 28' (Mex) 29', Jesús Aldo de Nigris Guajardo 22 (Arg) 12'</p></td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
			<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>
							<td><p class="line"></p></td>
						</tr>						
					</table>
				</td>
			</tr>		
	</table>
<!-- END: Details Table  -->		
<!-- BEGIN: Albitro Table  -->
	<table class="td_pdf1_01_albitro_table" cellspacing="0">
		<tr>
			<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>							
						</tr>						
					</table>
			</td>
		</tr>			
			<tr>
				<td>
					<table class="albitro_left">
						<tr>
							<td class="subtitle"><p><span>Arbitro:</span></p></td>
							<td class="description"><p>Aquivaldo Mosqueda (Arg)</p></td>							
						</tr>
						<tr>				
							<td class="subtitle"><p><span>Primer asistente  de árbitro:</span></p></td>
							<td class="description"><p>Diego Antonio Reyes (Esp)</p></td>
						</tr>												
					</table>
				</td>
				<td>
					<table class="albitro_right">
						<tr>
							<td class="subtitle"><p><span>Segundo asistente  de árbitro:</span></p></td>
							<td class="description"><p>Paul Aguilar (Bol)</p></td>														
						</tr>
						<tr>				
							<td class="subtitle"><p><span>Cuarto oficial:</span></p></td>
							<td class="description"><p>Juan Carlos Valenzuela (Cor)</p></td>
						</tr>												
					</table>
				</td>				
			</tr>
			<tr>
			<td colspan="2">
					<table class="title">
						<tr>
							<td><p class="line"></p></td>							
						</tr>						
					</table>
			</td>
		</tr>		
	</table>
<!-- END: Albitro Table  -->		
	
	
	</div>	
	
	
	<div class="footer">	
		<?php getHtmlComponente("../nav_pdf_footer_01/index.html"); ?>
	</div>
	
</section>

<?
// footer
require_once("../global/footer.php");
?>