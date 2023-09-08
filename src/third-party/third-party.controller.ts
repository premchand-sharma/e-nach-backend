
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
    // Set the response content type to HTML
    res.header('Content-Type', 'text/html');

    // Send the HTML form as the response
    res.send(htmlForm);
  
  }

  @Post('addMandateFormData')
  // @UseGuards(AuthGuard())
  async addMandate(@Res() res, @Body() bodydata) {

    let data = JSON.stringify(bodydata);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://enachbackend.algofolks.com/mandate/addMandate',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGYwOTY0Y2QzM2ZkMzlhZTRiNGY1NGMiLCJpYXQiOjE2OTQxNzEwMTUsImV4cCI6MTY5NDIxNDIxNX0.iaTwBWEL_a1Z0FUe6QT5au3D8kBmotgOEhQY8TOSPo0',
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

