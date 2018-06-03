function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            iCheck(dataR);
            // alert(dataR.length);
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onSubmitSignUp(url) {
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
        alert("Success!");
        window.history.back(-1);
    } else {
        alert("Incorrect account or password!")
    }

}

