import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Die-Cast Hunters API')
    .setDescription('The best API for managing die-cast collections! Seamlessly integrate our robust backend system into your app and elevate the die-cast collecting experience. Power your application with efficient data storage, seamless synchronization, and secure user authentication.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
