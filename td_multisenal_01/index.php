<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");


$comp[] = 'vid_4vids_03';
$comp[] = 'btn_6prog_02';
$comp[] = 'wdg_twitt_02';

$comp[] = 'nav_header_01';
$comp[] = 'nav_smnu_sports_01';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_sport_result_01';

//Left
$comp[] = 'nav_smnu_video_01';
$comp[] = 'vid_player_01b';
$comp[] = 'wdg_comen_01';
$comp[] = 'nav_paginator_01';


//Right


$comp[] = 'wdg_poll_01';

//footer
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';


getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_multisenal_01"> 
	
    <header class="header1 top_space">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php getHtmlComponente("../wdg_sport_result_01/index.html"); ?>
    </header> 
	<div class="main">
        <!--100% main-->
        <div class="c1">
			<?php getHtmlComponente("../nav_smnu_sports_01/index.html"); ?>
        </div>
		<!--parte central 1-->
		<div class="c2">
			<div class="left_banner">
				<img src="../global/img/float_banner_left.png">	
			</div>
			<div class="c2_1">
				<?php getHtmlComponente("../nav_smnu_video_01/index.html"); ?>
            </div>
            <div class="c2_2">            
            	<img src="http://placehold.it/320x40">
            </div>
            <div class="c2_3">
                <?php getHtmlComponente("../vid_player_01b/index.html"); ?>
				<?php getHtmlComponente("../str_pleca_01/index.html"); ?>
                <?php getHtmlComponente("../wdg_comen_01/index.html"); ?>
            </div>
			<div class="right_banner">
				<img src="../global/img/float_banner_right.png">	
			</div>
		</div>

        <!--barra lateral 1era parte-->
		<div class="c3">
			<div class="c3_1 left">  
				<?php getHtmlComponente("../vid_4vids_03/index.html");?>
            </div>
			<div class="c3_2 bottom_space hide-tablet">  
                <img src="http://placehold.it/300x250">
            </div>
			<div class="c3_3 hide-tablet">
				<?php getHtmlComponente("../wdg_twitt_02/index.html");?> 
            </div>
			
			<div class="c3_4 bottom_space hide-tablet">
				<img src="../global/img/facebook_cmp.png" width="300">
            </div>
			
			<div class="c3_5 right">
				<?php getHtmlComponente("../wdg_poll_01/index.html");?> 
            </div>
		</div>
        <!--Carrusel 100%-->
		<div class="c4">
			<?php getHtmlComponente("../btn_6prog_02/index.html");?>
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

<!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->
<?
// footer
require_once("../global/footer.php");
?>