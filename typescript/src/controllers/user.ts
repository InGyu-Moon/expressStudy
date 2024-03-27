import express, { Request, Response } from 'express';
import { UserModel,User } from '../models/user'; // 해당 코드 파일의 경로에 맞게 임포트 경로를 설정해야 합니다.

const router = express.Router();

// 'user'가 아니라 '/' 로 설정해야한다.
router.get('/:username',async(req:Request,res:Response)=>{
    try{
        const username:string = req.params.username;
        const userdata: User[] = await UserModel.getUserByUsername(username);
        res.status(200).json({ data:userdata ,message: '데이터 삭제 성공' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 삭제 실패' });
    }
})
router.post('/', async (req: Request, res: Response) => {
    try {
        const { username, password, nickname, age } = req.body;
        await UserModel.saveUser(username,password,nickname,age);
        res.status(201).json({ message: '데이터 추가 성공' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 추가 실패' });
    }
});
router.delete('/',async(req:Request,res:Response)=>{
    try{
        const {username} = req.body;
        await UserModel.deleteUserByUsername(username);
        res.status(200).json({ message: '데이터 삭제 성공' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: '데이터 삭제 실패' });
    }
})


export default router;