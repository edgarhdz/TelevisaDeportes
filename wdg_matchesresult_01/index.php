<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
require_once("../global/template.php");

// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../wdg_match_01/css/wdg_match_01_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_match_01/css/wdg_match_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../wdg_match_01/css/wdg_match_01.css" media="screen and (min-width: 60em)">

<div class="wdg_matchesresult_01" data-enhance="false">
    <div class="wdg_matchesresult_01_container">
        <div class="wdg_matchesresult_01_left">
            <div class="wdg_matchesresult_01_top">
                <a class="title" href="#">Resultados</a>
                <a class="subtitle" href="#">Minuto a Minuto</a>
                <a href=""><span class="wdg_matchesresult_nike"></span></a>
            </div>
            <div class="wdg_matchesresult_01_bottom">
                <div class="wdg_matchesresult_important">
                        <a class="featured" href="#">
                            <span class="wdg_matchesresult_dots"></span>Destacados
                        </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <p>Apertura 2012</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Copa MX</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Champions</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Europa League</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>España</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Inglaterra</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Francia</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Alemania</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Italia</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>TRI</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Concacaf</p>
                        </a>
                    </li>
                </ul>

            </div>
            <div class="wdg_matchesresult_visible">
                <p><a class="wdg_matchesresult_show" href=""><span class="wdg_matchesresult_sprite uparrow"></span>Ocultar</a></p>
                <p><a class="wdg_matchesresult_hide" href=""><span class="wdg_matchesresult_sprite downarrow"></span>Ver Más</a></p>
            </div>
        </div>
        <div class="wdg_matchesresult_01_right">
            <div class="wdg_matchesresult_01_navcontainer">
                <div class="wdg_matchesresult_navarrowleft">
                    <a class="wdg_matchesresult_navleft" href="#left">
                        <i class="tvsa-double-caret-left"></i>
                    </a> 
                </div>
                <div class="wdg_matchesresult_01_nav">
                    <ul class="wdg_matchesresult_01_theme">
                        <li class="selected">
                            <a href="">
                                <p>Fútbol</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>Box</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>Béisbol</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>NFL</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>NBA</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>F1</p>
                            </a> 
                        </li>
                        <li>
                            <a href="">
                                <p>Tenis</p>
                            </a> 
                        </li>
                    </ul>
                <div class="linedown"></div>    
                </div>
                <div class="wdg_matchesresult_navarrowright">
                    <a class="wdg_matchesresult_navright" href="#right">
                        <i class="tvsa-double-caret-right"></i>
                    </a>
                </div>
            </div>
            <div id="left" class="wdg_matchesresult_01_mobileleft">
                <a class="wdg_matchesresult_left" href="#left">
                	<i class="tvsa-caret-left"></i>
                    <!-- <span class="wdg_matchesresult_leftmobile"></span> -->
                </a>
            </div>
            <div class="wdg_matchesresult_01_components">

                <ul class="wdg_matchesresult_01_list">
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>                      
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>                      
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                    <li>
                        <?php getHtmlComponente("../wdg_match_01/index.html"); ?>
                    </li>
                </ul>  
            </div>
            <div id="right" class="wdg_matchesresult_01_mobileright">
                <a class="wdg_matchesresult_right" href="#right">
                	<i class="tvsa-caret-right"></i>
                    <!-- <span class="wdg_matchesresult_rightmobile"></span> -->
                </a>
            </div>
            <div class="wdg_matchesresult_01_arrows">
                <a class="wdg_matchesresult_left" href="#left">
                    <span class="tvsa-double-caret-left active"></span>
                </a>
                <a class="wdg_matchesresult_right" href="#right">
                    <span class="tvsa-double-caret-right inactive"></span>  
                </a>
            </div>
        </div>
    </div>
</div>
<?
// footer
require_once("../global/footer.php");
?>