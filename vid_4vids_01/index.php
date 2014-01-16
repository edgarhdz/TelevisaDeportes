<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?> 
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 960px)">

<div class="vid_4vids_01" data-enhance="false">
<!-- BEGIN: str_pleca_01 -->
	<div class="str_pleca_01" data-enhance="false">
		<div class="str_pleca_01_title">
			<strong class="background-color-pleca1">
				<a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
					Lo Más Leído
					<span class="str_pleca_01_arrowa selected"></span>
					<span class="str_pleca_01_arrowb"></span>
				</a>
			</strong>
		</div>
	</div>
<!-- END: str_pleca_01 -->
	<div class="mainimage">
		<div class="imgContainer">
			<img src="http://lorempixel.com/people/624/351" alt="Image description" id="img_stage_01_IMG" width="624" height="351" />
			
			<!-- PLAYER -->
			<div id="theaterContainer">
				<div id="leftBarLink" class="theaterSideSpacer"></div>
				<div>
					<div id="videoLink"></div>
					<!-- Start of Brightcove Player -->
					<div id="contenedor" style="margin:0px !important;"></div>	
				</div>
				<div id="rightBarLink" class="theaterSideSpacer"></div>	
			</div>
			<div style="display:none;" id="companionBanner"></div>
			<!-- // PLAYER -->	   
		</div>
		<div class="overlay"> 
			<a class="td_bg play back_overlay galleryLink" href="#">
				<i class="tvsa-play"></i>
			</a>
			<p>El líder espiritual tibetano, el Dalai Lama, realiza una visita de diez días a Gran Bretaña en medio de protestas del Gobierno de China a las que calificó como 'algo rutinario'.</p>
		</div>
	</div>
	
	<div class="overlay2">
		<!-- BEGIN: type1a -->
		<div class="type1a">
			<div class="arrows">
				<a href="#left" class="left" title ="Link Description"><i class="tvsa-double-caret-left desactivo"></i></a>
			</div>			
			<div class="arrowRight">
				<a href="#right" class="right" title ="Link Description"><i class="tvsa-double-caret-right activo"></i></a>
			</div>			
			<div class="carruselContainer">
				<ul id="carrusel">
					<li>
						<a href="http://www.televisa.com" title="Link Description" class="monitor">
							<span>
								<span class="play back_overlay">
									<i class="tvsa-play"></i>
								</span>
								<img src="http://lorempixel.com/people/136/77" alt="Image description">
							</span>
							<div class="iconGallery selectedGallery"><i class="tvsa-video tvsa-3x"></i></div>
							<div class="textcolor-title1">Titulo</div>
							<h2 class="gal_desc">Sobre el ring Mayweather vs. Guerrero </h2>
						</a>
					</li>
					<li>
						<a href="http://www.televisa.com" title="Link Description" class="monitor">
							<span>
								<span class="play back_overlay">
									<i class="tvsa-play"></i>
								</span>
								<img src="http://lorempixel.com/136/77" alt="Image description">
							</span>
							<div class="iconGallery"><i class="tvsa-video tvsa-3x"></i></div>
							<div class="textcolor-title1">Titulo</div>
							<h2 class="gal_desc"> Los unicos y asombrosos Puños de Fuego</h2>
							<span class="border"></span>
						</a>
					</li>
					<li>
						<a href="http://www.televisa.com" title="Link Description" class="monitor">
							<span>
								<span class="play back_overlay">
									<i class="tvsa-play"></i>
								</span>
								<img src="http://lorempixel.com/136/77" alt="Image description">
							</span>
							<div class="iconGallery"><i class="tvsa-video tvsa-3x"></i></div>
							<div class="textcolor-title1">Titulo</div>
							<h2 class="gal_desc"> El video del impactante Nocaut de la Noche</h2>
						</a>
					</li>
					<li>
						<a href="http://www.televisa.com" title="Link Description" class="monitor">
							<span>
								<span class="play back_overlay">
									<i class="tvsa-play"></i>
								</span>
								<img src="http://lorempixel.com/people/136/77" alt="Image description">
							</span>
							<div class="iconGallery"><i class="tvsa-video tvsa-3x"></i></div>
							<div class="textcolor-title1">Titulo</div> 
							<h2 class="gal_desc"> Dalai Lama visita Gran Bretaña entre protestas en China </h2>
						</a>
					</li>
					<li>
						<a href="http://www.televisa.com" title="Link Description" class="monitor">
							<span>
								<span class="play back_overlay">
									<i class="tvsa-play"></i>
								</span>
								<img src="http://lorempixel.com/136/77" alt="Image description">
							</span>
							<div class="iconGallery"><i class="tvsa-video tvsa-3x"></i></div>
							<div class="textcolor-title1">Titulo</div>
							<h2 class="gal_desc"> México se prepara para celebrar el día Mundial del Circo </h2>
						</a>
					</li>
				</ul>
				<div class="degraded"></div>
			</div>
		</div>
		<!-- END: type1a -->
	</div>
</div>
<?
// footer
require_once("../global/footer.php");
?>