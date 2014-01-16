<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: nav_smnu_sports_01-->
<div class="nav_smnu_sports_01" data-enhance="false">
    <div class="navarrowleft">
        <a class="wdg_matchesresult_navleft" href="#left"> 
        	<span class="navlefticon">
            	<i class="tvsa-double-caret-left inactive"></i>
            </span>
        </a>
    </div>
    <div class="container">
        <div class="nav_smnu_sports_01_bar">
            <ul>
                <li class="current">
                	<a href="http://www.televisa.com" title="Link Description">Previo</a>
                </li>
                <li class="nav_smnu_sports_01_block">
                	<a href="http://www.televisa.com" title="Link Description">Alineación</a>
                </li>
                <li class="hide1">
                	<a href="http://www.televisa.com" title="Link Description">Rating</a>
                </li>
                <li class="nav_smnu_sports_01_block nav_smnu_sports_01_block2">
                	<a href="http://www.televisa.com" title="Link Description">MxM</a>
                </li>
                <li class="hide2">
                	<a href="http://www.televisa.com" title="Link Description">Pizarra</a>
                </li>
                <li class="nav_smnu_sports_01_block nav_smnu_sports_01_block2">
                	<a href="http://www.televisa.com" title="Link Description">Cronica</a>
                </li>
                <li class="last nav_smnu_sports_01_block">
                	<a href="http://www.televisa.com" title="Link Description">Video</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="navarrowright">
        <a class="wdg_matchesresult_navright" href="#right">
            <span class="navrighticon"><i class="tvsa-double-caret-right active"></i></span>
        </a>
    </div>
</div>
<!-- END: nav_smnu_sports_01 -->
<?
// footer
require_once("../global/footer.php");
?>