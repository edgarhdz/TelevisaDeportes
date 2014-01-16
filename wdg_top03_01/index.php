<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_top03_01-->
<div class="wdg_top03_01" data-enhance="false">
    <div class="wdg_carousa showArrows">
        <div class="wdg_top03_01_title">
            <em><a href="#/" title="Link Description">Más Noticias<span class="icon mobile"></span></a></em>
            <ul class="arrows">
                <li><a href="#left" class="wdg_carousa_left carouselArrowLeft"><i class="tvsa-double-caret-left inactive"></i></a></li>
                <li class="dotted-left"><a href="#right" class="wdg_carousa_right carouselArrowRight"><i class="tvsa-double-caret-right active"></i></a></li>
            </ul>
        </div>
        <div class="wdg_top03_01_carousel">
            <ul>
                <li>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                </li>
                <li>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                </li>
                <li>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                    <?php include "inc/entry.xml"; ?>
                </li>
            </ul>
        </div>
    </div>
    <div class="bullets">
        <div class="background-color1"></div><div></div><div></div>
    </div>
</div>
<!-- END: wdg_top03_01 -->
<?
// footer
require_once("../global/footer.php");
?>