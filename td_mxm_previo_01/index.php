<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'wdg_stadistics_01';
$comp[] = 'wdg_lineup_01';
$comp[] = 'img_galry_02';
$comp[] = 'wdg_twitt_02';




$comp[] = 'ads_combo_01';
$comp[] = 'art_note_01';
$comp[] = 'art_reltd_01';
$comp[] = 'art_title_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_header_01';
$comp[] = 'str_pleca_01';
$comp[] = 'vid_player_01';
$comp[] = 'art_bullet_01';

$comp[] = 'wdg_nwslt_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'wdg_social_01';
$comp[] = 'nav_smnu_sports_01';

$comp[] = 'str_expertcmt_01';

$comp[] = 'wdg_sport_result_01';

$comp[] = 'art_quote_01';
$comp[] = 'art_quote_03';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_mxm_previo_01"> 
	<div class="header1">
        <?php  getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php  getHtmlComponente("../wdg_sport_result_01/index.html"); ?>
    </div> 
	<div class="main">
		
		<?php getHtmlComponente("../nav_smnu_sports_01/index.html"); ?>
		<!-- Left -->
		<div class="c1">
			<div class="c1_1">
                    <?php getHtmlComponente("../art_title_01/index.html"); ?>
            </div>
			 <!-- BEGIN: Componentes unidos usado en td_mxm_previo_01 y td_mxm_cronica_01-->
                    <div class="c1_2 left">
                           <?php getHtmlComponente("../art_reltd_01/index.html"); ?>
                    </div>
                    <div class="c1_3 left">
                          <?php getHtmlComponente("../wdg_social_01/index.html"); ?>  
                    </div>
             <!-- END de componentes Unidos -->
			<div class="c1_4">		
                <?php getHtmlComponente("../img_galry_02/index.html"); ?>
                <?php getHtmlComponente("../art_bullet_01/index.html"); ?>
            </div>
            <div class="c1_5">    
                <?php getHtmlComponente("../art_note_01/index.html"); ?>
            </div>
            <div class="c1_6 hide-mobile">
                <?php getHtmlComponenteVideo("../vid_player_01/index.html"); ?>
            </div>
            <div class="c1_7">
				<?php getHtmlComponente("../art_note_01/index.html"); ?>
            </div> 
            <div class="c1_8">
           		<?php getHtmlComponente("../str_expertcmt_01/index.html"); ?>
            </div>
        </div>
        
        <!-- Right -->
		<div class="c2">
			<div class="bottom_space c2_1 hide-tablet">  
                <img src="http://placehold.it/300x250" alt="Image Description" />
            </div>
            <div class="c2_2 left espaciado_derecha">  
                <?php getHtmlComponente("../wdg_stadistics_01/index.html"); ?>
            </div>
            <div class="c2_3 right hide-tablet">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html"); ?>
            </div>
			<div class="c2_4 right">  
                <?php getHtmlComponente("../wdg_poll_01/index.html"); ?>
            </div>
			<div class="c2_5 right hide-tablet">  
                <?php getHtmlComponente("../wdg_nwslt_01/index.html"); ?>
            </div>
		</div>
		<!-- Left -->
         <div class="c3">
        	<div class="c3_1 hide-mobile">
               
            </div>
            <div class="c3_2 hide-mobile">
               
            </div>
            <div class="c3_3">
               
            </div>
        </div>
        
        <!-- Center -->
      	<div class="c4">
        	<div class="c4_1"> 
            	<?php getHtmlComponente("../wdg_lineup_01/index.html"); ?>
                   
				<?php getHtmlComponente("../btn_6prog_02/index.html");?>
            </div>
		</div>	
				
	</div>
	
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

<?
// footer
require_once("../global/footer.php");
?>