import mongoose from "mongoose";
import { getModelForClass, prop, ReturnModelType } from '@typegoose/typegoose'

export class User{
    public _id?: mongoose.Types.ObjectId
    @prop({required: true, unique:true})
    public username?:string; //?를 안쓰면 오류가 발생함 (생성자를 만들어주던가) ?를 쓰면 required가 의미가 없어짐
    @prop()
    public password?:string;
    @prop()
    public nickname?:string;
    @prop()
    public age?:number;

    // constructor(name: string) {
    //     this.name = name;

    // }

    // public static saveUser(name:string,age:number):void{
    //     UserModel.create({name:name,age:age})
    // }



    // async, await를 사용하는 이유가 crud 딜레이 때문에?
    public static async saveUser(username: string, password: number, nickname: string, age:number): Promise<void> {
        await UserModel.create({ name: username, password: password, nickname:nickname, age:age });
        console.log('User created successfully'); 
    }
    
    public static async deleteUserByUsername(username: string){
        await UserModel.deleteOne({username: username});
        console.log(username,' 삭제 완료'); 
    }



}

export const UserModel = getModelForClass(User)