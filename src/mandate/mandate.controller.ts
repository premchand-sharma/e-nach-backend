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
    // const htmlForm = `
    //   <!DOCTYPE html>
    //   <html>
    //   <head>
    //     <title>Hello Form</title>
    //   </head>
    //   <body>
    //     <form>
    //       // <label for="message">Message:</label>
    //       // <input type="text" id="message" name="message" value="hello"><br><br>
    //       // <input type="submit" value="Submit">
    //     </form>
    //   </body>
    //   </html>
    // `;

    const htmlForm = `
    <!DOCTYPE html>
<html>

<head>
  <style>
    tr {
      background-color: #f2f2f2;
      border: 5px solid #b1adad;
      text-align: left;
      max-width: 100%;
    }

    tbody th:first-child {
      width: 50%;
    }

    tbody td:last-child {
      width: 50%;
    }

    #content {
      display: none; /* Initially hide the content */
    }
  </style>
</head>

<body>
  <div style="width: 50%;border: .25px solid rgb(110, 95, 124); text-align: center;margin-left: 23%;margin-top: 3%;">
    <form style="margin: 5% 5% 5% 5%;">
      <img src="https://www.gstatic.com/webp/gallery3/1.sm.png" style="height: 100px;width: 200px;"></img>
      <h3>Create NACH Debit eMandate</h4>

        <table>
          <thead>
            <div style="padding: 1px; background-color:rgb(199, 190, 190);">
              <h4>Mandate summary</h4>
            </div>
          </thead>
          <tbody>
            <tr>
              <th>Account name</th>
              <td>MOHAN SHESHRAV SURKAR</td>
            </tr>
            <tr>
              <th>Bank</th>
              <td>UNION BANK OF INDIA</td>
            </tr>
            <tr>
              <th>Account type</th>
              <td>savings</td>
            </tr>
            <tr>
              <th>Account number</th>
              <td>661402010001082</td>
            </tr>
            <tr>
              <th>Maximum amount</th>
              <td>₹ 358,100.00</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>02 September 2023</td>
            </tr>
            <tr>
              <th>End date</th>
              <td> Until Cancelled</td>
            </tr>
            <tr>
              <th>Frequency</th>
              <td>As and When Presented</td>
            </tr>
            <tr>
              <th>Purpose</th>
              <td>U099 - Others</td>
            </tr>
            <tr>
              <th>Creditor name</th>
              <td>CNH INDUSTRIAL CAPITAL INDIA PVT LTD</td>
            </tr>
            <tr>
              <th>Creditor code</th>
              <td>NACH00000000019651</td>
            </tr>
            <tr>
              <th>Reference 1</th>
              <td>66764</td>
            </tr>
            <tr>
              <th>Reference 2</th>
              <td></td>
            </tr>
            <tr>
              <th>Mandate Request ID</th>
              <td>SC0042TQTMH9GZ</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align:left">Need help? Contact CNH Industrial Capital on: bankcollectiongroup@cnhind.com or
          18002582644</p>
        <!-- // <label for="message">Message:</label>
    // <input type="text" id="message" name="message" value="hello"><br><br>
    // <input type="submit" value="Submit"> -->
        <button id="toggleButton" onclick="toggleContent()" type="button"
          style="background-color: rgb(33, 21, 104);color: white;margin-top: 5px;width: 40%;height: 10%;">Instructions</button>
          <div id="content" style="background-color: rgba(81, 124, 145, .20);text-align: left;">
            <ul>
              <li>
                Choose from Net-banking or Debit card and PIN. If your bank supports just one option, only that option will be available.
              </li>
              <li>
                Before proceeding, keep ready your netbanking login details or debit card and PIN or aadhaar card associated with the above bank account.
              </li>
              <li>
                Before proceeding, keep ready your mobile phone associated with the above bank account, for receiving the OTP via SMS.
              </li>
              <li>
                Click 'Proceed' and you will be redirected to NPCI, and possibly to the website of your bank.
              </li>
              <li>
                Follow the instructions to authorise the mandate. Continue following all of the instructions until you reach back to LotusPay.
              </li>
              <li>
                If you see a success message on the NPCI website or bank website after entering the OTP, do not try again. If you see an error message on that website, you can return to this link and try again, or ask your merchant for help.
              </li>
            </ul>
          </div>

        <div style="margin-top: 10px; display: flex; justify-content: space-between;">
          <div style="background-color: rgb(36, 175, 78); width: 42%;">
            <input type="radio" name="paymentMode" id="netbanking" value="net-banking" onclick="selecttype()"> Net-banking
          </div>
          <div style="background-color: rgb(36, 175, 78); width: 42%">
            <input type="radio" name="paymentMode" id="debitcard" value="debit-card" onclick="selecttype()"> Debit card
          </div>
        </div>
        <ul style="text-align: left;">
          <li>I am authorising CNH INDUSTRIAL CAPITAL INDIA PVT LTD, to debit my account based on the instructions
            herein.</li>
          <li>I understand that the bank where I have authorised the debit may levy one time mandate processing charges
            as mentioned in the bank's latest schedule of charges.</li>
          <li>I understand that I am authorised to cancel/amend this mandate by appropriately communicating the
            cancellation/amendment request to CNH Industrial Capital India Pvt. Ltd. or the bank where I have authorised
            the mandate.</li>
        </ul>

        <div style="background-color: rgb(212, 206, 120); width: 100%">
          <input type="checkbox"> I accept the terms and conditions of this mandate.
        </div>
    </form>
    <button style="margin: 15px;width: 150px;" id="proceedButton" onclick="proceed()" >Proceed</button>
  </div>

  <script>
    function proceed() {
      debugger
      // var button = document.getElementById('proceedButton');
      alert('Alert Message:There are no actions available on this button.');
    // button.addEventListener('click', function () {
    //   // Show an alert message when the button is clicked
    //   alert('Alert Message: Button Clicked!');
    // });
    }

    function toggleContent() {
      var content = document.getElementById('content');
      if (content.style.display === 'none'|| content.style.display === '') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    }
    
    function selecttype() {
      let netbanking = document.getElementById('netbanking');
      let debitcard = document.getElementById('debitcard');
      if(debitcard.checked){
        netbanking.value =null 
      }else if(netbanking.checked){
        debitcard.value =null 
      }
    }
  </script>
</body>

</html>
    `;

    // Set the response content type to HTML
    res.header('Content-Type', 'text/html');

    // Send the HTML form as the response
    res.send(htmlForm);
  }
}
