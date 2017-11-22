<?php

include_once "../loginhelper.php";

$loginHelper = new LoginHelper();
$loginHelper->CheckLogin(["2"]); // Photo API security
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Upload Photos</title>
    </head>

    <body>
        Upload
    </body>
</html>
