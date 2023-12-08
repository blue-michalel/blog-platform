import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createAsyncAction } from 'store/middlewares/createAsyncAction';

import { LoginCommand } from '../models/login-command';
import authenticationApi from '../services/authentication';
import { SetState, State } from './types';

const name = '@store/user';

const loginAction = (set: SetState) => (command: LoginCommand, onSuccess: () => void, onError: () => void) =>
  createAsyncAction(set)(
    async () => {
      const { data } = await authenticationApi.login(command);

      console.log('data', { data });
    },
    onError,
    onSuccess
  );

const store = (set: SetState): State => ({
  loading: false,
  isLoggedIn: false,
  login: loginAction(set)
});

export const useStore = create(devtools(persist(store, { name }), { name }));
