<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'nav_team_header_01';
$comp[] = 'mix_carru_03';
$comp[] = 'str_pleca_01';
$comp[] = 'mix_1arts_08';
$comp[] = 'mix_2arts_08';
$comp[] = 'btn_progr_03';
$comp[] = 'mix_more_news_02';
$comp[] = 'vid_4vids_05';
$comp[] = 'img_galry_01';
$comp[] = 'wdg_altasbajas_result_03';
$comp[] = 'wdg_positions_01';
$comp[] = 'wdg_fut_convocated_01';
$comp[] = 'mix_smex_dt_01';
$comp[] = 'wdg_smex_strategy_01';
$comp[] = 'wdg_smex_effectiveness_01';
$comp[] = 'wdg_team_comparison_01';
$comp[] = 'wdg_player_comparison_01';
$comp[] = 'wdg_titles_won_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_opinion_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'nav_corft_01';
$comp[] = 'wdg_match_01';
$comp[] = 'mix_1arts_09';
$comp[] = 'wdg_social_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';
$comp[] = 'wdg_teams_carru_02';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_local_teams_fut_01 futmx-america"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		      <?php getHtmlComponente("../wdg_teams_carru_02/index.html"); ?>
        </div>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
            <div class="c1_1">
                <?php getHtmlComponente("../nav_team_header_01/index.html"); ?>
            </div>
        </div>

		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_08/index.html"); ?>
            </div>
        </div>
		
        <!--barra lateral 1era parte-->
		<div class="c3">
        
			<div class="c3_1 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right bottom_space hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image1">
            </div>
			<div class="c3_3 hide-tablet">  
                <?php getHtmlComponente("../mix_more_news_02/index.html");?>
            </div>
		</div>

        <!--parte central 2-->
        <div class="c3_banner bottom_space hide-tablet">
           <img src="http://placehold.it/957x97" alt="Image2" />
        </div>

        <div class="c4">
            <div class="c4_1">
                <?php getHtmlComponente("../vid_4vids_05/index.html",array('link'));?>
            </div>
            <div class="c4_2">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>

        </div>

        <!--barra lateral 2  parte-->
        <div class="c5">
        
            <div class="c5_1 left hide-mobile">  
                <?php getHtmlComponente("../wdg_altasbajas_result_03/index.html");?>
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_positions_01/index.html");?>
            </div>
            <div class="c5_3 hide-tablet">  
                <?php getHtmlComponente("../wdg_fut_convocated_01/index.html");?>
            </div>
        </div>

        <div class="c6">
            <div class="c6_1">
                <?php getHtmlComponente("../mix_smex_dt_01/index.html");?>
            </div>
            <div class="c6_2">
                <?php getHtmlComponente("../wdg_smex_strategy_01/index.html"); ?>
            </div>
             <div class="c6_3 left">
                <?php getHtmlComponente("../wdg_smex_effectiveness_01/index.html");?>
            </div>
            <div class="c6_4 right">
                <?php getHtmlComponente("../wdg_smex_effectiveness_01/index.html");?>
            </div>
            <div class="c6_5 hide-mobile">
                <?php getHtmlComponente("../wdg_team_comparison_01/index.html");?>
            </div>
            <div class="c6_6 hide-mobile">
                <?php getHtmlComponente("../wdg_player_comparison_01/index.html");?>
            </div>
        </div>
        <div class="c7">
            <div class="c7_1 left">
				<?php getHtmlComponente("../wdg_titles_won_01/index.html");?>
			</div>
			<div class="c7_2 right hide-mobile">
				<?php getHtmlComponente("../wdg_twitt_02/index.html");?>
			</div>
			<div class="c7_3 hide-tablet bottom_space">
				<img src="../global/img/facebook_cmp.png" width="300" alt="Image3">
			</div>
			<div class="c7_4 hide-tablet">
				<?php getHtmlComponente("../wdg_poll_01/index.html");?>
			</div>
        </div>
        <div class="c8">
            <?php getHtmlComponente("../btn_6prog_02/index.html");?>
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

<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>
<?
// footer
require_once("../global/footer.php");
?>