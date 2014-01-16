<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");

$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_altasbajas_01';
$comp[] = 'art_branch_02';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_stats_teams_02';
$comp[] = 'nav_paginator_01';

$comp[] = 'btn_progr_03';
$comp[] = 'mix_8arts_01';
$comp[] = 'mix_1arts_07';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_4arts_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'vid_4vids_03';

$comp[] = 'wdg_altasbajas_result_02';

$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_header_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_altasbajas_home_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <?php  getHtmlComponente("../wdg_altasbajas_01/index.html");?>        
    </div> 
        
	<div class="main">
        <!--Banners-->
        <div class="c1_0"><img src="http://placehold.it/320x50" alt="Image0"></div>
        <div class="c1">
        	<?php getHtmlComponente("../art_branch_02/index.html");?>			
        </div>
		<!--parte central 1-->
		<div class="c2">
			<div class="c2_1">
				<?php getHtmlComponente("../wdg_stats_teams_02/index.html"); ?>									
            </div>
            <div class="c2_2">
            	<?php getHtmlComponente("../mix_8arts_01/index.html"); ?>
            </div>                    
            <div class="c2_3"></div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>												
            </div>
			<div class="c3_2 right hide-mobile bottom_space">
				<img src="http://placehold.it/300x250" alt="Image1">								                  
            </div>
       </div>
       <div class="c3b">
			<div class="c3_3 left">  
				      <?php getHtmlComponente("../wdg_altasbajas_result_02/index.html");?>                     
            </div>
            <div class="c3_4 right">
            	<?php getHtmlcomponente("../wdg_twitt_02/index.html");?>
            	<div class="hide-tablet bottom_space">
            			<img src="../global/img/facebook_cmp.png" alt="Image2" />
            		</div>
            </div>
		</div>
		
        <!--parte central 2-->
        <div class="c4">
        	<div class="c4_1">  
        						
            </div>
			<div class="c4_2"></div>
        </div>
        <!--Banner Mobile-->
        <div class="banner_mobile"></div>
        <!--barra lateral 2da parte-->
		<div class="c5">
			<div class="c5_1 left"></div>
			<div class="c5_2 right"></div>			
		</div>

        <!--Componente exclusivo del subhome-->
        <div class="c7 hide-mobile">
        	<div class="c7_1"></div>
			<div class="c7_2"></div>
            <div class="c7_3"></div>
		</div>

        <!--barra lateral 3ra parte-->
		<div class="c8 hide-mobile">
			<div class="c8_1 left"></div>
			<div class="c8_2 left"></div>
			<div class="c8_3 right"></div>
		</div>

        <!--Carrusel 100%-->
		<div class="c9">
			<div class="c9_1"> 
				<?php getHtmlComponente("../btn_6prog_02/index.html"); ?>						
			</div>
			<div class="c9_2 hide-mobile"></div>
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