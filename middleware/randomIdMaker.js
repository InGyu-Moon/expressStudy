const randomIdMaker = function (req, res, next) {
    // 1부터 100000000까지의 랜덤한 정수 생성
    const randomId = Math.floor(Math.random() * 100000000) + 1;
    // 요청 객체에 randomId 속성으로 추가
    req.randomId = randomId;
    next();
};

module.exports = randomIdMaker;