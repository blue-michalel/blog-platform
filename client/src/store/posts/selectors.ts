import { PostState } from './posts';

export const selectLoading = (state: PostState) => state.loading;

export const selectData = (state: PostState) => state.data;

export const selectFetchAll = (state: PostState) => state.fetchAll;
