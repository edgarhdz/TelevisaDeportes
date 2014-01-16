<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 624px">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 960px)">

   
<!-- BEGIN: wdg_opinion_01 -->
<div class="wdg_opinion_01" data-enhance="false">

     <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a class="textcolor-title3" href="http://www.televisa.com" title="Link Description">
                    Opinión
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->      
        
    <div class="wdg_opinion_01_blog">
        <ul>
            <li>
                <a href="http://www.televisa.com" title="Link description">
                    <div>
                        <div>
                           <i class="tvsa-comments tvsa-3x"></i>
                        </div>
                        <div class="container_blog">
                            <p class="autor">
                            	<span class="textcolor-title1 name">Antonio de Valdes</span>
                                <span class="name">| 26. Oct. 2012</span>
                            </p>
                            <p class="blog">Video blog de Antonio de Vald&eacute;s y Enrique Burak 25/10.</p>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="http://www.televisa.com" title="Link description">
                    <div>
                        <div>
                            <i class="tvsa-comments tvsa-3x"></i>
                        </div>
                        <div class="container_blog">
                            <p class="autor">
                            	<span class="textcolor-title1 name">Antonio de Valdes</span>
                                <span class="name">| 26. Oct. 2012</span>
                            </p>
                            <p class="blog">Triunfo Gigante  de San Francisco, beisbol de las grandes ligas.</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>
<!-- END: wdg_opinion_01 -->
<?
// footer
require_once("../global/footer.php");
?>
