<?php
    $SUCCESS_URL = (isset($_GET["r"]) ? $_GET["r"] : "https://material.chriswald.com/dashboard");
    $FAILURE_URL = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    if (strpos($FAILURE_URL, "?"))
    {
        $FAILURE_URL .= "&f=1";
    }
    else
    {
        $FAILURE_URL .= "?f=1";
    }
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="./style/login.css" media="screen">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
    </head>

    <body>
        <div class="login-control center">
            <script type="text/javascript" src="script/jquery-3.1.0.min.js"></script>
            <form id="login-form" class="login-form card" action="signinact.php" method="post">
                <div class="login-header">
                <div class="login-title">
                    Login
                </div>
                <?php if ($_GET["f"] == 1) { ?>
                <div class="login-message error">
                    Login failed
                </div>
                <?php } ?>
                </div>
                <div class="login-row">
                    <input id="login-email" type="email" name="email" placeholder="Email address" class="login-input">
                </div>
                <div class="login-row">
                    <input id="login-password" type="password" name="password" placeholder="Password" class="login-input">
                </div>
                <div class="login-row hidden">
                    <input id="success-url" type="text" name="successURL" class="login-input" value=<? echo "\"" . $SUCCESS_URL . "\""; ?>>
                </div>
                <div class="login-row hidden">
                    <input id="failure-url" type="text" name="failureURL" class="login-input" value=<? echo "\"" . $FAILURE_URL . "\""; ?> >
                </div>
                <div class="login-row">
                    <input id="login-submit" type="submit" name="btnSubmit" value="Submit" class="login-input login-button" onsubmit="return false;">
                </div>
            </form>
        </div>
    </body>
</html>
