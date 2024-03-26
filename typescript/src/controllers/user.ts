import express, { Request, Response } from 'express';
import { UserModel } from '../models/user'; // 해당 코드 파일의 경로에 맞게 임포트 경로를 설정해야 합니다.

const router = express.Router();

// 'user'가 아니라 '/' 로 설정해야한다.
router.post('/', async (req: Request, res: Response) => {
    try {
        const { username, password, nickname, age } = req.body;
        await UserModel.saveUser(username,password,nickname,age);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
});
router.delete('/',async(req:Request,res:Response)=>{
    try{
        
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
})

export default router;