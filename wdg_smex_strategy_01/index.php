<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>

<!-- BEGIN: wdg_smex_strategy_01 -->
<section class="wdg_smex_strategy_01">
	<div class="titulo textcolor-title4">Estrategia más utilizada</div>
	<div class="pleca_inferior">
		<div>
			<strong>Partidos</strong>
		</div>
		<div class="wdg_smex_strategy_01_dropdown">
			<div class="wdg_smex_strategy_01_dropdowncontent">
				<p></p>
				<div> <a id="dropdwon-right"  href="#" title="Link Description"> <i class="tvsa-caret-down"></i></a> </div>
			</div>
			<div class="wdg_smex_strategy_01_listcontainer">
				<ul class="wdg_smex_strategy_01_dropdownlist">
					<li>
						<p data-field="jornada1">Jornada 1</p>
					</li>
					<li>
						<p data-field="jornada2">Jornada 2</p>
					</li>
					<li>
						<p data-field="jornada3">Jornada 3</p>
					</li>
					<li>
						<p data-field="jornada1">Jornada 4</p>
					</li>
                    <li>
						<p data-field="jornada2">Jornada 5</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="field">
		<img class="cancha" src="../global/img/cancha.png" alt="field" width="624" height="334"/>
		<span class="players">
			<span class="player local grid1" style="left:100px;top:100px;">
				<a href="#" title="Mario Goméz">
					<span class="number textcolor-title2">238</span>
					<span class="tooltip">
						<img class="playerfoto" src="http://lorempixel.com/51/38" alt="Mario Goméz" width="51" height="38" />
						<span class="arrow"></span>
						<span class="name">Mario "Looser" Goméz</span>
						<span class="position textcolor-title2">Picking boogers</span>
						<em>acciones</em>
						<span class="actions">
							<i class="tvsa-mxm-goal"></i>56' 
							<i class="tvsa-mxm-owngoal"></i>57' 
							<i class="tvsa-mxm-yellowcard"></i>58'
							<i class="tvsa-mxm-goal"></i>56' 
							<i class="tvsa-mxm-owngoal"></i>57' 
							<i class="tvsa-mxm-yellowcard"></i>58'
							<i class="tvsa-mxm-goal"></i>56' 
							<i class="tvsa-mxm-owngoal"></i>&nbsp;57' 
							<i class="tvsa-mxm-yellowcard"></i>&nbsp;58'
						</span>
					</span>
				</a>
			</span>
			
			<span class="player local grid2" style="left:300px;top:80px;">
				<a href="#" title="Mario Goméz">
					<span class="number textcolor-title2">09</span>
					<span class="tooltip">
					<img class="playerfoto" src="http://lorempixel.com/51/38" alt="Mario Goméz" width="51" height="38" />
					<span class="arrow"></span>
					<span class="name">Mario Goméz</span>
					<span class="position textcolor-title2">Some position</span>
					<em>acciones</em>
					<span class="actions">
						<i class="tvsa-mxm-goal"></i>&nbsp;56' 
						<i class="tvsa-mxm-owngoal"></i>&nbsp;57' 
						<i class="tvsa-mxm-yellowcard"></i>&nbsp;58' 
					</span>
				</span>
				</a>
			</span>
			
			<span class="player grid3" style="left:80px;top:250px;">
				<a href="#" title="Mario Goméz">
					<span class="number textcolor-title2">09</span>
					<span class="tooltip">
						<img class="playerfoto" src="http://lorempixel.com/51/38" alt="Mario Goméz" width="51" height="38" />
						<span class="arrow"></span>
						<span class="name">Mario Goméz</span>
						<span class="position textcolor-title2">Missing the goal</span>
						<em>acciones</em>
						<span class="actions">
							<i class="tvsa-mxm-goal"></i>&nbsp;56' 
							<i class="tvsa-mxm-owngoal"></i>&nbsp;57' 
							<i class="tvsa-mxm-yellowcard"></i>&nbsp;58'
						</span>
					</span>
				</a>
			</span>
		</span>
	</div>
	
	<!-- <div class="alineacion_field">
        <div class="jornada1 campo">
            <div class="field">
                 <div class="info-player textcolor-title4">
                    <div class="img-container">
                    <img class="img-profile" alt="profile" src="#">
                    </div>
                    <p class="textcolor-title3"></p>
                    <p class="textcolor-title2"></p>
                    <div class="action-container"><p></p></div>
                    <div class="stadistics-container">
                    </div>
                </div>
                <div class="team1">
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Arquero líbero" data-player="Paco Ochoa" data-x="60px" data-y="105px">01</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Francisco Javier Rodríguez Pinedo" data-x="148px" data-y="8px">18</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-success:17',tvsa-success:54',tvsa-like:70'" data-position="Defensa" data-player="Aquivaldo Mosquera Romaña" data-x="235px" data-y="8px">11</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa" data-player="Efraín Juárez Valdez" data-x="125px" data-y="75px">02</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Christian Rogelio Benítez Bentancourt" data-x="195px" data-y="55px">08</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Francisco Javier Rodríguez Pinedo" data-x="240px" data-y="105px">19</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Efraín Juárez Valdez" data-x="110px" data-y="170px">03</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Aquivaldo Mosquera Romaña" data-x="95px" data-y="250px">16</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Mediocentro organizador" data-player="Efraín Juárez Valdez" data-x="190px" data-y="155px">21</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Christian Rogelio Benítez Bentancourt" data-x="175px" data-y="230px">42</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Francisco Javier Rodríguez Pinedo" data-x="260px" data-y="200px">24</div>
                </div>
				
				
				
                <div class="team2">
                    
                </div>
                <img src="../global/img/cancha.png" alt="field">
            </div>
        </div>
         <div class="jornada2 campo">
            <div class="field">
                 <div class="info-player textcolor-title4">
                    <div class="img-container">
                    <img class="img-profile" alt="profile" src="#">
                    </div>
                    <p class="textcolor-title3"></p>
                    <p class="textcolor-title2"></p>
                    <div class="action-container"><p></p></div>
                    <div class="stadistics-container">
                    </div>
                </div>
                <div class="team1">
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Arquero líbero" data-player="Paco Ochoa" data-x="160px" data-y="105px">01</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Francisco Javier Rodríguez Pinedo" data-x="148px" data-y="8px">18</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-success:17',tvsa-success:54',tvsa-like:70'" data-position="Defensa" data-player="Aquivaldo Mosquera Romaña" data-x="235px" data-y="8px">11</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa" data-player="Efraín Juárez Valdez" data-x="125px" data-y="75px">02</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Christian Rogelio Benítez Bentancourt" data-x="195px" data-y="55px">08</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Francisco Javier Rodríguez Pinedo" data-x="240px" data-y="105px">19</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Efraín Juárez Valdez" data-x="110px" data-y="170px">03</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Aquivaldo Mosquera Romaña" data-x="95px" data-y="250px">16</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Mediocentro organizador" data-player="Efraín Juárez Valdez" data-x="190px" data-y="155px">21</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Christian Rogelio Benítez Bentancourt" data-x="175px" data-y="230px">42</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Francisco Javier Rodríguez Pinedo" data-x="260px" data-y="200px">24</div>
                </div>
				
				
				
                <div class="team2">
                    
                </div>
                <img src="../global/img/cancha.png" alt="field">
            </div>
        </div>
         <div class="jornada3 campo">
            <div class="field">
                <div class="info-player textcolor-title4">
                    <img class="img-profile" alt="profile" src="#">
                    <p class="textcolor-title3"></p>
                    <p class="textcolor-title2"></p>
                    <div class="action-container"><p></p></div>
                    <div class="stadistics-container">
                    </div>
                </div>
                <div class="team1">
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Arquero líbero" data-player="Paco Ochoa" data-x="360px" data-y="105px">01</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Francisco Javier Rodríguez Pinedo" data-x="148px" data-y="8px">18</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-success:17',tvsa-success:54',tvsa-like:70'" data-position="Defensa" data-player="Aquivaldo Mosquera Romaña" data-x="235px" data-y="8px">11</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Defensa" data-player="Efraín Juárez Valdez" data-x="125px" data-y="75px">02</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Christian Rogelio Benítez Bentancourt" data-x="195px" data-y="55px">08</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Francisco Javier Rodríguez Pinedo" data-x="240px" data-y="105px">19</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Centrocampista" data-player="Efraín Juárez Valdez" data-x="110px" data-y="170px">03</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Extremo" data-player="Aquivaldo Mosquera Romaña" data-x="95px" data-y="250px">16</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Mediocentro organizador" data-player="Efraín Juárez Valdez" data-x="190px" data-y="155px">21</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Christian Rogelio Benítez Bentancourt" data-x="175px" data-y="230px">42</div>
                    <div class="player textcolor-title2" data-img="http://lorempixel.com/55/40/" data-stadistics="tvsa-like:17',tvsa-success:54',tvsa-success:70',tvsa-like:83'" data-position="Delantero" data-player="Francisco Javier Rodríguez Pinedo" data-x="260px" data-y="200px">24</div>
                </div>
				
				
                <div class="team2">
                    
                </div>
                <img src="../global/img/cancha.png" alt="field">
            </div>
        </div>
    </div>
    
     -->
     
</section>
<?
// footer
require_once("../global/footer.php");
?>
