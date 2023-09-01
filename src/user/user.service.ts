import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async addUser(createPostDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createPostDTO);
    return newUser.save();
  }

  async findById(userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  async findByUsername(username): Promise<User> {
    const user = await this.userModel.findOne({ username: username }).exec();
    return user;
  }
}
