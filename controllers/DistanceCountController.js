var CurrentLocation = require('../models/LocationModel');


function iSelect(latitude, longitude) {
    if (latitude == null || longitude == null) {
        //TODO
    }
    try {
        CurrentLocation.find({locate_longitude: latitude, locate_latitude: longitude},
            function (err, userlocation) {
                if (err)
                //TODO
                    if (userlocation.length > 0) {
                        var firstElem = userlocation[0];
                        userlocation = {
                            locate_longitude: firstElem.useraccount, locate_latitude: firstElem.userpassword
                        };
                    }
                return userlocation;
            });
    } catch (e) {
        //TODO
        console.log(e)
    }
    return null;
}

function iCheck(latitude, longitude) {
    if (iSelect(latitude, longitude) == null) {
        return false;
    }
    else
        return true;
}

exports.save = function (latitude, longitude) {

    if (latitude == null || longitude == null) {
        //TODO
    }
    try {
        var location_c = new CurrentLocation({
            locate_longitude: latitude,
            locate_latitude: longitude
        });

        console.log('received: ' + location_c);

        if (iCheck(latitude, longitude)) {
            location_c.update(location_c)
        } else {
            location_c.save(location_c)
        }

    } catch (e) {
        //TODO
    }
};

exports.distance_count = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    /*
     C = sin(MLatA)*sin(MLatB)*cos(MLonA-MLonB) + cos(MLatA)*cos(MLatB)
     Distance = R*Arccos(C)*Pi/180
     */
    //TODO
};


