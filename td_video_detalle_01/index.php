<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'btn_6prog_09';
$comp[] = 'vid_4vids_03';

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_title_06';
$comp[] = 'str_pleca_01';
$comp[] = 'vid_player_02';

$comp[] = 'btn_progr_03';
$comp[] = 'wdg_comen_01';
$comp[] = 'nav_paginator_01';
$comp[] = 'wdg_sched_02';
$comp[] = 'wdg_poll_01';
$comp[] = 'nav_corft_01';
$comp[] = 'wdg_social_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_video_detalle_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		     
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
				<?php getHtmlComponente("../art_title_06/index.html"); ?>
                <?php getHtmlComponente("../vid_player_02/index.html","link"); ?>
            </div>
            
            <div class="c2_2">
                
            </div>
            <div class=""></div>
            <div class="c2_3">
                
            </div>
        </div>
		
        <!--barra lateral 1era parte-->
		<div class="c3">
        
			<div class="c3_1 left">  
                <?php getHtmlComponente("../vid_4vids_03/index.html");?>
            </div>
            <div class="c3_2 right bottom_space hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image Description">
            </div>
			<div class="c3_3">  
                
            </div>
		</div>

        <!--parte central 2-->
        <div class="c3_banner">
           <?php getHtmlComponente("../btn_6prog_09/index.html");?>
        </div>

        <div class="c4">
            <div class="c4_1">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../wdg_comen_01/index.html","link");?>
            </div>
            <div class="c4_2">
                
            </div>

        </div>

        <!--barra lateral 2  parte-->
        <div class="c5">
        
            <div class="c5_1 left hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>

            <div class="c5_3">  
            </div>
        </div>

        <!--<div class="c6">
            <div class="c6_1">
                
            </div>
            <div class="c6_2">
                
            </div>
             <div class="c6_3 left">
            </div>
            <div class="c6_4 right">
            </div>
            <div class="c6_5 hide-mobile">
            </div>
            <div class="c6_6 hide-mobile">
            </div>
        </div>
        <div class="c7">
            <div class="c7_1 left">
			</div>
			<div class="c7_2 right hide-mobile">
			</div>
			<div class="c7_3 hide-tablet">
			</div>
			<div class="c7_4 hide-tablet">
			</div>
        </div>
        <div class="c8">
        </div>-->
        
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