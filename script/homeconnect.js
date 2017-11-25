$(document).ready(
    LoadPageData
);

$(document).ready(
    LoadSecurityPoints
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

function LoadSecurityPoints()
{
    var formData = {
        SessionToken: getCookie("SessionToken")
    };

    $.ajax({
        type: "POST",
        url:  "./listpoints",
        data: formData
    }).done(function(data) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i ++)
        {
            var id = data[i]["ID"];
            var name = data[i]["Name"];

            var form = document.getElementById("point-list");
            var span = document.createElement("span");
            span.setAttribute("class", "dashboard-checkbox");

            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("class", "sec-checkbox");
            input.setAttribute("id", "chkSec-"+id);
            input.setAttribute("name", "chkSec-"+id);

            var label = document.createElement("label");
            label.setAttribute("for", "chkSec-"+id);
            label.innerHTML = name;

            form.appendChild(span);
            span.appendChild(input);
            span.appendChild(label);
        }
    }).fail(function(data) {

    });
}
