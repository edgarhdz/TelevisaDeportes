<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr","nwmatcher-1.2.5","selectivizr");
require_once("../global/template.php");
// header
require_once("../global/header.php");


$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';

//Right
$comp[] = 'wdg_podcast_video_01';
$comp[] = 'wdg_podcast_03';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_poll_01';

//Left
$comp[] = 'btn_podcast_02';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_podcast_02';
$comp[] = 'wdg_5podcast_01';
$comp[] = 'nav_paginator_01';
$comp[] = 'wdg_scroll_dropdown';


$comp[] = 'nav_header_01';

//footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> --> 
<section class="td_tdn_podcast_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 

	<div class="main">
		
        <!--Banners-->
        <div class="c1">
			<div class="c1_1">
	                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
	        </div>
			<img src="../global/img/header_tdw.png" alt="Image description"/>
			<?php getHtmlComponente("../art_branch_01/index.html"); ?>
        </div>
   
		<!--parte central 1-->
		<div class="c2 left">
			<div class="c2_1 ">
                <?php getHtmlComponente("../btn_podcast_02/index.html"); ?>
				<?php getHtmlComponente("../str_pleca_01/index.html"); ?> 
				<?php getHtmlComponente("../wdg_5podcast_01/index.html"); ?>				
            </div>
            <!-- Componente a 2 columnas -->
            <div class="c2_2 bottom_space hide-mobile">
                <?php getHtmlComponente("../wdg_scroll_dropdown/index.html"); ?>
            </div>
            <div class="c2_3 ">                
            </div>
            <!-- Termina componente a 2 columnas -->
            <div class="c2_4 hide-mobile">
           		<?php getHtmlComponente("../wdg_5podcast_01/index.html"); ?>
            </div>
            <div class="c2_5">            	
            </div>
            <div class="c2_6">            				
            </div>
            <div class="c2_7  ">           		
            </div>
            <div class="c2_8 ">            				
            </div>
            <div class="c2_9">            	
            </div>
            <div class="c2_10">            	
            </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right">
			<div class="c3_1">  				
            </div>
			<div class="c3_2 bottom_space right hide-tablet">  
                <img src="http://placehold.it/300x250" alt="Image description">
            </div>
            <div class="c3_3 left">  
                <?php getHtmlComponente("../wdg_podcast_video_01/index.html"); ?>
            </div>
            <div class="c3_4 right">  
               <?php getHtmlComponente("../wdg_podcast_03/index.html"); ?> 
            </div>
            <div class="c3_5 left hide-mobile">  
               <?php getHtmlComponente("../wdg_twitt_02/index.html"); ?>
            </div>
            <div class="c3_6 right hide-mobile">
            	<?php getHtmlComponente("../wdg_poll_01/index.html");?>            	           
            </div>
            <div class="c3_7">            	                  
            </div>
            <div class="c3_8">                  
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

<!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->
<?
// footer
require_once("../global/footer.php");
?>