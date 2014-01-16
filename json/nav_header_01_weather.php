<?
/* Weather Cities */ 
$weatherheader[0] = array(
    "id" => 1,
    "city" => "Guadalajara",
    "min" => "21",
    "max" => "27",
    "weather" => "25",
    "icon" => "45"
);
$weatherheader[2] = array(
    "id" => 2,
    "city" => "Monterrey",
    "min" => "23",
    "max" => "49",
    "weather" => "26",
    "icon" => "35"
);
$weatherheader[3] = array(
    "id" => 3,
    "city" => "Guerrero",
    "min" => "22",
    "max" => "26",
    "weather" => "28",
    "icon" => "37"
);
$weatherheader[4] = array(
    "id" => 4,
    "city" => "Coahuila",
    "min" => "20",
    "max" => "33",
    "weather" => "11",
    "icon" => "36"
);
$weatherheader[5] = array(
    "id" => 5,
    "city" => "Chihuahua",
    "min" => "23",
    "max" => "49",
    "weather" => "15",
    "icon" => "37_"
);
$weatherheader[6] = array(
    "id" => 6,
    "city" => "D.F.",
    "min" => "15",
    "max" => "25",
    "weather" => "18",
    "icon" => "38"
);
$weatherheader[7] = array(
    "id" => 7,
    "city" => "Edo. de México",
    "min" => "21",
    "max" => "27",
    "weather" => "25",
    "icon" => "14"
);
$weatherheader[8] = array(
    "id" => 8,
    "city" => "Yucatán",
    "min" => "23",
    "max" => "49",
    "weather" => "40",
    "icon" => "14_"
);
$weatherheader[9] = array(
    "id" => 9,
    "city" => "Hidalgo",
    "min" => "19",
    "max" => "35",
    "weather" => "28",
    "icon" => "15_"
);

/* Json  */ 
$json = json_encode($weatherheader[$_GET['w']]);
echo $json;

