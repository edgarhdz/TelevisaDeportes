<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

 <!-- BEGIN: wdg_smex_effectiveness_01-->
    <div class="wdg_smex_effectiveness_01" data-enhance="false">
         <!-- BEGIN: str_pleca_01 -->
        <div class="str_pleca_01">
            <div class="str_pleca_01_title">
                <h3 class="background-color-pleca3">
                    <a class="textcolor-title3" href="#" title="Link Description">
                        Efectividad
                    </a>
                </h3>
            </div>
        </div>
        <!-- END: str_pleca_01 -->   
        <div class="wdg_smex_effectiveness_01_container">
            <div class="percentage textcolor-title2 dotted-bottom"><p>56<span class="small">%</span></p></div>
            <div class="points"><p>Puntos Obtenidos</p><p class="textcolor-title4">18</p></div>
            <div class="separator dotted-left"></div>
            <div class="points"><p>Puntos Totales</p><p class="textcolor-title4">27</p></div>
        </div>   
        
    </div>
    <!-- END: wdg_smex_effectiveness_01 -->
<?
// footer
require_once("../global/footer.php");
?>
