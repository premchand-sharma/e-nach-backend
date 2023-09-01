import { JwtService } from '@nestjs/jwt';
import { User } from '../user/interfaces/user.interface';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(user: User): Promise<{
        access_token: string;
    }>;
    validateUserById(userId: number): Promise<User | null>;
}
