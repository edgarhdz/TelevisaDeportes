<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

$javascript = array('respond', 'modernizr');
// header
require_once("../global/header.php");
require_once("../global/template.php");

?>
<link rel="stylesheet" href="../wdg_podcast_02/css/wdg_podcast_02_mobile.css" media="screen">
<link rel="stylesheet" href="../wdg_podcast_02/css/wdg_podcast_02_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../wdg_podcast_02/css/wdg_podcast_02.css" media="screen and (min-width: 60em)">

<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_mobile.css" media="screen">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../nav_paginator_01/css/nav_paginator_01.css" media="screen and (min-width: 60em)">

<link rel="stylesheet" href="../btn_podcast_02/css/btn_podcast_02_mobile.css" media="screen">
<link rel="stylesheet" href="../btn_podcast_02/css/btn_podcast_02_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../btn_podcast_02/css/btn_podcast_02.css" media="screen and (min-width: 60em)">

<!-- BEGIN: btn_podcast_02 -->
<div class="wdg_5podcast_01"> 	
		<div class="scroll">
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>
			<?php getHtmlComponente("../wdg_podcast_02/index.html"); ?>									
		</div>
		<?php getHtmlComponente("../nav_paginator_01/index.html"); ?>
		<?php getHtmlComponente("../btn_podcast_02/index.html"); ?>	
		<div class="degraded"></div>	
</div>
<!-- END: btn_podcast_02 -->

<?
// footer
require_once("../global/footer.php");
?>