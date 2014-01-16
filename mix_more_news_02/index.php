<?
define("COMPONENT", basename(__DIR__));
define("JS", FALSE);

// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

<!-- BEGIN: mix_more_news_02 -->
<div class="mix_more_news_02">

     <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <strong class="background-color-pleca1">
                <a class="textcolor-title3" href="http://www.televisa.com" title="Link Description">
                    Más notas
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </strong>
        </div>
    </div>
    <!-- END: str_pleca_01 -->      
        
    <ul class="articles"> 
        <li class="firt_child"> 
            <a href="http://www.televisa.com" title="Link description" class="link"> 
                <img src="http://lorempixel.com/85/63/people/1" alt="Image description"/>
                <!-- <span class="sprite photo-corner"></span> -->
                <em class="topic textcolor-title2">Soledad Loaeza</em>
                <h2>Soledad Loaeza opina acerca de la reciente.</h2>
                <span class="icon"></span> 
            </a> 
        </li>
        <li> 
            <a href="http://www.televisa.com" title="Link description" class="link"> 
                <img src="http://lorempixel.com/85/63/people/1" alt="Image description"/>
                <!-- <span class="sprite photo-corner"></span> -->
                <em class="topic textcolor-title2">Soledad Loaeza</em>
                <h2>Soledad Loaeza opina acerca de la reciente.</h2>
                <span class="icon"></span> 
            </a> 
        </li>
        <li> 
            <a href="http://www.televisa.com" title="Link description" class="link"> 
                <img src="http://lorempixel.com/85/63/people/1" alt="Image description"/>
                <!-- <span class="sprite photo-corner"></span> -->
                <em class="textcolor-title2">Soledad Loaeza</em>
                <h2>Soledad Loaeza opina acerca de la reciente.</h2>
                <span class="icon"></span> 
            </a> 
        </li> 
       
    </ul>
</div>
<!-- END: mix_more_news_02 -->
<?
// footer
require_once("../global/footer.php");
?>