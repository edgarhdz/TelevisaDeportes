<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/template.php");
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10.css" media="screen and (min-width: 960px)">

<link rel="stylesheet" href="../mix_2arts_04/css/mix_2arts_04_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_2arts_04/css/mix_2arts_04_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../mix_2arts_04/css/mix_2arts_04.css" media="screen and (min-width: 960px)">

<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_mobile.css" media="screen">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_tablet.css" media="screen and (min-width: 624px)">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01.css" media="screen and (min-width: 960px)">


<!-- BEGIN: mix_6arts_04 -->
<div class="mix_6arts_04">


	<!-- BEGIN: mix_2arts_04 -->
	<?php getHtmlComponente("../mix_2arts_04/index.html"); ?>
	<!-- END: mix_2arts_04 -->
	
	
	<!-- BEGIN: mix_2arts_04 -->
	<?php getHtmlComponente("../mix_2arts_04/index.html"); ?>
	<!-- END: mix_2arts_04 -->
	
	
	<!-- BEGIN: mix_2arts_04 -->
	<?php getHtmlComponente("../mix_2arts_04/index.html"); ?>
	<!-- END: mix_2arts_04 -->
	
	
	   
	<!-- END: nav_paginator_01 -->
	<div class="nav_paginator_01 dotted-top">
    
    <ul>
        <li class="dotted-right"><a href="#left" title ="Link Description"><i class="tvsa-double-caret-left"></i></a></li>
        <li ><a href="#">1</a></li>
        <li><span class="selected">2</span></li>
        <li><a href="#">3</a></li>
        <li>...</li>
        <li><a href="#">15</a></li>
        <li class="dotted-left"><a href="#right" title ="Link Description"><i class="tvsa-double-caret-right"></i></a></li>
    </ul>


</div>
	<!-- END: nav_paginator_01 -->
	
	<!-- 
	<div class="mix_6arts_04_verMas">
        <a href="#">Ver Más</a>
    </div>
	<div class="see_less textcolor-title4">Ocultar</div>
 	-->
</div>
<!-- END: mix_6arts_04 -->
<?
// footer
require_once("../global/footer.php");
?>