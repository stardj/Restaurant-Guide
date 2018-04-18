$(function() {
    $('.item_line').hover( function(){
            $(this).css('box-shadow', '0px 0px 15px -5px black');
        },
        function(){
            $(this).css('box-shadow', '');
        });

    // Map enabled
    if (window.navigator.geolocation) {
        var geolocation = window.navigator.geolocation;
        geolocation.getCurrentPosition(
            returnSuccess, returnError, {
                timeout : 6000
            });
    } else {
        info.innerHTML = "Your broswer doesn't support map function. Please change to other browsers.";
    }

    function returnError(error) {
        switch (error.code) {
            case error.POSITION_UNAVAILABLE:
                info.innerHTML = "Unable to provide the location service.";
                break;
            case error.PERMISSION_DENIED:
                info.innerHTML = "You don't have enough authority to use the location function.";
                break;
            case error.TIMEOUT:
                info.innerHTML = "Connection timeout.";
                break;
        }
    }
    function returnSuccess(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var latLng = new google.maps.LatLng(lat, long);
        var locations = [
            ['Firepit',53.381021, -1.476363, 1],
            ['Hot Chilli', 53.385822, -1.479223 , 2]
        ];
        var markers = [];
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var mapInfoWindow = new google.maps.InfoWindow;
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                label: String(locations[i][3])
            });
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    mapInfoWindow.setContent(locations[i][0]);
                    mapInfoWindow.open(map, marker);
                }
            })(marker, i));
        }

        drawCricleRange(latLng, map);

    }

    function drawCricleRange(latLng, map){
        var radius = parseInt($("input[name='distance']").val());
        var populationOptions = {
            strokeColor: 'blue',
            strokeOpacity: 0.1,
            strokeWeight: 1,
            fillColor: 'blue',
            fillOpacity: 0.1,
            map: map,
            center: latLng,
            radius: radius
        };
        new google.maps.Circle(populationOptions);
    }


});


