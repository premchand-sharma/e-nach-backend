import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Patch,
  Query
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { MandateService } from './mandate.service';
import { CreateMandateDTO } from './dto/create-mandate.dto';
import { AuthGuard } from '@nestjs/passport';
import * as fs from 'fs';
import * as moment from 'moment';

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
  @UseGuards(AuthGuard()) // Apply AuthGuard middleware
  async addMandate(@Res() res, @Body() createmandaterDTO: CreateMandateDTO) {
    const newMandate = await this.mandateService.addMandate(createmandaterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Mandate has been submitted successfully!',
      User: newMandate,
      DebitUrl: `${process.env.BASE_URL}/mandate/gethtmlform?id=${newMandate._id}`
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
  async getHtmlForm(@Res() res, @Query() queryParams) {
    try{
    let mandate = await this.mandateService.findById(queryParams.id);
    const filePath = `${process.cwd()}/src/template/htmlForm.html`;
    const  htmlForm = fs.readFileSync(filePath, 'utf8');
    let content = htmlForm.toString();
    let first_collection_date = mandate.mandate_data.first_collection_date ? mandate.mandate_data.first_collection_date:""
    const formattedDate = moment(first_collection_date).format('DD MMMM YYYY')
    content = content.replace("$$name$$", mandate.mandate_data.customer_name ? mandate.mandate_data.customer_name :"");
    content = content.replace("$$bank_name$$", mandate.mandate_data.destination_bank_name ? mandate.mandate_data.destination_bank_name:"")
    content = content.replace("$$account_type$$", mandate.mandate_data.customer_account_type ? mandate.mandate_data.customer_account_type:"")
    content = content.replace("$$account_number$$", mandate.mandate_data.customer_account_number ? mandate.mandate_data.customer_account_number:"")
    content = content.replace("$$maximum_ammount$$", mandate.mandate_data.maximum_amount ? mandate.mandate_data.maximum_amount:"")
    content = content.replace("$$start_date$$", formattedDate)
    content = content.replace("$$frequency$$", mandate.mandate_data.frequency ? mandate.mandate_data .frequency:"")

    // Set the response content type to HTML
    res.header('Content-Type', 'text/html');
    // Send the HTML form as the response
    res.send(content);

    }catch(err){
      // console.log(err)
      let errorContent =`<!DOCTYPE html><html><head></head><body><h3>Mandate details not found !<h3></body></html>`
      res.header('Content-Type', 'text/html');
      res.send(errorContent);
      return
    }
  }
}
