<?php

include_once "../loginhelper.php";

$loginHelper = new LoginHelper();
$loginHelper->CheckLogin(["2"]); // Photo API security
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Upload Photos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="../style/login.css" media="screen">
        <link rel="stylesheet" href="../style/dashboard.css" media="screen">
        <link rel="stylesheet" href="../style/photo.css" media="screen">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
    </head>

    <body>
        <script type="text/javascript" src="script/jquery-3.1.0.min.js"></script>
        <div class="photo-logout right">
            <a href="https://material.chriswald.com/logout">Logout</a>
        </div>
        <div class="login-control center">
            <form id="upload-form" class="login-form card" action="" method="post">
                <div class="login-header">
                    <div class="login-title">
                        Upload Photos
                    </div>
                </div>
                <div class="login-row">
                    <input id="photos" type="file" name="photos" accept=".jpg, .png, .jpeg, .wmv, .mov, mp4" multiple>
                </div>
                <div class="login-row">
                    <input id="upload-submit" type="submit" name="btnSubmit" value="Upload" class="login-input login-button" onsubmit="return false;">
                </div>
            </form>
        </div>
    </body>
</html>
