import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MandateModule } from './mandate/mandate.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { MyConfigModule } from './config.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [MyConfigModule], // Import the configuration module
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'), // Use the method to retrieve the URL
        useNewUrlParser: true,
      }),
      inject: [ConfigService], // Inject ConfigService into the factory
    }),
    // MongooseModule.forRoot(
    //   'mongodb+srv://prem27ji:prem123@mydb.g91fodj.mongodb.net/?retryWrites=true&w=majority',
    // ),
    AuthModule,
    UserModule,
    MandateModule,
    ThirdPartyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
