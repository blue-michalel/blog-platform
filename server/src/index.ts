import 'dotenv/config';
import express from 'express';
import 'joi-extract-type';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';

import PostController from './controllers/post.controllers';

const app = express();
useExpressServer(app, {
  controllers: [PostController]
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
