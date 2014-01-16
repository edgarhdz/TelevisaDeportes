<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

<!-- BEGIN: wdg_humor_01 -->
<div class="wdg_humor_01" data-enhance="false">
    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a class="textcolor-title3" href="http://www.televisa.com" title="Link Description">
                    Humor
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->      
    <div>
        <article class="articleMedium">
            <a href="http://www.televisa.com" title="Link Description">
                <img src="http://lorempixel.com/people/300/200/" alt="Image description"/>
            </a>
            <div>
                <h3>Vacaciones de Semana Santa en México. Aquí vas a encontrar tu 'Viacricis'
                <span class="autor textcolor-title4"> / Foto: Moneros</span></h3>
            </div>
        </article>
    </div>
</div>
<!-- END: wdg_humor_01 -->
<?
// footer
require_once("../global/footer.php");
?>
