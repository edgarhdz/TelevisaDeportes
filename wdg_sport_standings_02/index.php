<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_sport_standings_02 -->
<div class="wdg_sport_standings_02">
	<!-- BEGIN: shsTable -->
	<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=nba&type=standings_1column&lang=es"></script> 
	<!-- END: shsTable -->
</div>
<!-- END: wdg_sport_standings_02 -->
<?
// footer
require_once("../global/footer.php");
?>