import express, { Request, Response } from "express";
import { UserStorageGateway } from "./user.storage.gateway";
import { GetAllUsersInteractor } from "../use-cases/get-all-users.interactor";
import { SaveUserInteractor } from "../use-cases/save-user.interactor";

export class UserController {
    static async getAll(req: Request, res: Response){
        try {
            const repository = new UserStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({message: 'Error'})
        }
    }

    static async save(req: Request, res: Response){
        try {
            const repository = new UserStorageGateway();
            const interactor = new SaveUserInteractor(repository);
            const data = await interactor.execute(req.body);
            res.statusCode = 201;
            res.json({ message: "Created" });
        } catch (error) {
            res.status(500).send({ message: "Error al guardar el usuario" })
        }
    }
}

export const userRouter = express.Router();
userRouter.get('/',[], UserController.getAll);
userRouter.post('/save',[], UserController.save);
