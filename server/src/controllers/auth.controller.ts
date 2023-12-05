import { instanceToPlain } from 'class-transformer';
import { Body, Get, JsonController, Post } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { UserPermission } from '../constants/userPermission';
import firebaseDataBase from '../database/firebase';
import firebaseAuth from '../database/firebase-auth';
import { ValidationError } from '../errors/ValidationError';
import { UserCreate, UserLogin } from '../models/authentication';
import { Permission } from '../models/authentication/permission';
import { type User } from '../models/user';

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
    const user = await firebaseAuth.create(data);
    const permission = instanceToPlain(new UserPermission());

    await firebaseDataBase.createDocument('users', { permission }, user.uid);

    return user;
  }

  @Post('/logout')
  async logout() {
    await firebaseAuth.logout();
  }

  @Get('/permissions')
  @ResponseSchema(Permission)
  async permissions() {
    const { uid } = await this.getUser();

    const { permission } = await firebaseDataBase.getDocument<User>('users', uid);

    return permission;
  }

  @Get('/me')
  async getUser() {
    return await firebaseAuth.me();
  }
}
