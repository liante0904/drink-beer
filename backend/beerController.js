// Import beer model
Beer = require('./beerModel');

// Handle index actions
exports.index = (req, res) => {
    Beer.get(
        (err, beers) => {
            if (err) {
                return res.json({
                        status: "error",
                        message: err,
                    });
            }
            res.json({
                status: "success",
                message: "Beers retrieved successfully",
                data: beers
            });
    });
};

// Handle create beer actions
exports.insert = (req, res) => {
    let beer = new Beer();
    beer.name = req.body.name ? req.body.name : beer.name;
    beer.rating = req.body.rating;

    // save the beer and check for errors
    beer.save(function (err) {
        if (err)
            return res.json(err);

        res.json({
            message: 'New beer created!',
            data: beer
        });
    });
};


// Handle selectOne beer info
exports.selectOne = (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err)
            return res.send(err);

        res.json({
            message: 'Beer details loading..',
            data: beer
        });
    });
};

// Handle update beer info
exports.update = (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        // error exception
        if (err)
            return res.send(err);

        beer.name = req.body.name ? req.body.name : beer.name;
        beer.rating = req.body.ratig;

        // save the beer and check for errors
        beer.save( (err) => {
            if (err)
                return res.json(err);
                
            res.json({
                message: 'Beer Info updated',
                data: beer
            });
        });
    });
};


// Handle delete beer
exports.delete = (req, res) => {
    Beer.deleteOne({
        _id: req.params.beer_id
    }, (err, beer) => {
        if (err)
            return res.send(err);

        res.json({
            status: "success",
            message: 'Beer deleted'
        });
    });
};