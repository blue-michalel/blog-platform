import { AxiosError } from 'axios';
import postApi from 'services/api/services/post';
import { Post } from 'services/models';
import { createAsyncAction } from 'store/middlewares/createAsyncAction';
import { StoreApi, create } from 'zustand';
import { devtools } from 'zustand/middleware';

const name = '@store/post/filter';

export type FilterPostState = {
  loading: boolean;
  data?: Post;
  fetch(id: string): Promise<void>;
  error?: AxiosError;
};

type SetState = StoreApi<FilterPostState>['setState'];

const fetchAction = (set: SetState) => (id: string) =>
  createAsyncAction(set)(async () => {
    const { data } = await postApi.getPost(id);

    set({ data });
  });

const store = (set: SetState): FilterPostState => ({
  loading: false,
  fetch: fetchAction(set),
});

export const useFilterPostState = create(devtools(store, { name }));
