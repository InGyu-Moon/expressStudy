const myLogger = function (req, res, next) {

    const now = new Date();
    const year = now.getFullYear().toString().padStart(4, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const currentDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    const headers = JSON.stringify(req.headers); // 헤더를 JSON 문자열로 변환
    const body = JSON.stringify(req.body); // 바디를 JSON 문자열로 변환
    const uriParam = JSON.stringify(req.params); // URI 파라미터를 JSON 문자열로 변환
    const query = JSON.stringify(req.query); // 쿼리를 JSON 문자열로 변환

    console.log(`현재시간: ${currentDateTime}, url: ${req.method} ${req.url}, request-id: ${req.randomId}\n header:${headers}\n body:${body}\n uriParam:${uriParam}\n query:${query}`)
    next();
};

module.exports = myLogger;