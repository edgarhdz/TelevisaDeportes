<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: wdg_avgfield_02 -->
<div class="wdg_avgfield_02">

    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01 collapsable">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="#" title="Link Description" class="textcolor-title3">
                    Resumen
                </a>
                <!--<i class="tvsa-caret-up"></i>-->
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->     

    <div class="wdg_avgfield_02_content">
        <div class="wdg_avgfield_02_row">
            <div class="wdg_avgfield_02_title">
                <a class="wdg_avgfield_02_red textcolor-title1" href=""></a>
            </div>
            <div class="wdg_avgfield_02_teams">
                <div class="wdg_avgfield_02_teama">
                    <div class="element">
                        <img src="http://placehold.it/30x30" alt="">
                    </div>              
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_02_teamb">
                    <img src="http://placehold.it/30x30" alt="">
                </div>
            </div>
        </div>
        <div class="wdg_avgfield_02_row">
            <div class="wdg_avgfield_02_title">
                <a href="">Tarjetas Amarillas</a>
            </div>
            <div class="wdg_avgfield_02_teams box-gray">
                <div class="wdg_avgfield_02_teama">
                    <div class="element textcolor-title2">2</div>

                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_02_teamb textcolor-title2">5</div>
            </div>
        </div>
        <div class="wdg_avgfield_02_row">
            <div class="wdg_avgfield_02_title">
                <a href="">Tarjetas Rojas</a>
            </div>
            <div class="wdg_avgfield_02_teams box-gray">
                <div class="wdg_avgfield_02_teama">
                    <div class="element textcolor-title2">2</div>
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_02_teamb textcolor-title2">3</div>
            </div>
        </div>
        <div class="wdg_avgfield_02_row">
            <div class="wdg_avgfield_02_title">
                <a href="">Tiros de Esquina</a>
            </div>
            <div class="wdg_avgfield_02_teams box-gray">
                <div class="wdg_avgfield_02_teama">
                    <div class="element textcolor-title2">5</div>
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_02_teamb textcolor-title2">2</div> 
            </div>
        </div>
        <div class="wdg_avgfield_02_row">
            <div class="wdg_avgfield_02_title">
                <a href="">Tiros de Gol</a>
            </div>
            <div class="wdg_avgfield_02_teams box-gray">
                <div class="wdg_avgfield_02_teama">
                    <div class="element textcolor-title2">9</div>
                </div>
                <div class="dotted-right"></div>
                <div class="wdg_avgfield_02_teamb textcolor-title2">5</div> 
            </div>
        </div>

    </div>
</div>
<!-- END: wdg_avgfield_02 -->
<?
// footer
require_once("../global/footer.php");
?>
