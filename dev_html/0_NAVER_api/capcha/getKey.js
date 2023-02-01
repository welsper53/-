/* 
EXPRESS
>
API
자유롭게 활용할 수 있는 수많은 HTTP 유틸리티 메소드 및 미들웨어를 통해 쉽고 
빠르게 강력한 API를 작성할 수 있습니다
*/

const express = require('express');
const app = express();
const client_id = '_xNFnKbwtQJvV6pWbOBP';//개발자센터에서 발급받은 Client ID
const client_secret = 's48iPNauV5'; //개발자센터에서 발급받은 Client Secret
const code = "0";
app.get('/captcha/nkey', function (req, res) {
    // 네이버 서버가 제안하는 URL주소 - 키값을 받아와야 한다(인증과정)
    const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=' + code;

    // 네이버가 제공하는 URL주소로 네이버서버에 요청을 해야 하니까..
    // => 다음 내용을 설치 후 가능
    //    npm i -g request
    const request = require('request');
    const options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
    });
    app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/captcha/nkey app listening on port 3000!');
    });