<?php
error_reporting(0);
$jjj=round(time()/30);
$kkk=round(time()/2);
$req=$_SERVER['REQUEST_URI'];
if(empty($_SERVER['HTTPS'])||$_SERVER['HTTPS']==="off") { header('HTTP/1.1 301 Moved Permanently'); header('Location: '.'https://'.$_SERVER['HTTP_HOST'].$req); die(); }
function echoScript ($use,$sf)                          { if($use) { echo "<script type='text/javascript' src='".$sf."'></script>\n"; } }
function echoModule ($use,$sf)                          { if($use) { echo "<script type='module' src='".$sf."'></script>\n"; } }
$bat=$_GET['batch'];
?>
<!doctype html>
<html lang='en'>
<head>
<meta charset="UTF-8">
<title>XDosh-150_GEN</title>
<?php echo "<link rel='manifest' href='./manifest.json?".$jjj."' >"; ?>
<meta     name='google'                 content='notranslate' />
<meta     name="viewport"               content="width=device-width, initial-scale=1,viewport-fit=cover" />
<meta property='og:title'               content="XDosh">
<meta property='og:description'         content='XDosh'>
<meta property='og:image'               content='./gfx/ylogo200.png'>
<meta property='og:site_name'           content='XDosh'>
<meta property='og:type'                content='website'>
<meta     name='description'            content='XDosh - Video Call'>
<meta     name='mobile-web-app-capable'                content='yes'>
<meta     name='apple-mobile-web-app-capable'          content='yes'>
<meta     name='apple-mobile-web-app-status-bar-style' content='black-translucent'>
<link rel="shortcut icon"                    href="./gfx/favicon.ico">
<link rel='icon' type='image/ico'            href='./gfx/favicon.ico'>
<link rel='apple-touch-icon'                 href='./gfx/ylogo152.png'>
<link rel='apple-touch-icon' sizes='76x76'   href='./gfx/ylogo76.png'>
<link rel='apple-touch-icon' sizes='120x120' href='./gfx/ylogo120.png'>
<link rel='apple-touch-icon' sizes='152x152' href='./gfx/ylogo152.png'>
<meta     name="theme-color"             content="#ffffff">
<meta     name="msapplication-TileColor" content="#ffffff">
<meta     name="msapplication-TileImage" content="./gfx/ylogo144.png">
<meta     name="application-name"        content="Headlines">
<meta http-equiv='cache-control'         content='no-cache, must-revalidate, post-check=0, pre-check=0' >
<meta http-equiv='cache-control'         content='max-age=0'>
<meta http-equiv='expires'               content='0'>
<meta http-equiv='expires'               content='Tue, 01 Jan 1980 1:00:00 GMT'>
<meta http-equiv='pragma'                content='no-cache'>
<style type="text/css">
*      { margin:0; padding:0; border:none;  background:none; overflow:hidden; outline:0; top:0px; left:0px; width:100%;  height:100%;  }
html   { position:fixed; background:#ffffff; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;  }
body   { position:fixed;                     -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;  }
:root  { --sat: env(safe-area-inset-top); --sar: env(safe-area-inset-right); --sab: env(safe-area-inset-bottom); --sal: env(safe-area-inset-left); }
</style>
<?php echoScript(1,"./HackTimer.js?".$jjj);?>
<?php echoScript(1,"./NoSleep.js?".$jjj); ?>
<?php
echoScript(1,"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/face_mesh.min.js?".($jjj));
echoScript(1,"https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js?".($jjj));
//echoScript(1,"https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js?".($jjj));
//echoModule(1,"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.js?".($jjj));
//echoScript(1,"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.13.0/dist/tf.min.js?".jjjy);
//echoScript(1,"https://cdn.jsdelivr.net/npm/@tensorflow-models/face-landmarks-detection@0.0.3/dist/face-landmarks-detection.js?".$jjj);
//echoScript(1,"https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.2.0?".$jjj);
?>
</head>
<body id="bodid"></body>
<?php
if($bat==1)
 {
 echoScript(1,"./aajs.js?".$kkk);
 echoScript(1,"./aadashboard.js?".$kkk);
 }
else
if($bat==2)
 {
 echoScript(1,"./aajs.js?".$kkk);
 echoScript(1,"./aabase.js?".$kkk);
 echoScript(1,"./aadata.js?".$kkk);
 echoScript(1,"./aasidemenu.js?".$kkk);
 echoScript(1,"./aamore.js?".$kkk);
 echoScript(1,"./aaxtra.js?".$kkk);
 }
else
 {
 echoScript(1,"./aajs.js?".$kkk);
 echoScript(1,"./ggone.js?".$kkk);
 echoScript(1,"./ggtwo.js?".$kkk);
 echoScript(1,"./ggthree.js?".$kkk);
 }


?>
</html>
