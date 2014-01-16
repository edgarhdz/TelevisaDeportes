<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/header.php");
?>
<div class="wdg_team_comparison_01" data-enhance="false">  
	<div class="opta-widget-container" id="opta-widget-idx-0" style="display: block;">
		<h2><span>Team Comparison</span><span class="opta-logo-white"></span></h2>
		<div class="comparison">
			<form id="players-to-compare">
				<fieldset>
					<legend><span>Select teams to compare</span></legend>
					<fieldset>
						<dl>
							<dt>Competition</dt>
							<dd>English Barclays Premier League</dd>
						</dl>
						<ul>
							<li>
								<label for="team_p1">Team</label>
								<select class="team_1" name="team_p1" id="team_p1" title="--Select team--">
									<option value="">--Select team--</option>
									<option value="t3">Arsenal</option>
									<option value="t7">Aston Villa</option>
									<option value="t8">Chelsea</option>
									<option value="t11">Everton</option>
									<option value="t54">Fulham</option>
									<option value="t14">Liverpool</option>
									<option value="t43">Manchester City</option>
									<option value="t1">Manchester United</option>
									<option value="t4">Newcastle United</option>
									<option value="t45">Norwich City</option>
									<option value="t52">Queens Park Rangers</option>
									<option value="t108">Reading</option>
									<option value="t20">Southampton</option>
									<option value="t110">Stoke City</option>
									<option value="t56">Sunderland</option>
									<option value="t80">Swansea City</option>
									<option value="t6">Tottenham Hotspur</option>
									<option value="t35">West Bromwich Albion</option>
									<option value="t21">West Ham United</option>
									<option value="t111">Wigan Athletic</option>
								</select>
							</li>
						</ul>
					</fieldset>
					<fieldset class="compare2">
						<dl>
							<dt>Competition</dt>
							<dd>English Barclays Premier League</dd>
						</dl>
						<ul>
							<li>
								<label for="team_p2">Team</label>
								<select class="team_2" name="team_p2" id="team_p2" title="--Select team--">
									<option value="">--Select team--</option>
									<option value="t3">Arsenal</option>
									<option value="t7">Aston Villa</option>
									<option value="t8">Chelsea</option>
									<option value="t11">Everton</option>
									<option value="t54">Fulham</option>
									<option value="t14">Liverpool</option>
									<option value="t43">Manchester City</option>
									<option value="t1">Manchester United</option>
									<option value="t4">Newcastle United</option>
									<option value="t45">Norwich City</option>
									<option value="t52">Queens Park Rangers</option>
									<option value="t108">Reading</option>
									<option value="t20">Southampton</option>
									<option value="t110">Stoke City</option>
									<option value="t56">Sunderland</option>
									<option value="t80">Swansea City</option>
									<option value="t6">Tottenham Hotspur</option>
									<option value="t35">West Bromwich Albion</option>
									<option value="t21">West Ham United</option>
									<option value="t111">Wigan Athletic</option>
								</select>
							</li>
						</ul>
					</fieldset>
				</fieldset>
			</form>
			<table id="teamcompare-table-0">
				<colgroup>
				<col width="25%">
				<col width="50%">
				<col width="25%">
				</colgroup>
				<thead class="offscreen">
					<tr>
						<th class="team1">-</th>
						<th class="hidden">Comparison</th>
						<th class="team2">-</th>
					</tr>
				</thead>
				<tbody>
					<tr class="prominent">
						<td class="team1">0</td>
						<th scope="row">Games Played</th>
						<td class="team2">0</td>
					</tr>
				</tbody>
			</table>
			<div id="teamcompare-container-0" class="tabs-container tabs-active">
				<ul class="tabs-nav clearfix">
					<li class="tabs-selected"><a href="#tcompare-defence-0">Defence</a></li>
					<li><a href="#tcompare-attack-0">Attack</a></li>
					<li><a href="#tcompare-distribution-0">Distribution</a></li>
					<li><a href="#tcompare-discipline-0">Discipline</a></li>
				</ul>
				<ul class="tabs-content clearfix">
					<li class="tabs-selected">
						<h3>Defence</h3>
						<div id="tcompare-defence-0">
							<table>
								<colgroup>
								<col width="25%">
								<col width="50%">
								<col width="25%">
								</colgroup>
								<thead>
									<tr>
										<th class="team1">-</th>
										<th class="hidden">Comparison</th>
										<th class="team2">-</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Goals Conceded</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Clean Sheets</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">SoT conceded</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Tackles Won</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Tackles Lost</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Tackles Won (%)</th>
										<td class="team2">0%</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Duels Won</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Duels lost</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Duels won (%)</th>
										<td class="team2">0%</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li>
						<h3>Attack</h3>
						<div id="tcompare-attack-0">
							<table>
								<colgroup>
								<col width="25%">
								<col width="50%">
								<col width="25%">
								</colgroup>
								<thead>
									<tr>
										<th class="team1">-</th>
										<th class="hidden">Comparison</th>
										<th class="team2">-</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Goals Scored</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Shots on target</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Shots off Target</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Shot Accuracy (excluding blocked shots)</th>
										<td class="team2">0%</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Conversion rate (%)</th>
										<td class="team2">0%</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Assists</th>
										<td class="team2">0</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li>
						<h3>Distribution</h3>
						<div id="tcompare-distribution-0">
							<table>
								<colgroup>
								<col width="25%">
								<col width="50%">
								<col width="25%">
								</colgroup>
								<thead>
									<tr>
										<th class="team1">-</th>
										<th class="hidden">Comparison</th>
										<th class="team2">-</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Successful Passes</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Unsuccessful Passes</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Pass accuracy</th>
										<td class="team2">0%</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Successful crosses</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Unsuccessful Crosses</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Cross accuracy</th>
										<td class="team2">0%</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Successful dribbles</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Unsuccessful dribbles</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0%</td>
										<th scope="row">Dribbles success</th>
										<td class="team2">0%</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li>
						<h3>Discipline</h3>
						<div id="tcompare-discipline-0">
							<table>
								<colgroup>
								<col width="25%">
								<col width="50%">
								<col width="25%">
								</colgroup>
								<thead>
									<tr>
										<th class="team1">-</th>
										<th class="hidden">Comparison</th>
										<th class="team2">-</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Fouls won</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Fouls conceded</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Yellow Cards</th>
										<td class="team2">0</td>
									</tr>
									<tr>
										<td class="team1">0</td>
										<th scope="row">Red Cards</th>
										<td class="team2">0</td>
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
