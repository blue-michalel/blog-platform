import { IsOptional } from 'class-validator';

import { Post } from './get';

export class PostAll extends Post {
  @IsOptional()
  content: string;
}
