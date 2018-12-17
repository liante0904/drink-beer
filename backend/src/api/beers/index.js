const Router = require('koa-router');
const beersCtrl = require('./beers.ctrl');

const beers = new Router();

beers.get('/', beersCtrl.list);
beers.post('/', beersCtrl.write);
beers.get('/:id', beersCtrl.checkObjectId, beersCtrl.read);
beers.delete('/:id', beersCtrl.checkObjectId, beersCtrl.remove);
beers.patch('/:id', beersCtrl.checkObjectId, beersCtrl.update);

module.exports = beers;
