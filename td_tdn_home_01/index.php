<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'wdg_podcast_video_01';
$comp[] = 'mix_carru_01b';

$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_teams_carru_02';
$comp[] = 'btn_carru_prog_03';
$comp[] = 'vid_4vids_05';
$comp[] = 'img_galry_01';

$comp[] = 'ads_combo_01';
$comp[] = 'str_pleca_01';
$comp[] = 'mix_2arts_07';
$comp[] = 'mix_3arts_02';
$comp[] = 'mix_1arts_08';

$comp[] = 'wdg_podcast_03';

$comp[] = 'nav_header_01';

$comp[] = 'wdg_altasbajas_result_01';
$comp[] = 'wdg_teams_classification_01';

$comp[] = 'mix_1arts_03';
$comp[] = 'mix_4arts_05';
$comp[] = 'wdg_poll_01';
$comp[] = 'nav_corft_01';
$comp[] = 'mix_1arts_09';


$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_tdn_home_01"> 
    
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
        <div class="c0">
               
        </div>
    </div>     
    
    <div class="main">
        
        <!--Banners-->
        <div class="c1">
        	<div class="c1_1">
                <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
            </div>
            <div class="c1_2">
                <img src="img/tdn-logo.png" alt="Image description" width="949" height="42"/>
                <?php getHtmlComponente("../btn_carru_prog_03/index.html"); ?>
            </div>
        </div>

        <!--parte central 1-->
        <div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../str_pleca_01/index.html"); ?>
                <?php getHtmlComponente("../mix_carru_01b/index.html"); ?>
            </div>
            <div class="c2_2">
            	<?php getHtmlComponente("../mix_2arts_07/index.html"); ?>
            </div>
        </div>                
        
        <!--barra lateral 1era parte-->
        <div class="c3">        
            <div class="c3_1 right bottom_space hide-tablet">  
                <img src="http://placehold.it/300x250" alt="Image description">
            </div>
            <div class="c3_2 left">  
                <?php getHtmlComponente("../wdg_podcast_video_01/index.html");?>
            </div>
            <div class="c3_3 right">  
                <?php getHtmlComponente("../wdg_podcast_03/index.html");?>
            </div>
        </div>
        
        <!--parte central 2-->
        <div class="c3_banner bottom_space hide-tablet">
           <img src="http://placehold.it/957x97" alt="Image description" />
        </div>

        <div class="c4">
            <div class="c4_1">                
                <?php getHtmlComponente("../vid_4vids_05/index.html");?>
            </div>
            <div class="c4_2">
            	<?php getHtmlComponente("../mix_4arts_05/index.html");?>                
            </div>

        </div>

        <!--barra lateral 2  parte-->
        <div class="c5">
        
            <div class="c5_1 left">  
                <?php getHtmlComponente("../wdg_altasbajas_result_01/index.html");?>
            </div>
            <div class="c5_2 right hide-mobile">  
                <?php getHtmlComponente("../wdg_teams_classification_01/index.html");?>
            </div>

            <div class="c5_3 hide-tablet">  
                <?php getHtmlComponente("../wdg_twitt_02/index.html");?>
            </div>
        </div>

        <div class="c6">
            <div class="c6_1">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>
           <!-- <div class="c6_2 ">
            </div>
             <div class="c6_3 ">
            </div>
            <div class="c6_4 ">
            </div>
            <div class="c6_5 ">
            </div>
            <div class="c6_6 ">
            </div>-->
        </div>
        <div class="c7">
            <div class="c7_1 hide-mobile left bottom_space">
                <img src="../global/img/facebook_cmp.png" width="300" alt="Image description">
            </div>
            <div class="c7_2 right">
                <?php getHtmlComponente("../wdg_poll_01/index.html");?>
            </div>
            <!--<div class="c7_3 ">
            </div>
            <div class="c7_4 ">
            </div>-->
        </div>
        <!--<div class="c8">
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