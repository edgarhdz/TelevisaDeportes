<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'mix_carru_03';
$comp[] = 'img_galry_01';
$comp[] = 'ads_combo_01';
$comp[] = 'btn_progr_03';
$comp[] = 'btn_6prog_02';
$comp[] = 'mix_more_news_02';
$comp[] = 'mix_1arts_08';
$comp[] = 'mix_1arts_08b';
$comp[] = 'mix_2arts_08';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_header_01';
$comp[] = 'str_pleca_01';;

$comp[] = 'wdg_opinion_01';
$comp[] = 'nav_smex_header_01';
$comp[] = 'wdg_smex_result_01';
$comp[] = 'wdg_smex_groups_01';
$comp[] = 'wdg_fut_convocated_01';
$comp[] = 'mix_smex_dt_01';
$comp[] = 'wdg_smex_strategy_01';
$comp[] = 'wdg_smex_effectiveness_01';

$comp[] = 'wdg_sport_result_01';
$comp[] = 'vid_4vids_05';
$comp[] = 'wdg_social_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_smex_main_01"> 
    
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 
    
    
    <div class="main">
        
        <!--Banners-->
        <div class="c1 left">
            <div class="c1_0"><img src="http://placehold.it/320x50" alt="Image1"></div>
            <div class="c1_1">
                <?php getHtmlComponente("../nav_smex_header_01/index.html"); ?>
            </div>
        </div>

        <!--parte central 1-->
        <div class="c2 left">
            <div class="c2_1">
                <?php getHtmlComponente("../mix_carru_03/index.html"); ?>
            </div>
            
            <div class="c2_2 left">
                <?php getHtmlComponente("../mix_2arts_08/index.html"); ?>
            </div>
            <!--<div class="separator_component left hide-mobile"></div>
            <div class="c2_3 right">
            </div>-->
        </div>
        
        <!--barra lateral 1era parte-->
        <div class="c3 right">
         	<div class="c3_3 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html");?>
            </div>
            <div class="c3_2 hide-mobile right bottom_space">  
                <img src="http://placehold.it/300x250" alt="Image2">
            </div>
            <div class="c3_1 hide-tablet">  
                <?php getHtmlComponente("../mix_more_news_02/index.html");?>
            </div>
        </div>

        <!--parte central 2-->
       <div class="c3_banner banner_template bottom_space hide-tablet">
           <img src="http://placehold.it/955x91" alt="Image3" />
        </div>

        <div class="c4 left">
            <div class="c4_1">
                <?php getHtmlComponente("../vid_4vids_05/index.html",array('link'));?>
            </div>
            <div class="c4_2">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../img_galry_01/index.html"); ?>
            </div>

        </div>

        <!--barra lateral 2  parte-->
        <div class="c5 right">
        
            <div class="c5_1 hide-mobile left">  
                <?php getHtmlComponente("../wdg_smex_result_01/index.html");?>
            </div>
            <div class="c5_2 right">  
                <?php getHtmlComponente("../wdg_smex_groups_01/index.html");?>
            </div>

            <div class="c5_3">  
                <?php getHtmlComponente("../wdg_fut_convocated_01/index.html");?>
            </div>
        </div>

        <div class="c6 left">
            <div class="c6_1">
                <?php getHtmlComponente("../mix_smex_dt_01/index.html");?>
            </div>
            <div class="c6_2">
                <?php getHtmlComponente("../wdg_smex_strategy_01/index.html"); ?>
            </div>
             <div class="c6_3 left">
                <?php getHtmlComponente("../wdg_smex_effectiveness_01/index.html");?>
            </div>
            <div class="c6_4 right">
                <?php getHtmlComponente("../wdg_smex_effectiveness_01/index.html");?>
            </div>
        </div>
        
        <div class="c6bis">
        	 <div class="c6bis_1 hide-mobile left">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_1arts_08b/index.html"); ?>
            </div>
            <div class="c6bis_2 hide-tablet right">
                <?php getHtmlComponente("../str_pleca_01/index.html");?>
                <?php getHtmlComponente("../mix_1arts_08b/index.html"); ?>
            </div>
        </div>
        <div class="c7  right">
            <div class="c7_1 right">
                <?php getHtmlComponente("../wdg_opinion_01/index.html");?>
            </div>
            <div class="c7_2 right hide-mobile">
                
            </div>
            <div class="c7_3 hide-tablet">
                
            </div>
            <div class="c7_4 hide-tablet">
                
            </div>
        </div>
        
        <div class="c8">
            <?php getHtmlComponente("../btn_6prog_02/index.html");?>
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

<?php /*?><script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script><?php */?>
<?
// footer
require_once("../global/footer.php");
?>