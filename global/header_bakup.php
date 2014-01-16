<?php ob_start();?>
<?php require_once 'configuration.php';?>
<?php
function find($word,$file)
{
    echo $data = file_get_contents($file);
  
    if(!preg_match('/'.$word.'/i', $data))
    {
   
        $data=$word."{"."\n".$data."\n"."}";
     
        file_put_contents($file, $data);
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/" xml:lang="es" lang="es">

<head>

<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8,IE=7,IE=6"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>
   Televisa -  <?php=COMPONENT?> 
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

<?php if(file_exists(BASE_PATH.DS.COMPONENT.DS."css".DS.COMPONENT."_global.css")): ?>    
<link rel="stylesheet" href="css/<?php=COMPONENT?>_global.css" media="screen">
<?php endif;?>
<?php if(file_exists(BASE_PATH.DS.COMPONENT.DS."css".DS.COMPONENT."_mobile.css")): ?> 
<link rel="stylesheet" href="css/<?php=COMPONENT?>_mobile.css" media="screen">
<?php endif;?>
<link rel="stylesheet" href="css/<?php=COMPONENT?>_tablet.css" media="screen and (min-width: 39em)">
<link rel="stylesheet" href="css/<?php=COMPONENT?>.css" media="screen and (min-width: 60em)">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="HandheldFriendly" content="true">
<meta name="format-detection" content="telephone=no">    
<!-- link: CSS IE-->

<!--[if lt IE 9]>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->

<?php 
    $path = BASE_PATH.DS.COMPONENT.DS;
    $ie7 = $path."css/".COMPONENT."_ie7.css";
    
        if(file_exists($ie7)): 
            find("@media screen\9",$ie7);
?>  
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="css/<?php=COMPONENT?>_ie7.css" />
<![endif]-->
<?php endif;?>
<?php 
    $ie8 = $path."css/".COMPONENT."_ie8.css";
    
        if(file_exists($ie8)): 
            find("@media \0screen ",$ie8);
?>
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="css/<?php=COMPONENT?>_ie8.css" />
<![endif]-->
<?php endif;?>
<?php 
    $ie9 = $path."css/".COMPONENT."_ie9.css";
    
        if(file_exists($ie9)): 
            find("@media screen\0 ",$ie9);
?>
<!--[if (lt IE 9)&(!IEMobile)]>
<link rel="stylesheet" type="text/css" href="css/<?php=COMPONENT?>_ie9.css" />
<![endif]-->
<?php endif;?>


<!--[if IE]> 
<script type="text/javascript">
    function noError(){return true;}
    window.onerror = noError;	
    
</script>
<![endif]-->

<?phpphp
if(JS):
?>
<!-- JQUERY-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="js/<?php=$js?>.js"></script>
    
<?php
if(!isset($javascript))
    $javascript = array();

$javascript = array_merge($javascript,array("Televisa","selectivizr"));

foreach($javascript as $js){
    
    $data = file_get_contents(BASE_PATH.DS."global".DS."js".DS.$js.".js");
    file_put_contents(BASE_PATH.DS.COMPONENT.DS."js".DS.$js.".js", $data);
?>
<script type="text/javascript" src="js/<?php=$js?>.js"></script>
<?php    
} // foreach
?>

<?php if(file_exists("js/".COMPONENT.".js")): ?>  
<script type="text/javascript" src="js/<?php=COMPONENT?>.js"></script>
<?php endif;?>

<?php
endif;
?>


</head>
<body>  
  