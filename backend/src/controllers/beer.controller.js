const Beer = require('../models/beer.model.js');

// Create and Save a new Beer
// Beer 생성
exports.create = (req, res) => {
    // Validate request
    if(!req.body.beerid) {
        return res.status(400).send({
            message: "Beer content can not be empty"
        });
    }

    // Create a Beer Model
    const beer = new Beer({
        beerid: req.body.beerid || "Untitled Beer", 
        beername: req.body.beername
    });

    // Save Beer in the database
    beer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Beer."
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
            message: err.message || "Some error occurred while retrieving Beers."
        })
    })
};

// Beer id로 조회
exports.findOne = (req, res) => {
    Beer.findOne(req.params)
    .then(beer => {
        if (!beer) {
            return res.status(400).send({
                message: "Beer not found with id " + req.params.beerid
            });
        }
        res.send(beer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Beer not found with id " + req.params.beerid
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Beer with id " + req.params.beerid
        });
    });
};

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

// Beer Update
exports.update = (req, res) => {
    if (!req.body.beerid) {
        return res.status(400).send({
            message: "Beer content can not be empty"
        });
    }

    // Find Beer and update it with the request body
    Beer.findOneAndUpdate(req.params.beerid, { 
        beername: req.body.beername
    }, {new: true})
    .then(beer => {
        if(!beer) {
            return res.status(404).send({
                message: "Beer not found with id " + req.params.beerid
            });
        }
        res.send(beer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Beer not found with id " + req.params.beerid
            });                
        }
        return res.status(500).send({
            message: "Error updating Beer with id " + req.params.beerid
        });
    });

}

// // Beer id로 삭제
exports.delete = (req, res) => {
    console.log(req.params);
    Beer.deleteOne(req.params)
    .then(beer => {
        if(!beer) {
            return res.status(404).send({
                message: "Beer not found with id " + req.params.beerid
            });
        }
        res.send({message: "Beer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Beer not found with id " + req.params.beerid
            });                
        }
        return res.status(500).send({
            message: "Could not delete beer with id " + req.params.beerid
        });
    });
};


// // Bear 전체 조회
// exports.find('/bears', (req, res) => {
//     console.log('bears');
//     Beer.find( {}, (err, beers) => {
//         if (err) return res.status(500).send("Beer 전체 조회 실패.");
//         res.status(200).send(beers);
//     });
// });