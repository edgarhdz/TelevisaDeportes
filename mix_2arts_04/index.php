<?
define("COMPONENT", basename(__DIR__));
define("JS", TRUE);

// header
require_once("../global/template.php");
require_once("../global/header.php");
?>
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10_mobile.css" media="screen">
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="../mix_1arts_10/css/mix_1arts_10.css" media="screen and (min-width: 60em)">
<!-- BEGIN: mix_2arts_04 -->
<div class="mix_2arts_04">
    <div class="mix_2arts_04_line">
        <div class="mix_2arts_04_left">
            <!-- BEGIN: mix_1arts_10 -->
			<?php getHtmlComponente("../mix_1arts_10/index.html"); ?>
			<!-- END: mix_1arts_10 -->
        </div>
        <div class="mix_2arts_04_right">
            <!-- BEGIN: mix_1arts_10 -->
			<?php getHtmlComponente("../mix_1arts_10/index.html"); ?>
			<!-- END: mix_1arts_10 -->
        </div>
    </div>
</div>
<!-- END: mix_2arts_04 -->
<?
// footer
require_once("../global/footer.php");
?>