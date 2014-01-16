<?

/* PHOTOS */ 
$photo[0] = array(
				"id" => 1,
				"title" => "Photo 1 ",
				"description" => " Description photo 1",
				"thumb" => "http://lorempixel.com/people/67/47",
				"image" => "http://lorempixel.com/people/624/450"
			);
			
$photo[1] = array(
				"id" => 2,
				"title" => "Photo 2 ",
				"description" => " Description photo 2",
				"thumb" => "http://lorempixel.com/67/47",
				"image" => "http://lorempixel.com/624/450"
			);

$photo[2] = array(
				"id" => 3,
				"title" => "Photo 3 ",
				"description" => " Description photo 3",
				"thumb" => "http://lorempixel.com/abstract/67/47",
				"image" => "http://lorempixel.com/abstract/624/450"
			);

$photo[3] = array(
				"id" => 4,
				"title" => "Photo 4 ",
				"description" => " Description photo 4",
				"thumb" => "http://lorempixel.com/city/67/47",
				"image" => "http://lorempixel.com/city/624/450"
			);

$photo[4] = array(
				"id" => 5,
				"title" => "Photo 5 ",
				"description" => " Description photo 5",
				"thumb" => "http://lorempixel.com/animals/67/47",
				"image" => "http://lorempixel.com/animals/624/450"
			);
			
$photo[5] = array(
				"id" => 6,
				"title" => "Photo 6 ",
				"description" => " Description photo 6",
				"thumb" => "http://lorempixel.com/cats/67/47",
				"image" => "http://lorempixel.com/cats/624/450"
			);

$photo[6] = array(
				"id" => 7,
				"title" => "Photo 7 ",
				"description" => " Description photo 7",
				"thumb" => "http://lorempixel.com/nature/67/47",
				"image" => "http://lorempixel.com/nature/624/450"
			);


/* GALLERIES */
$gallery[1] = array(
					"id" => "1",
					"title" => "Gallery 1",
					"description" => "Description Gallery 1",
					"photos" => array( $photo[0], $photo[1], $photo[2], $photo[3], $photo[4], $photo[5], $photo[6] ) ,
					"thumb" => "http://lorempixel.com/people/137/77"
			);
			
$gallery[2] = array(
					"id" => "2",
					"title" => "Gallery 2",
					"description" => "Description Gallery 1",
					"photos" => array( $photo[6], $photo[5], $photo[4], $photo[3], $photo[2], $photo[1], $photo[0] ) ,
					"thumb" => "http://lorempixel.com/137/77"
			);
			
$gallery[3] = array(
					"id" => "3",
					"title" => "Gallery 3",
					"description" => "Description Gallery 1",
					"photos" => array( $photo[2], $photo[4], $photo[6], $photo[0], $photo[1], $photo[3], $photo[5] ) ,
					"thumb" => "http://lorempixel.com/abstract/137/77"
				
			);
			
$gallery[4] = array(
					"id" => "4",
					"title" => "Gallery 4",
					"description" => "Description Gallery 1",
					"photos" => array( $photo[1], $photo[3], $photo[5], $photo[0], $photo[2], $photo[4], $photo[6] ) ,
					"thumb" => "http://lorempixel.com/nature/137/77"
				
			);

/* JSON  */ 


$json = json_encode($gallery[$_GET['g']]);
echo $json;