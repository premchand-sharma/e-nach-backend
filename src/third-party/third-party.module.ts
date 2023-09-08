import { Module } from '@nestjs/common';
import { ThirdPartyService } from './third-party.service';
import { ThirdPartyController } from './third-party.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [ThirdPartyService],
  controllers: [ThirdPartyController]
})
export class ThirdPartyModule {}

