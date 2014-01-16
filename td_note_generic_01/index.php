<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");


$comp[] = 'wdg_goals_carru_01'; 
$comp[] = 'wdg_top10_01';   
$comp[] = 'nav_header_01';
$comp[] = 'str_pleca_01';
$comp[] = 'ads_combo_01';

  
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

$comp[] = 'btn_progr_03';
$comp[] = 'btn_6prog_03';
  
$comp[] = 'wdg_opinion_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_note_generic_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div>     
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1_1 banner_template">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
   
		<!--parte central 1-->
		<div class="c2 left">
			<div class="c2_1">
                <?php getHtmlComponente("../art_title_01/index.html"); ?>
            </div>
            <!-- Componente a 2 columnas -->
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_06/index.html"); ?>
            </div>
            <div class="c2_3 left">
            	<?php //getHtmlComponente("../wdg_social_01/index.html"); ?>
             </div> 
            <!-- Termina componente a 2 columnas -->
            <div class="c2_4">
            	<?php getHtmlComponente("../img_stage_01/index.html"); ?>
            </div>
            <div class="c2_5">
            	<?php getHtmlComponente("../art_bullet_01/index.html"); ?>
            </div>
            <div class="c2_6">
				<?php getHtmlComponente("../art_note_01/index.html"); ?>
            </div>
            <div class="c2_7">

            </div>
            <div class="c2_8">
            	<?php getHtmlComponente("../mix_3arts_03/index.html"); ?>
            </div>
            <div class="c2_9">
            	<?php getHtmlComponente("../str_pleca_01/index.html"); ?>
            </div>
            <div class="c2_10">
            	<?php getHtmlComponente("../wdg_comen_01/index.html"); ?>
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
			<div class="c3_2 bottom_space right hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image Description">
            </div>
            <div class="c3_3 left">  
                <?php getHtmlComponente("../btn_6prog_03/index.html");?>
            </div>
            <div class="c3_4 hide-mobile right">  
                <?php getHtmlComponente("../wdg_top10_01/index.html");?>
            </div>
            <div class="c3_5 hide-tablet">  
                <?php getHtmlComponente("../wdg_goals_carru_01/index.html");?>
            </div>
            <div class="c3_6 left">  
                <?php getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
            <div class="c3_7 hide-tablet">  
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
            <div class="c3_8">  
                <?php //getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
		</div>
   
        
	</div>
    <!-- END: main -->
        
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