import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
const iexec = () => import('@iexec/web3mail');

@Injectable()
export class EmailService implements OnModuleInit {
  private readonly logger = new Logger(EmailService.name);
  private client: any;

  constructor() {}

  async onModuleInit() {
    const { IExecWeb3mail } = await iexec();
    this.client = new IExecWeb3mail();
  }
}
