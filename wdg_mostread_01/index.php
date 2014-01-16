<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: wdg_mostread_01 -->
<div class="wdg_mostread_01">
    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <strong class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Lo Más Leído
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </strong>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
    <div class="wdg_mostread_01_content">
        <ul class="wdg_mostread_01_container">
            <li class="wdg_mostread_01_show">
                <a>
                    <div class="wdg_mostread_01_number textcolor-title6">1</div>
					<div class="subrayado"></div>
                    <h2 class="wdg_mostread_01_text">Semana importante para la NFL</h2> 
                </a>

            </li>
            <li class="wdg_mostread_01_show">
                <a>
                    <div class="wdg_mostread_01_number textcolor-title6">2</div>
					<div class="subrayado"></div>
                    <h2 class="wdg_mostread_01_text">Adrián Gonzalez tiene su mejor jornada en esta naciente campaña</h2>  
                </a>

            </li>
            <li class="wdg_mostread_01_show">
                <a>
                    <div class="wdg_mostread_01_number textcolor-title6">3</div>
					<div class="subrayado"></div>
                    <h2 class="wdg_mostread_01_text">Tigres y diablos dividen victorias en el arranque</h2>
                </a>

            </li>
            <li class="wdg_mostread_01_hide">
                <a>
                    <div class="wdg_mostread_01_number textcolor-title6">4</div>
					<div class="subrayado"></div>
                    <h2 class="wdg_mostread_01_text">Video Blog Antonio de Valdés</h2> 
                </a>

            </li>
            <li class="wdg_mostread_01_hide">
                <a>
                    <div class="wdg_mostread_01_number textcolor-title6">5</div>
					<div class="subrayado"></div>
                    <h2 class="wdg_mostread_01_text">Termina de forma prematura la participación de méxico en el clásico</h2>
                </a>
            </li>
        </ul>
    </div>
</div>
<!-- END: wdg_mostread_01 -->
<?
// footer
require_once("../global/footer.php");
?>