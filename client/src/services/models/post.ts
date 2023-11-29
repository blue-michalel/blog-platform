import { CreateTime } from './utils';

export interface Post {
  content: string;
  createTime: CreateTime;
  id: string;
  short: string;
  tags: string[];
  title: string;
}
