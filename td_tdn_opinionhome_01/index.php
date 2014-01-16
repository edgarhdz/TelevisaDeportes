<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

require_once("../global/header.php");


// header
$comp[] = 'nav_header_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'wdg_match_01';
$comp[] = 'ads_combo_01';
$comp[] = 'wdg_social_01';

// right
$comp[] = 'vid_4vids_03';

//middle
$comp[] = 'btn_6prog_08';

//left
$comp[] = 'art_title_05';
$comp[] = 'str_pleca_01';
$comp[] = 'vid_player_02';

//fotter
$comp[] = 'nav_corft_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_tdn_opinionhome_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		     <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
        </div>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
                 <img alt="" width="955" height="42" src="img/tdn-logo.png">
                 
        </div>

		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
				<?php getHtmlComponente("../art_title_05/index.html"); ?>
                <?php getHtmlComponente("../vid_player_02/index.html"); ?>
            </div>
            
            <div class="c2_2">
                
            </div>
            <div class=""></div>
            <div class="c2_3">
                
            </div>
        </div>
		
        <!--barra lateral 1era parte-->
		<div class="c3">
        
			<div class="c3_1 left ">  
                <?php getHtmlComponente("../vid_4vids_03/index.html");?>
            </div>
            <div class="c3_2 right bottom_space hide-mobile">  
                <img alt="" src="http://placehold.it/300x250">
            </div>
			<div class="c3_3">  
                
            </div>
		</div>

        <!--parte central 2-->
        <div class="c3_banner">
           <?php getHtmlComponente("../btn_6prog_08/index.html");?>
		   <?php getHtmlComponente("../btn_6prog_08/index.html");?>
		   <?php getHtmlComponente("../btn_6prog_08/index.html");?>
        </div>

        <div class="c4">
            <div class="c4_1">
               
            </div>
            <div class="c4_2">
                
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