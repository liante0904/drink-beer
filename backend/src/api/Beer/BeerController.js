var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));

const Beer = require('./Beer');

// Beer 생성
router.get('/insert', (req, res) => {
    Beer.create( {
        beerid: req.body.beerid,
        beername: req.body.beername
        },
        (err, beer) => {
            if (err) return res.status(500).send("Beer 생성 실패.");
            res.status(200).send(beer);
        });
});

// Beer 전체 조회
router.get('/beers', (req, res) => {
    Beer.find( {}, function(err, beers) {
        if (err) return res.status(500).send("Beer 전체 조회 실패.");
        res.status(200).send(beers);
    });
});
module.exports = router;