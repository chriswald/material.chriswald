<?php

$paramStart = strpos($_SERVER[REQUEST_URI], "?");
$vars = "";

if ($paramStart)
{
    $vars = substr($_SERVER[REQUEST_URI], $paramStart);
}

$url = "./login" . $vars;

 ?>

<html>
  <head>
    <meta http-equiv="refresh" content=<?php echo "\"0; URL='$url'\""; ?> />
  </head>
</html>
