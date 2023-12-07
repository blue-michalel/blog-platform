import { CreateTime } from 'services/models/createTime';

export interface Post {
  createTime: CreateTime;
  id: string;
  short: string;
  tags: string[];
  title: string;
}
