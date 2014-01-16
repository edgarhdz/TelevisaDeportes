<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<!-- BEGIN: btn_podcast_02 -->
<div class="btn_podcast_02">
    <div class="btn_podcast_02_text">
    	<hr>
        <a href="#"><p>Copia el link y <span>p&eacute;galo en tu agregador</span> (ej. Juice o iTunes)</p></a>        
    </div>
    <div class="btn_podcast_02_line">
        
        <div class="btn_podcast_02_reader dotted-right">
            <div class="btn_podcast_02_readerimg">
                <a href="#">
                     <i class="tvsa-feed"></i>
                </a>
            </div>
            <div class="btn_podcast_02_itunesinput">
            	<div class="btn_podcast_02_btn">Agr&eacute;ganos a tu reader</div>                
            </div>
        </div>
        
        <div class="btn_podcast_02_itunes">
            <div class="btn_podcast_02_itunesimg">
                <a href="#">
                    <i class="tvsa-podcast"></i>
                </a> 
            </div>
            <div class="btn_podcast_02_itunesinput">
            	<div class="btn_podcast_02_btn">Suscr&iacute;bete v&iacute;a iTunes</div>                
            </div>
        </div>
        
    </div>
</div>
<!-- END: btn_podcast_02 -->
<?
// footer
require_once("../global/footer.php");
?>