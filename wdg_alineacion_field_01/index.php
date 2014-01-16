<?php
define("COMPONENT", basename(__DIR__));
define("JS", "divUE");

// header
require_once("../global/header.php");
?>

<!-- BEGIN: wdg_alineacion_field_01 -->
<section class="wdg_alineacion_field_01">
	<ul class="menu">
    	<li class="first"><a href="#" data-query="inicial">Alineación Inicial</a></li><li><a href="#" data-query="media">Alineación Media</a></li><li><a href="#" data-query="promedio">Promedio</a></li>
	</ul>
    <div class="field">
		<img class="cancha" src="../global/img/cancha.png" alt="field" />
		<span class="players">
			<?php if (!isset($_GET['ajax'])) { ?>
			
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
			<?php } ?>
		</span>
	</div>
</section>
<!-- END: wdg_alineacion_field_01 -->
<?
// footer
require_once("../global/footer.php");
?>
