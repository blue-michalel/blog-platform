import { type Post } from './posts';

export interface AppCollectionsData {
  posts: Post | unknown;
}

export type AppCollectionsNames = keyof AppCollectionsData;
