<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'wdg_top03_01';

$comp[] = 'wdg_matchesresult_01';

$comp[] = 'nav_header_01';

$comp[] = 'wdg_match_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_title_03';
$comp[] = 'mix_4arts_05';
$comp[] = 'mix_1arts_03';
$comp[] = 'mix_1arts_09';
$comp[] = 'mix_3arts_02';
$comp[] = 'str_pleca_01';
$comp[] = 'btn_progr_03';

$comp[] = 'wdg_champions_result_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_champions_main_01"> 
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
    </div> 
    <div class="main">
    
       <!--Banners-->
        <div class="cb">
            <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        <div class="container-one">
            <div class="c1">
                <div class="container-subtitle">
                    <!--Subtitulo rojo-->
                    <?php getHtmlComponente("../art_title_03/index.html"); ?>
                </div>
                <?php getHtmlComponente("../mix_4arts_05/index.html");?>

            </div>
            <div class="c3"></div>

        </div>
        <div class="container-two">
            <div class="c2 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html"); ?>
            </div>
            <div class="c4 right">  
                <?php getHtmlComponente("../wdg_top03_01/index.html"); ?>
            </div>

        </div>
        <?php getHtmlComponente("../wdg_champions_result_01/index.html"); ?>

    </div>

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

<?
// footer
require_once("../global/footer.php");
?>