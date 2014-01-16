<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'img_galry_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'btn_6prog_02';
$comp[] = 'wdg_teams_carru_02';
$comp[] = 'nav_team_header_01';
$comp[] = 'mix_carru_03';
$comp[] = 'ads_combo_02';
$comp[] = 'str_pleca_01';
$comp[] = 'mix_1arts_08';
$comp[] = 'mix_2arts_08';
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_nfl_sched_01';
$comp[] = 'wdg_social_01';
$comp[] = 'wdg_nfl_leaders_02';
$comp[] = 'wdg_nfl_teamsts_01';
$comp[] = 'wdg_nfl_playersts_01';
$comp[] = 'wdg_nfl_injuries_01';
$comp[] = 'wdg_nfl_standings_01';
$comp[] = 'wdg_opinion_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_header_01';

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> --> 
<section class="td_local_teams_nfl_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<div class="c0">
		      <?php getHtmlComponente("../wdg_teams_carru_02/index.html"); ?>
        </div>
    </div> 
    
    
	<div class="main">
		
        <!--Banners-->
        <div class="c1">
            <div class="c1_1">
                <?php getHtmlComponente("../nav_team_header_01/index.html"); ?>
            </div>
        </div>

		<!--parte central 1-->
		<div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_08/index.html"); ?>
            </div>
            <!-- <div class="separator_component left hide-mobile"></div>
            <div class="c2_3 right">
            </div> -->
            <div class="c2_4">
                 <?php getHtmlComponente("../str_pleca_01/index.html");?>
                 <?php getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>
        </div>
        
		  <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 right bottom_space hide-tablet">  
                <img src="http://placehold.it/300x250" alt="Image1">
            </div>
            <div class="c3_3 right hide-mobile">  
                <?php getHtmlComponente("../wdg_nfl_sched_01/index.html",array('link'));?>
            </div>
            
		</div>
		<!-- <div class="c4" style="float:left">
        	 <div class="c4_1">
                 <?php //getHtmlComponente("../str_pleca_01/index.html");?>
                 <?php //getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>
        </div> -->
      <!--barra lateral 2  parte-->
       

	<!--parte central 2-->
        <div class="c3_banner hide-tablet">
           <?php getHtmlComponente("../ads_combo_02/index.html"); ?>
        </div>
   
        <div class="c6">
            <div class="c6_1 hide-mobile">
                <?php getHtmlComponente("../wdg_nfl_teamsts_01/index.html",array('link'));?>
            </div>
            <div class="c6_2 hide-mobile">
                <?php getHtmlComponente("../wdg_nfl_playersts_01/index.html",array('link'));?>
            </div>
            <div class="c6_3 hide-mobile">
                <?php getHtmlComponente("../wdg_nfl_injuries_01/index.html",array('link'));?>
            </div>
        </div>
         <div class="c5">
            <div class="c5_1 left hide-mobile"> 
                <?php getHtmlComponente("../wdg_nfl_leaders_02/index.html",array('link'));?> 
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_nfl_standings_01/index.html",array('link'));?>
            </div>
            <div class="c5_3 hide-tablet"> 
                <!-- <img src="http://placehold.it/300x99" alt="Image2"> -->
            </div>
        </div>
        <div class="c7">
            <div class="c7_1 left">
				<?php getHtmlComponente("../wdg_opinion_01/index.html");?>
			</div>
			<div class="c7_2 hide-tablet">
				<?php getHtmlComponente("../wdg_twitt_02/index.html");?>
			</div>
			<div class="c7_3 right">
				<?php getHtmlComponente("../wdg_poll_01/index.html");?>
			</div>
			<div class="c7_4 right hide-mobile">
				
			</div>
        </div>
        <div class="c8">
            <?php getHtmlComponente("../btn_6prog_02/index.html");?>
        </div>
       		<!--In the data-color attr you need to setup the link color-->
				<div class="color_global" data-color="#FC3"></div>
			<!-- END color -->
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

<!-- <script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script> -->

<?
// footer
require_once("../global/footer.php");
?>