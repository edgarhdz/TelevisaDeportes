<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>


<div class="nav_smex_header_01" data-enhance="false">
	<div class="fondo" data-img="http://lorempixel.com/955/90/abstract">
    	<div class="degradado_head"></div>
    		<div class="logo">
            	<h1 class="texto textcolor-title3">Selecci&oacute;n Mexicana</h1>
                <img src="http://placehold.it/80x90" alt="" />
            </div>
    </div>
    <div class="sombra"></div>
    <div class="nav_smex_header_01_container">
        <div class="nav_smex_header_01_right">
            <div class="nav_smex_header_01_navcontainer">
                <div class="wdg_matchesresult_navarrowleft">
                    <a class="wdg_matchesresult_navleft" href="#left">
                        <span class="wdg_matchesresult_navlefticon">
                        	<i class="tvsa-double-caret-left"></i>
                        </span>
                    </a> 
                </div>
                <div class="box">
                    <div class="nav_smex_header_01_nav">
                        <ul class="nav_smex_header_01_theme">
                            <li class="border-bottom2"><a class="textcolor-title2" href=""><p class="dotted-right">Estadísticas</p></a></li>
                            <li><a href=""><p class="dotted-right">Torneo actual</p></a></li>
                            <li><a href=""><p class="dotted-right">Plantel</p></a> </li>
                            <li><a href=""><p>Noticias</p></a></li>
                            <!--<li><a href=""><p class="dotted-right">Videos</p></a></li>-->
                        </ul>
                    </div>
                </div>
                <div class="wdg_matchesresult_navarrowright">
                    <a class="wdg_matchesresult_navright" href="#right">
                        <span class="wdg_matchesresult_navrighticon">
                        	<i class="tvsa-double-caret-right"></i>
                        </span>
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>
<?
// footer
require_once("../global/footer.php");
?>