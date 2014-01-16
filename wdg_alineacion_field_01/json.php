<?php

$player = array(
	'pos-x'	=> 200,
	'pos-y' => 150,
	'firstname' => 'Mario',
	'lastname' => 'Gomez',
	'nickname' => '',
	'number' => 11,
	'team' => '',
	'position' => 'Defence',
	'playerfoto' => 'http://lorempixel.com/51/38',
	'actions' => array(
		array('type' => 'mxm-secondyellowcard', 'minute' => 17),
		array('type' => 'mxm-redcard', 'minute' => 17),
		array('type' => 'mxm-offside', 'minute' => 17),
		array('type' => 'mxm-cornerkick', 'minute' => 17),
		array('type' => 'mxm-owngoal', 'minute' => 17),
		array('type' => 'mxm-goal', 'minute' => 17),
	),
);
$player2 = $player;
$player2['team'] = 'local';
$player2['number'] = '01';
$player2['pos-x'] = '300';

$player3 = $player;
$player3['team'] = 'visit';
$player3['number'] = '12';
$player3['pos-x'] = '100';
$all_players = array($player, $player2, $player3);

echo '<br />';
echo json_encode($all_players);