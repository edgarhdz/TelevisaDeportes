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


<!-- BEGIN: wdg_categories_01 -->
<div class="wdg_categories_01" data-enhance="false">
    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h2 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Categorias
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h2>
        </div>
    </div>

    <!-- END: str_pleca_01 -->
    <div class="wdg_categories_01_content">
        <ul class="wdg_categories_01_container">
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Fútbol</h3> 
                </a>

            </li>
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Fútbol Internacional</h3>  
                </a>

            </li>
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Fútbol Americano</h3>
                </a>

            </li>
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Basquetbol</h3> 
                </a>

            </li>
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Golf</h3>
                </a>

            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Box</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Juegos Olímpicos</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Lucha Libre</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Panamericanos</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Tenis</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Copa MX</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Eurocopa</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Arbitros</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Automovilismo</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Uncategorized</h3>
                </a>                          
            </li> 

            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Uncategorized 16</h3>
                </a>                          
            </li> 
            <li>
                <a href="#">
                    <h3 class="wdg_categories_01_text">Uncategorized 17</h3>
                </a>                          
            </li> 
        </ul>
        <div class="wdg_categories_01_hidecontent">
            <a href="#" class="verTodo" id="verTodo">
            	<p>Ver Todo<span class="sprite dropdown-gray"></span></p>
            </a>
            <a href="#" class="ocultar" id="ocultar">
            	<p>Ocultar<span class="sprite dropdown-gray up"></span></p>
            </a>
        </div>
    </div>
</div>
<!-- END: wdg_categories_01 -->
<?
// footer
require_once("../global/footer.php");
?>