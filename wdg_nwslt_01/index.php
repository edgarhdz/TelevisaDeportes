<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

   
<!-- BEGIN: wdg_nwslt_01 -->
<div class="wdg_nwslt_01" data-enhance="false"> 

 <!-- BEGIN: str_pleca_01 -->
<div class="str_pleca_01">
    <div class="str_pleca_01_title">
        <h3 class="background-color-pleca1">
            <a class="textcolor-title3" href="http://www.televisa.com" title="Link Description">
                Newsletter
                <span class="str_pleca_01_arrowa selected"></span>
                <span class="str_pleca_01_arrowb"></span>
            </a>
        </h3>
    </div>
</div>
<!-- END: str_pleca_01 -->  
    <div class="container-top background-color1">
    	<div class="performance background-color1"></div>
        <i class="tvsa-inbox tvsa-2x"></i>
        <p class="textcolor-title3">Inscríbete y recibe las noticias más populares y lo último de los deportes</p>
    </div>

    <div class="container-email">
        
        <div class="container-right">
            <input type="email" value="Correo electrónico" name="email" onfocus="hideEmailText();" onblur="showEmailText();" class="email-txt">  
        </div>
    </div>

    <div class="container-btn">
        <input type="button" value="Inscríbete" class="subscribe">
    </div>

</div>
<!-- END: wdg_nwslt_01 -->
<?
// footer
require_once("../global/footer.php");
?>
