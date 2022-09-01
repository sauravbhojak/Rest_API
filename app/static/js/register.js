$("#email").change(function() {
    var email = $(this).val();

    $.ajax({
        url: '/ajax/validate_email',
        data: {
            'email': email,
        },
        dataType: 'json',
        success: function(data) {
            if (data.is_taken) {
                document.getElementById('email_error').innerHTML = "EMAIL ALREADY REGISTERED";
            } else {
                document.getElementById('email_error').innerHTML = "";
            }
        }
    });
});


$(document).ready(function() {

    $('#cpswd').keyup(function() {
        var psw = $('#pswd').val();
        var cpwd = $('#cpswd').val();

        if (cpwd != psw) {
            $('#pass_error').html('**Password are not matching');
            return false;
        } else {
            $('#pass_error').html('');
            return true;
        }
    });
});