<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");

// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'str_pleca_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_02';
$comp[] = 'mix_6arts_04';
$comp[] = 'mix_2arts_04';
$comp[] = 'mix_1arts_10';
$comp[] = 'nav_paginator_01';
$comp[] = 'wdg_otherpost_01';
$comp[] = 'wdg_mostread_01';
$comp[] = 'wdg_categories_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>

<!-- BEGIN: <Template> -->  
<section class="td_opinion_conduct_index_01"> 

    <div class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
    </div>

    <!-- BEGIN: <main> -->
    <div class="main">

        <div class="bannerTopNews banner_template"> 
            <?php getHtmlComponente("../ads_combo_01/index.html"); ?>
        </div>

        <div class="topTitle">
            <?php getHtmlComponente("../art_branch_02/index.html"); ?> 
        </div>


        <!-- BEGIN: <contenedor1 izquierdo> -->
        <div class="c1">
                <div class="c1_1">
                    
                </div>
                <!-- BEGIN: Componentes unidos usado en td_opinion_blog_01 y td_opinion_video_blog_01-->
                    <div class="c1_2 "></div>
                    <div class="c1_2r"></div>
                <!-- END de componentes Unidos --> 
                <div class="c1_3">
                	<?php getHtmlComponente("../mix_6arts_04/index.html"); ?>
                </div>
   				<div class="c1_4">
                	
                </div>
                <div class="c1_5">
                	
                </div>
                <div class="c1_6">
                	
                </div>
                <div class="c1_7">
                	
                </div>
                <div class="c1_8">
                	
                </div>
                <div class="c1_9">
					
                </div>
        </div>
        <!-- END: <contenedor1> -->

 <!-- BEGIN: <contenedor2 derecho> -->
        <div class="c2">
            <div class="c2_1 hide-tablet">  
                <?php getHtmlComponente("../wdg_otherpost_01/index.html"); ?>
            </div>
            <div class="c2_2 left">
                <?php getHtmlComponente("../wdg_mostread_01/index.html"); ?>
            </div>                       
            <div class="c2_3 right">
                <?php getHtmlComponente("../wdg_categories_01/index.html"); ?>
            </div>
        </div>
        <!-- END: <contenedor2> -->
    </div>
    <!-- END: <main> -->
    
    
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

<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>
<?
// footer
require_once("../global/footer.php");
?>