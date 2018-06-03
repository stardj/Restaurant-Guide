$(function () {
    function post(url, input) {
        $.ajax({
            url: url,
            data: input,
            type: 'POST',
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.value == "True") {
                    alert("successed");
                    window.history.back(-1);
                } else {
                    alert("insert failed!");
                }
            },
            error: function (xhr, status, error) {
                alert('Error: ' + error.message);
            }
        });
    }

    $('#addTMP').click(function () {

        var restaurantname = $("#name").val();
        var address = $("#address").val();
        var restauranttele = $("#telephone").val();
        var locatelongitude = $("#long").val();
        var locatelatitude = $("#lat").val();

        var TOR = "";
        $("input[name='typeOfRestaurant']").each(function () {
            if (this.checked) {
                TOR += this.value + '*^';
            }
        });

        var TOC = "";
        $("input[name='typeOfCuisine']").each(function () {
            if (this.checked) {
                TOC += this.value + '*^';
            }
        });

        var camera1 = document.getElementById("camera1").files[0];
        var camera2 = document.getElementById("camera2").files[0];
        var formData = new FormData();
        formData.append("JYH1", camera1);
        formData.append("JYH2", camera2);
        formData.append("restaurantname", restaurantname);
        formData.append("restauranttele", restauranttele);
        formData.append("address", address);
        formData.append("locatelongitude", locatelongitude);
        formData.append("locatelatitude", locatelatitude);
        formData.append("TOC", TOC);
        formData.append("TOR", TOR);

        post('/add', formData);
    });
});