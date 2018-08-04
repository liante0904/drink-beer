const Beer = require('../models/beer.model.js');

// Create and Save a new Beer


// Beer 생성
exports.create = (req, res) => {
    // Validate request
    if(!req.body.beername) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const beer = new Beer({
        beerid: req.body.beerid || "Untitled Note", 
        beername: req.body.beername
    });

    // Save Note in the database
    beer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Beer 전체 조회
exports.findAll = (req, res) => {
    Beer.find()
    .then(beers => {
        res.send(beers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        })
    })
};

// exports.create('/insert', (req, res) => {
//     Beer.create( {
//         beerid: req.body.beerid,
//         beername: req.body.beername
//         },
//         (err, beer) => {
//             if (err) return res.status(500).send("Beer 생성 실패.");
//             res.status(200).send(beer);
//         });
// });

// // Beer 전체 조회
// router.get('/beers', (req, res) => {
//     console.log('beers');
//     Beer.find( {}, (err, beers) => {
//         if (err) return res.status(500).send("Beer 전체 조회 실패.");
//         res.status(200).send(beers);
//     });
// });

// // Beer id로 조회
// router.get('/beers/:beerid', (req, res) => {
//     console.log(req.params.beerid);
//     Beer.findOne({"beerid": req.params.beerid}, (err, beer) => {
//         if (err) return res.status(500).send("Beer id 조회 실패");
//         if (!beer) return res.status(404).send("Beer id가 존재 하지 않음");
//         res.status(200).send(beer);
//     });
// });

// // Beer id로 수정
// exports.updateOne('/beer/:beerid', (req, res) => {
//     Beer.updateOne({"beerid": req.params.beerid}, req.params.Beer, (err, beer) => {
//         if (err) return res.status(500).send("Beer id 수정 실패");
//         if (!beer) return res.status(404).send("Beer id가 존재하지 않음");
//         res.status(200).send(beer);
//     });
// });

// // Beer id로 삭제
// exports.deleteOne('/beer/:beerid', (req, res) => {
//     Beer.deleteOne({"beerid": req.params.beerid}, (err, beer) => {
//         if (err) return res.status(500).send("Beer id 삭제 실패");
//         if (!beer) return res.status(404).send("Beer id가 존재하지 않음");
//         res.status(200).send(beer);
//     });
// });

// // Bear 전체 조회
// exports.find('/bears', (req, res) => {
//     console.log('bears');
//     Beer.find( {}, (err, beers) => {
//         if (err) return res.status(500).send("Beer 전체 조회 실패.");
//         res.status(200).send(beers);
//     });
// });