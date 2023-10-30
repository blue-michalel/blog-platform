import { StoreApi, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createAsyncAction } from '../middlewares/createAsyncAction';
import { AxiosError } from 'axios';

import postApi from 'services/api/services/post';
import { Post } from 'services/models';

export type PostState = {
  loading: boolean;
  data: Post[];
  fetchAll(): Promise<void>;
  error?: AxiosError;
};

type SetState = StoreApi<PostState>['setState'];

const fetchAllAction = (set: SetState) => () =>
  createAsyncAction(set)(async () => {
    const { data } = await postApi.getAll();

    set({ data });
  });

const store = (set: SetState): PostState => ({
  loading: false,
  data: [],
  fetchAll: fetchAllAction(set),
});

export const usePostState = create<PostState>()(devtools(persist(store, { name: 'postStore' })));
