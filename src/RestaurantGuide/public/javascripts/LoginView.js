function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            // iCheck(dataR);
            alert(dataR.length);
        },
        error: function (xhr, status, error) {
            alert('Error Fxxk: ' + error.message);
        }
    });
}

function onSubmitLogin(url) {
    var formArray = $("#cc").serializeArray();
    var data = {};
    // for (index in formArray) {
    //     data[formArray[index].name] = formArray[index].value;
    // }
    // data[formArray.name] = formArray.value;
    // alert(data);

    var testdata = {username: "123", password: "123"};
    var name = $("#cc");

    alert(formArray);
    ajaxQuery(url, name);
    event.preventDefault();
}

function iCheck(dataR) {

    if (dataR == "Ture") {
        alert("Success!");
        document.getElementById('test').innerHTML = "Welcome to the world!";
    } else {
        alert("Incorrect account or password!")
    }

}

