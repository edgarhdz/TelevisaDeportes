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
$comp[] = 'btn_6prog_02';
//Right
$comp[] = 'btn_progr_03';


//footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_video_home_01"> 
	
    <header class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </header>     
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1_1 banner_template">
        	<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>
   
		<!--parte central 1-->
		<div class="c2 left">
			<div class="c2_1">
				<?php getHtmlComponente("../art_title_03/index.html"); ?>                
            </div>
            <!-- Componente a 2 columnas -->
            <div class="c2_2 left">          
            	<?php getHtmlComponente("../vid_player_01/index.html"); ?>               
            </div>
            <div class="c2_3 left"></div>
            <!-- Termina componente a 2 columnas -->
            <div class="c2_4">
            	<?php getHtmlComponente("../mix_4arts_02/index.html"); ?>
            </div>
            <div class="c2_5">  </div>
            <div class="c2_6">  </div>
            <div class="c2_7">  </div>
            <div class="c2_8">  </div>
            <div class="c2_9">  </div>
            <div class="c2_10"> </div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3 right">
			<div class="c3_1 left hide-mobile">						  
				<?php getHtmlComponente("../btn_progr_03/index.html");?>				
            </div>
			<div class="c3_2 bottom_space right hide-mobile">  
                <img src="http://placehold.it/300x250">
            </div>
            <div class="c3_3 left">              </div>
            <div class="c3_4 right">             </div>
            <div class="c3_5 hide-tablet">    
            	
               </div>
            <div class="c3_6 left hide-mobile"> 
            
             </div>
            <div class="c3_7 hide-tablet">   
             </div>
            <div class="c3_8">                   </div>
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