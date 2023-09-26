import { Post } from './posts/post';

export interface AppCollectionsData {
  posts: Post;
}

export type AppCollectionsNames = keyof AppCollectionsData;
