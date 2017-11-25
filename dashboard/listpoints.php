<?php

$url = "https://api.chriswald.com/auth/listpoints";
$options = array(
    "http" => array(
        "header" => "Content-type: application/x-www-form-urlencoded\r\n",
        "method" => "POST",
        "content" => http_build_query($_POST),
    ),
);

$context = stream_context_create($options);
echo file_get_contents($url, false, $context);

 ?>
