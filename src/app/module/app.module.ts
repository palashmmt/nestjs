import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MessagesModule } from '../../messages/module/messages.module';
import { ComputerModule } from 'src/computer/computer.module';

@Module({
  imports: [MessagesModule, ComputerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
