<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);
$javascript = array("respond", "orientationfix", "modernizr");
require_once("../global/template.php");


// header
require_once("../global/header.php");

$comp[] = 'nav_header_01';
$comp[] = 'ads_combo_01';
$comp[] = 'art_branch_01';

$comp[] = 'str_pleca_01';
$comp[] = 'wdg_mxm_live_02';
$comp[] = 'img_stage_01';
$comp[] = 'vid_player_01';

$comp[] = 'btn_progr_03';
$comp[] = 'wdg_nwslt_01';
$comp[] = 'wdg_poll_01';
$comp[] = 'wdg_twitt_02';
$comp[] = 'wdg_sched_02';
$comp[] = 'nav_paginator_01';

$comp[] = 'nav_bookmark_01';
$comp[] = 'nav_corft_01';
$comp[] = 'nav_footer_01';

getData($comp, "css");
getData($comp, "js");
?>


<!-- BEGIN: <Template> --> 
<section class="td_mxm_acciones_01"> 
	<div class="header1">
        <?php getHtmlComponente("../nav_header_01/index.html"); ?>		
    </div> 
	<div class="main">		
		<div>
			<?php getHtmlComponente("../ads_combo_01/index.html"); ?>
		</div>
		
		<?php getHtmlComponente("../art_branch_01/index.html"); ?>
		
		<div class="c1">
			<div class="c1_1">
                <?php getHtmlComponente("../wdg_mxm_live_02/index.html"); ?>
            </div>
			<div class="c1_2">
			</div>
			<div class="c1_3">					
			</div>
            <div class="c1_4">          		
            </div>
             <div class="c1_5">               
            </div>         
		</div>
		
		<div class="right">
			<div class="c2">
				<div class="c2_1 left">
					 <?php getHtmlComponente("../btn_progr_03/index.html");?>
				</div>
				<div class="c2_2 right hide-mobile bottom_space">  
					<img src="http://placehold.it/300x250" alt="Image Description">
				</div>
				
			</div>
			
			<div class="c3">
				<div class="c3_1 left hide-mobile">  
					<?php getHtmlComponente("../wdg_sched_02/index.html");?>
				</div>
				<div class="c3_2 right hide-mobile">  
					<?php getHtmlComponente("../wdg_twitt_02/index.html");?>
				</div>				
			</div>
			
			<div class="c4">				
				<div class="c4_1 left  hide-mobile bottom_space">
				   <img src="../global/img/facebook_cmp.png" width="300" alt="Image Description">
				</div>
				<div class="c4_2 right hide-mobile">  
					<?php getHtmlComponente("../wdg_nwslt_01/index.html");?>
				</div>
			</div>
        </div>       	
	</div>
	
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