var UserInfo = require('../models/UserInfo');

exports.loginCheck = function (req, res) {

    var userData = req.body;

    var userName = "123";
    var userPassword = "123";
    if (userData == null) {
        res.status(403).send('No data sent!');
    }
    // console.log(JSON.stringify(userData));
    console.log("username: " + userData.username);
    console.log("password: " + userData.inputPassword);

    try {
        if (userData.username == userName && userData.inputPassword == userPassword) {
            console.log("Ture");
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({value: "Ture"});
        } else {
            console.log("False");
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({value: "False"});
        }
    } catch (e) {
        res.status(500).send('error ' + e);
    }

};

exports.login = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        UserInfo.find({useraccount: userData.username, userpassword: userData.inputPassword},
            function (err, userinfo) {
                if (err)
                    res.status(500).send('Invalid data!');
                // var userinfo = null;
                console.log(userinfo);
                if (userinfo.length == 1) {
                    console.log("Ture");
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send({value: "Ture"});
                } else {
                    console.log("False");
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send({value: "False"});
                }

                // res.setHeader('Content-Type', 'application/json');
                // res.send(JSON.stringify(userinfo));
            });
    } catch (e) {
        res.status(500).send('error ' + e);
    }

};