<?php

include_once "cookie.php";

class LoginHelper
{
    public function CheckLogin()
    {
        if (!isset($_COOKIE["SessionToken"]))
        {
            $this->Login();
            exit();
        }

        $token = $_COOKIE["SessionToken"];
        if (!$this->IsTokenAlive($token))
        {
            $this->Login();
            exit();
        }

        $this->RenewToken($token);
    }

    private function IsTokenAlive($token)
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

    private function RenewToken($token)
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

    private function Login()
    {
        $url = "https://material.chriswald.com?r=" . urlencode((isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
        echo "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='$url'\" /></head></html>";
    }
}