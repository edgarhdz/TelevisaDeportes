<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

<!-- art_branch_01  -->
<link rel="stylesheet" href="../art_branch_01/css/art_branch_01_mobile.css" media="screen">
<link rel="stylesheet" href="../art_branch_01/css/art_branch_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../art_branch_01/css/art_branch_01.css" media="screen and (min-width: 60em)">



<!-- BEGIN: wdg_nfl_sched_01-->
<div class="wdg_nfl_sched_01" data-enhance="false">

	<!-- BEGIN:art_branch_01 -->
		<!-- <div class="art_branch_01">
		    <div class="art_branch_01_title">
		        <h1>
		            <a href="#" title="Link description">
		                Team Schedule
		            </a>
		        </h1>
		    </div>
		</div> -->
	<!-- END:art_branch_01-->
		
	<!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Calendario 2013
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
	
	<!--In the data-color attr you need to setup the link color-->
	<!--Página de donde se obtuvo la info http://televisa.stats.com/multisport/widgetsNEW.asp?sport=nba&type=team&lang=es&lg=&team=24 -->
	<div class="link_class" data-class="textcolor-title2"></div>
	<div class="scroll">
<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=fb&type=schedrslt&team=22&lang=es"></script>

	</div>
	<div class="degradado"></div>
</div>
<!-- END: wdg_nfl_sched_01 -->
<?
// footer
require_once("../global/footer.php");
?>
