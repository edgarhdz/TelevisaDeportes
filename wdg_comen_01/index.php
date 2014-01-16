<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>

<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_mobile.css" media="screen">

<!-- BEGIN: wdg_comen_01 -->
<div class="wdg_comen_01" data-enhance="false">
    <div class="wdg_comen_01_form">
        <form action="?" method="post" id="commentform">
            <label for="name" class="not_action">Nombre</label>
            <input class="text" id="name" name="name" placeholder="Ingresa tu nombre" type="text" />
            <label for="email" class="not_action">Tu correo electrónico valido</label>
            <input class="text" id="email" name="email" placeholder="Ingresa tu correo electrónico" type="email" />
            <label for="comment" class="not_action">Comentario</label>
            <div class="wdg_comen_fb_tw"> Postea tu comentario en:
            	<div class="socialMedia">            
	                <input type="checkbox" name="wdg_comen_radio"  value="1" class="wdg_comen_radio">
	                <div class="iconFacebook">					
  						<span class="colorIconFacebook"></span>
	                	<i class="tvsa-facebook facebook"></i>
  					</div>	         
	                <input type="checkbox" name="wdg_comen_radio"  value="1" class="wdg_comen_radio">
	                <i class="tvsa-twitter twitter"></i> 
            	</div>
            </div>
            <textarea class="comentArea" name="comment" id="comment" rows="3"></textarea>
            <div class="wdg_comen_aviso"> Aviso: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type and scrambled it to make a type specimen book 
            </div>
            <div class="wdg_comen_line">
                <input type="button" name="wdg_comen_btn" value="Comentar" class="wdg_comen_btn">
            </div>
        </form>
    </div>
    
    <!-- Starts comments details -->
    <ul class="wdg_comen_01_comments">
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>                
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
        <li>
            <div class="wdg_comen_01_img"><img src="http://lorempixel.com/50/50" alt="Image Description" /></div>
            <div  class="wdg_comen_01_comment">
                <p><span class="media_user">Televisa Musica</span><span class="comment_time">escribió el 7/10/13 a las 13:01</span></p>
                <p>Carlos Fuentes Escritor de cuento, novela, guión y ensayo, embajador e intelectual de los más grandes mexicanos http://tvi.ly/LEaLar</p>
                
                <!-- <div class="answer"><a href="#" class="answerlnk">responder</a></div>  -->
            </div>
        </li>
    </ul>
    <div class="degraded"></div>
       <div class="nav_paginator_01 dotted-top">
        <ul>
            <li class="dotted-right"><a href="#left" title ="Link Description"><i class="tvsa-double-caret-left"></i></a></li>
            <li ><a href="#">1</a></li>
            <li><span class="selected">2</span></li>
            <li><a href="#">3</a></li>
            <li>...</li>
            <li><a href="#">15</a></li>
            <li class="dotted-left"><a href="#right" title ="Link Description"><i class="tvsa-double-caret-right"></i></a></li>
        </ul>
    </div>
</div>
<!-- END: wdg_comen_01-->

<?
// footer
require_once("../global/footer.php");
?>
