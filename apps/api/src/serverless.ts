import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';

const expressApp = express();
let cachedApp: INestApplication<any>;

async function bootstrapServer() {
  if (!cachedApp) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    app.enableCors();
    await app.init();
    cachedApp = app;
  }
  return expressApp;
}

export default async (req: express.Request, res: express.Response) => {
  const app = await bootstrapServer();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return app(req, res);
};
