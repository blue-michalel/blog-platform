import { Body, Get, JsonController, Post } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import firebaseAuth from '../database/firebase-auth';
import { ValidationError } from '../errors/ValidationError';
import { UserCreate, UserLogin } from '../models/authentication';

@JsonController('/auth')
export default class AuthController {
  @Post('/login')
  @ResponseSchema(UserLogin)
  async login(@Body() data: UserLogin) {
    return await firebaseAuth.login(data);
  }

  @Post('/register')
  async register(@Body() data: UserCreate) {
    await ValidationError.asserType(UserCreate, data);

    return await firebaseAuth.create(data);
  }

  @Post('/logout')
  async logout() {
    await firebaseAuth.logout();
  }

  @Get('/permissions')
  permissions() {}

  @Get('/me')
  async getUser() {
    return await firebaseAuth.me();
  }
}
