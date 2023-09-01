import { Module } from '@nestjs/common';
import { MandateService } from './mandate.service';
import { MandateController } from './mandate.controller';
import { MandateSchema } from './schemas/mandate.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mandate', schema: MandateSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [MandateService],
  controllers: [MandateController],
})
export class MandateModule {}
