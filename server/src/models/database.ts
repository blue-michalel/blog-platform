import { type Post } from './posts';
import { type User } from './user';

export interface AppCollectionsData {
  posts: Post | unknown;
  users: User | unknown;
}

export type AppCollectionsNames = keyof AppCollectionsData;
