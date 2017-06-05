<?php

include_once "../cookie.php";

function CheckLogin()
{
    if (!isset($_COOKIE["SessionToken"]))
    {
        Login();
        exit();
    }

    $token = $_COOKIE["SessionToken"];
    if (!IsTokenAlive($token))
    {
        Login();
        exit();
    }

    RenewToken($token);
}

function IsTokenAlive($token)
{
    $url = "https://api.chriswald.com/auth/istokenalive";
    $data = array("SessionToken" => $token);

    $options = array(
        "http" => array(
            "header"  => "Content-type: application/x-www-form-urlencoded\r\n",
            "method"  => "POST",
            "content" => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $resultObj = json_decode($result);
    return $resultObj->TokenIsAlive;
}

function RenewToken($token)
{
    $url = "https://api.chriswald.com/auth/renewtoken";
    $data = array("SessionToken" => $token);

    $options = array(
        "http" => array(
            "header"  => "Content-type: application/x-www-form-urlencoded\r\n",
            "method"  => "POST",
            "content" => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $resultObj = json_decode($result);

    MakeCookie($resultObj->SessionToken);
}

function Login()
{
    $url = "https://material.chriswald.com?r=" . urlencode((isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
    echo "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='$url'\" /></head></html>";
}

CheckLogin();
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Home Connect Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="../style/login.css" media="screen">
        <link rel="stylesheet" href="../style/dashboard.css" media="screen">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
        <script type="text/javascript" src="../script/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="../script/homeconnect.js"></script>
    </head>

    <body>
        <div id="dashboard-control" class="dashboard-control center">
            <div id="home-connect-form" class="dashboard-form card">
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        <a href="#" id="refresh-link">Refresh</a>
                    </div>
                    <div class="dashboard-label right">
                        <a href="https://material.chriswald.com/logout">Logout</a>
                    </div>
                </div>
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        <p>Home Connect IP</p>
                    </div>
                    <div class="dashboard-value">
                        <input id="home-ip" class="dashboard-input" type="text" readonly>
                    </div>
                </div>
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        <p>Home Connect Port</p>
                    </div>
                    <div class="dashboard-value">
                        <input id="home-port" class="dashboard-input" type="text" readonly>
                    </div>
                </div>
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        <p>Last update</p>
                    </div>
                    <div class="dashboard-value">
                        <input id="home-ip-last-update" class="dashboard-input" type="text" readonly>
                    </div>
                </div>
            </div>
            <div id="user-creation-form" class="dashboard-form card">
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        Create User
                    </div>
                </div>
                <div class="dashboard-row">
                    <input id="user-email" type="email" name="email" placeholder="Email address" class="dashboard-input">
                </div>
                <div class="dashboard-row">
                    <input id="user-password" type="password" name="password" placeholder="Password" class="dashboard-input">
                    <div class="right">
                        <label for="password-expire">Expire</label><input id="password-expire" type="checkbox" name="expire" class="right"><br/>
                    </div>
                </div>
                <div class="dashboard-row">
                    <div class="dashboard-label">Foo</div>
                </div>
            </div>
        </div>
    </body>
</html>
