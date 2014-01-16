<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'ads_combo_01';
$comp[] = 'btn_progr_03';
$comp[] = 'mix_1arts_09';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_4arts_05';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_header_01';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'wdg_top03_01';
$comp[] = 'nav_smnu_sports_02';
$comp[] = 'wdg_scroll_dropdown';
$comp[] = 'wdg_simbology_02';
$comp[] = 'wdg_stats_res_02';
$comp[] = 'mix_1arts_03';
$comp[] = 'art_title_03';
$comp[] = 'wdg_sport_result_01';
$comp[] = 'wdg_sched_02';

$comp[] = 'wdg_match_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_stats_res_02"> 
    
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
    <div class="main">
        
        <!--Banners-->
        <div class="c1">
            <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        <!--parte central 1-->
        <div class="c2 left">
            <div class="c2_1">
                <?php getHtmlComponente("../art_title_03/index.html"); ?>
                <div class="c2_1o">
                	
                </div>
                <?php getHtmlComponente("../wdg_stats_res_02/index.html"); ?>
            </div>
            
        </div>

        <!--barra lateral 1era parte-->
        <div class="c3">
        
            <div class="c3_1 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right">  
            </div>
            <div class="c3_3 right hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
            
        </div>   
        
        <!--parte central 2-->
        <div class="c4 left">
            <div class="c4_1">
            </div>
            <div class="c4_2 hide-mobile">
            </div>
        </div>
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

<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>
<?
// footer
require_once("../global/footer.php");
?>