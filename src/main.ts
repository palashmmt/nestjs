import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MessagesModule } from './messages/messages.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  const config = new DocumentBuilder()
    .setTitle('HRMS')
    .setDescription('The HRMS API description')
    .setVersion('1.0')
    .addTag('hrms')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
