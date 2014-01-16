<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'nav_smnu_sports_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'nav_header_01';
$comp[] = 'wdg_sport_result_01';
$comp[] = 'ads_combo_01';

$comp[] = 'art_title_02';
$comp[] = 'wdg_chalkboard_01';
$comp[] = 'wdg_chalkboard_02';
$comp[] = 'wdg_team_comparison_01';
$comp[] = 'wdg_player_comparison_01';
$comp[] = 'str_pleca_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_pizarra_main_01"> 
    
	
	<header class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php getHtmlComponente("../wdg_sport_result_01/index.html"); ?>
		
    </header> 
	
	
	
    <div class="main">
	
        <div class="container-one">
			<div><?php getHtmlComponente("../ads_combo_01/index.html"); ?></div>
			<?php getHtmlComponente("../nav_smnu_sports_01/index.html"); ?>
			<?php getHtmlComponente("../art_title_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_chalkboard_01/index.html"); ?>
			<?php getHtmlComponente("../wdg_chalkboard_02/index.html"); ?>

        </div>
		
        <div class="container-two">
            
			<div class="c1 hide-mobile left">
            	<?php getHtmlComponente("../wdg_player_comparison_01/index.html"); ?>  
            </div>
            <div class="c2 right">  
                <?php getHtmlComponente("../wdg_team_comparison_01/index.html"); ?>
            </div>

        </div>
		
        <?php getHtmlComponente("../btn_6prog_02/index.html"); ?>

    </div>

    <!-- BEGIN: <footer> -->
    <footer class="footerPleca">

        <div class="footer" style="clear: both">
            <?php getHtmlComponente("../nav_bookmark_01/index.html"); ?> 
            <?php getHtmlComponente("../nav_footer_01/index.html"); ?>
            <?php getHtmlComponente("../nav_corft_01/index.html"); ?> 
        </div>
    </footer>
    <!-- END: <footer> -->
</section>   
<!-- END: <Template> -->

<?
// footer
require_once("../global/footer.php");
?>