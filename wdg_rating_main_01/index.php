<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_rating_main_01-->
<div class="wdg_rating_main_01">
    <div class="wdg_rating_main_01_player">
        <p class="activity_title textcolor-title4">Promedio</p>
        <p class="average textcolor-title4 dotted-right">8.2</p>
        <p class="average_total textcolor-title1">8.5</p>
        <img alt="" class="father" src="http://placehold.it/300x225">
        <p class="name">Jonathan Orozco</p>
        <p class="activity textcolor-title4">Portero</p>
        <p class="activityn textcolor-title1">Monterrey</p>
    </div>
    <div class="wdg_rating_main_01_players dotted-bottom">
        <img alt="" src="http://placehold.it/135x105">
        <div class="player_data dotted-bottom">
            <p class="activity_title textcolor-title4">Promedio</p>
            <p class="average textcolor-title4 dotted-right">8.2</p>
            <p class="average_total textcolor-title1">8.5</p>
        </div>
        <div class="player_data2">
            <p class="name">Jonathan Orozco</p>
            <p class="activity textcolor-title4">Portero</p>
            <p class="activityn textcolor-title1">Monterrey</p>
        </div>
    </div>
    <div class="separator"></div>
    <div class="wdg_rating_main_01_players">
        <img alt="" src="http://placehold.it/135x105">
        <div class="player_data dotted-bottom">
            <p class="activity_title textcolor-title4">Promedio</p>
            <p class="average textcolor-title4 dotted-right">8.2</p>
            <p class="average_total textcolor-title1">8.5</p>
        </div>
        <div class="player_data2">
            <p class="name">Jonathan Orozco</p>
            <p class="activity textcolor-title4">Portero</p>
            <p class="activityn textcolor-title1">Monterrey</p>
        </div>
    </div>
</div>
<!-- END: wdg_rating_main_01 -->
<?
// footer
require_once("../global/footer.php");
?>