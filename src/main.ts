import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MessagesModule } from './messages/module/messages.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //for cors issue
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  //for url prefix
  app.setGlobalPrefix('api');
  //for validation
  app.useGlobalPipes(new ValidationPipe());
  //swagger start
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
  //swagger end

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
