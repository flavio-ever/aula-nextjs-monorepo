import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import type { Request, Response } from 'express';
import type { INestApplication } from '@nestjs/common';
import express, { Application } from 'express';

let cachedServer: Application | null = null;
let cachedApp: INestApplication | null = null;

async function bootstrap(): Promise<Application> {
  if (!cachedServer || !cachedApp) {
    const server = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    app.enableCors();
    await app.init();
    cachedServer = server;
    cachedApp = app;
  }
  return cachedServer;
}

export default async (req: Request, res: Response): Promise<void> => {
  const server = await bootstrap();
  server(req, res);
};
