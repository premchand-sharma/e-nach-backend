import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Make the configuration global
        }),
    ],
})
export class MyConfigModule { }
