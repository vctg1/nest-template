import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = Number(process.env.PORT) || 8000;
  
  // Serve static files from public folder
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  app.enableCors({
    origin: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    exposedHeaders: ['x-total-count'],
  });

  const config = new DocumentBuilder()
    .setTitle('Nest Template')
    .setDescription('API documentation for Nest Template project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    customCssUrl: '/swagger-ui/swagger-ui.css',
    customJs: [
      '/swagger-ui/swagger-ui-bundle.js',
      '/swagger-ui/swagger-ui-standalone-preset.js',
    ],
    customfavIcon: '/swagger-ui/favicon-32x32.png',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  
  await app.listen(port);
}
bootstrap();