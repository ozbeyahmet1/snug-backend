import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  });
  const config = new DocumentBuilder()
  .setTitle('Snug API')
  .setDescription('API for Products and Reviews')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
