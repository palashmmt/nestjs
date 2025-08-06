import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(power: number) {
    console.log(`Supplying ${power} power.`);
  }
}
