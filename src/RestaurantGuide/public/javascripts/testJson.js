function ajaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {

            var ret = JSON.stringify(dataR);
            $("#div1").html(ret);


        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

function onSubmitTest(url) {
    var formArray = $("form").serializeArray();
    var data = {};
    for (index in formArray) {
        data[formArray[index].name] = formArray[index].value;
    }
    ajaxQuery(url, data);
    event.preventDefault();
}

var creatediv= function(){
    var parentdiv=$('<div></div>');        //创建一个父div
    parentdiv.attr('id','parent');        //给父div设置id
    parentdiv.addclass('parentdiv');    //添加css样式
    var childdiv=$('<div></div>');        //创建一个子div
    childdiv.attr('id','child');            //给子div设置id
    childdiv.addclass('childdiv');    //添加css样式
    childdiv.appendto(parentdiv);        //将子div添加到父div中
    parentdiv.appendto('body');            //将父div添加到body中
}

