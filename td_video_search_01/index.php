<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

// header
require_once("../global/header.php");

$comp[] = 'btn_6prog_05';

$comp[] = 'nav_header_01';

//main
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';


//left
$comp[] = 'mix_1arts_13';
$comp[] = 'wdg_video_search_01';
$comp[] = 'nav_paginator_01';

//right
$comp[] = 'str_pleca_01';
$comp[] = 'btn_progr_03';
$comp[] = 'wdg_sched_02';

//footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>
<!-- BEGIN: <Template> --> 
<section class="td_video_search_01"> 
    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div> 

    <div class="main">

        <!--Banners-->
        <div class="c1">
            <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>

        <?php getHtmlComponente("../art_branch_01/index.html"); ?>

        <!--parte central 1-->
        <div class="c2">
            <div class="c2_1">
                <?php getHtmlComponente("../wdg_video_search_01/index.html"); ?>
            </div>
            <div class="c2_2 left">
                
            </div>
            <div class=""></div>
            <div class="c2_3 right">
                
            </div>
        </div>

        <!--barra lateral 1era parte-->
        <div class="c3 ">
            <div class="c3_1 left">  
                <?php getHtmlComponente("../btn_progr_03/index.html"); ?>
            </div>	
            <div class="c3_2 hide-tablet bottom_space">  
                <img src="http://placehold.it/300x250" alt="Image Description">
            </div>
            <div class="c3_3 right hide-mobile">  
                <?php getHtmlComponente("../wdg_sched_02/index.html"); ?>
            </div>
        </div>

        <!--parte central 2-->
        <div class="c4">
            <div class="c4_1">  
                
            </div>
            <div class="c4_2">  
                
            </div>
        </div>
        <!--Banner Mobile-->
        <div class="banner_mobile">
            
        </div>

        <!--barra lateral 1era parte-->
        <div class="c5">
            <div class="c5_1 left hide-mobile">  
               
            </div>
            <div class="c5_2 right">
               
            </div>          
        </div>
        <!--Banner 100%-->
        <div class="c6">
            <?php getHtmlComponente("../btn_6prog_05/index.html"); ?>
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
<?php require_once("../global/footer.php"); ?>