<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>

<!-- Obtener el estilo del componente "wdg_social_01" -->
<link rel="stylesheet" href="../wdg_social_01/css/wdg_social_01_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_social_01/css/wdg_social_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../wdg_social_01/css/wdg_social_01.css" media="screen and (min-width: 60em)">

<!-- BEGIN: vid_player_02 -->
<div class="vid_player_02" data-enhance="false">
    <div class="vid_player_02_image">
        <img src="http://lorempixel.com/people/948/533" alt="Image description" id="img_stage_01_IMG">
        <!-- BEGIN: Player -->
        <div id="theaterContainer" style="margin: 0px !important; display:none;">
            <div id="leftBarLink" class="theaterSideSpacer"></div>
            <div style="float:left">
                <div id="videoLink" style="border: 0pt none; padding: 0pt; position: absolute; z-index: 10001; display:none;"></div>
                <!-- Start of Brightcove Player -->
                <div id="contenedor" style="margin:0px !important;"></div>    
            </div>
            <div id="rightBarLink" class="theaterSideSpacer"></div>	
        </div>
        <div style="display:none;" id="companionBanner"></div>
        <!-- END: Player -->
    </div>
    <a href="javascript: void(0);" class="btn square">
    	<i class="tvsa-play" id="videobtn"></i> 
    </a>
    <a href="#" class="btn square">
        <i class="tvsa-expand" id="expandbtn"></i> 
    </a>
    <a href="#" class="btn square">
        <i class="tvsa-contract" id="contractbtn"></i> 
    </a>
    <div class="vid_player_02_whtbkg">         
        <p class="vid_player_02_black">Video Title</p>         
    </div> 
    <!-- BEGIN: Text -->
    <div class="overlay">
        <div id="vid_player_02_txts">
			<div class="txt1">
                <h3>Conoce los grande logros de Jenni Rivera</h3>
                <p class="introtxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="vid_player_02_txtdetail topspace">Duraci&oacute;n: 00:02:42</p>
                <p class="vid_player_02_txtdetail">Cap&iacute;tulo: 2872</p>
                <p class="vid_player_02_txtdetail">Fecha: 07/01/13</p>
            </div>
            <div class="content_text">                       
            <div class="txt2">
                <h3>Temas relacionados</h3>
                <h4>Nacional, Noticieros Televisa<br>
                Joaqu&iacute;n L&oacute;pez-D&oacute;riga, el Noticiero</h4>
            </div>            
            <div class="txt3 dotted-top">
                <!-- BEGIN: Widget Redes Sociales -->
                <div class="wdg_social_01">
                    <div id="widgetSocialShare"></div>
                </div>
                <!-- END: Widget Redes Sociales -->              
            </div>
            </div>
           <!--<script type="text/javascript" src="http://comentarios.esmas.com/js/communities.js"></script>-->       
    	</div>
    </div>
    <!-- END: Text -->
</div>
<?
// footer
require_once("../global/footer.php");
?>