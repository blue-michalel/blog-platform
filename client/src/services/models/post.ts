import { CreateTime } from './utils';

export interface Post {
  short: string;
  createTime: CreateTime;
  tags: string[];
  title: string;
  id: string;
}
