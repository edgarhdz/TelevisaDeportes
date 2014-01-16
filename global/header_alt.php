<?php ob_start();?><?php require_once 'configuration.php';?><!DOCTYPE html>
<html lang="es">
<head>
	<title>Televisa - <?=COMPONENT?></title>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, user-scalable=1;">   <!-- Allow ZOOM -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!--[if IE]>
    <meta http-equiv="imagetoolbar" content="no">
    <![endif]-->
    <meta name="robots" content="index,follow,noodp,noydir">
    <link rel="shortcut icon" href="../global/img/favicon.ico" />
    <link rel="stylesheet" href="../global/css/global.css" media="screen">
    <? if(file_exists(BASE_PATH.DS.COMPONENT.DS."css".DS.COMPONENT."_mobile.css")): ?> 
    <link rel="stylesheet" href="css/<?=COMPONENT?>_mobile.css" media="all">
    <? endif;?>
    <link rel="stylesheet" href="css/<?=COMPONENT?>_tablet.css" media="all">
    <link rel="stylesheet" href="css/<?=COMPONENT?>.css" media="all">
    <link rel="stylesheet" href="../global/css/colores.css" />
    <link rel="stylesheet" href="../global/css/jquery.mobile-1.3.2.min.css" />
    <meta name="HandheldFriendly" content="true">
	<meta name="format-detection" content="telephone=no">
	<meta name="description" content="Esta es la descripcion">
    <link rel="stylesheet" href="../global/css/tvsa-icons.css" />
    <!--[if lt IE 9]>
		<link rel="stylesheet" type="text/css" href="../global/css/tvsa-icons.ie7.css" />
	<![endif]-->
    <?php 
        $path = BASE_PATH.DS.COMPONENT.DS;
        $ie7 = $path."css/".COMPONENT."_ie7.css";
        
            if(file_exists($ie7)): 
    ?>  
    <!--[if IE 7]>
    <link rel="stylesheet" type="text/css" href="css/<?=COMPONENT?>_ie7.css" />
    <![endif]-->
    <?php endif;?>
    <?php 
        $ie8 = $path."css/".COMPONENT."_ie8.css";
        
            if(file_exists($ie8)): 
    ?>
    <!--[if IE 8]>
    <link rel="stylesheet" type="text/css" href="css/<?=COMPONENT?>_ie8.css" />
    <![endif]-->
    <?php endif;?>
    <?php 
        $ie9 = $path."css/".COMPONENT."_ie9.css";
        
            if(file_exists($ie9)): 
    ?>
    <!--[if IE 9]>
    <link rel="stylesheet" type="text/css" href="css/<?=COMPONENT?>_ie9.css" />
    <![endif]-->
    <?php endif;?>
    
    
    <!--[if IE]> 
    <script type="text/javascript">
        function noError(){return true;}
        window.onerror = noError;	
        
    </script>
    <![endif]-->
	
	<script type="text/javascript" src="../global/js/modernizr.js"></script>
	
<!-- 	<script type="text/javascript" src="../global/js/css3-mediaqueries.js"></script> -->
	
    <?php
	/**
	?>
	<script type="text/javascript" src="../global/js/headjs.js"></script>
	<script type="text/javascript" src="../global/js/jquery-1.10.2.js"></script>
	<!--[if gte IE 9]><!-->
    <script type="text/javascript" src="../global/js/jquery.mobile-1.3.2.min.js"></script>
	<!--<![endif]-->
	<script type="text/javascript" src="../global/js/jquery.migrate.js"></script>
	<script type="text/javascript" src="../global/js/jquery.easing-1.3.js"></script>
	<script type="text/javascript" src="../global/js/modernizr.js"></script>
	<script type="text/javascript" src="../global/js/Televisa.js"></script>
	<script type="text/javascript" src="../global/js/global.js"></script>
    <script type="text/javascript" src="../global/js/jquery.corner.js"></script>
    <script type="text/javascript" src="../global/js/jquery.placeholder.js"></script>

    <script type="text/javascript" src="../global/js/jquery.jplayer.min.js"></script>
    <script type="text/javascript" src="../global/js/jquery.mb.miniPlayer.js"></script>
    <script type="text/javascript" src="../global/js/jplayer_request.js"></script>
    <script type="text/javascript" src="../global/js/jquery.lightbox_me.js"></script>
    <script type="text/javascript" src="../global/js/swipeupdown.js"></script>
	<script type="text/javascript" src="../global/js/swipe2.js"></script>
    
	
	<?php if(file_exists("js/".COMPONENT.".js")): ?>  
	<script type="text/javascript" src="js/<?=COMPONENT?>.js"></script>
	<?php endif;?>
	
	<?php
    endif;

    ?>
    <?php **/ ?>
    <?php 
    // Si es un template se agregan automaticamente estas lineas
    if(count(preg_match("/td\_/", COMPONENT))): ?>
		<link rel="stylesheet" href="file.css" media="screen">
		<script type="text/javascript" src="file.js"></script>
	    <?php
		$component = 'css/' . COMPONENT . '_' . 'theme.css';
		if (file_exists($component)) {
			echo '<link rel="stylesheet" href="css/' . COMPONENT . '_' . 'theme.css">';
		}
	endif;
	?>
</head>
<body>