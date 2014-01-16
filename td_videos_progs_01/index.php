<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'btn_6prog_07';
$comp[] = 'vid_4vids_03';
$comp[] = 'btn_6prog_03';


$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_title_04';
$comp[] = 'vid_player_01';

$comp[] = 'mix_12arts_01';
$comp[] = 'nav_paginator_01';
$comp[] = 'wdg_social_01';
$comp[] = 'str_pleca_01';

$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> --> 
<section class="td_videos_progs_01"> 
	
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1 banner_template">
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
        
        
        
        
		<!--parte central 1-->
		<div class="c2">
			<div class="c2_1 left">
				<?php getHtmlComponente("../art_title_04/index.html"); ?>
                <?php getHtmlComponente("../vid_player_01/index.html"); ?>
            </div>
            <div class="c2_2 left">
                
            </div>
            <div class=""></div>
            <div class="c2_3 right">
                
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../vid_4vids_03/index.html");?>
            </div>
			<div class="c3_2 hide-tablet">  
                <?php getHtmlComponente("../btn_6prog_03/index.html");?>
            </div>
			<div class="c3_3 bottom_space right hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image Description">
            </div>
		</div>

        <!--parte central 2-->
        <div class="c4">
        	<div class="c4_1">  
				<?php getHtmlComponente("../btn_6prog_07/index.html"); ?>
            </div>
			<div class="c4_2">  
            	
            </div>
        </div>

        <!--barra lateral 1era parte-->
		<div class="c5">
			<div class="c5_1 left hide-mobile">  
            </div>
			<div class="c5_2 right">
            </div>			
		</div>
        
		<!--Banner 100%-->
		<div class="c6 hide-tablet">
			<?php getHtmlComponente("../mix_12arts_01/index.html");?>
			<?php getHtmlComponente("../mix_12arts_01/index.html");?>
			<?php getHtmlComponente("../mix_12arts_01/index.html");?>
            <?php getHtmlComponente("../mix_12arts_01/index.html");?>
            <?php getHtmlComponente("../mix_12arts_01/index.html");?>
		</div>

        <!--Componente exclusivo del subhome-->
        <!--<div class="c7">
            <div class="c7_1 hide-mobile">
            </div>
			<div class="c7_2">
            </div>
            <div class="c7_3">
            </div>
		</div>-->

        <!--barra lateral 1era parte-->
		<!--<div class="c8 hide-mobile">
			<div class="c8_1 hide-tablet">  
            </div>
			<div class="c8_2 left">  
            </div>
			<div class="c8_3 right">  
            </div>
		</div>-->

        <!--Carrusel 100%-->
		<!--<div class="c9">
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