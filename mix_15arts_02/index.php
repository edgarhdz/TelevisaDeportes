<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/template.php");
require_once("../global/header.php");
?>
<!-- Estilo de mix_1arts_16 -->
<link rel="stylesheet" href="../mix_1arts_16/css/mix_1arts_16_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_16/css/mix_1arts_16_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_16/css/mix_1arts_16.css" media="screen and (min-width: 60em)">

<!-- Estilo de nav_paginator_01 -->
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_mobile.css" media="screen">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01.css" media="screen and (min-width: 60em)">


<!-- BEGIN: mix_15arts_02 -->
<div class="mix_15arts_02" data-enhance="false">	
	<!-- BEGIN: list_container -->
	<div class="list_container">
			<!-- BEGIN: mix_1arts_16 -->
			
			<div class=" renglon">					
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 <div class="middle">
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 </div>
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			</div>
			 
			<div class=" renglon">					
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 <div class="middle">
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 </div>
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			</div>
			
			<div class=" renglon">					
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 <div class="middle">
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 </div>
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			</div>
			
			<div class=" renglon">					
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 <div class="middle">
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 </div>
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			</div>
			
			<div class=" renglon">					
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 <div class="middle">
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			 </div>
			 <?php getHtmlComponente("../mix_1arts_16/index.html"); ?>
			</div>
			<!-- END: mix_1arts_16 -->

	</div>
	<div class="degraded"></div>
	
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
    
</div>
<!-- END: mix_15arts_02 -->
<?
// footer
require_once("../global/footer.php");
?>