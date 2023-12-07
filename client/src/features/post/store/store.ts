import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAsyncAction } from 'store/middlewares/createAsyncAction';

import postApi from '../service/post';
import { SetState, State } from './types';

const name = '@store/post/filter';

const fetchAction = (set: SetState) => (id: string) =>
  createAsyncAction(set)(async () => {
    const { data } = await postApi.getPost(id);

    set({ data });
  });

const store = (set: SetState): State => ({
  loading: false,
  fetch: fetchAction(set)
});

export const useStore = create(devtools(store, { name }));
