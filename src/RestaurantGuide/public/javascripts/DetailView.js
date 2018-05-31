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

function onChecked(url, data) {
    var input = {};
    input['id'] = data;
    ajaxQuery(url, input);
    event.preventDefault();
}

function buildDocument(dataR) {


}

$(function () {

    var data = window.location.search.substring(1);
    var url = "/detail";
    alert(url);
    onChecked(url, data);

});