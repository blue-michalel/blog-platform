import { State } from './types';

export const selectLoading = (state: State) => state.loading;

export const selectIsLoggedIn = (state: State) => state.isLoggedIn;

export const selectLogin = (state: State) => state.login;
