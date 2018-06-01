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

    var nameNode = document.createElement("DIV");
    var nameNode1 = document.createElement("DIV");
    var nameH2 = document.createElement("H2");
    var nameText = document.createTextNode(dataR.restaurant_name);
    nameNode1.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
    nameNode.setAttribute("class", "row");
    nameH2.appendChild(nameText);
    nameNode1.appendChild(nameH2);
    nameNode.appendChild(nameNode1);


    var imgNode = document.createElement("DIV");
    var imgNode1 = document.createElement("DIV");
    var imgNodeVal = document.createElement("DIV");
    var imgVal = document.createElement("IMG");
    var imgView = document.createElement("DIV");
    imgNode.setAttribute("class", "row");
    imgNode1.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
    imgNodeVal.setAttribute("class", "float-left");
    imgVal.setAttribute("src", "images/rank3.JPG");//img address
    imgView.setAttribute("class", "float-left small font-italic mt-1");
    var viewText = document.createTextNode("1234321 reviews"); // reviews
    imgView.appendChild(viewText);
    imgNodeVal.appendChild(imgVal);
    imgNode1.appendChild(imgNodeVal);
    imgNode1.appendChild(imgView);
    imgNode.appendChild(imgNode1);


    var infoNode = document.createElement("DIV");
    var infoNode1 = document.createElement("DIV");




}

$(function () {

    $("#addSubmit").click(function () {


    });

    var data = window.location.search.substring(1);
    var url = "/detail";
    alert(url);
    onChecked(url, data);

});