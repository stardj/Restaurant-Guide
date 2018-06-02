var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var detail = require('../controllers/DetailController');
var Review = require('../models/ReviewModel');

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(8000);

io.sockets.on('connection', function (socket) {

    socket.on('input', function (data) {
        var userData = data['comment'];
        if(data.review_detail != null) {
            try {
                var review = new Review({
                    restaurant_id: userData.restaurant_id,
                    user_account: userData.user_account,
                    review_time: userData.review_time,
                    review_detail: userData.review_detail,
                    rank_score: userData.rank_score
                });

                review.save(function (err, results) {
                    console.log("save success: " + results._id);
                    if (err)
                        socket.emit('news', {comment: 'Invalid data!'});
                });
            } catch (e) {
                socket.emit('news', {comment: 'error save' + e});
            }
        }

        Review.find({restaurant_id: userData.restaurant_id}, function (err, review) {
            if (err) {
                socket.emit('news', {comment: err});
            } else {
                console.log("#########");
                console.log("review find: " + review);
                console.log("#########");
                socket.emit('news', {comment: review});
            }
        });

    });

});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('detail', {title: 'Detail'});
});

router.post('/', detail.finding);

module.exports = router;
