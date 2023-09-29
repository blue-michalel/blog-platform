import { IsOptional } from 'class-validator';

import { type Timestamp } from '../utils/time';
import { CreatePost } from './create';

export class Post extends CreatePost {
  @IsOptional()
  updateTime: Timestamp;

  @IsOptional()
  createTime: Timestamp;
}
