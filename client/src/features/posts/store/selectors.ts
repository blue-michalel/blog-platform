import { State } from './types';

export const selectLoading = (state: State) => state.loading;

export const selectPosts = (state: State) => state.data;

export const selectPost = (state: State) => state.data;

export const selectFetchAll = (state: State) => state.fetchAll;
