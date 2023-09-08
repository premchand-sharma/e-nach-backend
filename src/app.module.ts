import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MandateModule } from './mandate/mandate.module';
import { ThirdPartyModule } from './third-party/third-party.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // process.env.DATA_BASE_URL,
      'mongodb+srv://prem27ji:prem123@mydb.g91fodj.mongodb.net/?retryWrites=true&w=majority',
      // 'mongodb://localhost:27017/e-nach-backend',
      //  { useNewUrlParser: true }
    ),
    AuthModule,
    UserModule,
    MandateModule,
    ThirdPartyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
