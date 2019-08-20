const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const convert = require('koa-convert');
const moment = require('moment');
const router = require('./router/routes');
// const Schedule = require('./app/schedule/index');
// const res = require('./app/middlewares/response');
// const Response = new res();


// 输出运行环境
// console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);

//log工具
// const logUtil = require('./utils/log_utils');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(convert(function* (next) {
    this.state = {
        moment: moment
    };
    yield* next;
}));



// logger
// app.use(async (ctx, next) => {
//     const start = new Date();
//     let ms;
//     try {
//         await Response.handle(ctx, next, start);
//         // await next();
//         ms = new Date() - start;
//         // 响应日志
//         // logUtil.logResponse(ctx, ms);
//     } catch (e) {
//         ms = new Date() - start;
//         // 异常日志
//         // logUtil.logError(ctx, e, ms);
//     }
//     console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}` + '\n\r' + `method: ${ctx.method}, url:${ctx.url} - ${ms}ms`);
// });

// 路由模块
app.use(router.routes(), router.allowedMethods());

// 调用任务模块
// Schedule();

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

module.exports = app;
