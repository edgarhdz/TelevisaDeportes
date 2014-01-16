<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'wdg_match_01';
$comp[] = 'str_pleca_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';
//Left
$comp[] = 'art_title_01';
$comp[] = 'mix_2arts_06';
$comp[] = 'img_stage_01';
$comp[] = 'art_bullet_01';
$comp[] = 'art_note_01';
$comp[] = 'art_quote_01';
$comp[] = 'str_pleca_01';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_3arts_03';
$comp[] = 'mix_1arts_09';
$comp[] = 'wdg_comen_01';
$comp[] = 'nav_paginator_01';
//Right
$comp[] = 'wdg_podcast_video_01';
$comp[] = 'wdg_podcast_03';
$comp[] = 'wdg_altasbajas_result_01';
$comp[] = 'wdg_teams_classification_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_poll_01';
//Footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_tdn_nota_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		<div class="c1">
	        <!--Banners-->
	        <div class="c1_1">
	                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
	        </div>
	        <div class="c1_2">
				<img src="img/tdn-logo.png" alt="Image description" width="955" height="42"/>
	            <?php getHtmlComponente("../art_branch_01/index.html"); ?>
	        </div>
		</div>
   
		<!--parte central 1-->
		<div class="c2 left">
			<div class="c2_1">
            	<?php getHtmlComponente("../art_title_01/index.html"); ?>
            	<?php getHtmlComponente("../mix_2arts_06/index.html"); ?>
                <?php getHtmlComponente("../img_stage_01/index.html"); ?>
            </div>
            <!-- Componente a 2 columnas -->
            <div class="c2_2">
            	<?php getHtmlComponente("../art_bullet_01/index.html"); ?>
            </div>
            <div class="c2_3 left">
            	
            </div>
            <!-- Termina componente a 2 columnas -->
            <div class="c2_4">
            	<?php getHtmlComponente("../art_note_01/index.html"); ?>
            </div>
            <div class="c2_5">
				<?php getHtmlComponente("../mix_3arts_03/index.html"); ?>            	
            </div>
            <div class="c2_6">
           		<?php getHtmlComponente("../str_pleca_01/index.html"); ?>
            </div>
            <div class="c2_7">
            	<?php getHtmlComponente("../wdg_comen_01/index.html"); ?>
            </div>
            <div class="c2_8">
            </div>
            <div class="c2_9">           
            </div>
            <div class="c2_10">
            	
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right">
			<div class="c3_1 bottom_space hide-tablet">  
				<img src="http://placehold.it/300x250" alt="Image description">
            </div>
			<div class="c3_2 left">  
                <?php getHtmlComponente("../wdg_podcast_video_01/index.html");?>
            </div>
            <div class="c3_3 right">  
                <?php getHtmlComponente("../wdg_podcast_03/index.html");?>
            </div>
        </div>
        <div class="c4 right">
            <div class="c4_1 left">  
                <?php getHtmlComponente("../wdg_altasbajas_result_01/index.html");?>
            </div>
            <div class="c4_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_teams_classification_01/index.html");?>
            </div>
            <div class="c4_3 right hide-mobile">  
                 <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
            <div class="c4_4 right hide-tablet bottom_space">  
                <img src="../global/img/facebook_cmp.png" width="300" alt="Image description">
            </div>
            <div class="c4_5 right hide-tablet">  
            	<?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
        </div>
        <div class="c5 right">
		
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

<!-- <script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script> -->
<?
// footer
require_once("../global/footer.php");
?>