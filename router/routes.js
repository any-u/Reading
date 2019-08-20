// routes
const router = require('koa-router')();
const index = require('./routes/index')


router.use('/', index.routes());


module.exports = router;