
import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { ThirdPartyService } from './third-party.service';
import { AuthGuard } from '@nestjs/passport';
import * as fs from 'fs';
import axios from 'axios';

@Controller('third-party')
export class ThirdPartyController {
  constructor(private thirdPartyService: ThirdPartyService) {}

  @Get('getCreateMandateForm')
//   @UseGuards(AuthGuard())
  async getCreateMandateForm(@Res() res) {
    const filePath = `${process.cwd()}/src/template/createMandateForm.html`;
    var  htmlForm = fs.readFileSync(filePath, 'utf8');
    let content = htmlForm.replace(/\$\$base_url\$\$/g, process.env.BASE_URL)
    // Set the response content type to HTML
    res.header('Content-Type', 'text/html');

    // Send the HTML form as the response
    res.send(content);
  
  }

  @Post('addMandateFormData')
  // @UseGuards(AuthGuard())
  async addMandate(@Res() res, @Body() bodydata) {

    let data = JSON.stringify(bodydata);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASE_URL}/mandate/addMandate`,
      headers: {
        'Authorization': process.env.AUTHORIZATIN_TOKEN,
        'Content-Type': 'application/json'
      },
      data: data
    };
    try {
      let response = await axios.request(config)
      // console.log(JSON.stringify(response.data));
      return res.status(HttpStatus.OK).json(response.data);
    } catch (error) {
      return res.status(HttpStatus.OK).json({
        message: 'Mandate form data not submitted successfully!',
        Mandate: {},
        Error: error,
      });
    }
  }

}

