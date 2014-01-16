<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../wdg_scroll_dropdown/css/wdg_scroll_dropdown.css" media="screen and (min-width: 960px)">

<link rel="stylesheet" href="../art_branch_01/css/art_branch_01_mobile.css" media="screen">
<link rel="stylesheet" href="../art_branch_01/css/art_branch_01_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../art_branch_01/css/art_branch_01.css" media="screen and (min-width: 960px)">

<div class="wdg_gmap_01">
	
	<!-- BEGIN: wdg_scroll_dropdown -->
	<div class="wdg_scroll_dropdown">
	    <div class="wdg_tennisresult_01_pleca background-color-pleca1">
	        <p class="textcolor-title3">Resultados</p>
	    </div>
	    <div class="wdg_scroll_list background-gradient-content2">
	        <p class="wdg_scroll_value"></p>  
	        <div class="wdg_tennisresult_01_click background-color-pleca1">
	            <span class="tvsa-caret-down"></span>
	        </div>
	        <div class="wdg_scroll_events">
	            <ul class="wdg_scroll_elements">
	                <li><p>ATP 1</p></li>
	                <li><p>ATP 2</p></li>
	                <li><p>ATP 3</p></li>
	                <li><p>ATP 4</p></li>
	                <li><p>ATP 5</p></li>
	                <li><p>ATP 6</p></li>
	                <li><p>ATP 7</p></li>
	                <li><p>ATP 8</p></li>
	                <li><p>ATP 9</p></li>
	                <li><p>ATP 10</p></li>
	                <li><p>ATP 11</p></li>
	                <li><p>ATP 12</p></li>
	            </ul>
	        </div>
	    </div>
	</div>
	<!-- END: wdg_scroll_dropdown -->
	
	<div class="wdg_gmap_01_margen"></div>
	
	<!-- BEGIN: art_branch_01 -->
	<div class="art_branch_01">
		<a href="#" title="Link description" data-enhance="false">Estadio Azul</a>
	</div>
	<!-- END: art_branch_01 -->
	
	<div class="wdg_gmap_01_margen"></div>
	
	
	<div id ="wdg_gmap_01_properties" class="wdg_gmap_01_properties" data-latitude="19.516048" data-longitude="-99.21959" data-zoom="17" data-map="k"></div>
		
</div>
<!-- END: wdg_gmap_01 -->
<?
// footer
require_once("../global/footer.php");
?>