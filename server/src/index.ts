import 'dotenv/config';
import express, { type Response } from 'express';
import 'joi-extract-type';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';

import PostController from './controllers/post.controllers';
import StatusController from './controllers/status.controller';

const app = express();
const version = process.env.CONFIG_API_VERSION;
const routePrefix = `/api/v${version}`;

useExpressServer(app, {
  routePrefix,
  controllers: [StatusController, PostController]
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (_, res: Response) => {
  res.redirect(routePrefix);
});

export default app;
