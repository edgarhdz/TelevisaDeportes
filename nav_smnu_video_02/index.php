<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: nav_smnu_video_02-->
<img src="../global/img/sprite_tu_diriges.png" class="tdlogo">
<div class="nav_smnu_video_02">	
	<div class="sings">Señales</div>
	<div class="cont">
		<div class="navarrowleft">
			<a class="wdg_matchesresult_navleft" href="#left"> <span
				class="navlefticon"><i class="tvsa-double-caret-left inactivenav"></i></span>
			</a>
		</div>
		<div class="container">
			<div class="nav_smnu_video_02_bar type1a">
				<div class="degraded_darked_left"></div>
				<ul class="deg">
					<li class="current"><a href="#" title="Link Description">TD</a></li>
					<li><a href="#" title="Link Description">TDN</a></li>
					<li><a href="#" title="Link Description">SAP Americanista</a></li>
					<li><a href="#" title="Link Description">Spidercam</a></li>
					<li><a href="#" title="Link Description">Phantom</a></li>
					<li><a href="#" title="Link Description">Porteria Norte</a></li>
					<li><a href="#" title="Link Description">Visión Aérea</a></li>
					<li><a href="#" title="Link Description">Jugador Selección</a></li>
				</ul>
				<div class="degraded_darked_right"></div>
			</div>
		</div>
		<div class="navarrowright">
			<a class="wdg_matchesresult_navright" href="#right">
				<span class="navrighticon"><i class="tvsa-double-caret-right"></i></span>
			</a>
		</div>
	</div>
</div>
<!-- END: nav_smnu_video_02 -->
<?
// footer
require_once("../global/footer.php");
?>