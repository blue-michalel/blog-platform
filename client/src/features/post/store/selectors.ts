import { State } from './types';

export const selectLoading = (state: State) => state.loading;

export const selectPost = (state: State) => state.data;

export const selectFetchPost = (state: State) => state.fetch;
