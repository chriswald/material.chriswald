$(document).ready(
    LoadPageData
);

$(function() {
    $("#refresh-link").click(function(event) {
        LoadPageData();
    });
});

function LoadPageData()
{
    var formData = {
        SessionToken: getCookie("SessionToken"),
        ID: "1"
    };

    $.ajax({
        type: "POST",
        url:  "./polladdr",
        data: formData
    }).done(function(data) {
        dataObj = JSON.parse(data);
        $("#home-ip").val(dataObj["IP"]);
        $("#home-port").val(dataObj["Port"]);
        $("#home-ip-last-update").val(dataObj["LastUpdate"]);
    }).fail(function(data) {
        $("#home-ip").val("#Error");
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
