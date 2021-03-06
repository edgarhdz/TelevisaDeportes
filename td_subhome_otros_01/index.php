<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

// header
require_once("../global/header.php");
  

$comp[] = 'mix_carru_03';
$comp[] = 'wdg_top10_01';
$comp[] = 'wdg_twitt_02';

$comp[] = 'art_branch_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'btn_progr_03';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_2arts_07';
$comp[] = 'mix_3arts_02';

$comp[] = 'str_pleca_01';
$comp[] = 'nav_header_01';

$comp[] = 'vid_4vids_05';
$comp[] = 'wdg_poll_01';

$comp[] = 'wdg_sched_02';
$comp[] = 'wdg_opinion_01';
$comp[] = 'img_galry_01';
$comp[] = 'ads_combo_01';
$comp[] = 'mix_4arts_01';
$comp[] = 'mix_1arts_07';
$comp[] = 'mix_1arts_09';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';

//print_r($comp); exit();

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> --> 
<section class="td_subhome_otros_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 

	<div class="main">
		
        <!--Banners-->
        <div class="c1 banner_template">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        <?php getHtmlComponente("../art_branch_01/index.html"); ?>

		<!--parte central 1-->
		<div class="c2">
			<div class="c2_1 left">
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_07/index.html"); ?>
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html");?>            	
                <?php getHtmlComponenteVideo("../vid_4vids_05/index.html");?>
            </div>           
		</div>
   
        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
			<div class="c3_2 hide-tablet">  
                <?php getHtmlComponente("../wdg_top10_01/index.html");?>
            </div>
			<div class="c3_3 bottom_space right hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image Description">
            </div>
        </div>
        <div class="c3_bis">
		 	<!--Banner Mobile-->
        	<div class="banner_mobile">
            	<img src="http://placehold.it/320x50" alt="Image Description">
        	</div>
            <div  class="c3_4 left hide-mobile">
				<?php getHtmlComponente("../wdg_sched_02/index.html");?>            
            </div>
            <div class="c3_5 right">
            	<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_1arts_08b/index.html");?>            	
            </div>
		</div>

        <!--parte central 2-->
       <!-- <div class="c4">
        	<div class="c4_1">  
            
            </div>
			<div class="c4_2">  
            
            </div>
        </div>-->
        <!--barra lateral 1era parte-->
		<!--<div class="c5">
			<div class="c5_1">  
            </div>
			<div class="c5_2 right">
            </div>			
		</div>-->
        
		<!--Banner 100%-->
		<div class="c6 banner_template hide-tablet">
			<img src="http://placehold.it/955x90" alt="Image Description">
		</div>

        <!--Componente exclusivo del subhome-->
        <div class="c7">
            <div class="c7_1 hide-mobile">
			    <?php getHtmlComponente("../str_pleca_01/index.html"); ?>
            </div>
			<div class="c7_2 hide-mobile">
			     <?php getHtmlComponente("../mix_3arts_02/index.html"); ?>
            </div>
            <div class="c7_3 left" >
            	<?php getHtmlComponente("../str_pleca_01/index.html"); ?>
			    <?php getHtmlComponente("../mix_4arts_01/index.html"); ?>
			</div>  
			 <div class=" c7_4 right hide-mobile">
			 		<?php getHtmlComponente("../str_pleca_01/index.html"); ?>			    
			    	<?php getHtmlComponente("../mix_4arts_01/index.html"); ?>            
			 </div>		                        
		</div>

        <!--barra lateral 1era parte-->
		<div class="c8 hide-mobile">
			<div class="c8_1 hide-tablet">  
				<?php getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
			<div class="c8_2 left">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
			<div class="c8_3 right">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
		</div>

        <!--Carrusel 100%-->
		<div class="c9">
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

<!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->
<?
// footer
require_once("../global/footer.php");
?>