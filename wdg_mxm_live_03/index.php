<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../img_stage_01/css/img_stage_01_mobile.css" media="screen">
<link rel="stylesheet" href="../img_stage_01/css/img_stage_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../img_stage_01/css/img_stage_01.css" media="screen and (min-width: 60em)">
<link rel="stylesheet" href="../vid_player_01/css/vid_player_01_mobile.css" media="screen">
<link rel="stylesheet" href="../vid_player_01/css/vid_player_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../vid_player_01/css/vid_player_01.css" media="screen and (min-width: 60em)">

<div class="wdg_mxm_live_03"> 
	<!-- <div class="wdg_mxm_live_02_title textcolor-title1">El partido Minuto por Minuto</div>  -->
	<div class="scroll">
		<div class="wdg_mxm_live_03_status">
			<ul class="wdg_mxm_live_03_list">
				<li>
					<div class="textcolor-title2 time">10:40</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">09:50</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Fuerza Samurai Blue'llega a Brasil</h2>
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia </div>
					</div>
					<div class="icon-interactive textcolor-title4"> <i class="tvsa-videocamera"></i> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description" > 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">08:20</div>
					
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>Ohh no!!! Andy Jonson esta teniendo un ataque</h2> 
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia </div>
						</div>
					<div class="icon-interactive textcolor-title4"><i class="tvsa-videocamera"></i></div>
					<div class="icon-interactive2 textcolor-title4"><i class="tvsa-camera"></i></div>
					<div class="img_stage_01">
						<div class="img_stage_01_image"> <img src="http://lorempixel.com/people/624/350" alt="Image description"> </div>
						<a class="img_stage_01_whtbkg" href="#">
						<p class="img_stage_01_black">El Capitolio de la Casa Blanca, en una imagen de archivo.</p>
						<p class="img_stage_01_gray">Foto: JACQUELYN MARTIN</p>
						</a> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description"> 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">08:14</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Fuerza Samurai Blue'llega a Brasil</h2>
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia, donde el pr&oacute;ximo s&aacute; disputar&aacute; frente a Brasil .</div>
					</div>
					<div class="icon-interactive textcolor-title4"> <i class="tvsa-videocamera"></i> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description"> 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
							<!--<p class="vid_player_01_gray">Foto: JACQUELYN MARTIN</p> --> 
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">09:50</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Fuerza Samurai Blue'llega a Brasil</h2>
						<div class="chronic_description">Tiro Atajado por Benji, potente diparo de Olive Atom que hace estremecer al rival</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">07:00</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						'La Furia Roja' ya esta en Brasil
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">10:40</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Fuerza Samurai Blue'llega a Brasil</h2>
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia, donde el pr&oacute;ximo s&aacute; disputar&aacute; frente a Brasil .</div>
					</div>
					<div class="icon-interactive textcolor-title4"> <i class="tvsa-videocamera"></i> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description" > 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
							<!--<p class="vid_player_01_gray">Foto: JACQUELYN MARTIN</p> --> 
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">08:20</div>
					
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>Ohh no!!! Andy Jonson esta teniendo un ataque</h2> 
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia </div>
						</div>
					<div class="icon-interactive textcolor-title4"><i class="tvsa-videocamera"></i></div>
					<div class="icon-interactive2 textcolor-title4"><i class="tvsa-camera"></i></div>
					<div class="img_stage_01">
						<div class="img_stage_01_image"> <img src="http://lorempixel.com/people/624/350" alt="Image description"> </div>
						<a class="img_stage_01_whtbkg" href="#">
						<p class="img_stage_01_black">El Capitolio de la Casa Blanca, en una imagen de archivo.</p>
						<p class="img_stage_01_gray">Foto: JACQUELYN MARTIN</p>
						</a> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description"> 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">09:50</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
							<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Tiro Atajado por Benji, potente diparo de Olive Atom que hace estremecer al rival</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">07:00</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">08:00</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">09:00</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				 
				<li>
					<div class="textcolor-title2 time">10:40</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">Bajo una fuerte lluvia, Espa&ntilde;a llega a tierras amaz&oacute;nicas para la Copa.</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">09:50</div>
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>'La Furia Roja' ya esta en Brasil</h2>
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia, donde el pr&oacute;ximo s&aacute; disputar&aacute; frente a Brasil .</div>
					</div>
					<div class="icon-interactive textcolor-title4"> <i class="tvsa-videocamera"></i> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description" > 
							
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
							 
						</div>
					</div>
				</li>
				<li>
					<div class="textcolor-title2 time">08:20</div>
					
					<div class="chronic">
						<div class="logoTeam"><img src="http://lorempixel.com/sports/20/20" alt="Image description"> </div>
						<h2>Ohh no!!! Andy Jonson esta teniendo un ataque</h2> 
						<div class="chronic_description">La seleccio&oacute;n de Jap&oacute;n lleg&oacute; este mi&eacute;rcoles a Brasilia </div>
						</div>
					<div class="icon-interactive textcolor-title4"><i class="tvsa-videocamera"></i></div>
					<div class="icon-interactive2 textcolor-title4"><i class="tvsa-camera"></i></div>
					<div class="img_stage_01">
						<div class="img_stage_01_image"> <img src="http://lorempixel.com/people/624/350" alt="Image description"> </div>
						<a class="img_stage_01_whtbkg" href="#">
						<p class="img_stage_01_black">El Capitolio de la Casa Blanca, en una imagen de archivo.</p>
						<p class="img_stage_01_gray">Foto: JACQUELYN MARTIN</p>
						</a> </div>
					<div class="vid_player_01 mantener">
						<div class="vid_player_01_image"> <img src="http://lorempixel.com/people/625/380" alt="Image description"> 
							<!-- PLAYER -->
							<div  style="margin: 0px !important; display:none;">
								<div  class="theaterSideSpacer"></div>
								<div style="float:left">
									<div  style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
									<!-- Start of Brightcove Player -->
									<div  style="margin:0px !important;"></div>
								</div>
								<div  class="theaterSideSpacer"></div>
							</div>
							<div style="display:none;" ></div>
							<!-- // PLAYER --> 
						</div>
						<a href="javascript: void(0);">
							<i class="tvsa-play" id="videobtn"></i> 
						</a>
						<div class="vid_player_01_whtbkg">
							<p class="vid_player_01_black">Video Title</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!--Scroll-->
    <div class="arrow_buttons"> 
        <a href="#" title="Link Description" class="prev"><div class="dropdown-white"><i class="tvsa-caret-up"></i></div></a> 
        <a href="#" title="Link Description" class="next"><div class="dropdown-white"><i class="tvsa-caret-down"></i></div></a>  
    </div>
	<div class="degraded"></div>
</div>
<?
// footer
require_once("../global/footer.php");
?>
