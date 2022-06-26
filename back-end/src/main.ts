import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(process.env.PORT);
    
  });
}

start();
