<?php

include_once "./cookie.php";

function APIRequest($service, $data)
{
    $url = "https://api.chriswald.com/" . $service;
    $options = array(
        "http" => array(
            "header" => "Content-type: application/x-www-form-urlencoded\r\n",
            "method" => "POST",
            "content" => http_build_query($data),
        ),
    );

    $context = stream_context_create($options);
    return file_get_contents($url, false, $context);
}

function Authenticate()
{
    $redirSuccessURL = $_POST["successURL"];
    $redirFailURL = $_POST["failureURL"];

    $response = APIRequest("auth/auth", $_POST);
    $responseObj = json_decode($response);

    if ($responseObj->LoginResult == true)
    {
        MakeCookie($responseObj->SessionToken);
        if ($redirSuccessURL != "")
        {
            echo MakeRedirect($redirSuccessURL);
        }
    }
    else
    {
        echo MakeRedirect($redirFailURL);
    }

    return $responseObj->LoginResult;
}

function MakeRedirect($url)
{
    return "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='$url'\" /></head></html>";
}

$LoginResult = Authenticate();

?>

<!DOCTYPE html>

<html>
    <head>
        <title>Login result</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="./style/login.css" media="screen">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
    </head>

    <body>
        <div class="login-control center">
            <script type="text/javascript" src="script/jquery-3.1.0.min.js"></script>
            <div id="login-result" class="login-form card">
                <div class="login-row login-title">
                    <?php if ($LoginResult) { ?>
                        <p>Login successful</p>
                    <?php } else { ?>
                        <p>Login failed</p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </body>
</html>
