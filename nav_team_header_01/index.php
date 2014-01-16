<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<div class="nav_team_header_01" data-enhance="false">
		<!--In the data-color attr you need to setup the link color-->
	 		<div class="link_color" data-color="#63C"></div><!-- END color -->
	<div class="fondo">
    	<div class="gradiente_head"></div>
    	<div class="degradado_head"></div>
            <div class="logo">
                <div class="texto textcolor-title3">Nombre Equipo dependiendo</div>
                <img src="http://placehold.it/108x68" alt="" />
            </div>
    </div>
    <div class="sombra"></div>
    <div class="nav_team_header_01_container">
        <div class="nav_team_header_01_right">
            <div class="nav_team_header_01_navcontainer">
                <div class="wdg_matchesresult_navarrowleft">
                    <a class="wdg_matchesresult_navleft" href="#left">
                        <span class="wdg_matchesresult_navlefticon">
                        	<i class="tvsa-double-caret-left"></i>
                        </span>
                    </a> 
                </div>
                <div class="box">
                    <div class="nav_team_header_01_nav">
                        <ul class="nav_team_header_01_theme">
                            <li class="border-bottom2"><a class="textcolor-title2" href=""><p>Estadísticas</p></a></li>
                            <li><a href=""><p>Torneo actual</p></a></li>
                            <li><a href=""><p>Plantel</p></a> </li>
                            <li><a href=""><p>Noticias</p></a></li>
                            <li><a href=""><p>Videos</p></a></li>
                        </ul>
                    </div>
                </div>
                <div class="wdg_matchesresult_navarrowright">
                    <a class="wdg_matchesresult_navright" href="#right">
                        <span class="wdg_matchesresult_navrighticon">
                        	<i class="tvsa-double-caret-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div> 
    		
<!-- END nav_team_header_01 -->
</div>
<?
// footer
require_once("../global/footer.php");
?>