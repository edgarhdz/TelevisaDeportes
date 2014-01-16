<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_podcast_02 -->
<div class="wdg_podcast_02">

	<h5>Publicado el 30-01-2013  <span class="wdg_podcast_02_extras"> Duraci&oacute;n 4:31 Peso 4.14mb</span></h5>
    <h2><a href="media/2013-02-19_01-teriyaki_boyz-tokyo_drift_(fast_and_furious).mp3">Escucha el "mixtape"que Solar Bears ha creado para 1:N</a></h2>
    <div class="wdg_podcast_02_player">
    	<div class="wrapper">
			<a  class="audio {skin:'red', autoPlay:false, inLine:true, showVolumeLevel:false, showRew:false, showTime:true, width:198, addShadow:false}" href="http://www.miaowmusic.com/mp3/Miaow-04-Lismore.mp3">miaowmusic - Lismore (mp3)</a>
		</div>   	
    </div>
    <div class="wdg_podcast_02_btnDescargar">
    	<a href="media/2013-02-19_01-teriyaki_boyz-tokyo_drift_(fast_and_furious).mp3" target="_blank"> <i class="tvsa-download tvsa-1x red"></i> </a>
    </div>
    <div class="separator"></div>
</div>
<?
// footer
require_once("../global/footer.php");
?>