<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'ads_combo_01';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_goals_carru_01';
$comp[] = 'mix_1arts_09';
$comp[] = 'mix_carru_01b';
$comp[] = 'mix_1arts_08';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_2arts_07';
$comp[] = 'btn_progr_03';
$comp[] = 'vid_4vids_05';
$comp[] = 'img_galry_01';
$comp[] = 'art_latestnews_01';
$comp[] = 'wdg_positions_01';
$comp[] = 'btn_carru_prog_02';
$comp[] = 'mix_1arts_03';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_4arts_05';
$comp[] = 'mix_1arts_07';
$comp[] = 'wdg_altasbajas_result_01';

$comp[] = 'wdg_sched_02';
$comp[] = 'mix_4arts_01';
$comp[] = 'wdg_teams_classification_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_opinion_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'mix_2arts_03';

$comp[] = 'wdg_nwslt_01';
$comp[] = 'wdg_humor_01';
$comp[] = 'wdg_match_01';
$comp[] = 'wdg_social_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_home_main_01">
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <div class="c0">
            <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
        </div>
    </div>
    <div class="main">
        <!--Banners-->
        <div class="c1">
            <div class="c1_1 banner_template">
                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
            </div>
        </div>
        <!--parte central 1-->
        <div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../mix_carru_01b/index.html"); ?>
            </div>
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_07/index.html"); ?>
            </div>
            <!--<div class="separator_component left hide-mobile"></div>
                <div class="c2_3 right">
                    <?php //getHtmlComponente("../mix_1arts_08/index.html"); ?>
                </div>-->
        </div>
        <!--barra lateral 1era parte-->
        <div class="c3">
            <div class="c3_1 left"> 
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right">  
                <?php getHtmlComponente("../art_latestnews_01/index.html");?>
            </div>
        </div>
        <!--parte central 2 - 100%-->
        <div class="c3_">
            <?php getHtmlComponente("../btn_carru_prog_02/index.html");?>
        </div>
        <div class="c3_banner hide-tablet banner_template">
            <img src="http://placehold.it/957x91" alt="Image1" />
        </div>
        <div class="c4">
            <div class="c4_1">
                <?php getHtmlComponente("../mix_4arts_05/index.html");?>
            </div>
            <div class="c4_2">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../vid_4vids_05/index.html",array('link'));?>
            </div>
            <div class="c4_3">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>
        </div>
        <!--barra lateral 2da parte-->
        <div class="c5">
            <div class="c5_1 left hide-mobile">  
                <?php getHtmlComponente("../wdg_altasbajas_result_01/index.html");?>
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_goals_carru_01/index.html");?>
            </div>
            <div class="c5_3 right hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
            <div class="c5_4 hide-mobile hide-desktop bottom_space left">
                <img src="http://placehold.it/300x250" alt="Image2" />
            </div>
            <div class="c5_5">
                <img src="http://placehold.it/320x50" alt="Image3" />
            </div>
        </div>
        <div class="c5_banner hide-tablet banner_template">
            <img src="http://placehold.it/957x91" alt="Image4" />
        </div>
        <div class="c6">
            <div class="c6_1">
                <?php getHtmlComponente("../mix_4arts_05/index.html");?>
            </div>
            <div class="c6_2 hide-tablet">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponenteVideo("../mix_1arts_03/index.html");?>
                <?php getHtmlComponenteVideo("../mix_3arts_02/index.html");?>
            </div>
            <div class="c6_3 left hide-mobile">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_4arts_01/index.html");?>
            </div>
            <div class="c6_4 right hide-mobile">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_4arts_01/index.html");?>
            </div>
            <div class="c6_5 left hide-tablet">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_4arts_01/index.html");?>
            </div>
            <div class="c6_6 right hide-tablet">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_4arts_01/index.html");?>
            </div>
            <div class="c6_7 hide-tablet">
                <?php getHtmlComponente("../mix_2arts_03/index.html");?>
            </div>
        </div>
        <!--barra lateral 3era parte-->
        <div class="c7">
            <div class="c7_1 hide-tablet">
                <?php getHtmlComponente("../wdg_teams_classification_01/index.html");?>
            </div>
            <div class="c7_2 left hide-tablet bottom_space">
                <img src="http://placehold.it/300x100" alt="Image5" />
            </div>
            <div class="c7_3 hide-tablet bottom_space">
                <img src="http://placehold.it/300x250" alt="Image6" />
            </div>
            <div class="c7_4 hide-tablet bottom_space">
                <?php getHtmlComponente("../wdg_humor_01/index.html");?>
            </div>
            <div class="c7_5 left">
                <?php getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
            <div class="c7_6 hide-tablet">
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
            <div class="c7_7 hide-tablet bottom_space">
                <img src="../img/facebook.jpg" alt="facebook" />
            </div>
            <div class="c7_8 right">
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
            <div class="c7_9 hide-tablet">
                <?php getHtmlComponente("../wdg_nwslt_01/index.html");?>
            </div>
        </div>
    </div>
    <!-- END: main -->
    <!-- BEGIN: <footer> -->
    <div class="footerPleca">
        <div class="footer" style="clear: both">
            <?php getHtmlComponente("../nav_bookmark_01/index.html"); ?> 
            <?php getHtmlComponente("../nav_footer_01/index.html"); ?>
            <?php getHtmlComponente("../nav_corft_01/index.html"); ?> 
        </div>
    </div>
    <!-- END: <footer> -->
</section>
<!-- END: <Template> -->
<!-- <script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script> -->
<?
// footer
require_once("../global/footer.php");
?>