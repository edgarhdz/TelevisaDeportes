<?php
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>   
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
<?
// footer
require_once("../global/footer.php");
?>
