import * as joi from '@hapi/joi';

export const timestamp = joi.object({
  seconds: joi.number(),
  nanoseconds: joi.number(),
});

export type Timestamp = joi.extractType<typeof timestamp>;
