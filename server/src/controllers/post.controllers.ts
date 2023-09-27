import { Body, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import firebaseController from './firebase.controller';

import { Post as PostI, schema } from '../models/posts/post';
import { ValidationError } from '../errors/CatchError';
import Ajv from 'ajv';
import { VALIDATION_ERROR, ADDED_SUCCESSFULLY } from '../constants/text';

@JsonController('/posts')
export default class PostController {
  @Get('/')
  async getAll() {
    const data = await firebaseController.getCollection('posts');

    return data;
  }

  @HttpCode(201)
  @Post('/')
  async createPost(@Body({ required: true }) post: PostI) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(post);
    if (!isValid) {
      throw new ValidationError(VALIDATION_ERROR, validate.errors);
    }
    const { id } = await firebaseController.createDocument('posts', post);

    return { msg: ADDED_SUCCESSFULLY, id };
  }
}
