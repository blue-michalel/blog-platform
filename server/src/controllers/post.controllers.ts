import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { firestore } from 'firebase-admin';
import { Body, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { ADDED_SUCCESSFULLY, VALIDATION_ERROR } from '../constants/text';
import database from '../database';
import { ValidationError } from '../errors/ValidationError';
import { CreatePost, PostAll, Post as PostResponse } from '../models/posts';

@JsonController('/posts')
export default class PostController {
  @Get()
  @ResponseSchema(PostAll, { isArray: true })
  async getAll() {
    const fields = ['short', 'createTime', 'tags', 'title'];
    const data = await database.getCollection('posts', fields);

    return data;
  }

  @Get('/:id')
  @ResponseSchema(PostResponse)
  async getPost(@Param('id') id: string) {
    const data = await database.getDocument('posts', id);

    return data;
  }

  @HttpCode(201)
  @Post()
  async createPost(@Body({ required: true }) data: CreatePost) {
    const newPost = plainToInstance(CreatePost, data);
    const errors = await validate(newPost);

    if (errors.length !== 0) {
      throw new ValidationError(VALIDATION_ERROR, errors);
    }

    const postWithTimeStamp = plainToInstance(PostResponse, data);
    postWithTimeStamp.createTime = firestore.FieldValue.serverTimestamp();

    const { id } = await database.createDocument('posts', instanceToPlain(newPost));

    return { msg: ADDED_SUCCESSFULLY, id };
  }
}
