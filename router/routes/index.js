const router = require('koa-router')();


// ===============================================获取页面===============================================
// 首页
router.get('', async (ctx, next) => {
    ctx.body = 'hello world'
});

module.exports = router;
