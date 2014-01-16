<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/template.php");
require_once("../global/header.php");
?>
<!-- Estilo de mix_1arts_12 -->
<link rel="stylesheet" href="../mix_1arts_12/css/mix_1arts_12_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_12/css/mix_1arts_12_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_12/css/mix_1arts_12.css" media="screen and (min-width: 60em)">

<!-- Estilo de nav_paginator_01 -->
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_mobile.css" media="screen">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: mix_15arts_01 -->
<div class="mix_15arts_01">	
	<!-- BEGIN: list_container -->
	<div class="list_container">
		<!-- BEGIN: mix_1arts_12 (1) -->
		<!-- <div class="container_mix">  -->					
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
			 <?php getHtmlComponente("../mix_1arts_12/index.html"); ?>
		
	</div>
	<!-- END: list_container -->
	
	<!-- BEGIN: nav_paginator_01-->
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
	
	<!-- BEGIN:  wdg_comen_01_verMas -->
	<div class="mix_15arts_01_ver_mas ">
        <a href="#" class="textcolor-title4">Ver M&aacute;s</a>
    </div>
    <!-- END: Ocultar -->
    <!-- BEGIN:  wdg_comen_01_verMas -->
    <div class="see_less textcolor-title4">Ocultar</div>
    <!-- END: Ocultar -->
    
</div>
<!-- END: mix_15arts_01 -->
<?
// footer
require_once("../global/footer.php");
?>