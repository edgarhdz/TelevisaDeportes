<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");
require_once("../global/header.php");


$comp[] = 'mix_carru_03';
$comp[] = 'wdg_top10_01';
$comp[] = 'wdg_sched_02';


$comp[] = 'btn_6prog_06';
$comp[] = 'btn_6prog_02';
$comp[] = 'img_galry_01';
$comp[] = 'vid_4vids_05';
$comp[] = 'wdg_twitt_02';

// header
$comp[] = 'nav_header_01';
$comp[] = 'wdg_matchesresult_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';


$comp[] = 'str_pleca_01';
$comp[] = 'mix_1arts_09';

// 1 left

$comp[] = 'mix_3arts_02';
$comp[] = 'mix_3arts_03';

// 1right
$comp[] = 'btn_progr_03';


// 1 100%


// 2 left


// 2 right

$comp[] = 'wdg_teams_classification_01';

// 3 left
$comp[] = 'mix_1arts_03';
$comp[] = 'mix_4arts_05';


// 3 right

$comp[] = 'wdg_poll_01';


$comp[] = 'wdg_match_01';
$comp[] = 'wdg_social_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_mexicanos_ext_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		      <?php getHtmlComponente("../wdg_matchesresult_01/index.html"); ?>
        </div>
    </div> 
    
    
    <div class="main">
        
        <!--Banners-->
        <div class="c1">
            <div class="c1_1">
                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
                <?php getHtmlComponente("../art_branch_01/index.html"); ?>
            </div>
        </div>

		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
				<!--CORREGIR por  mix_carru_01-->
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            
            <div class="c2_2">
                <?php getHtmlComponente("../mix_3arts_03/index.html"); ?>
            </div>
            <div class=""></div>
            <div class="c2_3 right">
                
            </div>
        </div>
		
        <!--barra lateral 1era parte-->
		<div class="c3 hide-tablet">
        
			<div class="c3_1 left"> 
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right">  
                <?php getHtmlComponente("../wdg_top10_01/index.html");?>
            </div>
			
		</div>

		
		<!--parte central 2 - 100%-->
        <div class="c3_">
           <?php getHtmlComponente("../btn_6prog_06/index.html");?>
        </div>
		
        <div class="c3_banner">
           
        </div>

        <div class="c4">
			<div class="c4_1">
			
				<?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html"); ?>
				
            </div>
			
            <div class="c4_2">
                <?php getHtmlComponente("../vid_4vids_05/index.html","link");?>
            </div>
            <div class="c4_3">
                
            </div>

        </div>

        <!--barra lateral 2da parte-->
        <div class="c5">
        
            <div class="c5_1 left hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html");?>
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_teams_classification_01/index.html");?>
            </div>

           <!-- <div class="c5_3 left hide-mobile">  
                
            </div>
			
			<div class="c5_4">
			  
			</div>
            
            <div class="c5_5">
			   
			</div>-->
			
        </div>
		
		
		
		<div class="c5_banner hide-tablet banner_template">
           <img src="http://placehold.it/957x97" alt="" />
        </div>
		
		

        <div class="c6">
            <div class="c6_1">
                <?php getHtmlComponente("../mix_4arts_05/index.html");?>
            </div>
            <!--<div class="c6_2">
                
            </div>
			
			
			
             <div class="c6_3 left hide-mobile">
				 
            </div>
			 <div class="c6_4 right hide-mobile">
			 	
            </div>
			
			<div class="c6_5 left hide-tablet">
				 
            </div>
			 <div class="c6_6 right hide-tablet">
			 	
            </div>
			
			<div class="c6_7 hide-tablet">
			 	
            </div>-->
           
        </div>
		
		
		<!--barra lateral 3era parte-->
        <div class="c7">
            <div class="c7_1 left hide-mobile">
				<?php getHtmlComponente("../wdg_twitt_02/index.html");?>
			</div>
			<div class="c7_2 right hide-mobile">
				<?php getHtmlComponente("../wdg_poll_01/index.html");?>
			</div>
			<!--<div class="c7_3 hide-tablet">
				
			</div>
			<div class="c7_4 hide-tablet bottom_space">
				
			</div>
			<div class="c7_5 right">
				
			</div>
			
			<div class="c7_6 hide-tablet bottom_space">
			  
			</div>
			
			<div class="c7_7 hide-tablet bottom_space">
			   
			</div>
			
			<div class="c7_8 hide-tablet">
			 	
            </div>-->
        </div>
		
		
        <?php getHtmlComponente("../btn_6prog_02/index.html");?>
        
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