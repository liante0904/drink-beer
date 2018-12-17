const Router = require('koa-router');
const beers = require('./beers');

const api = new Router();

api.use('/beers', beers.routes());

// 라우터를 내보냅니다.
module.exports = api;
