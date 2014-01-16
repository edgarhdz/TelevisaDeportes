<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>


<!-- BEGIN: wdg_simbology_02 -->
<div class="wdg_simbology_02">
    <div class="alineacion_partido">
        <div class="title_simbologia">
            <span class="one"><span class="textcolor-title4">simbologia</span></span>
        </div>
        <div class="tabla_simbologia">
            <div class="icon_simbologia line_left">
                <strong>JJ</strong>
                <span class="textcolor-title4">Juegos Jugados</span>
            </div>
            <div class="icon_simbologia line_left nomostrar">
                <strong>JG</strong>
                <span class="textcolor-title4">Juegos Ganados</span>
            </div>
            <div class="icon_simbologia line_left ">
                <strong>JE</strong>
                <span class="textcolor-title4">Juegos Empatados</span>
            </div>
            <div class="icon_simbologia nomostrar">
                <strong>JP</strong>
                <span class="textcolor-title4">Juegos Perdidos</span>
            </div>
        </div>
        <div class="tabla_simbologia">
            <div class="icon_simbologia line_left">
                <strong>GF</strong>
                <span class="textcolor-title4">Goles a favor</span>
            </div>
            <div class="icon_simbologia line_left nomostrar">
                <strong>GC</strong>
                <span class="textcolor-title4">Goles en contra</span>
            </div>
            <div class="icon_simbologia line_left ">
                <strong>DIF</strong>
                <span class="textcolor-title4">Diferencia de goles</span>
            </div>
            <div class="icon_simbologia nomostrar">
                <strong>PTF</strong>
                <span class="textcolor-title4">Puntos</span>
            </div>
            <div style="clear:both;"></div>
        </div>
    </div>
    <div style="clear:both;"></div>
</div>
<!-- END: wdg_simbology_02 -->
<?
// footer
require_once("../global/footer.php");
?>