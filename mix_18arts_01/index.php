<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
require_once("../global/template.php");
?>

<link rel="stylesheet" href="../mix_1arts_14/css/mix_1arts_14_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_14/css/mix_1arts_14_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_14/css/mix_1arts_14.css" media="screen and (min-width: 60em)">

<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown.css" media="screen and (min-width: 60em)">
   
<!-- BEGIN: mix_18arts_01 -->
<div class="mix_18arts_01">
    
	<!--<div class="pleca_superior">
		
		<div class="background-color1">
    		<h3 class="textcolor-title3">Estadisticas</h3>
    	</div>
	
        <div class="mix_18arts_01_dropdown">
            <div class="mix_18arts_01_dropdowncontent">
                <p></p>
                <div>
                <a id="dropdwon-right" class="background-color1" href="#" title="Link Description">
                    <i class="tvsa-caret-down"></i>
                </a>            
            </div> 
            </div>
            <div class="mix_18arts_01_listcontainer">
                <ul class="mix_18arts_01_dropdownlist">
                    <li><p>Estadios</p></li>
                    <li><p>Mes 1</p></li>
                    <li><p>Año 1</p></li>
                    <li><p>Día 2</p></li>
                    <li><p>Mes 2</p></li>
                    <li><p>Año 2</p></li>
                    <li><p>Día 3</p></li>
                    <li><p>Mes 3</p></li>
                    <li><p>Año 3</p></li>
                    <li><p>Día 4</p></li>
                    <li><p>Mes 4</p></li>
                    <li><p>Año 4</p></li>
                </ul>  
            </div>            
        </div> 
    </div>-->
	
	<!-- Pleca listBox-->
	<?php getHtmlComponente("../wdg_scroll_dropdown/index.html"); ?>
	<!-- TERMINA Pleca listBox-->
	
    <div class="teams_stadistics_title textcolor-title1">Estadios</div>
    <div class="estadios">
	    
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
			<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		
		
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		
		
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
			<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		
		
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>	
		
		
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
			<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		
		
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		<div class="bordes">
			<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>
		</div>
		<?php getHtmlComponente("../mix_1arts_14/index.html"); ?>	
		
	</div>
	<!--<div class="see_more textcolor-title4">Ver más</div>
    <div class="see_less textcolor-title4">Ocultar</div>-->
	
	<div class="degradado"></div>
	
</div>
<!-- END: wdg_stadistics_01 -->
<?
// footer
require_once("../global/footer.php");
?>