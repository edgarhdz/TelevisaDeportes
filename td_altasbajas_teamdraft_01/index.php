<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

//header
require_once("../global/header.php");


$comp[] = 'wdg_twitt_02';
$comp[] = 'btn_6prog_02';
$comp[] = 'nav_header_01';
$comp[] = 'wdg_altasbajas_01';


//Left
$comp[] = 'art_branch_02';
$comp[] = 'wdg_teamdraft_01';
$comp[] = 'img_stage_01';

$comp[] = 'nav_paginator_01';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_comen_01';



//Right
$comp[] = 'btn_progr_03';
$comp[] = 'mix_4arts_01';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_1arts_07';
$comp[] = 'wdg_altasbajas_result_02';		


//footer	
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_altasbajas_teamdraft_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		      <?php getHtmlComponente("../wdg_altasbajas_01/index.html"); ?>
        </div>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
        	<div class="c1_0"><img src="http://placehold.it/320x50" alt="Image0"></div>
            <div class="c1_1">
                <?php getHtmlComponente("../art_branch_02/index.html"); ?>
            </div>
        </div>

		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../wdg_teamdraft_01/index.html"); ?>
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../wdg_comen_01/index.html"); ?>
            </div>
            
            <div class="c2_2"></div>
            <div class=""></div>
            <div class="c2_3"></div>            
            <div class="c2_4"></div>
        </div>
        
		  <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right bottom_space hide-mobile">  
                <img src="http://placehold.it/300x250" alt="Image1">
            </div>
		</div>

      <!--barra lateral 2  parte-->
        <div class="c5 hide-tablet">
        
            <div class="c5_1 left"> 
				<?php getHtmlComponente("../str_pleca_02/index.html");?>
                <?php getHtmlComponente("../mix_4arts_01/index.html");?>
            </div>
            <div class="c5_2 right">  
                <?php getHtmlComponente("../wdg_altasbajas_result_02/index.html");?>
            </div>

            <div class="c5_3 hide-tablet">  
				<?php getHtmlComponente("../wdg_twitt_02/index.html");?>
                <img src="../global/img/facebook_cmp.png" width="300" alt="Image2">
            </div>
        </div>

	<!--parte central 2-->
        <div class="c3_banner">
           <?php getHtmlComponente("../btn_6prog_02/index.html");?>
        </div>
   
        <!--<div class="c6">
            <div class="c6_1"></div>
            <div class="c6_2"></div>
            <div class="c6_3"></div>
        </div>
        <div class="c7">
            <div class="c7_1"></div>
			<div class="c7_2"></div>
			<div class="c7_3"></div>
			<div class="c7_4"></div>
        </div>
        <div class="c8">
            
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
<?
// footer
require_once("../global/footer.php");
?>