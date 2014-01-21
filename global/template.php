<?php

#Obtener parametros de configuration
require_once '../global/configuration.php';

function directory_map($source_dir, $directory_depth = 0, $hidden = FALSE) {
    if ($fp = @opendir($source_dir)) {
        $filedata = array();
        $new_depth = $directory_depth - 1;
        $source_dir = rtrim($source_dir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;

        while (FALSE !== ($file = readdir($fp))) {
            // Remove '.', '..', and hidden files [optional]
            if (!trim($file, '.') OR ($hidden == FALSE && $file[0] == '.')) {
                continue;
            }

            if (($directory_depth < 1 OR $new_depth > 0) && @is_dir($source_dir . $file)) {
                $filedata[$file] = directory_map($source_dir . $file . DIRECTORY_SEPARATOR, $new_depth, $hidden);
            } else {
                $filedata[] = $file;
            }
        }

        closedir($fp);
        return $filedata;
    }

    return FALSE;
}

// $components = directory_map(BASE_PATH, 1);


	

function getData($components = array(), $directory = "css") {
    $data = ""; 
	
	


    foreach ($components as $component) {        
        if ($component != "global" && $component != "component" && $component != "td_smex_main_01") {
        #if ($component != "global" && $component != "component" && $component != "nt_hom_main_01" && $component !="nt_sub_canal_01" && $component !="nt_not_gene_01" && $component !="nt_home_base_01" && $component !="nt_video_detail_01" && $component !="nt_gallery_detail_01" && $component !="nav_miniheader_01" && $component !="nt_forotv_main_01") 
            $css = directory_map(BASE_PATH . DS . $component . DS . $directory);
            
            
            if($directory == "css")
            {
                $ordercss =array();
                if (is_array($css))
                {
                    foreach ($css as $_css)
                    {
                                            if(!is_array($_css)){

                                                    if ($_css == $component . "_" . "mobile.css") 
                                                                    $ordercss[0] = $_css;

                                                    if ($_css == $component . "_" . "tablet.css") 
                                                                    $ordercss[1] = $_css;

                                                    if ($_css == $component. ".css") 
                                                                    $ordercss[2] = $_css;

                                               /* if ($_css == $component. "_ie7.css") 
                                                                    $ordercss[3] = $_css;

                                                    if ($_css == $component. "_ie8.css") 
                                                                    $ordercss[4] = $_css;

                                                    if ($_css == $component. "_ie9.css") 
                                                                    $ordercss[5] = $_css;*/

                                                    ksort($ordercss);
                                            }
                    }
                }
                
            }else
                $ordercss = $css;
            
            if (is_array($ordercss)) {
                foreach ($ordercss as $_css) {
					
					if(!is_array($_css)){
						$filepath = BASE_PATH . DS . $component . DS . $directory . DS . $_css;
						
						if (isset($_GET["debug"]))
						{
							//echo "<br/>" . $filepath = BASE_PATH . DS . $component . DS . $directory . DS . $_css;
							echo "<br/>" .  $component . DS . $directory . DS . $_css;
						}
	
						#echo "<br/>" . $filepath = BASE_PATH . DS . $component . DS . $directory . DS . $_css;
						#$data.= "\n =====================\n " . $filepath . "\n =====================\n" . @file_get_contents($filepath);
						
						//$data.="\n /* ".$filepath."*/\n";
						//$data.= "\n /* ******************************************************* */ \n "; 
						
						
						
						// QUITAMOS LOS COMENTARIOS EN LOS CSS
						$buffer = @file_get_contents($filepath);					
						
						$regex = array(
						"`^([\t\s]+)`ism"=>'',
						"`^\/\*(.+?)\*\/`ism"=>"",
						"`([\n\A;]+)\/\*(.+?)\*\/`ism"=>"$1",
						"`([\n\A;\s]+)//(.+?)[\n\r]`ism"=>"$1\n",
						"`(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+`ism"=>"\n"
						);
						//$buffer = mb_convert_encoding($buffer, 'UTF-8', 'OLD-ENCODING');
						//$data .= preg_replace(array_keys($regex),$regex,$buffer);
						
						// $data.="\n /* ".$filepath."*/ \n";
						// $data.= "\n /* ******************************************************* */ \n ";

						$data .= $buffer;
					}
                }
            } else {
               if (isset($_GET["debug"]))
                    { echo "<br/> na";}
            }
        }
    }

    file_put_contents("file." . $directory, $data);
    
//    $fp_ = fopen('file.'.$directory, 'w');
//    fwrite($fp_, $data);
//    fclose($fp_);
}

function strip_only($str, $tags, $stripContent = false) {
    $content = '';
    if (!is_array($tags)) {
        $tags = (strpos($str, '>') !== false ? explode('>', str_replace('<', '', $tags)) : array($tags));
        if (end($tags) == '')
            array_pop($tags);
    }
    foreach ($tags as $tag) {
        if ($stripContent)
            $content = '(.+</' . $tag . '[^>]*>|)';
        $str = preg_replace('#</?' . $tag . '[^>]*>' . $content . '#is', '', $str);
    }
    return $str;
}

function getHtmlComponente($file,$componentsNeeded="") {
	if($componentsNeeded==""){
		$componentsNeeded=array('script','link');
		}
    $html = file_get_contents($file);
    $html = strip_only($html, $componentsNeeded);
	
			

    if (preg_match('~<body[^>]*>(.*?)</body>~si', $html, $body)) {
        echo $body[1];
    } else {
        echo "na";
    }
}

function getHtmlComponenteVideo($file) {
    $html = file_get_contents($file);

    //$html = strip_only($html, array("script", "link"));

    if (preg_match('~<body[^>]*>(.*?)</body>~si', $html, $body)) {
        echo $body[1];
    } else {
        echo "na";
    }
}

?>