	<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'str_pleca_01';
$comp[] = 'ads_combo_01';

//Left
$comp[] = 'art_title_03';
$comp[] = 'vid_player_01';
$comp[] = 'mix_4arts_02';
$comp[] = 'btn_6prog_08';

//Right
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_videoteca_01';

//footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_video_home_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        <?php //getHtmlComponente("../art_branch_01/index.html"); ?>
        
        
		<!--parte central 1-->
		<div class="c2">
			<div class="c2_1 left">
				<?php getHtmlComponente("../art_title_03/index.html"); ?>	
				<?php getHtmlComponente("../vid_player_01/index.html"); ?>		
                <?php //getHtmlComponente("../mix_carru_02/index.html"); ?>
            </div>
            <div class="c2_2 left hide-tablet">            
            	
            	<?php //getHtmlComponente("../mix_4arts_02/index.html"); ?>
                <?php //getHtmlComponente("../mix_1arts_08/index.html"); ?>
            </div>
            <!--
            	<div class="separator_component left hide-mobile"></div>
             -->
            <div class="c2_3 right">
                <?php //getHtmlComponente("../mix_1arts_08/index.html"); ?>
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
			<div class="c3_2 right">
				<?php getHtmlComponente("../wdg_videoteca_01/index.html");?>  
                
            </div>
			<div class="c3_3 bottom_space left">  
                <img src="http://placehold.it/300x250" alt="Image Description">                 
            </div>
		</div>
        <!--parte central 2-->
        <div class="c4">
        	<div class="c4_1">  
				<?php //getHtmlComponente("../str_pleca_01/index.html");?>
                <?php //getHtmlComponente("../img_galry_01/index.html");?>
            </div>
			<div class="c4_2">  
            	<?php //getHtmlComponente("../str_pleca_01/index.html");?>
                <?php //getHtmlComponenteVideo("../vid_4vids_01/index.html");?>
            </div>
        </div>
        <!--Banner Mobile-->
        <div class="banner_mobile">
            <!-- <img src="http://placehold.it/320x50">  -->
        </div>
        <!--barra lateral 1era parte-->
		<div class="c5">
			<div class="c5_1 left hide-mobile">  
				<?php //getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
			<div class="c5_2 right">
            	<?php //getHtmlComponente("../str_pleca_01/index.html");?>
                <?php //getHtmlComponente("../mix_1arts_08/index.html");?>
            </div>			
		</div>

		<!--Banner 100%-->
		<!--
		<div class="c6 hide-tablet">
				<img src="http://placehold.it/955x90">	
		</div>
		-->

        <!--Componente exclusivo del subhome-->
        <div class="c7 hide-mobile">
        	<div class="c7_1">
				<?php //getHtmlComponente("../wdg_carresult_01/index.html"); ?>
            </div>
			<div class="c7_2">
			     
            </div>
            <div class="c7_3">
			   
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c8 hide-mobile">
			<div class="c8_1 hide-tablet">  
				<?php //getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
			<div class="c8_2 left">  
                <?php //getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
			<div class="c8_3 right">  
                <?php //getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
		</div>

        <!--Carrusel 100%-->
		<div class="c9">
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
			<?php getHtmlComponente("../btn_6prog_08/index.html");?>
            <?php getHtmlComponente("../btn_6prog_08/index.html");?>
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