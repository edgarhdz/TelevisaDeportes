<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

<!-- BEGIN: wdg_nfl_playersts_01-->

<div class="wdg_nfl_playersts_01" data-enhance="false">
	<div class="titulo textcolor-title1">Player Stats</div>
	
	<!--In the data-color attr you need to setup the link color-->
	<div class="link_class" data-class="textcolor-title2"></div>
     <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Estadísticas por jugador
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
	
<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=fb&type=teamstats&team=22&lang=es"></script>
	
</div>
<!-- END: wdg_nfl_playersts_01 -->
<?
// footer
require_once("../global/footer.php");
?>
