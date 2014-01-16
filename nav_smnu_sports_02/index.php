<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: nav_smnu_sports_02-->
<div class="nav_smnu_sports_02">
    <div class="nav_smnu_sports_02_bar">
        <ul>
            <li><a href="">Fase 1</a></li>
            <li class="current"><a href="">Fase 2</a></li>
            <li><a href="">Fase 3</a></li>
            <li class="last"><a href="">Hexagonal</a></li>
        </ul>
    </div>
</div>
<!-- END: nav_smnu_sports_02 -->
<?
// footer
require_once("../global/footer.php");
?>