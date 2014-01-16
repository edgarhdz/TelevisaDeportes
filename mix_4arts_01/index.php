<?
define("COMPONENT", basename(__DIR__));
define("JS", FALSE);

// header
require_once("../global/header.php");
require_once("../global/template.php");
?>
<link rel="stylesheet" href="../mix_1arts_08b/css/mix_1arts_08b_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_08b/css/mix_1arts_08b_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_08b/css/mix_1arts_08b.css" media="screen and (min-width: 60em)">
<link rel="stylesheet" href="../mix_1arts_07/css/mix_1arts_07_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_07/css/mix_1arts_07_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_07/css/mix_1arts_07.css" media="screen and (min-width: 60em)">
<!-- BEGIN: mix_4arts_01 -->
<div class="mix_4arts_01">
    <div class="mix_4arts_01_top">
 		<!--BEGIN: mix_1arts_08b -->
        	<?php getHtmlComponente("../mix_1arts_08b/index.html");?>	
        <!-- END: mix_1arts_08b -->
    </div>
    <div class="mix_4arts_01_bottom">
        <!-- BEGIN: mix_1arts_07 -->
        <div class="mix_1arts_07">
            <ul class="articles"> 
                <li> 
                    <a href="http://www.televisa.com" title="Link description" class="link"> 
                        <img src="http://lorempixel.com/84/63/people/1" alt="Image description"/>
                        <span class="sprite photo-corner"></span>
                        <h3>Soledad Loaeza opina acerca de la reciente reelección</h3>
                        <span class="icon"></span> 
                    </a> 
                </li>
            </ul>
        </div>
        <!-- END: mix_1arts_07 -->
        <!-- BEGIN: mix_1arts_07 -->
        <div class="mix_1arts_07">
            <ul class="articles"> 
                <li> 
                    <a href="http://www.televisa.com" title="Link description" class="link"> 
                        <img src="http://lorempixel.com/84/63/people/1" alt="Image description"/>
                        <span class="sprite photo-corner"></span>
                        <h3>Soledad Loaeza opina acerca de la reciente reelección</h3>
                        <span class="icon"></span> 
                    </a> 
                </li>
            </ul>
        </div>
        <!-- END: mix_1arts_07 -->
        <!-- BEGIN: mix_1arts_07 -->
        <div class="mix_1arts_07">
            <ul class="articles"> 
                <li> 
                    <a href="http://www.televisa.com" title="Link description" class="link"> 
                        <img src="http://lorempixel.com/84/63/people/1" alt="Image description"/>
                        <span class="sprite photo-corner"></span>
                        <h3>Soledad Loaeza opina acerca de la reciente reelección</h3	>
                        <span class="icon"></span> 
                    </a> 
                </li>
            </ul>
        </div>
        <!-- END: mix_1arts_07 -->
    </div>
</div>
<!-- END: mix_4arts_01 -->
<?
// footer
require_once("../global/footer.php");
?>