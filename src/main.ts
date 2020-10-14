import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 요소제외 전송 차단
      forbidNonWhitelisted: true, // 누군가 이상한걸 보내는걸 원천차단
      transform: true, // 유저들이 보낸걸 우리가 원하는 실제 타입으로 변환해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
