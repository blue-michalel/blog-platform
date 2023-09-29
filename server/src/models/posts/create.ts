import { Length, MinLength } from 'class-validator';

export class CreatePost {
  @MinLength(5, {
    each: true
  })
  tags: string[];

  @Length(5, 25)
  short: string;

  @Length(5, 25)
  title: string;

  @MinLength(50)
  content: string;
}
