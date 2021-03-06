<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_mobile.css" media="screen">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../str_pleca_01/css/str_pleca_01.css" media="screen and (min-width: 60em)">

<div class="wdg_carresult_01">
    <!-- BEGIN: str_pleca_01 -->
    <div class="str_pleca_01">
        <div class="str_pleca_01_title">
            <h3 class="background-color-pleca1">
                <a href="http://www.televisa.com" title="Link Description" class="textcolor-title3">
                    Resultados
                    <span class="str_pleca_01_arrowa selected"></span>
                    <span class="str_pleca_01_arrowb"></span>
                </a>
            </h3>
        </div>
    </div>
    <div class="filterResultado">
        <div class="lineaResultado">
            <h3>Serial</h3>
            <div class="filter">
                <div class="wdg_carresult_012_dropdown drop1">
                    <div class="wdg_carresult_012_dropdowncontent">
                        <p>Formula 1</p>
                        <span class="tvsa-caret-down"></span>
                    </div>
                    <div class="wdg_carresult_012_listcontainer">
                        <ul class="wdg_carresult_012_dropdownlist">
                            <li><p>Formula 1</p></li>
                            <li><p>AGP</p></li>
                            <li><p>NASCAR</p></li>
                            <li><p>TEAM Racing</p></li>
                            <li><p>A2</p></li>
                            <li><p>A4</p></li>
                            <li><p>A7</p></li>
                        </ul>  
                    </div>
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
        <div class="lineaResultado">
            <h3>Estadistica</h3>
            <div class="filter">
                <div class="wdg_carresult_01_dropdown drop2">
                    <div class="wdg_carresult_01_dropdowncontent">
                        <p>Calendario</p>
                        <span class="tvsa-caret-down"></span>
                    </div>
                    <div class="wdg_carresult_01_listcontainer">
                        <ul class="wdg_carresult_01_dropdownlist">
                            <li><p>Fecha 1</p></li>
                            <li><p>Fecha 3</p></li>
                            <li><p>Fecha 3</p></li>
                            <li><p>Fecha 4</p></li>
                            <li><p>Fecha 5</p></li>
                            <li><p>Fecha 6</p></li>
                            <li><p>Fecha 7</p></li>
                            <li><p>Fecha 8</p></li>
                        </ul>  
                    </div>
                </div>            
            </div>
            <div style="clear: both;"></div>
        </div>
        <div style="clear: both;"></div>
    </div>
    <!-- END: str_pleca_01 -->
    <div class="color2 line_down_solid">
        <div class="fecha head_component transformUpper">Fecha</div>
        <div class="carrera head_component transformUpper">Carrera</div>
        <div class="circuito head_component transformUpper">Circuito</div>
        <div class="ganador head_component transformUpper">Ganador</div>
    </div>         
    <div class="scroll">
        <div class="scroll2" id="deg_dos">
            <ul>
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>

             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
             <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color dotted-bottom">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
            
            <li class="color">
                <div class="fecha  fechaDesplegada content_beige transformUpper line_right_dashed">
                    17.Mar 2013            
                </div>
                <div class="separator dotted-left"></div>
                <div class="carrera head_component line_right_dashed">Gran Premio de Austria</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component line_right_dashed">Melbourne</div>
                <div class="separator dotted-left"></div>
                <div class="circuito head_component">Kimi Raikkonen</div>
            </li>
          </ul>
        </div>
    </div>
  <!-- <div class="arrow_buttons"> 
    <a class="prev" title="Link Description" href="http://www.televisa.com"><span class="sprite dropdown-white"></span></a> 
    <a class="next" title="Link Description" href="http://www.televisa.com"><span class="sprite dropdown-white"></span></a>  
  </div> -->
  <div class="degraded"></div>
</div>
<?
// footer
require_once("../global/footer.php");
?>
