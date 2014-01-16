<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>      

<!-- BEGIN: wdg_opinion_01 -->
<div class="wdg_match_summary_01">

    <div class="row_title">Resumen de Acciones</div>
    
    <div class="row_headers">
    	<div class="cell1">LOCAL</div>
        <div class="cell2 dotted-left">ACCIONES</div>
        <div class="cell1 dotted-left">VISITANTE</div>
    </div>
    
    <div class="row_summary">
    	<div class="cell1">0</div>
        <div class="cell2">Tarjetas Amarillas</div>
        <div class="cell1">2</div>
    </div>
    
    <div class="row_summary">
    	<div class="cell1">0</div>
        <div class="cell2">Tarjetas Rojas</div>
        <div class="cell1">1</div>
    </div>
    
    <div class="row_summary">
    	<div class="cell1">7</div>
        <div class="cell2">Tiros de esquina</div>
        <div class="cell1">12</div>
    </div>
    
    <div class="row_summary">
    	<div class="cell1">20</div>
        <div class="cell2">Tiros a gol</div>
        <div class="cell1">32</div>
    </div>
    
</div>
<!-- END: wdg_opinion_01 -->

<?
// footer
require_once("../global/footer.php");
?>
