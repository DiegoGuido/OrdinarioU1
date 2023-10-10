import { UseCase } from "../../../kernel/contract";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";

export class SaveUserInteractor implements UseCase<TUser, boolean>{

    constructor(private readonly repository: IUserRepository){}

    async execute(payload: TUser): Promise<boolean> {
        return await this.repository.save(payload);
    }

}