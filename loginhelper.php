<?php

include_once "cookie.php";

class LoginHelper
{
    public function CheckLogin($points = "")
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

        if ($points)
        {
            if (!$this->VerifySecurity($token, $points))
            {
                $this->Login("User not authorized");
                exit();
            }
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

    private function VerifySecurity($token, $points)
    {
        $url = "https://api.chriswald.com/auth/verifysecurity";
        $data = array(
            "SessionToken" => $token,
            "Points" => implode(",", $points)
        );

        $options = array(
            "http" => array(
                "header"  => "Content-type: application/x-www-form-urlencoded\r\n",
                "method"  => "POST",
                "content" => http_build_query($data)
            )
        );

        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return json_decode($result);
    }

    private function Login($error = "")
    {
        $query["r"] = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        if ($error)
        {
            $query["f"] = 1;
            $query["m"] = $error;
        }

        $url = "https://material.chriswald.com?" . http_build_query($query);
        echo "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='$url'\" /></head></html>";
    }
}
