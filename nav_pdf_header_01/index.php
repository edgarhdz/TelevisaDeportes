<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");
?>
<div class="nav_pdf_header_01">
	<div class="nav_pdf_header_01_logotv">	
		<a href="http://www.televisa.com"><img class="nav_pdf_header_01_sprite" src="../global/img/logo_televisa-deportes.png"></a>
	</div>
	<div class="nav_pdf_header_01_titule">
		<span class="nav_pdf_header_01_clausura">Liga MX Clausura 2013</span>
		<span class="nav_pdf_header_01_result">América 0 - 1 Chivas</span>		
		<span class="nav_pdf_header_01_ubicacion">Estadio Azteca en la Ciudad de México</span>
		<span class="nav_pdf_header_01_date">Domingo 30 de junio 2013 a las 20:00hrs.</span>		
	</div>	
</div>
<?
// footer
require_once("../global/footer.php");
?>