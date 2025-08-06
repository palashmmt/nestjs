import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Messages';
  }
  @Post()
  createMessages() {
    return 'Create Messages';
  }
  @Get('/:id')
  getMessages() {
    return 'Get Messages';
  }
}
