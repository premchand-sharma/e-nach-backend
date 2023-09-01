import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(res: any): Promise<any>;
    addUser(res: any, createUserDTO: CreateUserDTO): Promise<any>;
}
