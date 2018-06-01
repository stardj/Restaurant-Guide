function ajaxQuery(url, input) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (input) {
            alert("Successed");
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

$(function () {
    $('#addTMP').click(function () {

        var restaurantname = $("#name").val();
        var address = $("#address").val();
        var restauranttele = $("#telephone").val();
        var locatelongitude = $("#lat").val();
        var locatelatitude = $("#long").val();

        var TOR = "";
        $("input[name='typeOfRestaurant']").each(function(){
           if(this.checked){
               TOR += this.value +'*^';
           }
        });

        var TOC = "";
        $("input[name='typeOfCuisine']").each(function(){
            if(this.checked){
                TOC += this.value +'*^';
            }
        });

        var image1 = $("#frame1").attr('src');
        var image2 = $("#frame2").attr('src');

        var input = {};
        input['restaurantname'] = restaurantname;
        input['address'] = address;
        input['restauranttele'] = restauranttele;
        input['locatelongitude'] = locatelongitude;
        input['locatelatitude'] = locatelatitude;
        input['TOC'] = TOC;
        input['TOR'] = TOR;
        input['image1'] = image1;
        input['image2'] = image2;
        alert(input.restaurantname);

        ajaxQuery(url, input);
        event.preventDefault();
    })
})