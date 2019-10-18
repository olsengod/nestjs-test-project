import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

import { COUNTER_SERVICE } from '../../config/constants';
import { CounterService } from './service';

@Controller()
export class CounterController {
  constructor(
    private readonly counterService: CounterService,
  ) {}

  @MessagePattern({ cmd: 'getTotal' })
  async getTotal(data: string): Promise<number> {
    return await this.counterService.getTotal(data);
  }
}
