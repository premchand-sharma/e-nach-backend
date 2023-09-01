import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
    addUser(createPostDTO: CreateUserDTO): Promise<User>;
    findById(userID: any): Promise<User>;
    findByUsername(username: any): Promise<User>;
}
