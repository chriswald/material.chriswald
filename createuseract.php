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

function CreateUser()
{
    $redirSuccessURL = $_POST["successURL"];
    $redirFailURL = $_POST["failureURL"];

    if (strlen($_POST["email"]) === 0)
    {
        $success = false;
        $message = "Missing email address";
    }
    else if (strlen($_POST["password"]) === 0)
    {
        $success = false;
        $message = "Missing password";
    }
    else if ($_POST["password"] !== $_POST["passwordconfirm"])
    {
        $success = false;
        $message = "Passwords do not match";
    }
    else
    {
        $response = APIRequest("auth/createuser", $_POST);
        $responseObj = json_decode($response);
        $success = $responseObj->Result;
        $message = $responseObj->Reason;
    }

    if ($success)
    {
        MakeCookie($responseObj->SessionToken);
        if ($redirSuccessURL != "")
        {
            echo MakeRedirect($redirSuccessURL);
        }
    }
    else
    {
        $redirFailURL = "$redirFailURL&m=" . urlencode($message);
        echo MakeRedirect($redirFailURL);
    }

    return $success;
}

function MakeRedirect($url)
{
    return "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='$url'\" /></head></html>";
}

$Result = CreateUser();

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
                    <?php if ($Result) { ?>
                        <p>User created successfully</p>
                    <?php } else { ?>
                        <p>User creation failed</p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </body>
</html>
