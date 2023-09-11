import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { MandateService } from './mandate.service';
import { CreateMandateDTO } from './dto/create-mandate.dto';
import { AuthGuard } from '@nestjs/passport';
import * as fs from 'fs';

// import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('mandate')
export class MandateController {
  constructor(private mandateService: MandateService) {}

  @Get('getMandate')
  @UseGuards(AuthGuard()) // Apply AuthGuard middleware
  async getMandate(@Res() res) {
    const mandates = await this.mandateService.getMandate();
    return res.status(HttpStatus.OK).json(mandates);
  }

  //   @Get('post/:postID')
  //   async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
  //     const post = await this.userService.getUser(postID);
  //     if (!post) throw new NotFoundException('Post does not exist!');
  //     return res.status(HttpStatus.OK).json(post);
  //   }

  @Post('addMandate')
  // @UseGuards(AuthGuard()) // Apply AuthGuard middleware
  async addMandate(@Res() res, @Body() createmandaterDTO: CreateMandateDTO) {
    const newMandate = await this.mandateService.addMandate(createmandaterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Mandate has been submitted successfully!',
      User: newMandate,
    });
  }

  @Patch('updateMandateById')
  @UseGuards(AuthGuard()) // Apply AuthGuard middleware
  async updateMandateById(
    @Res() res,
    @Body() createmandaterDTO: CreateMandateDTO,
  ) {
    const updatedMandate =
      await this.mandateService.updateMandateById(createmandaterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Mandate has been updated successfully!',
      User: updatedMandate,
    });
  }

  @Get('gethtmlform')
  async getHtmlForm(@Res() res) {
    const filePath = `${process.cwd()}/src/template/htmlForm.html`;
    var  htmlForm = fs.readFileSync(filePath, 'utf8');
    var content = htmlForm.toString();
    content = content.replace("$$account$$", "mySaving")
    // Set the response content type to HTML
    res.header('Content-Type', 'text/html');
    // Send the HTML form as the response
    res.send(content);
  }
}
