import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { type RoutingControllersOptions, getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';

import { version } from '../../package.json';

const schemas = validationMetadatasToSchemas({
  refPointerPrefix: '#/components/schemas/'
});

const storage = getMetadataArgsStorage();

export const createRoutingControllersToSpec = (options: RoutingControllersOptions) =>
  routingControllersToSpec(storage, options, {
    components: {
      schemas: schemas as any
    },
    info: { title: 'Blog server API', version }
  });
