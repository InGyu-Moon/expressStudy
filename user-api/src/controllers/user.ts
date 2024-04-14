import express, { Request, Response } from 'express';
import { UserModel,User } from '../models/user'; // 해당 코드 파일의 경로에 맞게 임포트 경로를 설정해야 합니다.

const router = express.Router();

const { userDataValidator, anotherMiddleware } = require('../middleware/userVaildator');

// 'user'가 아니라 '/' 로 설정해야한다.
router.get('/:nickname',async(req:Request,res:Response)=>{
    try{
        const nickname:string = req.params.nickname;
        const userdata: User|null = await UserModel.findByNickname(nickname);
        res.status(200).json({ data:userdata ,message: '데이터 조회 성공' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 조회 실패' });
    }
})
router.post('/', userDataValidator, async (req: Request, res: Response) => {
    try {
        const { userEmail, password, nickname } = req.body;
        await UserModel.saveUser(userEmail,password,nickname);
        res.status(201).json({ message: '데이터 추가 성공' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 추가 실패' });
    }
});
router.put('/',async(req:Request,res:Response)=>{
    try{
        const { userEmail, password, nickname } = req.body;
        await UserModel.updateUser(userEmail,password,nickname);
        res.status(201).json({ message: '데이터 수정 성공' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 수정 실패' });
    }
});
router.delete('/',async(req:Request,res:Response)=>{
    try{
        const {nickname} = req.body;
        await UserModel.deleteByNickname(nickname);
        res.status(200).json({ message: '데이터 삭제 성공' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 삭제 실패' });
    }
});


export default router;