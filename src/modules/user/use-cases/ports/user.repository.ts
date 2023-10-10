import { TUser } from "../../entities/user";

export interface IUserRepository {
    findAll():Promise<TUser[]>;
    findById(Id:number):Promise<TUser>;
    save(user:TUser):Promise<boolean>;
    update(user:TUser):Promise<boolean>;
    delete(id: number):Promise<boolean>;
}