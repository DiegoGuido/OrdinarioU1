import { Entity, Status } from '../../../kernel/types';

export type TUser = Entity<number> & {
    username: string;
    password?: string;
    user_details?: JSON;
    type?: Number;
    status_id?: Status;
    person_id?: any;
}