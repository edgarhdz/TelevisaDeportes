<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>

<div class="wdg_player_comparison_01" data-enhance="false">
  <div class="opta-widget-container" id="opta-widget-idx-0" style="display: block;">
    <h2><span>Player Comparison</span><span class="opta-logo-white"></span></h2>
    <div class="comparison">
      <form id="players-to-compare">
        <fieldset>
          <legend><span>Seleccione jugadores para comparar</span></legend>
          <fieldset>
            <dl>
              <dt>Competición</dt>
              <dd>Primera División</dd>
              <dt>Equipo</dt>
              <dd class="team-1958">Chiapas F.C.</dd>
            </dl>
            <ul>
              <li>
                <label for="player_p1">Equipo</label>
                <select name="player_p1" id="player_p1">
                  <option value="">--Seleccione  un jugador--</option>
                  <option value="p53576">Édgar Adolfo Hernández (P)</option>
                  <option value="p60036">George Corral</option>
                  <option value="p59401">Miguel Martínez</option>
                  <option value="p53842">Omar Flores</option>
                  <option value="p53825">Elgabry Rangel</option>
                  <option value="p53556">Alan Zamora</option>
                  <option value="p57313">Jorge Rodriguez</option>
                  <option value="p53537">Luis Miguel Noriega</option>
                  <option value="p91976">Franco Arizala</option>
                  <option value="p43438">Jesús Castillo</option>
                  <option value="p20249">Luis Gabriel Rey</option>
                  <option value="p43398">Yasser Corona</option>
                  <option value="p120699">Kevin Gutierrez</option>
                  <option value="p53575">Fabián Villaseñor</option>
                  <option value="p120697">Leonardo Bedolla</option>
                  <option value="p120606">Jhon Córdoba</option>
                  <option value="p102481">Luis Ricardo Esqueda</option>
                  <option value="p43533"> </option>
                </select>
              </li>
            </ul>
          </fieldset>
          <fieldset class="compare2">
            <dl>
              <dt>Competición</dt>
              <dd>Primera División</dd>
              <dt>Equipo</dt>
              <dd class="team-1294">Tigres</dd>
            </dl>
            <ul>
              <li>
                <label for="player_p2">Equipo</label>
                <select name="player_p2" id="player_p2">
                  <option value="">--Seleccione  un jugador--</option>
                  <option value="p60016">Enrique Palos (P)</option>
                  <option value="p76029">Jorge Torres Nilo</option>
                  <option value="p53862">Hugo Ayala</option>
                  <option value="p52503">Juninho</option>
                  <option value="p53564">Fernando Navarro</option>
                  <option value="p14737">Damian Álvarez</option>
                  <option value="p53096">David Toledo</option>
                  <option value="p53791">Manuel Viniegra</option>
                  <option value="p28509">Lucas Lobos</option>
                  <option value="p53340">Elías Hernández</option>
                  <option value="p100987">Alan Pulido</option>
                  <option value="p41700">Jonathan Bornstein</option>
                  <option value="p53779">José Arturo Rivas</option>
                  <option value="p72084">Jorge Diaz de León</option>
                  <option value="p102451">Jesús Dueñas</option>
                  <option value="p13584">Edno</option>
                  <option value="p102450">Alberto Acosta</option>
                  <option value="p102373">Alonso Zamora</option>
                </select>
              </li>
            </ul>
          </fieldset>
        </fieldset>
      </form>
      <table id="playercompare-table-9">
        <colgroup>
        <col width="75px">
        <col width="auto">
        <col width="50%">
        <col width="auto">
        <col width="75px">
        </colgroup>
        <thead class="offscreen">
          <tr>
            <th colspan="2" class="player1"><span class="player"></span></th>
            <th class="hidden">Comparación</th>
            <th colspan="2" class="player2"><span class="player"></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="player1 image" rowspan="2">
            	<img onerror="$jqOpta.imgError(this)" src="http://omo.akamai.opta.net/image.php?custID=c6dafa935d33043bbcdec46c5b15cc7b&amp;sport=football&amp;entity=player&amp;description=1958&amp;dimensions=103x155&amp;id=" alt="Foto de ">
            </td>
            <td class="player1">-</td>
            <th scope="row">Posición</th>
            <td class="player2">-</td>
            <td class="player2 image" rowspan="2">
            	<img onerror="$jqOpta.imgError(this)" src="http://omo.akamai.opta.net/image.php?custID=c6dafa935d33043bbcdec46c5b15cc7b&amp;sport=football&amp;entity=player&amp;description=1294&amp;dimensions=103x155&amp;id=" alt="Foto de ">
            </td>
          </tr>
          <tr>
            <td class="player1">0</td>
            <th scope="row">Minutos jugados</th>
            <td class="player2">0</td>
          </tr>
        </tbody>
      </table>
      <div id="playercompare-container-9" class="tabs-container tabs-active">
        <ul class="tabs-nav clearfix">
          <li class="tabs-selected"><a href="#pcompare-general-9">General</a></li>
          <li><a href="#pcompare-discipline-9">Defensa y disciplina</a></li>
          <li><a href="#pcompare-attack-9">Ataque</a></li>
        </ul>
        <ul class="tabs-content clearfix">
          <li class="tabs-selected">
            <h3>General</h3>
            <div id="pcompare-general-9">
              <table>
                <colgroup>
                <col width="25%">
                <col width="50%">
                <col width="25%">
                </colgroup>
                <thead>
                  <tr>
                    <th class="player1"></th>
                    <th class="hidden">Comparación</th>
                    <th class="player2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Pases</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0%</td>
                    <th scope="row">Precisión en los pases</th>
                    <td class="player2">0%</td>
                  </tr>
                  <tr>
                    <td class="player1">0%</td>
                    <th scope="row">% Pases completados en campo contrario</th>
                    <td class="player2">0%</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Pases largos</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Pases cortos</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Enfrentamientos ganados</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Enfrentamientos perdidos</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Duelos aéreos ganados</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Duelos aéreos perdidos</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Recuperaciones</th>
                    <td class="player2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Defensa y disciplina</h3>
            <div id="pcompare-discipline-9">
              <table>
                <colgroup>
                <col width="25%">
                <col width="50%">
                <col width="25%">
                </colgroup>
                <thead>
                  <tr>
                    <th class="player1"></th>
                    <th class="hidden">Comparación</th>
                    <th class="player2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Entradas</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Despejes</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Bloqueados</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Intercepciones</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Faltas recibidas</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Faltas cometidas</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Tarjetas amarillas</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Tarjetas Rojas</th>
                    <td class="player2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Ataque</h3>
            <div id="pcompare-attack-9">
              <table>
                <colgroup>
                <col width="25%">
                <col width="50%">
                <col width="25%">
                </colgroup>
                <thead>
                  <tr>
                    <th class="player1"></th>
                    <th class="hidden">Comparación</th>
                    <th class="player2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Goles</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Total remates a portería</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Total remates fuera de portería</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Centros completados</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Centros fallados</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0%</td>
                    <th scope="row">% Centros completados</th>
                    <td class="player2">0%</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Asistencias</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Ocasiones Generadas</th>
                    <td class="player2">0</td>
                  </tr>
                  <tr>
                    <td class="player1">0</td>
                    <th scope="row">Fueras de juego</th>
                    <td class="player2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<?
// footer
require_once("../global/footer.php");
?>
