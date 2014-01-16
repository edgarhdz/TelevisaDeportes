<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr", "jquery.history");
require_once("../global/template.php");
require_once("../global/header.php");

// header
$comp [] = 'img_fotogalfull_01';
$comp [] = 'ads_combo_01';
$comp [] = 'nav_corft_01';
$comp [] = 'nav_header_01';
$comp [] = 'nav_miniheader_01';

getData ( $comp, "css" );
getData ( $comp, "js" );

?>
<script type="text/javascript" src="../global/js/jquery.history.js"></script>
<section class="td_gallery_detail_01">
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_miniheader_01/index.html"); ?>
    </div>
    <div class="main">
        <div class="c1">
            <div class="c1_1">
                <?php getHtmlComponenteVideo("../img_fotogalfull_01/index.html"); ?>
            </div>
        </div>
        <div class="c2">
            <div class="c2_1 banner_template">
                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
            </div>
        </div>
    </div>
    <div class="footerPleca">
        <div class="footer" style="clear: both">
            <?php getHtmlComponente("../nav_corft_01/index.html"); ?> 
        </div>
    </div>
</section>
<?
require_once ("../global/footer.php");
?>