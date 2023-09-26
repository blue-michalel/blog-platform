import { Body, Get, JsonController, Post } from 'routing-controllers';
import firebaseController from './firebase.controller';

import { Post as PostI } from '../models/posts/post';

@JsonController('/posts')
export default class PostController {
  @Get('/')
  async getAll() {
    const data = await firebaseController.getCollection('posts');

    return data;
  }

  @Post('/')
  createPost(@Body({ required: true }) post: PostI) {
    console.log('post', post);

    return { msg: 'notReady' };
  }
}
