function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            document.getElementById("SearchResult").innerHTML = parserResult(dataR);
            // parserResult(dataR);
            storeCachedData('rest_search', dataR);
            hindOfflineWarning();
        },
        error: function (xhr, status, error) {
            showOfflineWarning();
            //getCachedData("rest_search", new Date().getTime());
            document.getElementById("SearchResult").innerHTML = parserResult(getCachedData("rest_search", new Date().getTime()));
            alert('Error: ' + error.message);
        }
    });
}

function hindOfflineWarning(){
    if (document.getElementById('offline_div')!=null)
        document.getElementById('offline_div').style.display='none';
}

function showOfflineWarning(){
    if (document.getElementById('offline_div')!=null)
        document.getElementById('offline_div').style.display='block';
}

function onSubmitSearch(url) {
    var formArray = $("form").serializeArray();
    var data = {};
    for (index in formArray) {
        data[formArray[index].name] = formArray[index].value;
    }
    ajaxQuery(url, data);
    event.preventDefault();
}

function buildDocument(data) {

    var rootNode = document.createElement("DIV");
    var imgNode = document.createElement("DIV");
    var infoNode = document.createElement("DIV");

    // this part can add something else
    rootNode.setAttribute("class", "row item_line m-4");
    imgNode.setAttribute("class", "item pic");
    infoNode.setAttribute("class", "col-xs-6 col-sm-6 col-md-6 item");

    var imga = document.createElement("A");
    var imgval = document.createElement("IMG");
    imga.setAttribute("href", "detail?" + data._id + "");
    imgval.setAttribute("src", "images/2.jpg");//restaurant img
    imgval.setAttribute("class", "img-rounded");
    imga.appendChild(imgval);
    imgNode.appendChild(imga);

    var infoa = document.createElement("A");
    var infoh5 = document.createElement("H5");
    var infop = document.createElement("P");
    var infoimg = document.createElement("IMG");
    var infosmall1 = document.createElement("SMALL");
    var infosmall2 = document.createElement("SMALL");
    var infosmall3 = document.createElement("SMALL");

    infoa.setAttribute("href", "detail?" + data._id + "");
    var infoh5text = document.createTextNode(data.restaurant_name);// restaurant_name
    infoh5.appendChild(infoh5text);
    infoa.appendChild(infoh5);
    infoimg.setAttribute("src", "images/rank4.jpg");//rank
    infoimg.setAttribute("class", "img-rounded");

    var text1 = document.createTextNode("233333 reviews");// reviews number
    var text2 = document.createTextNode("\"Lovely but very different now\" - 09/04/2018");// 1st comment
    var text3 = document.createTextNode("\"Excellent\" - 06/04/2018");// 2nd comment
    var textp = document.createTextNode("Yinghui Jiang is awesome!!!");// introduction
    infosmall1.appendChild(text1);
    infosmall2.appendChild(text2);
    infosmall3.appendChild(text3);
    infop.appendChild(textp);

    infoNode.appendChild(infoa);
    infoNode.appendChild(infoimg);
    infoNode.appendChild(infosmall1);
    infoNode.appendChild(infop);
    infoNode.appendChild(infosmall2);
    infoNode.appendChild(infosmall3);

    rootNode.appendChild(imgNode);
    rootNode.appendChild(infoNode);

    return rootNode;
}

function parserResult(dataR) {

    var output = document.createElement("DIV");

    dataR.forEach(function (dataR) {
        output.appendChild(buildDocument(dataR));
    });

    return output.innerHTML;
}

$(function () {
    $(".checkbox [name|='typeOfRestaurant']").click(function () {
        var typeOfRestaurant = $("[name='typeOfRestaurant']:checked");
        var typeOfCuisine = $("[name='typeOfCuisine']:checked");

        var boxval = "";
        var boxval1 = "";
        typeOfRestaurant.each(function (value) {
            boxval += $(this).val() + "*^";
            $(this).attr("checked", "checked");
        });

        typeOfCuisine.each(function (value) {
            boxval1 += $(this).val() + "*^";
            $(this).attr("checked", "checked");
        });

        alert("typeOfRestaurant: " + boxval);
        alert("typeOfCuisine: " + boxval1);

    });

    $("input[name|='typeOfRestaurant']").click(function(){
        var idx = $(this).val()-1;
        if($("input[name|='typeOfRestaurant1']").eq(idx).attr('checked')=='checked'){
            $("input[name|='typeOfRestaurant1']").eq(idx).removeAttr('checked');
        }else{
            $("input[name|='typeOfRestaurant1']").eq(idx).attr('checked', 'checked');
        }
    });

    $("input[name|='typeOfRestaurant1']").click(function(){
        var idx = $(this).val()-1;
        if($("input[name|='typeOfRestaurant']").eq(idx).attr('checked')=='checked'){
            $("input[name|='typeOfRestaurant']").eq(idx).removeAttr('checked');
        }else{
            $("input[name|='typeOfRestaurant']").eq(idx).attr('checked', 'checked');
        }
    });

    $("input[name|='typeOfCuisine']").click(function(){
        var idx = $(this).val()-1;
        if($("input[name|='typeOfCuisine1']").eq(idx).attr('checked')=='checked'){
            $("input[name|='typeOfCuisine1']").eq(idx).removeAttr('checked');
        }else{
            $("input[name|='typeOfCuisine1']").eq(idx).attr('checked', 'checked');
        }
    });

    $("input[name|='typeOfCuisine1']").click(function(){
        var idx = $(this).val()-1;
        if($("input[name|='typeOfCuisine']").eq(idx).attr('checked')=='checked'){
            $("input[name|='typeOfCuisine']").eq(idx).removeAttr('checked');
        }else{
            $("input[name|='typeOfCuisine']").eq(idx).attr('checked', 'checked');
        }
    });

});

// function createDiv(data) {
//     var rootNode = $("<div></div>");
//     var imgNode = $("<div></div>");
//     var infoNode = $("<div></div>");
//     // rootNode.attr("id", data._id);
//     rootNode.addclass("row item_line m-4");
//     // imgNode.attr("id", data._id);
//     imgNode.addClass("item pic");
//     // infoNode.attr("id", data._id);
//     infoNode.addClass("col-xs-6 col-sm-6 col-md-6 item");
//
//     /*******************************************************/
//     var imga = $("<a></a>");
//     var imgval = $("<img>");
//     imga.attr("href", "detail.html");
//     imgval.attr("src", "images/2.jpg");
//     imgval.addClass("img-rounded");
//     imga.append(imgval);
//
//     imgNode.append(imga);
//     /*******************************************************/
//
//     /*******************************************************/
//     var infoa = $("<a></a>>");
//     var infoh5 = $("<h5></h5>>");
//     var infop = $("<p></p>>");
//     var infoimg = $("<img>");
//     var infosmall1 = $("<small></small>>");
//     var infosmall2 = $("<small></small>>");
//     var infosmall3 = $("<small></small>>");
//
//     infoa.attr("href", "detail.html");
//     // infoh5.text(data.restaurant_name);
//     infoh5.text("data.restaurant_name");
//     infoa.append(infoh5);
//
//     infoimg.attr("images/rank4.jpg");
//     infoimg.addClass("img-rounded");
//
//     infosmall1.text("233333 reviews");
//     infop.text("American Burger Friendly Fish & Chips Options");
//     infosmall2.text("\"Lovely but very different now\" - 09/04/2018");
//     infosmall3.text("\"Excellent\" - 06/04/2018");
//
//
//     infoNode.append(infoa);
//     infoNode.append(infoimg);
//     infoNode.append(infosmall1);
//     infoNode.append(infop);
//     infoNode.append(infosmall2);
//     infoNode.append(infosmall3);
//
//     /*******************************************************/
//
//     rootNode.append(imgNode);
//     rootNode.append(infoNode);
//
//     return rootNode;
// };



