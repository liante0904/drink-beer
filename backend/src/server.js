// ENV
require('dotenv').config();

// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// test url
app.get('/', (req, res) => {
    res.json({"message": 'Welcome'});
});

require('./route/beer.route.js')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;

// const BeerController = require('./api/Beer/BeerController');
// app.use('/', BeerController);

// // Create Model
// var Beer = mongoose.model('Beer', beerSchema);

// mongoose.model('Beer', beerSchema);

// // Beer 생성
// app.get('/user/insert', function(req, res) {
//   Beer.create( {
//       beerid: '1',
//       beername: '오비맥주'
//       },
//       function(err, beer) {
//           if (err) return res.status(500).send("User 생성 실패.");
//           res.status(200).send(beer);
//       });
// });


// // User 전체 조회
// app.get('/users', function(req, res) {
//   Beer.find( {}, function(err, beers) {
//       if (err) return res.status(500).send("Beer 전체 조회 실패.");
//       res.status(200).send(beers);
//   });
// });