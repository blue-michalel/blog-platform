import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { firestore } from 'firebase-admin';
import { Body, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { ADDED_SUCCESSFULLY, VALIDATION_ERROR } from '../constants/text';
import database from '../database';
import { ValidationError } from '../errors/ValidationError';
import { CreatePost, Post as PostResponse } from '../models/posts';

@JsonController('/posts')
export default class PostController {
  @Get()
  @ResponseSchema(PostResponse, { isArray: true })
  async getAll() {
    const data = await database.getCollection('posts');

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
