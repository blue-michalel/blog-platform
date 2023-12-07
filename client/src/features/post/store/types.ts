import { StoreApi } from 'zustand';
import { Post } from '../models/post';
import { AxiosError } from 'axios';

export type State = {
  loading: boolean;
  data?: Post;
  fetch(id: string): Promise<void>;
  error?: AxiosError;
};

export type SetState = StoreApi<State>['setState'];
