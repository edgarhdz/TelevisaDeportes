<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<!-- BEGIN: wdg_matches_concacaf_01 -->	
<div class="wdg_matches_concacaf_01" data-enhance="false">
    <div class="lineaSeparadoEncabezado line_down_solid">
        <h2 class="head_component">Partidos</h2>
    </div>
    <table border="0" cellpadding="0" cellspacing="0" summary="Resultados Concacaf" width="100%">
		<caption>Resultados Concacaf</caption>
		<tbody>
		<?php 
			$i = 1;
			while ($i <= 20) :
		?>
			<tr align="left" valign="middle" class="dotted-bottom" itemscope itemtype="http://data-vocabulary.org/Event">
				<td class="team1"><img src="http://placehold.it/35x24/" width="35" height="24" alt="Escudo Sudan" /> Sudan</td>
				<td class="result">2 <span>vs.</span> 4</td>
				<td class="team2">España <img src="http://placehold.it/35x24/" width="35" height="24" alt="Escudo España" /></td>
				<td class="details" width="33%">
					<div class="dotted-left">
						<a href="/event/page" itemprop="url" title="Event link">
							<time itemprop="startDate" datetime="2014-09-02T16:00-08:00">2 Septiembre 16:00 hrs</time><br />
							<span itemprop="location">André-Kamperve</span><!-- Stadium? or what is this? -->
						</a>
						<h2 class="sr-only" itemprop="summary">Sudan vs. España</h2>
					</div>
				</td>
				<td class="mxm"><a title="Link Description" href="#evento-en-vivo"><i class="tvsa-videocamera"></i></a></td>
			</tr>
		<?php 
			$i++;
			endwhile;
		?>
		</tbody>
	</table>
    <div class="degraded"></div>
</div>
<!-- END: wdg_matches_concacaf_01 -->
<?
// footer
require_once("../global/footer.php");
?>