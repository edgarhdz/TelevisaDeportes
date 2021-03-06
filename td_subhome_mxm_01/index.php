<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

//header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'vid_player_01';
$comp[] = 'mix_2arts_06';
$comp[] = 'img_stage_01';

//Left
$comp[] = 'art_title_01';
$comp[] = 'art_reltd_01';
$comp[] = 'wdg_social_01';
$comp[] = 'art_bullet_01';
$comp[] = 'art_branch_01';
$comp[] = 'wdg_mxm_live_02';
$comp[] = 'nav_paginator_01';
$comp[] = 'str_pleca_01';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_1arts_09';
$comp[] = 'wdg_comen_01';

//Right
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_top10_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'mix_1arts_08';
$comp[] = 'wdg_sched_02';		
$comp[] = 'wdg_nwslt_01';
$comp[] = 'wdg_poll_01';

//footer	
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_note_mx_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1_1">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
            <?php getHtmlComponente("../art_branch_01/index.html"); ?>
        </div>
   
        <!--parte central 1-->
        <div class="c2 left">
            <!-- <div class="c2_1">
            </div> -->
                 <!-- Componente a 2 columnas -->
                <!-- <div class="c2_2 left">
                    <?php //getHtmlComponente("../art_reltd_01/index.html"); ?>
                </div>
                <div class="c2_3 left">
                    <?php //getHtmlComponente("../wdg_social_01/index.html"); ?>
                </div> -->
           <!--  <div class="c2_4 dotted-top">
            	<?php // getHtmlComponente("../art_bullet_01/index.html"); ?>
            </div>      -->                       
            
            <!-- Termina componente a 2 columnas -->
            
            <div class="c2_5">
            	<?php getHtmlComponente("../wdg_mxm_live_02/index.html"); ?>
            </div>                       
            <div class="c2_6">
            </div>
            <div class="c2_7">
            </div>
            <div class="c2_8">
            </div>
            <div class="c2_9">
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right">
            <div class="c3_1 left">  
            <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 bottom_space hide-mobile right">  
                <img alt="" src="http://placehold.it/300x250">
            </div>
        </div>
        <div class="c4 right">
            <div class="c4_1 hide-mobile left">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
            <div class="c4_2 right">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
        </div>
        <div class="c5 right">
            <div class="c5_1 hide-mobile left bottom_space">
				<img alt="" src="../global/img/facebook_cmp.png">
            </div>
            <div class="c5_2 hide-mobile right">  
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

<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>
<?
// footer
require_once("../global/footer.php");
?>