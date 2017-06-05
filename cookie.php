<?php

function MakeCookie($token)
{
    $thirtyMinutes = 30 * 60;
    setcookie("SessionToken", $token, time() + $thirtyMinutes, "/", "chriswald.com");
}

function DeleteCookie()
{
    setcookie("SessionToken", "", time() - 10, "/", "chriswald.com");
}

 ?>
