const user = require('../data/user');

const userVaildator  = function(req,res,next){
    const {age,name} = req.body;
    if(!name || name.length<1 || name.length>10){
        return res.status(400).json({error:"유저의 이름은 1~10글자여야 합니다."});
    }
    
    if(age<0 || age>100){
        return res.status(400).json({error:"유저의 나이는 1~100 사이여야 합니다."});
    }
    next();
}
const updateUserValidator = function(req, res, next) {
    const { id } = req.params;
    const { name, age } = req.body;

    // id가 숫자가 아니거나 음수인 경우
    if (isNaN(id) || id < 0) {
        return res.status(400).json({ error: "유효하지 않은 ID입니다." });
    }

    // id가 배열의 인덱스 범위를 넘어가는 경우
    if (id >= user.length) {
        return res.status(404).json({ error: "해당 ID의 유저가 존재하지 않습니다." });
    }
    
    // 유저의 이름 유효성 검사
    if (name && (name.length < 1 || name.length > 10)) {
        return res.status(400).json({ error: "유저의 이름은 1~10 글자여야 합니다." });
    }

    // 유저의 나이 유효성 검사
    if (age !== undefined && (age < 0 || age > 100)) {
        return res.status(400).json({ error: "유저의 나이는 0~100 사이여야 합니다." });
    }

    next();
};

module.exports = {userVaildator, updateUserValidator};