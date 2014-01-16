<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'btn_6prog_02';
$comp[] = 'wdg_team_align_01'; 					//revisado - corregido y ajustado se integraron "Banca" y "Árbitro"
$comp[] = 'nav_smnu_sports_01';

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'wdg_sport_result_01';

$comp[] = 'wdg_alineacion_field_01';
$comp[] = 'str_pleca_01';
$comp[] = 'btn_print_01';
$comp[] = 'wdg_goalsanoted_01';
$comp[] = 'wdg_mxm_plcards_01';
$comp[] = 'wdg_avgfield_01';

$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> --> 
<section class="td_mxm_alineacion_01"> 
	<div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php  getHtmlComponente("../wdg_sport_result_01/index.html"); ?>
    </div> 
	<div class="main">
        <div class="hide-tablet">
		  <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
		<?php getHtmlComponente("../nav_smnu_sports_01/index.html"); ?>
		<!--div style="clear:both;"></div-->
        <div class="c1">
            <div class="c1_1 hide-mobile">
				<?php getHtmlComponente("../wdg_alineacion_field_01/index.html"); ?>
            </div>
            <!-- BEGIN: Componentes unidos usado en td_opinion_blog_01 y td_opinion_video_blog_01-->
                    <div class="c1_2 left">
                           
                    </div>
                    <div class="c1_3 right">
                            
                    </div>
               <!-- END de componentes Unidos -->
            <div class="c1_4">	
                <?php getHtmlComponente("../wdg_team_align_01/index.html"); ?>
            </div>
            <div class="c1_5">
               
            </div>
            <div class="c1_6">
               
            </div>
            <div class="c1_7 hide-tablet">
                <?php getHtmlComponente("../btn_print_01/index.html"); ?>
            </div>
            <div class="c1_8">

            </div>
        </div>
        
        <div class="c2">			
            <div class="c2_1 left">  
                <?php getHtmlComponente("../wdg_goalsanoted_01/index.html"); ?>                
            </div>			
            <div class="c2_2 right"> 
            	<?php getHtmlComponente("../wdg_mxm_plcards_01/index.html"); ?> 
            </div>            
            <div class="c2_3 right">
            	<?php getHtmlComponente("../wdg_avgfield_01/index.html"); ?>
            </div>            
           	<div class="c2_4 hide-tablet">  
                
            </div>
			<div class="c2_5 hide-tablet">  
                
            </div>
        </div>
        
        <div class="c3">
        	<div class="c3_1">
               
            </div>
            <div class="c3_2">
             
            </div>
            <div class="c3_3">
             
            </div>
        </div>
        
        <div class="c4">
        	<div class="c4_1">
            	<?php getHtmlComponente("../btn_6prog_02/index.html"); ?>
            </div>
        </div>
				
	</div>
	
    <!-- BEGIN: <footer> -->
    <div class="footerPleca">

        <div class="footer">
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