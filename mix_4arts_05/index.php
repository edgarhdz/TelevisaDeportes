<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/template.php");
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">
<link rel="stylesheet" href="../mix_1arts_03/css/mix_1arts_03_mobile.css" media="screen"/>
<link rel="stylesheet" href="../mix_1arts_03/css/mix_1arts_03_tablet.css" media="screen and (min-width: 39em)"/>
<link rel="stylesheet" href="../mix_1arts_03/css/mix_1arts_03.css" media="screen and (min-width: 60em)"/>
<link rel="stylesheet" href="../mix_1arts_09/css/mix_1arts_09_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_09/css/mix_1arts_09_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_09/css/mix_1arts_09.css" media="screen and (min-width: 60em)">
<link rel="stylesheet" href="../mix_3arts_02/css/mix_3arts_02_mobile.css" media="screen"/>
<link rel="stylesheet" href="../mix_3arts_02/css/mix_3arts_02_tablet.css" media="screen and (min-width: 39em)"/>
<link rel="stylesheet" href="../mix_3arts_02/css/mix_3arts_02.css" media="screen and (min-width: 60em)"/>

<link rel="stylesheet" href="../global/css/tvsa-icons.css" />

<!-- BEGIN: mix_4arts_05 --> 
<div class="mix_4arts_05" data-enhance="false">

    <div class="contenedor">
        <!-- BEGIN: pleca -->
        <div class="str_pleca_01">
            <div class="str_pleca_01_title">
                <h3 class="background-color-pleca1">
                    <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                        Boxeo
                        <span class="str_pleca_01_arrowa selected"></span>
                        <span class="str_pleca_01_arrowb"></span>
                    </a>
                </h3>
            </div>
        </div>
        <!-- END: pleca -->
      <!-- BEGIN: mix_1arts_03 -->
        <?php getHtmlComponente("../mix_1arts_03/index.html"); ?>
        
        
<!-- END: mix_1arts_03 -->

<!-- BEGIN:mix_3arts_02 -->
<div class="mix_3arts_02">
    <div class="mix_3arts_02_first">
        <!-- BEGIN:mix_1arts_09 -->
        <?php getHtmlComponente("../mix_1arts_09/index.html"); ?>
        <!--END:mix_1arts_09-->
    </div>
    <div class="mix_3arts_02_middle">
        <!-- BEGIN:mix_1arts_09 -->
        <?php getHtmlComponente("../mix_1arts_09/index.html"); ?>
        <!--END:mix_1arts_09-->
    </div>
    <div class="mix_3arts_02_last">
        <!-- BEGIN:mix_1arts_09 -->
        <?php getHtmlComponente("../mix_1arts_09/index.html"); ?>
        <!--END:mix_1arts_09-->
    </div>
    
    <div class="clearBoth"></div>
</div>
<!--END:mix_3arts_02-->

   
    </div><!--Cierra contenedor -->
</div>
<!-- END: mix_4arts_05 -->
<?
// footer
require_once("../global/footer.php");
?>