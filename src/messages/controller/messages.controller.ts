import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Messages';
  }

  @Post()
  createMessages(@Body() body: any) {
    console.log(body);
    return 'Create Messages';
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return `Get Messages ${id}`;
  }
}
