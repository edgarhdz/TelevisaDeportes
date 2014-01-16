<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>   
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">
<!-- BEGIN: wdg_otherpost_01 -->
<div class="wdg_otherpost_01"  data-enhance="false">
    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <strong class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Otros Post
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </strong>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
    <div class="wdg_otherpost_01_content">
        <div class="wdg_otherpost_01_show">
		<form action="#" method="post">
            <input type="text" placeholder="Tema" value="Tema" onblur="if (this.value == '') {this.value = 'Tema';}" onfocus="if (this.value == 'Tema') {this.value = '';}"/>
			<input type="button" value="Ir" class="wdg_otherpost_go background-color2" />
		</form>
        </div>
        <div class="wdg_otherpost_01_dropdown">
            <div class="wdg_otherpost_01_dropdowncontent">
                <p></p>
                <span class="sprite dropdown-gray"></span>
            </div>
            <div class="wdg_otherpost_01_listcontainer">
                <ul class="wdg_otherpost_01_dropdownlist">
                    <li><p>Día 1</p></li>
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
    </div>
</div>
<!-- END: wdg_otherpost_01 -->
<?
// footer
require_once("../global/footer.php");
?>
