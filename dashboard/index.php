<?php

include_once "../loginhelper.php";

$loginHelper = new LoginHelper();
$loginHelper->CheckLogin(["9"]); // Dashboard security
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
            <div id="home-connect-form" class="dashboard-form card">
                <div class="dashboard-row">
                    User Security
                </div>
                <div class="dashboard-row">
                    <div class="dashboard-label">
                        <p>Username</p>
                    </div>
                    <div class="dashboard-value">
                        <input id="sec-username" class="dashboard-input" type="text">
                    </div>
                </div>
                <div class="dashboard-row-no-justify" id="point-list">
                    <div id="sec-load-div">Loading security points...</div>
                </div>
                <div class="dashboard-row">
                    <input id="security-submit" type="submit" name="btnSecSubmit" value="Assign Security" class="login-input login-button" onsubmit="return false;">
                </div>
            </div>
        </div>
    </body>
</html>
