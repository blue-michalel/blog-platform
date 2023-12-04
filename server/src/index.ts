import cors from 'cors';
import 'dotenv/config';
import express, { type Response } from 'express';
import { type RoutingControllersOptions, useExpressServer } from 'routing-controllers';
import swaggerUiExpress from 'swagger-ui-express';

import { controllers } from './controllers';
import { createRoutingControllersToSpec } from './docs/swagger';

const app = express();
const version = process.env.CONFIG_API_VERSION ?? 'aaa';
const routePrefix = `/api/v${version}`;
const docEP = '/docs';

const options: RoutingControllersOptions = {
  routePrefix,
  controllers
};

app.use(cors());
useExpressServer(app, options);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (_, res: Response) => {
  res.redirect(docEP);
});

const spec = createRoutingControllersToSpec(options);

app.use(docEP, swaggerUiExpress.serve, swaggerUiExpress.setup(spec));

export default app;
