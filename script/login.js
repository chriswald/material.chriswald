$(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        var form = $(this);
        var serialized = form.serialize();

        // Serialize the form before disabling the controls.
        SetInputsEnabled(false);

        $.ajax({
            type: form.attr("method"),
            url:  form.attr("action"),
            data: serialized
        }).done(function(data) {
            SetInputsEnabled(true);
        }).fail(function(data) {
            SetInputsEnabled(true);
        });

        return false;
    });
});

function SetInputsEnabled(enabled)
{
    $(".login-control input").each(function() {
        $(this).prop("disabled", !enabled);
    });
}
