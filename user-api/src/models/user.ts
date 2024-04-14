import mongoose from "mongoose";
import { getModelForClass, prop, ReturnModelType } from '@typegoose/typegoose'

export class User{
    public _id: mongoose.Types.ObjectId
    @prop({required: true, unique:true})
    public userEmail:string;
    @prop()
    public password:string;
    @prop()
    public nickname:string;
    @prop()
    public joinDate:string;

    public static async getByUsername(username:string): Promise<User|null>{
        const userdata: User|null = await UserModel.findOne({username:username}).exec(); //find 한번에 여러개 찾을때, findOne 사용
        console.log(username,' 조회 완료');
        return userdata;
    }

    public static async saveUser(username: string, password: number, nickname: string, joinDate:string): Promise<void> {
        await UserModel.create({ username: username, password: password, nickname:nickname, joinDate:joinDate });
        console.log(username,' 추가 완료');

    }
    public static async updateUser(username: string, password: number, nickname: string, age:number): Promise<void>{
        await UserModel.updateOne({ username }, { password, nickname, age });
        console.log(username,'수정 완료');
    }
    public static async deleteByUsername(username: string): Promise<void>{
        await UserModel.deleteOne({username: username});
        console.log(username,' 삭제 완료');
    }
}

export const UserModel = getModelForClass(User);