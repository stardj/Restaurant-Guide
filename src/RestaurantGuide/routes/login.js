var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");
var register = require('../controllers/register');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'My Form' });
});

router.post('/', register.login);

// router.post('/', function(req, res, next) {
//     var userData = req.body;
//     if (userData == null) {
//         res.status(403).send('No data sent!')
//     } else if (!isNumeric(userData.year)) {
//         res.status(403).send('Year is invalid!')
//     }
//     const year = (new Date()).getFullYear()
//     userData.age = year - parseInt(userData.year);
//     res.setHeader('Content-Type', 'application/json');
//     console.log(JSON.stringify(userData))
//     res.send(JSON.stringify(userData));
// });
//
// function isNumeric(n) {
//     return !isNaN(parseInt(n)) && isFinite(n);
// }




module.exports = router;
