var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.send('hey there!');
})

//router.get('/:username', function (req, res, next) {
//    User.findById(req.params.id, function (err, data) {
//        if (err) {
//            res.json({
//                'message': err
//            })
//        } else {
//            res.json(data);
//        }
//    })
//});

router.post('/:username/ship', function (req, res, next) {
    var update = {
        ship: [req.body.ship]
    };

    User.findOneAndUpdate({
        username: req.params.username
    }, update, function (err, data) {
        if (err) {
            res.json({
                'message': err
            })
        } else {
            res.json(data);
        }
    })
})

module.exports = router;