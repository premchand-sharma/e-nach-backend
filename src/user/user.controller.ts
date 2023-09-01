import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

// import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getUsers')
  @UseGuards(AuthGuard())
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  //   @Get('post/:postID')
  //   async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
  //     const post = await this.userService.getUser(postID);
  //     if (!post) throw new NotFoundException('Post does not exist!');
  //     return res.status(HttpStatus.OK).json(post);
  //   }

  @Post('addUser')
  @UseGuards(AuthGuard()) // Apply AuthGuard middleware
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      User: newUser,
    });
  }
}
