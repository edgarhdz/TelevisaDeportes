<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr","nwmatcher-1.2.5","selectivizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'wdg_twitt_02';

$comp[] = 'nav_header_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'wdg_match_01';
$comp[] = 'str_pleca_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';
//Left
$comp[] = 'img_stage_02';
$comp[] = 'art_note_01';
$comp[] = 'art_quote_01';
$comp[] = 'str_pleca_01';
$comp[] = 'str_tdn_01';
$comp[] = 'str_expertcmt_02';
//Right
$comp[] = 'wdg_podcast_video_01';
$comp[] = 'wdg_podcast_03';
$comp[] = 'wdg_altasbajas_result_01';

$comp[] = 'wdg_poll_01';

$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_tdw_quienes_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1_0">
        	<img alt="" src="http://placehold.it/320x50"  />
        </div>
        <div class="c1_1">
			<img alt="" src="../global/img/header_tdw.png">
            <?php getHtmlComponente("../art_branch_01/index.html"); ?>
        </div>
   
		<!--parte central 1-->
		<div class="c2 left">
			<div class="c2_1">
                <?php getHtmlComponente("../img_stage_02/index.html"); ?>
            </div>
            <!-- Componente a 2 columnas -->
            <div class="c2_2 left">
                
            </div>
            <div class="c2_3 left">
            	
            </div>
            <!-- Termina componente a 2 columnas -->
            <div class="c2_4">
            	<?php getHtmlComponente("../art_note_01/index.html"); ?>
            </div>
            <div class="c2_5">
            	<?php getHtmlComponente("../str_tdn_01/index.html"); ?>
            </div>
            <div class="c2_6">
				<?php getHtmlComponente("../str_expertcmt_02/index.html"); ?>
            </div>
            <div class="c2_7">
           		
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
				<img alt="" src="http://placehold.it/300x250">
            </div>
			<div class="c3_2 left">  
                <?php getHtmlComponente("../wdg_podcast_video_01/index.html");?>
            </div>
            <div class="c3_3 right">  
                <?php getHtmlComponente("../wdg_podcast_03/index.html");?>
            </div>
            <div class="c3_4 hide-tablet">  
                <?php getHtmlComponente("../wdg_altasbajas_result_01/index.html");?>
            </div>
            <div class="c3_5 hide-tablet">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
        </div>
        <div class="c3_b right">
            <div class="c3_6 left hide-mobile bottom_space">  
                <img alt="" src="../global/img/facebook_cmp.png" width="300">
            </div>
            <div class="c3_7 right hide-mobile">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
            <div class="c3_8">  
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