<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_title_02';
$comp[] = 'str_pleca_01';
$comp[] = 'vid_player_02';
$comp[] = 'vid_4vids_02';
$comp[] = 'btn_6prog_03';
$comp[] = 'mix_4arts_04';
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_comen_01';
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
<section class="td_video_detalle_gde_01"> 
	
    <header class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		     
        </div>
    </header> 
    
    
	<div class="main">
		
        
        <div class="c1">
			<!--Banners-->
            <div class="c1_1 banner_template">
                 <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
                 
            </div>
			<!--100%-->
			<div class="c1_2">
				<?php getHtmlComponente("../art_title_02/index.html"); ?>
                <?php getHtmlComponenteVideo("../vid_player_02/index.html"); ?>
			</div>
        </div>
		<div class="special">
        	<div class="special_1 left">
            	<?php getHtmlComponente("../vid_4vids_02/index.html"); ?>
            </div>
            <div class="special_2  right bottom_space hide-mobile">
            	<img src="http://placehold.it/300x250">
            </div>
        </div>
		<div class="c1_bis">
        	<?php getHtmlComponente("../btn_6prog_03/index.html");?>
        </div>
		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponenteVideo("../wdg_comen_01/index.html");?>
            </div>             
            
            <div class="c2_2"></div>            
            <div class=""></div>
            <div class="c2_3"></div>
            
        </div>		
        <!--barra lateral 1era parte-->
		<div class="c3">        
			<div class="c3_1 left hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
             
            <div class="c3_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
            
			<div class="c3_3"></div>
		</div>
		
		
        <!--100% 2-->         
        <div class="c4">
           
        </div>
 		
       
        
	</div><!-- END: main -->
    
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

<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>
<?
// footer
require_once("../global/footer.php");
?>