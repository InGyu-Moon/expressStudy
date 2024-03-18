// user 배열을 이용해 rest api 만들어보기.
// GET, POST, PUT, PATCH, DELETE
// 응답은 json 포맷 유지

const express = require('express');

const randomIdMaker = require('./middleware/randomIdMaker'); //순서가 중요하다. myLogger에서 randomIdMaker를 사용하기 때문에 randomIdMaker를 먼저 적어줘야한다.
const myLogger = require('./middleware/myLogger');
const {userVaildator,updateUserValidator} = require('./middleware/vaildator');

const user = require('./data/user');

const app = express();
const port = 3000;

// Express 4.16 이전 버전의 경우
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// Express 4.16 이후 버전
app.use(express.json());
// app.use(express.urlencoded( {extended : false } ));

app.use(randomIdMaker);
app.use(myLogger);

//Read
app.get('/users',(req,res)=>{
    res.send(user);
});
app.get('/user/:id',(req,res)=>{
    const { id } = req.params; 
    if (id >= 0 && id < user.length) {
        console.log(user[id]);
        res.send(user[id]);
    } else {
        res.status(404).send("User not found.");
    }
});
//Create
app.post('/user',userVaildator,(req,res)=>{
    const {name,age} = req.body;
    const data = { name, age }; //const data = {"name":name,"age":age};
    user.push(data);
    console.log("추가된 데이터: ",data);
    // res.send(data); //res.send(data)를 하면 상태 코드 200이 전송된다. (디폴트값) 
    res.status(201).json(data);
});
//Update
app.put('/user/:id',updateUserValidator,(req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    
    if (id >= 0 && id < user.length) {
        console.log("수정 전 : ", user[id]);
        if (name !== undefined) user[id].name = name;
        if (age !== undefined) user[id].age = age;
        console.log("수정 후 : ", user[id]);
        res.send("수정 완료");
    } else {
        res.status(404).send("User not found.");
    }
});
//Delete
app.delete('/user/:id',(req,res)=>{
    const {id} = req.params;
    if (id >= 0 && id < user.length) {
        console.log("삭제 전 : ", user);
        user.splice(id,1);
        console.log("삭제 후 : ", user);
        res.send("삭제 완료");
    } else {
        res.status(404).send("User not found.");
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


