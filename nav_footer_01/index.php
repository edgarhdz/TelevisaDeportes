<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<footer class="nav_footer_01" data-enhance="false">
        <nav class="desktopNav"> 
            <ul>
                <li class="noticieros"><a data-tab="noticieros" title="link title" href="#">Noticias</a></li>
                <li class="deportes active"><a data-tab="deportes" title="link title" href="#">Deportes</a></li>
                <li class="entretenimiento"><a data-tab="entretenimiento" title="link title" href="#">Entretenimiento</a></li>
                <li class="estilo-de-vida"><a data-tab="estilo-de-vida" title="link title" href="#">Estilo de vida</a></li>
                <li class="television"><a data-tab="television" title="link title" href="#">Televisión</a></li>
            </ul>
        </nav>
        <div class="white-row">
            <div class="wrapper"> 
                <ul class="items-white-row">
                    <li><a href="#" title="Link Description">Futbol</a></li>
                    <li><a href="#" title="Link Description">Box</a></li>
                    <li><a href="#" title="Link Description">NFL</a></li>
                    <li><a href="#" title="Link Description">NBA</a></li>
                    <li><a href="#" title="Link Description">F1</a></li>
                    <li><a href="#" title="Link Description">Opinión</a></li>
                    <li><a href="#" title="Link Description">Eventos</a></li>
                    <li>-</li>
                    <li><a href="#" title="Link Description">TDN</a></li>
                    <li><a href="#" title="Link Description">TD.tv</a></li>
                    <li><a href="#" title="Link Description">FutFANtastico</a></li>
                    <li><a href="#" title="Link Description">Cloroformo</a></li>
                </ul>
                <div class="column redes">
                    <ul class="twitter">
                        <li class="icon-social">
                            <a href="#" title="Link Description">
	                            <span class="icon">
	                                <i class="tvsa-twitter"></i>
	                            </span> Twitter
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                                <li><a href="#" title="Link Description">TDN</a></li>
                                <li><a href="#" title="Link Description">Televisa Futbol</a></li>
                                <li><a href="#" title="Link Description">Más Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="facebook">
                        <li class="icon-social">
                            <a href="#" title="Link Description">
                                <span class="icon">
                                    <i class="tvsa-facebook"></i>
                                </span> Facebook
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column blogs">
                    <ul class="forums">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Description">
	                            <span class="icon">
	                                <i class="tvsa-comments"></i>
	                            </span> Foros
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Amar a la Camiseta</a></li>
                                <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                <li><a href="#" title="Link Description">Liga de Ascenso</a></li>
                                <li><a href="#" title="Link Description">Historia de Futbol</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="apps">
                        <li class="icon-social">
                            <a href="#" title="Link Description">
                                <span class="icon">
                                    <i class="tvsa-mobile"></i>
                                </span>Apps
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Televisa Videos</a></li>
                                <li><a href="#" title="Link Description">Minuto por Minuto</a></li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="blogs">
                        <li class="icon-social">
                            <a href="#" title="Link Description">
	                            <span class="icon">
	                                <i class="tvsa-feed"></i>
	                            </span>Blogs
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Mexicanos en Serie Mundial</a></li>
                                <li><a href="#" title="Link Description">Los 27 Goles</a></li>
                                <li><a href="#" title="Link Description">Carlos Loret de Mola</a></li>
                                <li><a href="#" title="Link Description">Adela Micha</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="podcast">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Description">
                                <span class="icon">
                                    <i class="tvsa-mic"></i>
                                </span>Podcasts
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                            	<li>-</li>
                                <li><a href="#" title="Link Description">Mexicanos en Serie Mundial</a></li>
                                <li><a href="#" title="Link Description">Los 27 Goles</a></li>
                                <li><a href="#" title="Link Description">Carlos Loret de Mola</a></li>
                                <li><a href="#" title="Link Description">Adela Micha</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column movil">
                    <ul class="videoPodcasts">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Desripiom">
	                            <span class="icon">
	                                <i class="tvsa-videocamera"></i>
	                            </span> Video Podcasts
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                                <li>-</li>
                                <li><a href="#" title="Link Description">Televisa Videos</a></li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="iphoneApps">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Desripiom">
                                <span class="icon">
                                    <i class="tvsa-mobile"></i>
                                </span> iPhone Apps
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                                <li>-</li>
                                <li><a href="#" title="Link Description">Televisa Videos</a></li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="ipadApps">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Desripiom">
                                <span class="icon">
                                    <i class="tvsa-mobile"></i>
                                </span> iPad Apps
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                                <li>-</li>
                                <li><a href="#" title="Link Description">Televisa Videos</a></li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="androidApps">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Desripiom">
                                <span class="icon">
                                    <i class="tvsa-mobile"></i>
                                </span> Android Apps
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">
                                <li>-</li>
                                <li><a href="#" title="Link Description">Televisa Videos</a></li>
                                <li><a href="#" title="Link Description">Televisa Deportes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="otherApps">
                        <li class="icon-social hide-mobile">
                            <a href="#" title="Link Desripiom">
                                <span class="icon">
                                    <i class="tvsa-mobile"></i>
                                </span> Otras Plataformas
                            </a>
                        </li>
                        <li>
                            <ul class="container-element-sec">

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <nav class="mobileNav">
            <ul>
                <li class="back"><a href="#" title="Link Description">Volver <i class="tvsa-caret-up"></i></a></li>
                <li class="news"><a href="#" title="Link Description">Noticias<i class="tvsa-caret-right"></i></a></li>
                <li class="sports"><a href="#" title="Link Description">Deportes<i class="tvsa-caret-right"></i></a></li>
                <li class="entertainment"><a href="#" title="Link Description">Entretenimiento<i class="tvsa-caret-right"></i></a></li>
                <li class="style"><a href="#" title="Link Description">Estilo de vida<i class="tvsa-caret-right"></i></a></li>
                <li class="tv"><a href="#" title="Link Description">Televisión<i class="tvsa-caret-right"></i></a></li> 
            </ul>
        </nav>
    </footer>
 </body>
</html>