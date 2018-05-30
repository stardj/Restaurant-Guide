var UserInfo = require('../models/UserInfo');

exports.login = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        UserInfo.find({useraccount: userData.useraccount, userpassword: userData.userpassword},
            function (err, userinfo) {
                if (err)
                    res.status(500).send('Invalid data!');
                // var userinfo = null;
                if (userinfo.length > 0) {
                    var firstElem = userinfo[0];
                    userinfo = {
                        useraccount: firstElem.useraccount, userpassword: firstElem.userpassword
                    };
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(userinfo));
            });
    } catch (e) {
        res.status(500).send('error ' + e);
    }

};

exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    console.log(JSON.stringify(userData));
    if (userData.userpassword != userData.confirmpw) {
        res.status(403).send('password incorrect!')
    }
    try {
        var userinfo = new UserInfo({
            useraccount: userData.useraccount, // acount
            userpassword: userData.userpassword,         //password
            confirmpw: userData.confirmpw         //password
        });
        console.log('received: ' + userinfo);

        userinfo.save(function (err, results) {
            console.log(results._id);
            if (err)
                res.status(500).send('Invalid data!');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(userinfo));
        });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
};