import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [EmailService, JwtService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
