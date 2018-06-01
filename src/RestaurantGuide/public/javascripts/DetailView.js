function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            var rootNode = buildDocument(dataR[0]);
            document.getElementById("restaurantNameInfo").innerHTML = rootNode.restaurantNameInfo.innerHTML;
            document.getElementById("reviewInfo").innerHTML = rootNode.reviewInfo.innerHTML;
            document.getElementById("restaurantInfo").innerHTML = rootNode.restaurantInfo.innerHTML;
            document.getElementById("imgInfo1").innerHTML = rootNode.imgInfo1.innerHTML;
            document.getElementById("imgInfo2").innerHTML = rootNode.imgInfo2.innerHTML;
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onLoad(url, data) {
    var input = {};
    input['id'] = data;
    ajaxQuery(url, input);
    event.preventDefault();
}

function buildDocument(data) {

    var rootNode = {};

    var nameNode = document.createElement("DIV");
    var nameNode1 = document.createElement("DIV");
    var nameH2 = document.createElement("H2");
    var nameText = document.createTextNode(data.restaurant_name);
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
    var restaurantTypeNode = document.createElement("P");
    var cuisineTypeNode = document.createElement("P");
    var addressNode = document.createElement("P");
    var telNode = document.createElement("P");
    var postcodeNode = document.createElement("P");
    var restaurantTypeText = document.createTextNode("Type of restaurant: "); // resturant type
    var cuisineTypeText = document.createTextNode("Type of cuisine: "); // cuisne type
    var addressText = document.createTextNode("Address: ");// address
    var telText = document.createTextNode("Tel: ");// telephone number
    var postcodeText = document.createTextNode("Postcode: ");// postcode
    restaurantTypeNode.appendChild(restaurantTypeText);
    cuisineTypeNode.appendChild(cuisineTypeText);
    addressNode.appendChild(addressText);
    telNode.appendChild(telText);
    postcodeNode.appendChild(postcodeText);
    infoNode1.appendChild(restaurantTypeNode);
    infoNode1.appendChild(cuisineTypeNode);
    infoNode1.appendChild(addressNode);
    infoNode1.appendChild(telNode);
    infoNode1.appendChild(postcodeNode);
    infoNode.appendChild(infoNode1);

    var imgInfoNode = document.createElement("DIV");
    var imgInfoBorder = document.createElement("DIV");
    var imgAddr = document.createElement("IMG");
    imgAddr.setAttribute("src", "images/bg_index.jpg");
    imgAddr.setAttribute("class", "img-fluid");
    imgInfoBorder.setAttribute("class", "p-2 border w-100");
    imgInfoNode.setAttribute("class", "col-md-6 col-lg-6 column");
    imgInfoBorder.appendChild(imgAddr);
    imgInfoNode.appendChild(imgInfoBorder);

    var imgInfoNode2 = document.createElement("DIV");
    var imgInfoBorder2 = document.createElement("DIV");
    var imgAddr2 = document.createElement("IMG");
    imgAddr2.setAttribute("src", "images/bg_index.jpg");
    imgAddr2.setAttribute("class", "img-fluid");
    imgInfoBorder2.setAttribute("class", "p-2 border w-100");
    imgInfoNode2.setAttribute("class", "col-md-6 col-lg-6 column");
    imgInfoBorder2.appendChild(imgAddr2);
    imgInfoNode2.appendChild(imgInfoBorder2);


    rootNode["restaurantNameInfo"] = nameNode;
    rootNode["reviewInfo"] = imgNode;
    rootNode["restaurantInfo"] = infoNode;
    rootNode["imgInfo1"] = imgInfoNode;
    rootNode["imgInfo2"] = imgInfoNode2;

    return rootNode;
}

$(function () {

    $("#commentBtn").click(function () {
        var star = $("#star");
        alert("star: " + star.val());
    });

    var data = window.location.search.substring(1);
    var url = "/detail";
    // alert(url);
    onLoad(url, data);

});