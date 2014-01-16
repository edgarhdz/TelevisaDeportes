<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'nav_smnu_sports_01';
$comp[] = 'wdg_rating_main_01';
$comp[] = 'wdg_rate_player_01';

$comp[] = 'btn_6prog_02';
$comp[] = 'nav_header_01';
$comp[] = 'wdg_sport_result_01';


$comp[] = 'wdg_mxm_plcards_01';
$comp[] = 'btn_6prog_02';
$comp[] = 'str_pleca_01';
$comp[] = 'wdg_goalsanoted_01';
$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_footer_01';
$comp[] = 'nav_corft_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_mxm_rating_01"> 
	
    <div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>
		<?php getHtmlComponente("../wdg_sport_result_01/index.html"); ?>
    </div> 

	<div class="main">
    
			<?php getHtmlComponente("../nav_smnu_sports_01/index.html"); ?>
        

		<!--parte central 1-->
		<div class="c1 left">
			<div class="c1_1">
                <?php getHtmlComponente("../wdg_rating_main_01/index.html"); ?>
            </div>

            <div class="c1_2">
                <?php getHtmlComponente("../wdg_rate_player_01/index.html"); ?>
            </div>
		</div>
        
        <div class="c_banner bottom_space">  
			<img alt="" src="http://placehold.it/600x120">
		</div>
		
        <!--barra lateral 1era parte-->
		<div class="c3 right hide-mobile">
			<div class="c3_1 bottom_space hide-tablet">  
				<img alt="" src="http://placehold.it/300x250">
            </div>
			<div class="c3_2 left">  
                <?php getHtmlComponente("../wdg_goalsanoted_01/index.html");?>
            </div>
            <div class="c3_3 hide-tablet">  
                <?php //getHtmlComponente("../wdg_mxm_penalties_01/index.html");?>
            </div>
			<div class="c3_4 right">  
                <?php getHtmlComponente("../wdg_mxm_plcards_01/index.html");?>
            </div>
		</div>

        <div class="c4">  
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

<!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->
<?
// footer
require_once("../global/footer.php");
?>