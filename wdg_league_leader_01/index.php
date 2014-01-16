<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_league_leaders_01 -->
<div class="wdg_league_leaders_01">
	<!-- BEGIN: shsTable -->
	<script language="javascript" SRC="http://televisa.stats.com/multisport/stats.js.asp?sport=fb&type=leaders&cat=passtd&lang=es"></script>
	<!-- END: shsTable -->
</div>
<!-- END: wdg_league_leaders_01 -->
<?
// footer
require_once("../global/footer.php");
?>