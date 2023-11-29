import { PostState } from './posts';
import { FilterPostState } from './filter';

type CommonState = PostState | FilterPostState;

export const selectLoading = (state: CommonState) => state.loading;

export const selectPosts = (state: PostState) => state.data;

export const selectPost = (state: FilterPostState) => state.data;

export const selectFetchAll = (state: PostState) => state.fetchAll;

export const selectFetchPost = (state: FilterPostState) => state.fetch;
