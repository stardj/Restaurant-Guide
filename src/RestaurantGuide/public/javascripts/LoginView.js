function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            iCheck(dataR);
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onSubmitLogin(url) {
    var formArray = $("form").serializeArray();
    var data = {};
    for (index in formArray) {
        data[formArray[index].name] = formArray[index].value;
    }
    data[formArray.name] = formArray.value;
    ajaxQuery(url, data);
    event.preventDefault();
}


function iCheck(dataR) {
    if (dataR.value == "Ture") {
        alert("Login Success! Welcome " + dataR.username);
        window.history.back(-1);
    } else {
        alert("Incorrect account or password!")
    }
}