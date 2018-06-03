$(function () {
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

    function buildDocument(data) {

        var tmp = "";
        tmp += data.restaurant_name + ",";
        tmp += data.locate_latitude + ",";
        tmp += data.locate_longitude + ",";
        tmp += 1 + ",";

        $("#locationDetail").val(tmp);

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
        var restaurantTypeText = document.createTextNode("Type of restaurant: " + parserTypeofR(data.restaurant_type)); // resturant type
        var cuisineTypeText = document.createTextNode("Type of cuisine: " + parserTypeofC(data.cuisine_type)); // cuisne type
        var addressText = document.createTextNode("Address: " + data.address);// address
        var telText = document.createTextNode("Tel: " + data.restaurant_tele);// telephone number
        // var postcodeText = document.createTextNode("Postcode: " + data.address);// postcode
        restaurantTypeNode.appendChild(restaurantTypeText);
        cuisineTypeNode.appendChild(cuisineTypeText);
        addressNode.appendChild(addressText);
        telNode.appendChild(telText);
        // postcodeNode.appendChild(postcodeText);
        infoNode1.appendChild(restaurantTypeNode);
        infoNode1.appendChild(cuisineTypeNode);
        infoNode1.appendChild(addressNode);
        infoNode1.appendChild(telNode);
        infoNode1.appendChild(postcodeNode);
        infoNode.appendChild(infoNode1);

        var imgInfoNode = document.createElement("DIV");
        var imgInfoBorder = document.createElement("DIV");
        var imgAddr = document.createElement("IMG");
        imgAddr.setAttribute("src", data.image1);
        imgAddr.setAttribute("class", "img-fluid");
        imgInfoBorder.setAttribute("class", "p-2 border w-100");
        imgInfoNode.setAttribute("class", "col-md-6 col-lg-6 column");
        imgInfoBorder.appendChild(imgAddr);
        imgInfoNode.appendChild(imgInfoBorder);

        var imgInfoNode2 = document.createElement("DIV");
        var imgInfoBorder2 = document.createElement("DIV");
        var imgAddr2 = document.createElement("IMG");
        imgAddr2.setAttribute("src", data.image2);
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

    function parserTypeofR(data) {
        var orgArr = data.split("*^");
        var result = "";
        for (var val in orgArr) {
            if (val == "1") {
                result += " Restaurants";
            } else if (val == "2") {
                result += " Bakeries";
            } else if (val == "3") {
                result += " Pubs & Bars";
            } else if (val == "4") {
                result += " Dessert";
            } else if (val == "5") {
                result += " Coffee & Tea";
            }
        }
        return result;
    }

    function parserTypeofC(data) {
        var orgArr = data.split("*^");
        var result = "";
        for (var val in orgArr) {
            if (val == "1") {
                result += " British";
            } else if (val == "2") {
                result += " Italian";
            } else if (val == "3") {
                result += " Chinese";
            } else if (val == "4") {
                result += " Japanses";
            } else if (val == "5") {
                result += " Indian";
            }
        }
        return result;
    }

    function buildCommentNode(account, detail, review_time, dataR) {
        var html = '<div class="row col-center-block p-2 mb-2 w-100 border rounded shadow-textarea scrollable flex-wrap"\n' +
            '                     style="height:200px; ">';
        if (detail != "") {
            html += addComment1(account, detail, review_time);
        }
        dataR.forEach(function (dataR) {
            html += addComment(dataR);
        });
        html += '</div>';
        return html;
    }

    function addComment(data) {
        var div = '<p><div class="mt-0 border-top">'
            + "[" + (data.review_time) + "] " + data.user_account
            + ': <i>'
            + data.review_detail
            + '</i></div></p>';
        return div;
    }

    function addComment1(user_account, review_detail, review_time) {
        var div = '<p><div class="mt-0 border-top">'
            + "[" + (review_time) + "] " + user_account
            + ': <i>'
            + review_detail
            + '</i></div></p>';
        return div;
    }

    var url = "/detail";
    var data = {};
    data['id'] = window.location.search.substring(1);

    $("#commentBtn").click(function () {

        var star = $("#star").val();
        // alert(star);
        var myDate = new Date();
        var insertData = {};
        insertData['restaurant_id'] = window.location.search.substring(1);
        insertData['user_account'] = window.location.search.substring(1);
        insertData['review_time'] = myDate.toLocaleString();
        insertData['review_detail'] = $("#taComment").val();
        insertData['rank_score'] = star;
        var socket = io.connect('http://localhost:8000');
        socket.emit('input', {comment: insertData});
        socket.on('news', function (data) {
            $("#testReview").empty();
            $("#testReview").append(buildCommentNode(insertData['user_account'], insertData['review_detail'], insertData['review_time'], data['comment']));
        });

    });

    $("#commentBtn").click();

    ajaxQuery(url, data);

});
