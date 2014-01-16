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
<section class="td_pdf2_01">
<!-- Header  -->	
	<div class="header">	
		<?php getHtmlComponente("../nav_pdf_header_01/index.html"); ?>
	</div>
<!-- End Header -->		 	
	<div class="main">
		<h1 class="td_pdf2_01_title">Alineación inicial</h1>
	<!-- BEGIN: alignment_table  -->
		<table class="td_pdf2_01_alignment_table">
			<tr>
				<td colspan="2">
					<table class="title">
						<tr>
							<td class="line_vertical"><h2>América (Ame)</h2></td>																									
							<td><h2>Chivas(Chi)</h2></td>							
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
					<table class="alignment_team1" cellspacing="0">
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
	<!-- END: alignment_table  -->
	<!-- BEGIN: Details -->
		<table class="td_pdf2_01_details_table">
			<tr>
				<td class="team" rowspan="7"><h1>América (Ame)</h1></td>
				<td>13</td>
				<td class="title_details"><h4>Tiros</h4></td>
				<td>19</td>
				<td class="teamtwo" rowspan="7"><h1>Chivas (Chi)</h1></td>
			</tr>
			<tr>
				<td>5</td>				
				<td class="title_details"><h4>Tiros a gol</h4></td>
				<td>6</td>
			</tr>
			<tr>
				<td>28</td>				
				<td class="title_details"><h4>Faltas</h4></td>
				<td>17</td>
			</tr>
			<tr>
				<td>0</td>				
				<td class="title_details"><h4>Goles en la propia meta</h4></td>
				<td>4</td>
			</tr>
			<tr>
				<td>7</td>				
				<td class="title_details"><h4>Amonestaciones</h4></td>
				<td>5</td>
			</tr>
			<tr>
				<td>7</td>				
				<td class="title_details"><h4>Expulsiones por segunda amarilla</h4></td>
				<td>0</td>
			</tr>
			<tr>
				<td>7</td>				
				<td class="title_details"><h4>Expulsiones directas</td>
				<td>3</td>
			</tr>
			<tr>
				<td colspan="5"><h3>Jugador del Partido: 6, Andrés Iniesta (Chivas)</h3></td>
			</tr>						
		</table>
		<!-- END: Details -->
		<!-- BEGIN: Details Table  -->
	<table class="td_pdf2_01_details_table_2">
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
							<td class="subtitle"><p><span>Goles Anotados</span></p></td>							
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
		
		
	</div>
	
<!-- Footer  -->	
	<div class="footer">	
		<?php getHtmlComponente("../nav_pdf_footer_01/index.html"); ?>
	</div>
<!-- End Footer -->	
</section>

<?
// footer
require_once("../global/footer.php");
?>
	