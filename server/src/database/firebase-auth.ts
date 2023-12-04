import {
  type Auth,
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '@firebase/auth';

import { LOGOUT } from '../constants/text';
import { Unauthorized } from '../errors/Unauthorized';
import { type UserCreate, type UserLogin } from '../models/authentication';
import auth from './auth';

class FirebaseAuth {
  constructor(private readonly auth: Auth) {}

  login = async (data: UserLogin) => {
    try {
      const { user } = await signInWithEmailAndPassword(this.auth, data.email, data.password);

      return await this.getUserInfo(user);
    } catch (error) {
      throw new Unauthorized('Login failed');
    }
  };

  create = async (data: UserCreate) => {
    const { user } = await createUserWithEmailAndPassword(this.auth, data.email, data.password);

    return await this.getUserInfo(user);
  };

  logout = async () => {
    try {
      await signOut(this.auth);

      return { msg: LOGOUT };
    } catch (error) {
      throw new Unauthorized('');
    }
  };

  me = async () => {
    const user = this.auth.currentUser;
    if (user === null) {
      throw new Unauthorized('User not login in');
    }

    return await this.getUserInfo(user);
  };

  private async getUserInfo(user: User) {
    const { uid, displayName, emailVerified } = user;
    const token = await user.getIdToken();

    return { uid, displayName, token, emailVerified };
  }
}

const firebaseAuth = new FirebaseAuth(auth);
export default firebaseAuth;
