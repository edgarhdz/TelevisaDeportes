<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'wdg_goals_by_player_01';

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_title_03';
$comp[] = 'wdg_scroll_dropdown';

$comp[] = 'wdg_simbology_03';
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_sched_02';
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_sched_02';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';
$comp[] = 'str_pleca_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_stats_goals_by_player_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1 banner_template hide-mobile">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>

		<!--parte central 1-->
		<div class="c2 left hide-mobile">
			<div class="c2_1">
                <?php getHtmlComponente("../art_title_03/index.html"); ?>
            </div>
            <div class="c2_2">
                <?php getHtmlComponente("../wdg_goals_by_player_01/index.html"); ?>
            </div>
            <div class="c2_3">
                <?php getHtmlComponente("../wdg_simbology_03/index.html"); ?>
            </div>	
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right hide-mobile">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
			<div class="c3_2 bottom_space hide-tablet">  
                <img alt="" src="http://placehold.it/300x250" />
            </div>
            <div class="c3_3 right">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
			
		</div>
        
	</div><!-- END: main -->

    
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