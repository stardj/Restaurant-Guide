exports.loginCheck = function (req, res) {

    var userData = req.body;

    var userName = "123";
    var userPassword = "123";
    if (userData == null) {
        res.status(403).send('No data sent!');
    }
    // console.log(JSON.stringify(userData));
    console.log(userData);

    try {
        if (userData.username == userName && userData.inputPassword == userPassword) {
            console.log("Ture");
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({value:"Ture"});
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({value:"Ture"});
        }
    } catch (e) {
        res.status(500).send('error ' + e);
    }

};