import * as joi from '@hapi/joi';
import { timestamp } from '../utils/time';

export const schema = joi.object({
  updateTime: joi.string(),
  tags: [joi.string()],
  short: joi.string(),
  createTime: timestamp,
  title: joi.string(),
  content: joi.string(),
});

export type Post = joi.extractType<typeof schema>;
