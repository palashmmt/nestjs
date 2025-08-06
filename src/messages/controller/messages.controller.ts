import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Messages';
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'Create Messages';
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return `Get Messages ${id}`;
  }
}
