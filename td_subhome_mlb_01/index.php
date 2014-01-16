<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'mix_1arts_03';
$comp[] = 'img_galry_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_top10_01';

$comp[] = 'nav_header_01';
$comp[] = 'wdg_teams_carru_01';
$comp[] = 'ads_combo_02';
$comp[] = 'art_branch_01';

$comp[] = 'mix_carru_03';
$comp[] = 'btn_progr_03';
$comp[] = 'mix_1arts_08';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_2arts_07';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_4arts_05';

$comp[] = 'wdg_nwslt_01';
$comp[] = 'wdg_poll_01';


$comp[] = 'wdg_social_01';
$comp[] = 'wdg_sched_02';
$comp[] = 'wdg_opinion_01';
$comp[] = 'mix_8arts_01';
$comp[] = 'mix_1arts_07';


$comp[] = 'btn_progr_02';
$comp[] = 'wdg_humor_01';
$comp[] = 'wdg_sport_result_02';
$comp[] = 'wdg_sport_standings_01';
$comp[] = 'wdg_mlb_leaders_01';
$comp[] = 'wdg_sport_teams_01';

$comp[] = 'wdg_sport_result_01';
$comp[] = 'mix_1arts_09';
$comp[] = 'str_pleca_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_subhome_mlb_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php getHtmlComponente("../wdg_teams_carru_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
			<?php //getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        <?php getHtmlComponente("../art_branch_01/index.html"); ?>
        
        
		<!--parte central 1-->
		<div class="c2">
			<div class="c2_1">
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_07/index.html"); ?>
            </div>
            <!--<div class="separator_component left hide-mobile"></div>
            <div class="c2_3 right">
                <?php //getHtmlComponente("../mix_1arts_08/index.html"); ?>
            </div>-->
			<div class="c2_4">
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html");?>
			</div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_1_especial">
            	<img src="http://placehold.it/320x50" alt="Image">
            </div>
			<div class="c3_2 right bottom_space hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image">
            </div>
			<div class="c3_3 hide-mobile">  
                <?php getHtmlComponente("../wdg_sport_result_02/index.html",array('link'));?>
            </div>
			<div class="c3_4 hide-tablet"> 
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_1arts_08b/index.html");?>
            </div>
		</div>
		
		<!--Banner 100%-->
            <div class="c6 banner_template bottom_space hide-tablet">
                <img src="http://placehold.it/955x90" alt="Image">
            </div>

        <!--parte central 2-->
        <div class="c4">
        	<div class="c4_1">  
				<?php getHtmlComponente("../mix_4arts_05/index.html");?>
            </div>
			<div class="c4_2 hide-mobile">  
            	<?php getHtmlComponente("../mix_8arts_01/index.html");?>
            </div>
        </div>

        <!--barra lateral 2da parte-->
		<div class="c5 hide-tablet">
			<div class="c5_1 hide-mobile left">  
                <?php getHtmlComponente("../wdg_top10_01/index.html");?>
            </div>
			<div class="c5_2 right">
            	<?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>			
		</div>

		<!--Banner 100%-->
            <div class="c6 hide-mobile">
                <?php getHtmlComponente("../ads_combo_02/index.html");?>
            </div>
        <!--Componente exclusivo del subhome-->
        <div class="c7 hide-mobile">
			
			<?php getHtmlComponente("../wdg_sport_standings_01/index.html",array('link')); ?>
			<?php getHtmlComponente("../wdg_mlb_leaders_01/index.html",array('link')); ?>
			<?php getHtmlComponente("../wdg_sport_teams_01/index.html",array('link')); ?>
		</div>

        <!--barra lateral 3era parte-->
		<div class="c8 hide-mobile">
			<div class="c8_1">  
				<?php getHtmlComponente("../btn_progr_02/index.html");?>
            </div>
			<div class="c8_2">  
				<?php getHtmlComponente("../wdg_humor_01/index.html");?>
            </div>
			<div class="c8_3 hide-tablet">  
				<?php getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
			<div class="c8_4 left">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
			<div class="c8_5 hide-tablet">  
                <img src="../global/img/facebook_cmp.png" alt="Image" style="margin-bottom:36px;" />
            </div>
			<div class="c8_6 right">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
			<div class="c8_7 hide-tablet">  
                <?php getHtmlComponente("../wdg_nwslt_01/index.html");?>
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

<!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->
<?
// footer
require_once("../global/footer.php");
?>