import { type JSONSchemaType } from 'ajv';

import { type Timestamp } from '../utils/time';

export interface Post {
  updateTime: string;
  tags: string[];
  short: string;
  createTime: Timestamp;
  title: string;
  content: string;
}

export type NewPost = Omit<Post, 'updateTime' | 'createTime'>;

export const schema: JSONSchemaType<NewPost> = {
  type: 'object',
  properties: {
    content: { type: 'string' },
    short: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    title: { type: 'string' }
  },
  required: ['content', 'short', 'tags', 'title'],
  additionalProperties: false
};
