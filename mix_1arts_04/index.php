<?
define("COMPONENT", basename(__DIR__));
define("JS", FALSE);

// header
require_once("../global/header.php");
?>
     
<!-- BEGIN: mix_1arts_04 -->
<div class="mix_1arts_04 dotted-top" itemscope itemtype="http://data-vocabulary.org/Person">
	<img src="http://placehold.it/192x108" alt="Toño de Valdez" width="192" height="108" />
	<span itemprop="name" class="name"><a href="#articles-of-this-author" class="textcolor-title1" title="Antonio de Valdes" itemprop="url">Antonio de Valdés</a></span> 
	<span class="sr-only" itemprop="role">Periodista</span>
	<span class="sr-only" itemprop="organization">Televisa</span>
	<span class="sr-only" itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
		<span itemprop="locality">Ciudad de México</span>, 
		<span itemprop="region">DF</span> 
	</span>
	<p class="redes_sociales">
		<a href="#face" title="Link Description"><i class="tvsa-facebook facebook"></i>&nbsp;/AntoniodeValdes</a>
		<a href="#twitter" title="Link Description"><i class="tvsa-twitter twitter"></i>&nbsp;@adevaldes</a>
	</p>
	<p class="desc">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
		<a class="see_all textcolor-title2" href="http://www.televisa.com">Ver todas las emisiones</a>
	</p>
</div>
<!-- END: mix_1arts_04 -->
<?
// footer
require_once("../global/footer.php");
?>