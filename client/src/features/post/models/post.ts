import { CreateTime } from 'services/models/createTime';

export interface Post {
  content: string;
  createTime: CreateTime;
  id: string;
  short: string;
  tags: string[];
  title: string;
}
