import { AxiosError } from 'axios';
import { StoreApi } from 'zustand';

import { Post } from '../models/post';

export type State = {
  loading: boolean;
  data: Post[];
  fetchAll(): Promise<void>;
  error?: AxiosError;
};

export type SetState = StoreApi<State>['setState'];
