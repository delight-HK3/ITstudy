const answer = '실행한 후 localhost:3000 으로 접속하면 hello world 가 출력된 화면을 볼 수 있습니다.'

console.log(answer)

const fs = require('fs');
var http = require("http");
let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello world</h1>
    </body>
    </html>
    `;
http.createServer(function (request, response){
    fs.appendFile('04.html', html, 'utf-8', (err) => {
        if(err) throw err;
        console.log('작업 완료');
    });
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('Hello world\n');
}).listen(3000);
