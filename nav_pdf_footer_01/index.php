<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");
?>
<div class="nav_pdf_footer_01">
	<ul>
		<li>LTE: Luego del tiempo extra</li>
		<li>2TA: Segunda Tarjeta amarilla</li>		
	</ul>	
	<ul>
		<li>Asi: Asistencia</li>
		<li>Por: Portero</li>
	</ul>
	<ul>
		<li>TA: Tarjeta Amarilla</li>
		<li>TR: Tarjeta Roja</li>
	</ul>
	<ul>
		<li>A: Ausente</li>
		<li>TDP: Tanda de penaltis</li>
	</ul>
</div>
<?
// footer
require_once("../global/footer.php");
?>