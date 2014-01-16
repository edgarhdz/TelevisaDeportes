<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_nfl_scoreboard_01 -->
<div class="wdg_nfl_scoreboard_01">
	<div class="str_pleca_01_title_new">
      <h3> 
      	<a class="textcolor-title1" href="http://www.televisa.com" title="Link Description">Resultados <span class="str_pleca_01_arrowa selected"></span> <span class="str_pleca_01_arrowb"></span> </a> </h3>
    </div>
	<!-- BEGIN: shsTable -->
	<script language="JavaScript">
		var now = new Date();
		var nowSecs = now.getTime();
		document.write( '<scr'+'ipt language="javascript" SRC="http://televisa.stats.com/multisport/today.js.asp?sport=fb&lang=es&random='+(nowSecs * Math.Random)+'"> <\/scr'+'ipt>' );
	</script>	 
	<!-- END: shsTable -->
</div>
<!-- END: wdg_nfl_scoreboard_01 -->
<?
// footer
require_once("../global/footer.php");
?>