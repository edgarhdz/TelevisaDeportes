<?php ob_start();?>
<?php require_once 'configuration.php';?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/" xml:lang="es" lang="es">

<head>

<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8,IE=7,IE=6"/>
<!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">-->
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"> 

<!-- Deshabilitar Barra de URL -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black">
    
<title>
   Televisa -  <?=COMPONENT?> 
</title>   
    
<meta http-equiv="imagetoolbar" content="no">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Cache-Control" content="no-store"/>
<meta http-equiv="Expires" content="0"/>
<meta http-equiv="Pragma" content="no-cache, must-revalidate, no-sztore"/>

<!-- Robots -->
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp,noydir"> 
<meta name="googlebot" content="index,follow"> 

  
<link rel="stylesheet" href="../global/css/global.css" media="screen">
<link rel="stylesheet" href="../global/css/tvsa-icons.css" />
<? if(file_exists(BASE_PATH.DS.COMPONENT.DS."css".DS.COMPONENT."_mobile.css")): ?> 
<link rel="stylesheet" href="css/<?=COMPONENT?>_mobile.css" media="screen">
<? endif;?>
<link rel="stylesheet" href="css/<?=COMPONENT?>_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="css/<?=COMPONENT?>.css" media="screen and (min-width: 60em)">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="HandheldFriendly" content="true">
<meta name="format-detection" content="telephone=no">    
<!-- link: CSS IE-->

<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
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

<?php
if(JS):
?>
<script type="text/javascript" src="../global/js/headjs.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<script type="text/javascript" src="../global/js/modernizr.js"></script>
<script type="text/javascript" src="../global/js/Televisa.js"></script>
<script type="text/javascript" src="../global/js/global.js"></script>    

<?php if(file_exists("js/".COMPONENT.".js")): ?>  
<script type="text/javascript" src="js/<?=COMPONENT?>.js"></script>
<?php endif;?>

<?php
endif;
?>

<?php 
// Si es un template se agregan automaticamente estas lineas
if( substr(COMPONENT, 0,3) == 'td_' ): ?>   
 
    <link rel="stylesheet" href="file.css" media="screen">
    <script type="text/javascript" src="file.js"></script>
       
<?php endif;?>  

</head>
<body> 
        
        