<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
 <!-- BEGIN: nav_header_01 -->
    
    <!--[if lt IE 9]>
        <div id="noexplore">Para una mejor experiencia, por favor actualiza tu navegador. <a href="#" class="closepopalert" onclick="document.getElementById('noexplore').style.display = 'none';">x</a></div>
    <![endif]-->
    <header class="nav_header_01" data-enhance="false">
        <div class="topnav">
            <div class="inner">
                <a href="#menu" class="menu">
		            <span>Menú Principal</span>
		        </a>
                <a class="televisa deportes" href="#" title="Link Decription"><span class="mobile-logo"></span><span>Televisa Deportes</span></a>
                <!-- 
                switch logos:
                Noticieros <a class="televisa noticieros" href="#" title="Link Decription"><span>Televisa Noticieros</span></a>
                Rest <a class="televisa" href="#" title="Link Decription"><span>Televisa Radio</span></a>
                 -->
                <span class="date">Lunes 15 Oct, 18:23</span>
                <form action="" method="get" class="site_search">
                    <button class="search_submit" type="submit">
                       <i class="tvsa-search"></i>
                    </button>
                    <input class="search_term" id="search_term" type="text" name="q" value="" placeholder="Ingresa tu búsqueda" />
                </form>
                <nav>
                    <ul role="menu">
                        <li role="menuitem"><a href="http://www.televisa.com" title="Link Description" data-collapsable="noticieros" class="noticieros">Noticieros</a></li><li class="active" role="menuitem"><a href="http://www.televisa.com" title="Link Description" data-collapsable="deportes" class="deportes">Deportes</a></li><li role="menuitem"><a href="http://www.televisa.com" title="Link Description" data-collapsable="entretenimiento" class="entretenimiento">Entretenimiento</a></li><li role="menuitem"><a href="http://www.televisa.com" title="Link Description" data-collapsable="estilo-de-vida" class="estilo-de-vida">Estilo de Vida</a></li><li role="menuitem"><a href="http://www.televisa.com" title="Link Description" data-collapsable="television" class="television">Televisión</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="collapsable-verticals" style="display:none;">
            <div class="inner">
            
                <div class="noticieros collapsable-content">
                    <div class="collapsable-content-inner">
                        <strong class="maintitle tn">Noticias <i class="tvsa-double-caret-right"></i></strong>
                        <div class="categories">
                            <em class="sectiontitle tn">Categorías</em>
                            <ul>
                                <li><a href="http://www.televisa.com">México</a></li>
                                <li><a href="http://www.televisa.com">Internacional</a></li>
                                <li><a href="http://www.televisa.com">Distrito Federal</a></li>
                                <li><a href="http://www.televisa.com">Regiones</a></li>
                                <li><a href="http://www.televisa.com">Decisión 2012</a></li>
                                <li><a href="http://www.televisa.com">Economía</a></li>
                                <li><a href="http://www.televisa.com">Opinión</a></li>
                                <li><a href="http://www.televisa.com">Eventos</a></li>
                                <li class="separator">-</li>
                                <li><a href="http://www.televisa.com"><em>Foro TV</em></a></li>
                                <li><a href="http://www.televisa.com"><em>Clima</em></a></li>
                                <li><a href="http://www.televisa.com"><em>Opinión</em></a></li>
                                <li><a href="http://www.televisa.com"><em>Foros</em></a></li>
                            </ul>
                        </div>
                        <div class="featured">
                            <em class="sectiontitle tn">Destacados</em>
                            <div class="big-news">
                                <a href="#" class="item" title="Link Description">
                                    <span class="figure">
                                        <img src="http://lorempixel.com/300/209/people/5/" width="300" height="209" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <span class="likes"><i class="tvsa-like"></i> 4.216</span>
                                        <small class="tn topic">Miss México 2012</small>
                                        <strong class="title">Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                            </div>
                            <div class="small-news">
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/10/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tn topic">Nacional</small>
                                        <strong>Izan bandera a media asta en Plaza de las Tres Culturas.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/9/" alt="Image Description"><span class="sprite photo-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tn topic">Fotogalería</small>
                                        <strong>Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/8/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tn topic">Internacional</small>
                                        <strong>Grecia se paraliza en rechazo a los nuevos recortes del Gobierno.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/7/" alt="Image Description"><span class="sprite video-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tn topic">Videos</small>
                                        <strong>México se prepara para celebrar el día mundial del Circo.</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <hr class="clearboth" />
                        <div class="filtering">
                            <a href="http://www.televisa.com"><i class="tvsa-videocamera tn"></i></a><a href="http://www.televisa.com"><i class="tvsa-camera tn"></i></a><a href="http://www.televisa.com"><i class="tvsa-twitter twitter"></i></a><a href="http://www.televisa.com"><i class="tvsa-facebook facebook"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="deportes collapsable-content open">
                    <div class="collapsable-content-inner">
                        <strong class="maintitle td">Deportes <i class="tvsa-double-caret-right"></i></strong>
                        <div class="categories">
                            <em class="sectiontitle td">Categorías</em>
                            <ul>
                                <li><a href="http://www.televisa.com" title="Link Description">México</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Internacional</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Distrito Federal</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Regiones</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Decisión 2012</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Economía</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Opinión</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Eventos</a></li>
                                <li class="separator">-</li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foro TV</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Clima</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Opinión</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foros</em></a></li>
                            </ul>
                        </div>
                        <div class="featured">
                            <div class="small-news">
                                <em class="sectiontitle td">Destacados</em>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/10/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="td topic">Nacional</small>
                                        <strong>Izan bandera a media asta en Plaza de las Tres Culturas.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/9/" alt="Image Description"><span class="sprite photo-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="td topic">Fotogalería</small>
                                        <strong>Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/8/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="td topic">Internacional</small>
                                        <strong>Grecia se paraliza en rechazo a los nuevos recortes del Gobierno.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/7/" alt="Image Description"><span class="sprite video-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="td topic">Videos</small>
                                        <strong>México se prepara para celebrar el día mundial del Circo.</strong>
                                    </span>
                                </a>
                            </div>
                            
                            <div class="mxm">
                                <em class="sectiontitle td">Minuto x Minuto</em>
                                <table class="mxmtable">
                                    <tbody>
                                        <tr>
                                            <td class="time nav_header_01_sectcolor">1T&nbsp;27”</td>
                                            <td class="nav_header_01_name">Spartak Moscú - Benfica <i class="tvsa-camera td"></i></td>
                                            <td class="result nav_header_01_sectcolor">2&nbsp;·&nbsp;1</td>
                                        </tr>
                                        <tr>
    		                                <td class="time nav_header_01_sectcolor">1T&nbsp;14”</td>
    		                                <td class="nav_header_01_name">Manchester Utd - Braga</td>
    		                                <td class="result nav_header_01_sectcolor">0&nbsp;·&nbsp;1</td>
    		                            </tr>
    		                            <tr>
    		                                <td class="time nav_header_01_sectcolor">2T&nbsp;14”</td>
    		                                <td class="nav_header_01_name">Barcelona - Celtic <i class="tvsa-videocamera td"></i></td>
    		                                <td class="result nav_header_01_sectcolor">3&nbsp;·&nbsp;1</td>
    		                            </tr>
    		                            <tr>
    		                                <td class="time nav_header_01_sectcolor">Fin</td>
    		                                <td class="nav_header_01_name">FC BATE - Valencia CF</td>
    		                                <td class="result nav_header_01_sectcolor">1&nbsp;·&nbsp;1</td>
    		                            </tr>
    		                            <tr class="soon">
    		                                <td class="time nav_header_01_sectcolor">14:30</td>
    		                                <td class="nav_header_01_name">Spartak Moscú - Benfica</td>
    		                                <td class="result nav_header_01_sectcolor">-&nbsp;·&nbsp;-</td>
    		                            </tr>
    		                            <tr class="soon">
    		                                <td class="time nav_header_01_sectcolor">19:00</td>
    		                                <td class="nav_header_01_name">Manchester Utd - Braga</td>
    		                                <td class="result nav_header_01_sectcolor">-&nbsp;·&nbsp;-</td>
    		                            </tr>
    		                            <tr class="soon">
    		                                <td class="time nav_header_01_sectcolor">16/10</td>
    		                                <td class="nav_header_01_name">Barcelona - Celtic</td>
    		                                <td class="result nav_header_01_sectcolor">-&nbsp;·&nbsp;-</td>
    		                            </tr>
    	                            </tbody>
    	                        </table>
    	                    </div>
    	                    
                        </div>
                        <hr class="clearboth"/>
                        <div class="filtering">
                            <a href="http://www.televisa.com"><i class="tvsa-videocamera td"></i></a><a href="http://www.televisa.com"><i class="tvsa-camera td"></i></a><a href="http://www.televisa.com"><i class="tvsa-twitter twitter"></i></a><a href="http://www.televisa.com"><i class="tvsa-facebook facebook"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="entretenimiento collapsable-content">
                    <div class="collapsable-content-inner">
                        <strong class="maintitle te">Entretenimiento <i class="tvsa-double-caret-right"></i></strong>
                        <div class="categories">
                            <em class="sectiontitle te">Categorías</em>
                            <ul>
                                <li><a href="http://www.televisa.com" title="Link Description">México</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Internacional</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Distrito Federal</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Regiones</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Decisión 2012</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Economía</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Opinión</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Eventos</a></li>
                                <li class="separator">-</li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foro TV</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Clima</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Opinión</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foros</em></a></li>
                            </ul>
                        </div>
                        <div class="featured">
                            <em class="sectiontitle te">Destacados</em>
                            <div class="big-news">
                                <a href="#" class="item" title="Link Description">
                                    <span class="figure">
                                        <img src="http://lorempixel.com/300/209/people/5/" width="300" height="209" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <span class="likes"><i class="tvsa-like"></i> 4.216</span>
                                        <small class="te topic">Miss México 2012</small>
                                        <strong class="title">Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                            </div>
                            <div class="small-news">
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/10/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="te topic">Nacional</small>
                                        <strong>Izan bandera a media asta en Plaza de las Tres Culturas.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/9/" alt="Image Description"><span class="sprite photo-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="te topic">Fotogalería</small>
                                        <strong>Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/8/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="te topic">Internacional</small>
                                        <strong>Grecia se paraliza en rechazo a los nuevos recortes del Gobierno.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/7/" alt="Image Description"><span class="sprite video-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="te topic">Videos</small>
                                        <strong>México se prepara para celebrar el día mundial del Circo.</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <hr class="clearboth" />
                        <div class="filtering">
                            <a href="http://www.televisa.com"><i class="tvsa-videocamera te"></i></a><a href="http://www.televisa.com"><i class="tvsa-camera te"></i></a><a href="http://www.televisa.com"><i class="tvsa-twitter twitter"></i></a><a href="http://www.televisa.com"><i class="tvsa-facebook facebook"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="estilo-de-vida collapsable-content">
                    <div class="collapsable-content-inner">
                        <strong class="maintitle tl">Estilo de vida <i class="tvsa-double-caret-right"></i></strong>
                        <div class="categories">
                            <em class="sectiontitle tl">Categorías</em>
                            <ul>
                                <li><a href="http://www.televisa.com" title="Link Description">México</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Internacional</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Distrito Federal</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Regiones</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Decisión 2012</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Economía</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Opinión</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Eventos</a></li>
                                <li class="separator">-</li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foro TV</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Clima</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Opinión</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foros</em></a></li>
                            </ul>
                        </div>
                        <div class="featured">
                            <em class="sectiontitle tl">Destacados</em>
                            <div class="big-news">
                                <a href="#" class="item" title="Link Description">
                                    <span class="figure">
                                        <img src="http://lorempixel.com/300/209/people/5/" width="300" height="209" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <span class="likes"><i class="tvsa-like"></i> 4.216</span>
                                        <small class="tl topic">Miss México 2012</small>
                                        <strong class="title">Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                            </div>
                            <div class="small-news">
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/10/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tl topic">Nacional</small>
                                        <strong>Izan bandera a media asta en Plaza de las Tres Culturas.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/9/" alt="Image Description"><span class="sprite photo-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tl topic">Fotogalería</small>
                                        <strong>Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/8/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tl topic">Internacional</small>
                                        <strong>Grecia se paraliza en rechazo a los nuevos recortes del Gobierno.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/7/" alt="Image Description"><span class="sprite video-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tl topic">Videos</small>
                                        <strong>México se prepara para celebrar el día mundial del Circo.</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <hr class="clearboth" />
                        <div class="filtering">
                            <a href="http://www.televisa.com"><i class="tvsa-videocamera tl"></i></a><a href="http://www.televisa.com"><i class="tvsa-camera tl"></i></a><a href="http://www.televisa.com"><i class="tvsa-twitter twitter"></i></a><a href="http://www.televisa.com"><i class="tvsa-facebook facebook"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="television collapsable-content">
                    <div class="collapsable-content-inner">
                        <strong class="maintitle tt">Television <i class="tvsa-double-caret-right"></i></strong>
                        <div class="categories">
                            <em class="sectiontitle tt">Categorías</em>
                            <ul>
                                <li><a href="http://www.televisa.com" title="Link Description">México</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Internacional</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Distrito Federal</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Regiones</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Decisión 2012</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Economía</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Opinión</a></li>
                                <li><a href="http://www.televisa.com" title="Link Description">Eventos</a></li>
                                <li class="separator">-</li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foro TV</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Clima</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Opinión</em></a></li>
                                <li><a href="http://www.televisa.com" title="Link Description"><em>Foros</em></a></li>
                            </ul>
                        </div>
                        <div class="featured">
                            <em class="sectiontitle tt">Destacados</em>
                            <div class="big-news">
                                <a href="#" class="item" title="Link Description">
                                    <span class="figure">
                                        <img src="http://lorempixel.com/300/209/people/5/" width="300" height="209" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <span class="likes"><i class="tvsa-like"></i> 4.216</span>
                                        <small class="tt topic">Miss México 2012</small>
                                        <strong class="title">Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                            </div>
                            <div class="small-news">
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/10/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tt topic">Nacional</small>
                                        <strong>Izan bandera a media asta en Plaza de las Tres Culturas.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/9/" alt="Image Description"><span class="sprite photo-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tt topic">Fotogalería</small>
                                        <strong>Conoce a la ganadora de la competencia Miss México 2012.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/8/" alt="Image Description">
                                    </span>
                                    <span class="figcaption">
                                        <small class="tt topic">Internacional</small>
                                        <strong>Grecia se paraliza en rechazo a los nuevos recortes del Gobierno.</strong>
                                    </span>
                                </a>
                                <a href="http://www.televisa.com" class="item" title="Link Description">
                                    <span class="figure">
                                        <img width="84" height="67" src="http://lorempixel.com/84/67/people/7/" alt="Image Description"><span class="sprite video-corner"></span>
                                    </span>
                                    <span class="figcaption">
                                        <small class="tt topic">Videos</small>
                                        <strong>México se prepara para celebrar el día mundial del Circo.</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <hr class="clearboth" />
                        <div class="filtering">
                            <a href="http://www.televisa.com"><i class="tvsa-videocamera tt"></i></a><a href="http://www.televisa.com"><i class="tvsa-camera tt"></i></a><a href="http://www.televisa.com"><i class="tvsa-twitter twitter"></i></a><a href="http://www.televisa.com"><i class="tvsa-facebook facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="title">
            <div class="inner">
               <strong>Deportes <a class="arrow" href="#"><i class="tvsa-caret-down"></i></a></strong>
              </div>
        </div>
        <div class="mobilenav">
        	<nav>
                   <ul>
                       <li class="station"><a href="#" title="Link Descrition"><span class="vivafut"></span></a></li>
                       <li class="station"><a href="#" data-more="tdtv" title="Link Descrition"><span class="tdtv"></span></a></li>
                       <li class="station"><a href="#" data-more="tdn" title="Link Descrition"><span class="tdn"></span></a></li>
                       <li class="social"><a href="#" title="Link Descrition"><i class="tvsa-camera td"></i></a></li>
                       <li class="social"><a href="#" title="Link Descrition"><i class="tvsa-twitter twitter"></i></a></li>
                       <li class="social"><a href="#" title="Link Descrition"><i class="tvsa-facebook facebook"></i></a></li>
                   </ul>
               </nav>
        </div>
        <div class="mainnav">
            <div class="inner">
               <nav class="main">
                   <ul>
                       <li><a href="#home" title="Link Descrition"><i class="tvsa-home td"></i></a></li><li><!-- toggle collapsable with huge amount of links & sections --><a data-more="futbol" href="#" title="Link Descrition">Futbol <i class="tvsa-caret-down"></i></a></li><li><!-- direct link to box section --><a data-more="boxeo" href="#boxeo" title="Link Descrition">Boxeo</a></li><li><a data-more="beisbol" href="#basebol" title="Link Descrition">Beisbol</a></li><li><a href="#nfl" title="Link Descrition">NFL</a></li><li class="mas-deportes"><a href="#" title="Link Descrition">Más Deportes <i class="tvsa-caret-down"></i></a><ul class="dropdown"><li><a href="#">Minigolf</a></li><li><a href="#">Paralympics</a></li><li><a href="#">Formula Chilango</a></li><li><a href="#">Futbol de Mujeres</a></li><li><a href="#">Minigolf</a></li><li class="separator"></li><li><a href="#">Paralympics</a></li><li><a href="#">Formula Chilango</a></li><li><a href="#">Futbol de Mujeres</a></li></ul></li>
                   </ul>
               </nav>
               
               <nav class="social">
                   <a href="#" class="toggle"><span><i class="tvsa-double-caret-down"></i></span></a>
                   <a href="#" class="vivafut" title="Link Descrition"><span class="vivafut"></span></a>
                   <ul>
                       <li class="station"><a href="#" title="Link Descrition"><span class="vivafut"></span></a></li><li class="station"><a href="#" title="Link Descrition"><span class="nba"></span></a></li><li class="station"><a href="#" data-more="tdtv" title="Link Descrition"><span class="tdtv"></span></a></li><li class="station"><a href="#" data-more="tdn" title="Link Descrition"><span class="tdn"></span></a></li><li class="social"><a href="#" title="Link Descrition"><i class="tvsa-camera td"></i></a></li><li class="social"><a href="#" title="Link Descrition"><i class="tvsa-twitter twitter"></i></a></li><li class="social"><a href="#" title="Link Descrition"><i class="tvsa-facebook facebook"></i></a></li>
                   </ul>
               </nav>
            </div>
        </div>
        <div class="collapsable-mainnav" style="display:none;">
            <div class="futbol dropdown-content">
                <div class="inner">
                    <nav class="tabs">
                        <ul>
                            <li class="active"><a data-tab="mexico" href="#" title="Link Description">Futbol Méxicano</a></li><li><a data-tab="international" href="#" title="Link Description">Futbol Internacional</a></li>
                        </ul>
                    </nav>
                    <div data-tab="mexico" class="row maintab">
                        <div class="span3">
                            <ul class="subtabs">
                                <li><a href="#" title="Link Description" data-subtab="futbol-mexicano">Futbol Méxicano <i class="tvsa-double-caret-right"></i></a></li>
                                <li class="separator"></li>
                                <li class="active"><a href="#" title="Link Description" data-subtab="liga-mx-clausura-13">Liga Mx Clausura ‘13</a></li>
                                <li><a href="#" title="Link Description" data-subtab="seleccion-mexicana">Selección Mexicana</a></li>
                                <li><a href="#" title="Link Description" data-subtab="ganagol">Ganagol</a></li>
                                <li><a href="#" title="Link Description" data-subtab="equipos">Equipos</a></li>
                            </ul>
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="futbol-mexicano" style="display:none;">
                            other tab
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="liga-mx-clausura-13">
                            <div class="row-fluid">
                                <div class="span4">
                                    <ul>
                                        <li><a href="#" title="Link Description">Liguilla</a></li>
                                        <li><a href="#" title="Link Description">Video</a></li>
                                        <li><a href="#" title="Link Description">Resultados</a></li>
                                        <li><a href="#" title="Link Description">Calendario</a></li>
                                        <li><a href="#" title="Link Description">Clasificación</a></li>
                                        <li><a href="#" title="Link Description">Tabla Descenso</a></li>
                                    </ul>
                                </div>
                                <div class="span4">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span4">
                                    <p>Más contenido destacado...</p>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.<br /><br /></p>
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="equipos" style="display:none;">
                            other tab
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="seleccion-mexicana" style="display:none;">
                            other tab
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="ganagol" style="display:none;">
                            <div class="row-fluid">
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Ganagol Liga</a></li>
                                        <li><a href="#" title="Link Description">Ganagol</a></li>
                                        <li><a href="#" title="Link Description">Ganagol Resultados</a></li>
                                        <li><a href="#" title="Link Description">Calendario</a></li>
                                        <li><a href="#" title="Link Description">Clasificación</a></li>
                                        <li><a href="#" title="Link Description">Tabla Descenso</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3 hide-tablet">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div data-tab="international" class="row maintab" style="display:none;">
                        <div class="span3">
                            <ul class="subtabs">
                                <li><a href="#" title="Link Description" data-subtab="different">A different subnav <i class="tvsa-double-caret-right"></i></a></li>
                                <li class="separator"></li>
                                <li class="active"><a href="#" title="Link Description" data-subtab="liga-1">Liga 1</a></li>
                                <li><a href="#" title="Link Description" data-subtab="liga-2">Liga 2</a></li>
                                <li><a href="#" title="Link Description" data-subtab="liga-3">Liga 3</a></li>
                            </ul>
                        </div>
                        <div class="span8 offset1 subtab" data-subtab="different">
                            <div class="row-fluid">
                                <div class="span4">
                                    <ul>
                                         <li><a href="#">List of links</a></li>
                                         <li><a href="#">List of links</a></li>
                                         <li><a href="#">List of links</a></li>
                                    </ul>
                                </div>
                                <div class="span8">
                                    <p>Some more stuff here...</p>
                                    <p>Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. Lorem ipsum dolor sit amet adhit antispicet. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tdtv dropdown-content">
                tdtv
            </div>
            <div class="tdn dropdown-content">
                <div class="inner">
					<a href="#">TDN <i class="tvsa-double-caret-right"></i></a>
                    <div data-tab="mexico" class="row maintab">
                        <div class="span3">
                            <ul class="subtabs">
                                <li class="active"><a href="#" title="Link Description" data-subtab="tdn-home">Inicio</a></li>
								<!-- <li class="separator"></li> -->
                                <li><a href="#" title="Link Description" data-subtab="tdn-quienes">Quienes Somos</a></li>
                                <li><a href="#" title="Link Description" data-subtab="seleccion-mexicana">TDW</a></li>
                                <li><a href="#" title="Link Description" data-subtab="ganagol">Podcasts</a></li>
                                <li><a href="#" title="Link Description" data-subtab="equipos">Programación</a></li>
                                <li><a href="#" title="Link Description" data-subtab="equipos">Opinión Expertos</a></li>
                            </ul>
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="tdn-home">
                            <div class="row-fluid">
                                <div class="span6">
                                    <ul>
                                        <li>
                                        	<a href="#" title="Link Description" class="featured">
                                        		<img class="featured" src="http://placehold.it/85x67" />
                                        		<span class="topic">Liguilla</span>
                                        		<span class="desc">Los dos principales elementos son el humor y el deporte</span>
                                        	</a>
                                       	</li>
                                        <li>
                                        	<a href="#" title="Link Description" class="featured">
                                        		<img class="featured" src="http://placehold.it/85x67" />
                                        		<span class="topic">Liguilla</span>
                                        		<span class="desc">Los dos principales elementos son el humor y el deporte</span>
                                        	</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="span6 desktoponly">
                                    <ul>
                                        <li>
                                        	<a href="#" title="Link Description" class="featured">
                                        		<img class="featured" src="http://placehold.it/85x67" />
                                        		<span class="topic">Liguilla</span>
                                        		<span class="desc">Los dos principales elementos son el humor y el deporte</span>
                                        	</a>
                                        </li>
                                        <li>
                                        	<a href="#" title="Link Description" class="featured">
                                        		<img class="featured" src="http://placehold.it/85x67" />
                                        		<span class="topic">Liguilla</span>
                                        		<span class="desc">Los dos principales elementos son el humor y el deporte</span>
                                        	</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="tdn-quienes" style="display:none;">
                            <div class="row-fluid">
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Ganagol Liga</a></li>
                                        <li><a href="#" title="Link Description">Ganagol</a></li>
                                        <li><a href="#" title="Link Description">Ganagol Resultados</a></li>
                                        <li><a href="#" title="Link Description">Calendario</a></li>
                                        <li><a href="#" title="Link Description">Clasificación</a></li>
                                        <li><a href="#" title="Link Description">Tabla Descenso</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3 hide-tablet">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="equipos" style="display:none;">
                            other tab
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="seleccion-mexicana" style="display:none;">
                            other tab
                        </div>
                        
                        <div class="span8 offset1 subtab" data-subtab="ganagol" style="display:none;">
                            <div class="row-fluid">
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Ganagol Liga</a></li>
                                        <li><a href="#" title="Link Description">Ganagol</a></li>
                                        <li><a href="#" title="Link Description">Ganagol Resultados</a></li>
                                        <li><a href="#" title="Link Description">Calendario</a></li>
                                        <li><a href="#" title="Link Description">Clasificación</a></li>
                                        <li><a href="#" title="Link Description">Tabla Descenso</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                                <div class="span3 hide-tablet">
                                    <ul>
                                        <li><a href="#" title="Link Description">Goleo Equipos</a></li>
                                        <li><a href="#" title="Link Description">Goleo Individual</a></li>
                                        <li><a href="#" title="Link Description">Noticias</a></li>
                                        <li><a href="#" title="Link Description">Copa MX A12</a></li>
                                        <li><a href="#" title="Link Description">Ascenso MX</a></li>
                                        <li><a href="#" title="Link Description">Apertura 2012</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
   
            </div>
        </div>
    </header>
    <!-- END: nav_header_01 -->
<?
// footer
require_once("../global/footer.php");
?>