import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createAsyncAction } from 'store/middlewares/createAsyncAction';

import postApi from '../service/post';
import { SetState, State } from './types';

const name = '@store/post/all';

const fetchAllAction = (set: SetState) => () =>
  createAsyncAction(set)(async () => {
    const { data } = await postApi.getAll();

    set({ data });
  });

const store = (set: SetState): State => ({
  loading: false,
  data: [],
  fetchAll: fetchAllAction(set)
});

export const useStore = create(devtools(persist(store, { name }), { name }));
