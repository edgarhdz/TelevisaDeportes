<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>

<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: wdg_team_teamsts_01-->

<!--http://televisa.stats.com/multisport/widgetsNEW.asp?sport=nba&type=team&lang=es&lg=&team=24#-->


<div class="wdg_team_teamsts_01" data-enhance="false">
	
	
	<!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Estadísticas del Equipo
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h3>
        </div>
    </div>
    <!-- END: str_pleca_01 -->
	
	<table width="100%">
		<tbody>
			<tr>
				<td style="width: 50%; vertical-align: top">
				<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=nba&type=leaders&cat=tm_own&team=24&lang=es"></script>
				</td>
				<td style="width: 50%; vertical-align: top" class="second">
				<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=nba&type=leaders&cat=tm_opp&team=24&lang=es"></script>

				</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- END: wdg_nba_leaders_02 -->
<?
// footer
require_once("../global/footer.php");
?>
