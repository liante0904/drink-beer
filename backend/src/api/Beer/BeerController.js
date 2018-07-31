const Beer = require('./Beer');
var express = require('express');

// Beer 생성
exports.create('/insert', (req, res) => {
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
exports.find('/beers', (req, res) => {
    console.log('beers');
    Beer.find( {}, (err, beers) => {
        if (err) return res.status(500).send("Beer 전체 조회 실패.");
        res.status(200).send(beers);
    });
});

// Beer id로 조회
exports.findOne('/beers/:beerid', (req, res) => {
    console.log(req.params.beerid);
    Beer.findOne({"beerid": req.params.beerid}, (err, beer) => {
        if (err) return res.status(500).send("Beer id 조회 실패");
        if (!beer) return res.status(404).send("Beer id가 존재 하지 않음");
        res.status(200).send(beer);
    });
});

// Beer id로 수정
exports.updateOne('/beer/:beerid', (req, res) => {
    Beer.updateOne({"beerid": req.params.beerid}, req.params.Beer, (err, beer) => {
        if (err) return res.status(500).send("Beer id 수정 실패");
        if (!beer) return res.status(404).send("Beer id가 존재하지 않음");
        res.status(200).send(beer);
    });
});

// Beer id로 삭제
exports.deleteOne('/beer/:beerid', (req, res) => {
    Beer.deleteOne({"beerid": req.params.beerid}, (err, beer) => {
        if (err) return res.status(500).send("Beer id 삭제 실패");
        if (!beer) return res.status(404).send("Beer id가 존재하지 않음");
        res.status(200).send(beer);
    });
});

// Bear 전체 조회
exports.find('/bears', (req, res) => {
    console.log('bears');
    Beer.find( {}, (err, beers) => {
        if (err) return res.status(500).send("Beer 전체 조회 실패.");
        res.status(200).send(beers);
    });
});

module.exports = router;