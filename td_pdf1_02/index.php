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
<section class="td_pdf1_02">
<!-- Header  -->	
	<div class="header">	
		<?php getHtmlComponente("../nav_pdf_header_01/index.html"); ?>
	</div>
<!-- End Header -->		 	
	<div class="main">
		<!-- BEGIN: Details -->
		<table class="td_pdf1_02_details_table">
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
		
		<!-- BEGIN: Team America -->
		<table class="td_pdf1_02_aligment_table">
			<tr>
				<td colspan="8"><h1>América (Ame)</h1>	</td>
			</tr>
			<tr>
				<td colspan="8">
					<table class="title">
						<tr>
							<td><h4>#</h4></td>
							<td><h4>Nombre</h4></td>
							<td><h4>Go</h4></td>
							<td><h4>Pe</h4></td>
							<td><h4>Fa</h4></td>
							<td><h4>TA</h4></td>
							<td><h4>2TA</h4></td>
							<td><h4>TR</h4></td>
						</tr>						
					</table>
				</td>
			</tr>			
			<tr>
				<td>
					<table class="aligment_start">
						<tr>
							<td>1</td>
							<td>Christian Benítez</td>
							<td></td>
							<td>1</td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>2</td>
							<td>Antonio López Ojeda</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>3</td>
							<td>Christian "El Hobbit" Bermúdez</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td>1</td>
							<td>1</td>				
						</tr>	
						<tr>
							<td>4</td>
							<td>Jesús Antonio Molina</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>5</td>
							<td>Juan Carlos "Negro" Medina</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>6</td>
							<td>Moisés Muñoz</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>1</td>				
						</tr>
						<tr>
							<td>7</td>
							<td>Raúl Jiménez </td>
							<td></td>
							<td></td>
							<td>2</td>
							<td></td>
							<td>1</td>
							<td>1</td>				
						</tr>
						<tr>
							<td>8</td>
							<td>Osvaldo Martínez</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>9</td>
							<td>Luis Ángel Mendoza</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>10</td>
							<td>Andrés Ademar Rodríguez</td>
							<td></td>
							<td></td>
							<td>3</td>
							<td></td>
							<td>1</td>
							<td>1</td>				
						</tr>
						<tr>
							<td>11</td>
							<td>Andrés Andrade</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>				
						</table>
					</td>
				</tr>								
				<tr>
					<td class="title_substitute" colspan="8"><h4>Suplentes</h4></td>							
				</tr>
				<tr>
					<td>
						<table class="aligment_substitute">
							<tr>
							<td>20</td>
							<td>Francisco Javier Roríguez Pinedo</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>23</td>
							<td>Carlos Alberto Gutiérrez</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>24</td>
							<td>Osvaldo Martínez Arce</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<!-- END: Team America -->
		
		<!-- BEGIN: Team Chivas -->
		<table class="td_pdf1_02_aligment_table">
			<tr>
				<td colspan="8"><h1>Chivas (Chi)</h1>	</td>
			</tr>
			<tr>
				<td colspan="8">
					<table class="title">
						<tr>
							<td><h4>#</h4></td>
							<td><h4>Nombre</h4></td>
							<td><h4>Go</h4></td>
							<td><h4>Pe</h4></td>
							<td><h4>Fa</h4></td>
							<td><h4>TA</h4></td>
							<td><h4>2TA</h4></td>
							<td><h4>TR</h4></td>
						</tr>						
					</table>
				</td>
			</tr>			
			<tr>
				<td>
					<table class="aligment_start">
						<tr>
							<td>1</td>
							<td>José Antonio Rodríguez Romero</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>				
						</tr>
						<tr>
							<td>2</td>
							<td>Victir Hugo Hernández Oropeza</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>				
						</tr>
						<tr>
							<td>3</td>
							<td>Luis Ernesto  Michel Vergara</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>	
						<tr>
							<td>4</td>
							<td>Abraham Coronado Tafoya</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>5</td>
							<td>Héctor Reynoso López</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>6</td>
							<td>Juan Miguel Basulto Medina</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>1</td>				
						</tr>
						<tr>
							<td>7</td>
							<td>Miguel Angel Ponce Briseño</td>
							<td>1</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>				
						</tr>
						<tr>
							<td>8</td>
							<td>Rafel Aleman Ludueña</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>9</td>
							<td>Carlos Enrique Hermosillo Chavez</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>10</td>
							<td>Luis Vuoso Santos</td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>1</td>
							<td>1</td>				
						</tr>
						<tr>
							<td>11</td>
							<td>Aarón Ramón Ramirez Díaz</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>				
						</table>
					</td>
				</tr>								
				<tr>
					<td class="title_substitute" colspan="8"><h4>Suplentes</h4></td>							
				</tr>
				<tr>
					<td>
						<table class="aligment_substitute">
							<tr>
							<td>20</td>
							<td>Néstor Ramirez Vidrio</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>23</td>
							<td>Victor Raúl Perales Aguilar</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
						<tr>
							<td>24</td>
							<td>Antonio Gallardo Palacios</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>				
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<!-- END: Team Chivas -->
	
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
