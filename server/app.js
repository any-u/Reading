const http = require('http');
const server = http.createServer();
const url = require('url');
const querystring = require('querystring')

const remoteUrl = "http://api.zhuishushenqi.com";
const contentUrl="http://chapter2.zhuishushenqi.com";
server.on('request', function (req, res) {
    var urlOption = url.parse(req.url);
    var pathName = urlOption.pathname;
    var qString=urlOption.query;
    if(/^\/chapter/.test(pathName)){
         var request = http.request(contentUrl + pathName+'?'+qString);
        res.setHeader("Access-Control-Allow-Origin", "*");
        request.on('response', function (response) {
            var c = "";
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                c += chunk;
            });
            response.on('end', function () {
                res.writeHead(200, response.headers);
                res.write(c);
                res.end();
            })
        });
        request.on('error', function (err) {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end({
                "err": err
            });
        });
        request.end();
    }else if(/^\/cats/.test(pathName)){
        var request = http.request(remoteUrl + pathName);
        res.setHeader("Access-Control-Allow-Origin", "*");
        request.on('response', function (response) {
            var c = "";
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                c += chunk;
            });
            response.on('end', function () {
                res.writeHead(200, response.headers);
                res.write(c);
                res.end();
            })
        });
        request.on('error', function (err) {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end({
                "err": err
            });
        });
        request.end();
    }else{
        var request = http.request(remoteUrl + pathName+'?'+qString);
        res.setHeader("Access-Control-Allow-Origin", "*");
        request.on('response', function (response) {
            var c = "";
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                c += chunk;
            });
            response.on('end', function () {
                res.writeHead(200, response.headers);
                res.write(c);
                res.end();
            })
        });
        request.on('error', function (err) {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end({
                "err": err
            });
        });
        request.end();
    }
})
server.listen(9000, function () {
    console.log("server on port 9000");
})