<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: wdg_avgfield_01 -->
<div class="wdg_avgfield_01">

    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01 collapsable">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="#" title="Link Description" class="textcolor-title3">
                    Promedio en cancha
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->     

    <div class="wdg_avgfield_01_content">
        <div class="wdg_avgfield_01_row">
            <div class="wdg_avgfield_01_title">
                <a class="wdg_avgfield_01_red textcolor-title1" href="">EVENTOS</a>
            </div>
            <div class="wdg_avgfield_01_teams">
                <div class="wdg_avgfield_01_teama">
                    <div class="element">
                        <img src="http://placehold.it/30x30" alt="">
                    </div>              
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_01_teamb">
                    <img src="http://placehold.it/30x30" alt="">
                </div>
            </div>
        </div>
        <div class="wdg_avgfield_01_row">
            <div class="wdg_avgfield_01_title">
                <a href="">Edad</a>
            </div>
            <div class="wdg_avgfield_01_teams box-gray">
                <div class="wdg_avgfield_01_teama">
                    <div class="element textcolor-title2">76.20</div>

                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_01_teamb textcolor-title2">28.27</div>
            </div>
        </div>
        <div class="wdg_avgfield_01_row">
            <div class="wdg_avgfield_01_title">
                <a href="">Estatura</a>
            </div>
            <div class="wdg_avgfield_01_teams box-gray">
                <div class="wdg_avgfield_01_teama">
                    <div class="element textcolor-title2">76.20</div>
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_01_teamb textcolor-title2">1.74</div>
            </div>
        </div>
        <div class="wdg_avgfield_01_row">
            <div class="wdg_avgfield_01_title">
                <a href="">Peso</a>
            </div>
            <div class="wdg_avgfield_01_teams box-gray">
                <div class="wdg_avgfield_01_teama">
                    <div class="element textcolor-title2">76.20</div>
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_01_teamb textcolor-title2">72.00</div> 
            </div>

        </div>

    </div>
</div>
<!-- END: wdg_avgfield_01 -->
<?
// footer
require_once("../global/footer.php");
?>
