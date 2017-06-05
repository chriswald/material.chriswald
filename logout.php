<?php

include_once "./cookie.php";

DeleteCookie();

?>

<?php

$paramStart = strpos($_SERVER[REQUEST_URI], "?");
$vars = "";

if ($paramStart)
{
    $vars = substr($_SERVER[REQUEST_URI], $paramStart);
}

$url = "https://material.chriswald.com/login" . $vars;

 ?>
<!DOCTYPE html>

<html>
  <head>
    <meta http-equiv="refresh" content=<?php echo "\"0; URL='$url'\""; ?> />
  </head>
</html>
