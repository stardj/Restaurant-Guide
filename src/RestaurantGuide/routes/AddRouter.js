var express = require('express');
// express.static('./public');
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require('multer');
const path = require('path');
var restaurant = require('../controllers/RestaturantController');
var indexTmp = 1;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('../public/images'));
    },
    filename: function (req, file, cb) {
        var userData = req.body;
        cb(null, (new Date().toLocaleString() + "_" + indexTmp++) + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});


/* GET home page. */
router.get('/', function (req, res) {
    res.render('add', {title: 'Restaurant Guide Search'});
});

router.post('/', upload.any(), function (req, res) {

    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }

    console.log(userData);
    res.send("hello world");
});

module.exports = router;
