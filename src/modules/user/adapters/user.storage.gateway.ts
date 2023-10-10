//Dao 

import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository{
    findById(Id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async save(user: TUser): Promise<boolean> {
        const query = `INSERT INTO users $1`;
        try {
            await pool.query(query, [user]);
            return true;
        } catch (error) {
            return false;
        }
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<TUser[]> {
        const query = `SELECT * FROM users ORDER BY id DESC;`;
        const {rows: userRows} = await pool.query(query);
        return userRows.map(user =><TUser>user);
    }

}