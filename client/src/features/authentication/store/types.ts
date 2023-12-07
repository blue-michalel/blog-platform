import { StoreApi } from 'zustand';
import { LoginCommand } from '../models/login-command';

export type State = {
  loading: boolean;
  isLoggedIn: boolean;
  login(command: LoginCommand): Promise<void>;
};

export type SetState = StoreApi<State>['setState'];
